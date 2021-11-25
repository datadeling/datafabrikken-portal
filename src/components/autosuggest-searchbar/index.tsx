import React, {
  ChangeEvent,
  FC,
  KeyboardEvent,
  memo,
  useEffect,
  useState
} from 'react';
import { compose } from 'redux';
import translations from '../../services/translations';
import { SearchSuggestion } from '../../types';
import SC from './styled';
import SearchBar from '../search-bar';
import withcachedSuggestions, {
  Props as cachedSuggestionsProps
} from '../with-suggestions';

interface ExternalProps {
  placeholder: string;
  maxSuggestions?: number;
  onSubmit?: (searchString?: string) => void;
  onClear: () => void;
}

interface Props extends ExternalProps, cachedSuggestionsProps {}

const highlightSearchString = (
  searchString: string,
  resultString?: string | null
) => {
  const startHighlightIndex = resultString
    ?.toLowerCase()
    ?.indexOf(searchString);

  if (startHighlightIndex != null && startHighlightIndex >= 0 && resultString) {
    const endHighlightIndex = startHighlightIndex + searchString.length;
    return (
      <span>
        <strong>{resultString.substring(0, startHighlightIndex)}</strong>
        {resultString.substring(startHighlightIndex, endHighlightIndex)}
        <strong>
          {resultString.substring(endHighlightIndex, resultString.length)}
        </strong>
      </span>
    );
  }
  return <span>{resultString}</span>;
};

const AutosuggestSearchBar: FC<Props> = ({
  placeholder,
  maxSuggestions,
  onSubmit,
  onClear,
  cachedSuggestions,
  searchSuggestionsActions: {
    getSearchSuggestionsRequested: getcachedSuggestions,
    resetSearchSuggestions
  }
}) => {
  const [focusedSuggestionIndex, setFocusedSuggestionIndex] = useState(-1);
  const [openSuggestions, setOpenSuggestions] = useState(true);
  const [searchString, setSearchString] = useState('');
  const searchSuggestions =
    cachedSuggestions?.[searchString]?.slice(0, maxSuggestions) ?? [];

  useEffect(
    () => () => {
      resetSearchSuggestions;
    },
    []
  );

  const searchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
    if (!cachedSuggestions?.[e.target.value] && e.target.value.length > 1) {
      getcachedSuggestions(e.target.value);
    }
  };

  const handleKeyPressed = (e: KeyboardEvent) => {
    const focusedSuggestion = searchSuggestions?.[focusedSuggestionIndex];
    const focusedSuggestionLabel =
      translations.getTranslateText(
        focusedSuggestion?.prefLabel ?? focusedSuggestion?.title
      ) ?? '';

    setOpenSuggestions(true);
    switch (e.key) {
      case 'ArrowUp':
        setFocusedSuggestionIndex(Math.max(focusedSuggestionIndex - 1, -1));
        break;
      case 'ArrowDown':
        setFocusedSuggestionIndex(
          (focusedSuggestionIndex + 1) % (searchSuggestions.length ?? 0)
        );
        break;
      case 'Enter':
        setOpenSuggestions(false);
        if (focusedSuggestion) {
          e.preventDefault();
          setSearchString(focusedSuggestionLabel);
          onSubmit && onSubmit(focusedSuggestionLabel);
        }
        break;
      case 'Escape':
        setOpenSuggestions(false);
        setFocusedSuggestionIndex(-1);
        break;
      default:
        setFocusedSuggestionIndex(-1);
        break;
    }
  };

  const renderSuggestions = (suggestionsList?: SearchSuggestion[]) =>
    suggestionsList?.map((suggestion, index) => {
      const labelString =
        translations.getTranslateText(
          suggestion.prefLabel ?? suggestion.title
        ) ?? '';
      return (
        <SC.Suggestion
          $highlighted={index === focusedSuggestionIndex}
          onMouseOver={() => setFocusedSuggestionIndex(index)}
          tabIndex={0}
          onClick={() => {
            setSearchString(labelString);
            setOpenSuggestions(false);
            onSubmit && onSubmit(labelString);
          }}
        >
          {highlightSearchString(searchString, labelString)}
        </SC.Suggestion>
      );
    });

  return (
    <SC.AutosuggestContainer>
      <SearchBar
        placeholder={placeholder}
        onSubmit={e => onSubmit && onSubmit(e.currentTarget.searchBox.value)}
        onClear={onClear}
        onChange={searchChange}
        onKeyDown={handleKeyPressed}
        onClick={() => setOpenSuggestions(true)}
      />
      {(searchSuggestions.length ?? 0) > 0 && openSuggestions && (
        <SC.SuggestionsContainer>
          <SC.SuggestionDivider />
          {renderSuggestions(searchSuggestions)}
        </SC.SuggestionsContainer>
      )}
    </SC.AutosuggestContainer>
  );
};

export default compose<FC<ExternalProps>>(
  withcachedSuggestions,
  memo
)(AutosuggestSearchBar);
