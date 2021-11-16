import {
  AccessRight as AccessRightEnum,
  RatingCategory,
  DimensionType,
  IndicatorType
} from './enums';

export interface TextLanguage {
  nb: string;
  nn: string;
  en: string;
  no: string;
}

export interface Publisher {
  uri: string;
  id: string;
  name: string;
  orgPath: string;
  organizationId: string;
  prefLabel: Partial<TextLanguage>;
}

export interface LosTheme {
  uri: string;
  name: Partial<TextLanguage>;
  losPaths?: string[];
}

export interface EuTheme {
  id: string;
  title: Partial<TextLanguage>;
  code?: string;
}

interface License {
  uri: string;
  prefLabel?: Partial<TextLanguage>;
}

interface ConformsTo {
  uri: string;
  prefLabel?: Partial<TextLanguage>;
}

interface Page {
  uri: string;
}

interface EndpointDescription {
  uri: string;
}

export interface AccessService {
  description: Partial<TextLanguage>;
  endpointDescription: EndpointDescription[];
  uri: string;
}

export interface Distribution {
  uri: string;
  type: string;
  title: Partial<TextLanguage>;
  description: Partial<TextLanguage>;
  fdkFormat: MediaTypeOrExtent[];
  license: License[];
  openLicense: boolean;
  accessURL: string[];
  downloadURL: string[];
  conformsTo: ConformsTo[];
  page?: Page[];
  accessService?: AccessService[];
  fdkFormat: MediaTypeOrExtent[];
}

interface AccessRight {
  code: AccessRightEnum;
}

export interface Dataset {
  id: string;
  type: EntityEnum.DATASET;
  uri: string;
  publisher: Partial<Publisher>;
  title: Partial<TextLanguage>;
  description: Partial<TextLanguage>;
  descriptionFormatted: Partial<TextLanguage>;
  objective: Partial<TextLanguage>;
  keyword: Partial<TextLanguage>[];
  theme?: EuTheme[];
  losTheme?: LosTheme[];
  issued: string;
  modified: string;
  distribution: Distribution[];
  accessRights?: AccessRight;
  harvest: Partial<Harvest>;
  provenance?: Provenance;
  sample?: Sample[];
  legalBasisForRestriction?: LegalBasis[];
  legalBasisForProcessing?: LegalBasis[];
  legalBasisForAccess?: LegalBasis[];
  conformsTo: ConformsTo[];
  informationModel?: Partial<ReferenceType>[];
  language?: Partial<ReferenceType>[];
  landingPage: string[];
  qualifiedAttributions: QualifiedAttribution[];
  assessment?: Assessment;
  hasRelevanceAnnotation?: Partial<Annotation>;
  hasCompletenessAnnotation?: Partial<Annotation>;
  hasAccuracyAnnotation?: Partial<Annotation>;
  hasAvailabilityAnnotation?: Partial<Annotation>;
  hasCurrentnessAnnotation?: Partial<Annotation>;
  accrualPeriodicity?: AccrualPeriodicity;
  references?: DatasetReference[];
  temporal?: TemporalRestriction[];
  contactPoint: Partial<ContactPoint>[];
}

interface ContactPoint {
  email: string;
  uri: string;
  organizationUnit: string;
  organizationName: string;
  hasURL: string;
  hasTelephone: string;
}

interface Provenance {
  code: string;
  prefLabel: Partial<TextLanguage>;
}

export interface Harvest {
  firstHarvested: string;
  lastHarvested: string;
}

export type Theme = LosTheme | EuTheme;

interface ReferenceType {
  uri: string;
  code: string;
  prefLabel: Partial<TextLanguage>;
}

export interface MediaTypeOrExtent {
  uri?: string;
  name?: string;
  code: string;
  type: MediaTypeOrExtentType;
}

export interface ReferenceData {
  los?: LosTheme[];
  themes?: EuTheme[];
  referencetypes?: ReferenceType[];
  mediatypes?: MediaType[];
  linguisticsystem?: ReferenceType[];
  apiservicetype?: ReferenceType[];
}

export interface ESPage {
  currentPage: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface EsPaged<T> {
  aggregations: any;
  hits: T[];
  page: ESPage;
}

export interface Link {
  href: string;
}
export interface Links {
  next: Link;
  self: Link;
}

export interface CmsArticle {
  id: string;
  type: string;
  created: string;
  changed: string;
  title: string;
  field_ingress: string;
  field_modules: any;
  field_image_some: any;
  langcode: string;
  links: Partial<Links>;
}

export interface CommunityCategory {
  cid: number;
  description: string;
  disabled: boolean;
  name: string;
  order: number;
  post_count: number;
  topic_count: number;
  slug: string;
  posts: CommunityPost[];
  topics: CommunityTopic[];
  pagination: CommunityPagination;
}
export interface CommunityPost {
  pid: number;
  tid: number;
  content: string;
  uid: number;
  timestamp: number;
  deleted: boolean;
  upvotes: number;
  downvotes: number;
  votes: number;
  timestampISO: string;
  user: CommunityUser;
  topic: CommunityTopic;
  category: CommunityCategory;
  isMainPost: boolean;
  replies: number;
  index: number;
}

export interface CommunityTopic {
  tid: number;
  uid: number;
  cid: number;
  title: string;
  slug: string;
  mainPid: number;
  posts: CommunityPost[];
  postcount: number;
  viewcount: number;
  postercount: number;
  scheduled: number;
  deleted: number;
  deleterUid: number;
  titleRaw: string;
  locked: number;
  pinned: number;
  timestamp: number;
  timestampISO: string;
  lastposttime: number;
  lastposttimeISO: string;
  pinExpiry: number;
  pinExpiryISO: string;
  upvotes: number;
  downvotes: number;
  votes: number;
  teaserPid: number;
  numThumbs: number;
  category: CommunityCategory;
  user: CommunityUser;
  teaser: CommunityTeaser;
  tags: CommunityTag[] | undefined;
  isOwner: boolean;
  ignored: boolean;
  unread: boolean;
  bookmark: number;
  unreplied: boolean;
  icons: string[];
  thumb: string;
  index: number;
}

export interface CommunityTeaser {
  pid: number;
  uid: number;
  timestamp: number;
  tid: number;
  content: string;
  timestampISO: string;
  user: CommunityUser;
  index: number;
}

export interface CommunityTag {
  value: string;
  valueEscaped: string;
  color: string;
  bgColor: string;
  score: number;
}

export interface CommunityUser {
  uid: number;
  username: string;
  displayname: string;
  userslug: string;
  picture: string;
  'icon:text': string;
  'icon:bgColor': string;
}

export interface CommunityPage {
  page: number;
  active: boolean;
}
export interface CommunityPagination {
  prev: CommunityPage;
  next: CommunityPage;
  first: CommunityPage;
  last: CommunityPage;
  currentPage: number;
  pageCount: number;
}
interface DatasetReference {
  referenceType: ReferenceType;
  source: { uri: string };
  prefLabel: Partial<TextLanguage>;
}

interface ItemWithRelationType {
  relation: Partial<Event> | Partial<PublicService>;
  relationType: string;
}

export interface PublicService {
  id: string;
  type: EntityEnum.PUBLIC_SERVICE;
  uri: string;
  identifier: string;
  title: Partial<TextLanguage>;
  description: Partial<TextLanguage>;
  isDescribedAt?: Partial<PublicService>[];
  isGroupedBy?: string[];
  hasCompetentAuthority?: Partial<Publisher>[];
  harvest?: Partial<Harvest>;
  keyword?: Partial<TextLanguage>[];
  sector?: Partial<Concept>[];
  isClassifiedBy?: Partial<Concept>[];
  language?: PublicServiceLanguage[];
  requires?: PublicService[];
  produces?: PublicServiceOutput[];
  hasCriterion?: PublicServiceCriterionRequirement[];
  follows?: PublicServiceRule[];
  hasLegalResource?: PublicServiceLegalResource[];
  hasInput?: PublicServiceInput[];
  hasParticipation?: PublicServiceParticipation[];
  hasChannel?: PublicServiceChannel[];
  processingTime?: string;
  hasCost?: PublicServiceCost[];
  relation?: PublicService[];
  hasContactPoint?: PublicServiceContactPoint[];
  associatedBroaderTypesByEvents?: string[];
  spatial: string[];
}

export interface Event {
  id: string;
  uri: string;
  identifier: string;
  title: Partial<TextLanguage>;
  description: Partial<TextLanguage>;
  type: EntityEnum.EVENT;
  dctType?: SkosConcept[];
  hasCompetentAuthority?: Partial<Publisher>[];
  harvest?: Partial<Harvest>;
  relation?: string[];
  specialized_type?: SpecializedEventType;
}

export interface DataService {
  id: string;
  type: EntityEnum.DATA_SERVICE;
  uri: string;
  publisher: Partial<Publisher>;
  title: Partial<TextLanguage>;
  description?: Partial<TextLanguage>;
  descriptionFormatted?: Partial<TextLanguage>;
  nationalComponent: boolean;
  isOpenAccess: boolean;
  isOpenLicense: boolean;
  isFree: boolean;
  harvest?: Partial<Harvest>;
  fdkFormat?: Partial<MediaTypeOrExtent>[];
  endpointURL?: string[];
  endpointDescription?: string[];
  landingPage: string[];
  conformsTo?: ConformsTo[];
  servesDataset?: string[];
  contactPoint?: Partial<ContactPoint>[];
}

export interface Assessment {
  id: string;
  entity: AssessmentEntity;
  rating: Rating;
  dimensions: Dimension[];
  updated: string;
}

export interface AssessmentEntity {
  uri: string;
  title: Partial<TextLanguage>;
  type: EntityEnum;
  catalog: Catalog;
}

export interface Dimension {
  type: DimensionType;
  rating: Rating;
  indicators: Indicator[];
}

export interface Rating {
  score: number;
  maxScore: number;
  satisfiedCriteria: number;
  totalCriteria: number;
  category: RatingCategory;
  dimensionsRating: Record<DimensionType, Pick<Rating, 'score' | 'maxScore'>>;
}

export interface Indicator {
  type: IndicatorType;
  weight: number;
  conforms: boolean;
}

export interface OrganizationCountsAndRating {
  organization: {
    organizationId: string;
    orgType: string;
    sectorCode: string;
    industryCode: string;
    homepage: string;
  };
  datasets: {
    totalCount: number;
    newCount: number;
    authoritativeCount: number;
    openCount: number;
    quality: {
      category: RatingCategory;
      percentage: number;
    };
  };
  dataservices: {
    totalCount: number;
    newCount: number;
  };
  concepts: {
    totalCount: number;
    newCount: number;
  };
  informationmodels: {
    totalCount: number;
    newCount: number;
  };
}

export interface EnhetsregisteretOrganization {
  organisasjonsnummer: string;
  navn: string;
  organisasjonsform: {
    kode: string;
    beskrivelse: string;
  };
  hjemmeside: string;
  postadresse: EnhetsregisteretAdresse;
  naeringskode1: {
    beskrivelse: string;
    kode: string;
  };
  forretningsadresse: EnhetsregisteretAdresse;
  institusjonellSektorkode: {
    kode: string;
    beskrivelse: string;
  };
}

interface EnhetsregisteretAdresse {
  land: string;
  landkode: string;
  postnummer: string;
  poststed: string;
  adresse: string[];
  kommune: string;
  kommunenummer: string;
}

interface Report {
  totalObjects: number;
  newLastWeek: number;
  organizationCount: number;
  catalogs: KeyWithCountObject[];
}

export interface DatasetsReport extends Report {
  formats: KeyWithCountObject[];
  nationalComponent: number;
  opendata: number;
  withSubject: number;
  accessRights: KeyWithCountObject[];
  themesAndTopicsCount: KeyWithCountObject[];
}

export interface KeyWithCountObject {
  key: string;
  count: number;
}

export interface DataPoint {
  xAxis: string;
  yAxis: string;
}

export interface OrganizationSummary {
  id: string;
  name: string;
  prefLabel: Partial<TextLanguage>;
  datasetCount: number;
  conceptCount: number;
  dataserviceCount: number;
  informationmodelCount: number;
}

export interface Paged<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
}

export interface DatasetPreview {
  table: PreviewTable;
  plain: PreviewPlain;
}

export interface PreviewPlain {
  value: string;
  contentType: string;
}

export interface PreviewTable {
  header: PreviewTableRow;
  rows: PreviewTableRow[];
}

export interface PreviewTableRow {
  columns: string[];
}
