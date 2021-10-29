import { List, Map } from 'immutable';
import translations from '../../../services/translations';

import { SortOrder } from '../../../types/enums';

export const sortOrganizations =
  (selector: string[], order: SortOrder = SortOrder.ASC) =>
  (organizations: List<any>) =>
    organizations.sortBy(
      (organization: Map<string, any>) =>
        organization.getIn(selector) ?? organization.get('name'),
      (a?: any, b?: any) =>
        (isNaN(a) && isNaN(b)
          ? translations
              .getTranslateText(Map.isMap(a) ? a.toJS() : a)
              ?.localeCompare(
                translations.getTranslateText(Map.isMap(b) ? b.toJS() : b) ??
                  '',
                'nb'
              ) ?? 0
          : a - b) * (order === SortOrder.ASC ? 1 : -1)
    );
