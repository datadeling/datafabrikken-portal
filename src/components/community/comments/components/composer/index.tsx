import React, { FC, memo, useRef } from 'react';
import { compose } from 'redux';

import TurndownService, { Node } from 'turndown';
import SC from './styled';
import Buttons from '../buttons/styled';
import Translation from '../../../../translation';
import translations from '../../../../../services/translations';
import LogOut from '../logOut';

const htmlToMarkdown = new TurndownService();

htmlToMarkdown.addRule('images', {
  filter: 'img',
  replacement: (content: string, node: Node) => {
    if (node instanceof HTMLElement && node.className.includes('emoji')) {
      return node.getAttribute('alt') ?? '';
    }

    if (node instanceof HTMLElement) {
      return `![${node.getAttribute('alt')}](${node.getAttribute('src')})`;
    }

    return content;
  }
});

interface composerTools {
  icon: React.ReactElement;
  hint: string;
  value: string;
  left: string;
  right: string;
}

const tools: composerTools[] = [
  {
    icon: <SC.BoldIcon />,
    hint: 'community.composer.tools.modificationAlt.bold',
    value: 'community.composer.tools.modification.bold.value',
    left: 'community.composer.tools.modification.bold.left',
    right: 'community.composer.tools.modification.bold.right'
  },
  {
    icon: <SC.ItalicIcon />,
    hint: 'community.composer.tools.modificationAlt.italic',
    value: 'community.composer.tools.modification.italic.value',
    left: 'community.composer.tools.modification.italic.left',
    right: 'community.composer.tools.modification.italic.right'
  },
  {
    icon: <SC.BulletListIcon />,
    hint: 'community.composer.tools.modificationAlt.ul',
    value: 'community.composer.tools.modification.ul.value',
    left: 'community.composer.tools.modification.ul.left',
    right: 'community.composer.tools.modification.ul.right'
  },

  {
    icon: <SC.StrikethroughIcon />,
    hint: 'community.composer.tools.modificationAlt.strikethrough',
    value: 'community.composer.tools.modification.strikethrough.value',
    left: 'community.composer.tools.modification.strikethrough.left',
    right: 'community.composer.tools.modification.strikethrough.right'
  },
  {
    icon: <SC.CodeIcon />,
    hint: 'community.composer.tools.modificationAlt.code',
    value: 'community.composer.tools.modification.code.value',
    left: 'community.composer.tools.modification.code.left',
    right: 'community.composer.tools.modification.code.right'
  },
  {
    icon: <SC.ImageIcon />,
    hint: 'community.composer.tools.modificationAlt.image',
    value: 'community.composer.tools.modification.image.value',
    left: 'community.composer.tools.modification.image.left',
    right: 'community.composer.tools.modification.image.right'
  },
  {
    icon: <SC.LinkIcon />,
    hint: 'community.composer.tools.modificationAlt.link',
    value: 'community.composer.tools.modification.link.value',
    left: 'community.composer.tools.modification.link.left',
    right: 'community.composer.tools.modification.link.right'
  },
  {
    icon: <SC.UserIcon />,
    hint: 'community.composer.tools.modificationAlt.tag',
    value: 'community.composer.tools.modification.tag.value',
    left: 'community.composer.tools.modification.tag.left',
    right: 'community.composer.tools.modification.tag.right'
  }
];

interface ExternalProps {
  onSubmit: (content: string) => void;
  openToggle: () => void;
  initialValue?: string;
  showLogout?: boolean;
}

const CommentComposer: FC<ExternalProps> = ({
  onSubmit,
  openToggle,
  initialValue,
  showLogout
}) => {
  const commentContentFieldRef = useRef<HTMLTextAreaElement>(null);

  const applyTextModification = (
    selectionStart: number,
    selectionEnd: number,
    modification: string,
    leftModification: string,
    rightModification: string
  ) => {
    const currentValue = commentContentFieldRef.current?.value ?? '';
    if (selectionStart === selectionEnd) {
      commentContentFieldRef.current!.value = currentValue + modification;
    } else {
      commentContentFieldRef.current!.value =
        currentValue.slice(0, selectionStart) +
        leftModification +
        currentValue.slice(selectionStart, selectionEnd) +
        rightModification +
        currentValue.slice(selectionEnd, currentValue.length);
    }
  };

  return (
    <SC.PostCommentContainer>
      <SC.ComposerHeader>
        <SC.ToolsContainer>
          {tools.map(tool => (
            <SC.ToolButton
              value={translations.translate(tool.hint) as string}
              key={`composer-tool-${tool.hint}`}
              onClick={() =>
                applyTextModification(
                  commentContentFieldRef?.current?.selectionStart ?? 0,
                  commentContentFieldRef?.current?.selectionEnd ?? 0,
                  translations.translate(tool.value) as string,
                  translations.translate(tool.left) as string,
                  translations.translate(tool.right) as string
                )
              }
            >
              {tool.icon}
            </SC.ToolButton>
          ))}
        </SC.ToolsContainer>
        {!!showLogout && <LogOut />}
      </SC.ComposerHeader>
      <textarea
        ref={commentContentFieldRef}
        placeholder={
          translations.translate('community.composer.placeholder') as string
        }
        defaultValue={htmlToMarkdown.turndown(initialValue ?? '')}
      />
      <SC.PostCommentButtons>
        <Buttons.BigButton
          onClick={() => {
            onSubmit(commentContentFieldRef.current!.value);
            commentContentFieldRef.current!.value = '';
            openToggle();
          }}
        >
          <Translation id='community.composer.send' />
        </Buttons.BigButton>
        <Buttons.UnderlineButton
          onClick={() => {
            openToggle();
            commentContentFieldRef.current!.value = '';
          }}
        >
          <Translation id='community.composer.cancel' />
        </Buttons.UnderlineButton>
      </SC.PostCommentButtons>
    </SC.PostCommentContainer>
  );
};

export default compose<FC<ExternalProps>>(memo)(CommentComposer);
