export enum Environment {
  DEVELOPMENT = 'development',
  STAGING = 'staging',
  PRODUCTION = 'production'
}

export enum Entity {
  DATASET = 'dataset'
}

export enum AccessRight {
  PUBLIC = 'PUBLIC',
  RESTRICTED = 'RESTRICTED',
  NON_PUBLIC = 'NON_PUBLIC'
}

export enum DataFormat {
  JSON = 'application/json',
  CSV = 'text/csv',
  XML = 'application/xml',
  YAML = 'application/x.yaml',
  GEOJSON = 'application/vnd.geo+json',
  HTML = 'text/html',
  SOSI = 'application/x-ogc-sosi',
  XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  XLS = 'application/vnd.sealed-xls',
  RSS = 'text/xml',
  RDF_XML = 'application/rdf+xml',
  TURTLE = 'text/turtle',
  JSONLD = 'application/ld+json',
  TXT = 'text/plain',
  SIRI = 'application/x.siri',
  UNKNOWN = 'unknown'
}

export enum GoogleAnalyticsTrackingId {
  DATAFABRIKKEN = 'G-FFPJE1KZ19',
  COMMUNITY = 'G-WVFGGM6DCG'
}

export enum CommunityPlaceholder {
  FORMER_USER = '[[global:former_user]]',
  POST_DELETED = '[[topic:post_is_deleted]]',
  CALENDAR_EVENT_TITLE = '[[calendar:event_title]]'
}

export enum MediaTypeOrExtentType {
  MEDIA_TYPE = 'MEDIA_TYPE',
  FILE_TYPE = 'FILE_TYPE',
  UNKNOWN = 'UNKNOWN'
}

export enum RatingCategory {
  EXCELLENT = 'excellent',
  GOOD = 'good',
  SUFFICIENT = 'sufficient',
  POOR = 'poor'
}

export enum DimensionType {
  ACCESSIBILITY = 'accessibility',
  FINDABILITY = 'findability',
  INTEROPERABILITY = 'interoperability',
  READABILITY = 'readability',
  REUSABILITY = 'reusability'
}

export enum IndicatorType {
  DISTRIBUTABLE_DATA = 'distributableData',
  KEYWORD_USAGE = 'keywordUsage',
  SUBJECT_USAGE = 'subjectUsage',
  GEO_SEARCH = 'geoSearch',
  CONTROLLED_VOCABULARY_USAGE = 'controlledVocabularyUsage',
  LICENSE_INFORMATION = 'licenseInformation',
  CONTACT_POINT = 'contactPoint',
  TITLE = 'title',
  TITLE_NO_ORG_NAME = 'titleNoOrgName',
  DESCRIPTION = 'description',
  DESCRIPTION_WITHOUT_TITLE = 'descriptionWithoutTitle'
}

export enum Filter {
  LASTXDAYS = 'last_x_days',
  OPENDATA = 'opendata',
  ACCESSRIGHTS = 'accessrights',
  PROVENANCE = 'provenance',
  SUBJECTEXISTS = 'subjectExists',
  FORMAT = 'format',
  LOS = 'losTheme',
  ORGPATH = 'orgPath',
  ORGANIZATION_NUMBER = 'organizationNumber',
  THEME = 'theme',
  Q = 'q',
  PAGE = 'page',
  SORTFIELD = 'sortfield',
  CATALOGNAME = 'catalog_name',
  EVENT_TYPE = 'eventType'
}
