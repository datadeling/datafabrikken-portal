import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** Input type for dynamic zone content of FancyArticle */
  FancyArticleContentDynamicZoneInput: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type Article = {
  __typename?: 'Article';
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  excerpt: Scalars['String'];
  featureImage?: Maybe<UploadFile>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Article>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type ArticleLocalizationsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ArticleAggregator = {
  __typename?: 'ArticleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  aggregate?: Maybe<ArticleAggregator>;
  groupBy?: Maybe<ArticleGroupBy>;
  values?: Maybe<Array<Maybe<Article>>>;
};

export type ArticleConnectionContent = {
  __typename?: 'ArticleConnectionContent';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionCreated_At = {
  __typename?: 'ArticleConnectionCreated_at';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ArticleConnectionExcerpt = {
  __typename?: 'ArticleConnectionExcerpt';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionFeatureImage = {
  __typename?: 'ArticleConnectionFeatureImage';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionId = {
  __typename?: 'ArticleConnectionId';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionLocale = {
  __typename?: 'ArticleConnectionLocale';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionPublished_At = {
  __typename?: 'ArticleConnectionPublished_at';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ArticleConnectionTitle = {
  __typename?: 'ArticleConnectionTitle';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionUpdated_At = {
  __typename?: 'ArticleConnectionUpdated_at';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ArticleGroupBy = {
  __typename?: 'ArticleGroupBy';
  content?: Maybe<Array<Maybe<ArticleConnectionContent>>>;
  created_at?: Maybe<Array<Maybe<ArticleConnectionCreated_At>>>;
  excerpt?: Maybe<Array<Maybe<ArticleConnectionExcerpt>>>;
  featureImage?: Maybe<Array<Maybe<ArticleConnectionFeatureImage>>>;
  id?: Maybe<Array<Maybe<ArticleConnectionId>>>;
  locale?: Maybe<Array<Maybe<ArticleConnectionLocale>>>;
  published_at?: Maybe<Array<Maybe<ArticleConnectionPublished_At>>>;
  title?: Maybe<Array<Maybe<ArticleConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<ArticleConnectionUpdated_At>>>;
};

export type ArticleInput = {
  content: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  excerpt: Scalars['String'];
  featureImage?: Maybe<Scalars['ID']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentBasicContact = {
  __typename?: 'ComponentBasicContact';
  email: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Array<Maybe<UploadFile>>>;
  jobTitle?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
};

export type ComponentBasicContactImageArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentBasicContactInput = {
  email: Scalars['String'];
  image?: Maybe<Array<Maybe<Scalars['ID']>>>;
  jobTitle?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
};

export type ComponentBasicImage = {
  __typename?: 'ComponentBasicImage';
  alternativeText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  media?: Maybe<Array<Maybe<UploadFile>>>;
  style?: Maybe<Enum_Componentbasicimage_Style>;
};

export type ComponentBasicImageMediaArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentBasicImageInput = {
  alternativeText?: Maybe<Scalars['String']>;
  media?: Maybe<Array<Maybe<Scalars['ID']>>>;
  style?: Maybe<Enum_Componentbasicimage_Style>;
};

export type ComponentBasicInfobox = {
  __typename?: 'ComponentBasicInfobox';
  content?: Maybe<Scalars['String']>;
  hoverIllustration?: Maybe<UploadFile>;
  id: Scalars['ID'];
  illustration?: Maybe<UploadFile>;
  link?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ComponentBasicInfoboxInput = {
  content?: Maybe<Scalars['String']>;
  hoverIllustration?: Maybe<Scalars['ID']>;
  illustration?: Maybe<Scalars['ID']>;
  link?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ComponentBasicParagraph = {
  __typename?: 'ComponentBasicParagraph';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentBasicParagraphInput = {
  content?: Maybe<Scalars['String']>;
};

export type ComponentBasicQuote = {
  __typename?: 'ComponentBasicQuote';
  author?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentBasicQuoteInput = {
  author?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type ComponentBasicSection = {
  __typename?: 'ComponentBasicSection';
  id: Scalars['ID'];
};

export type ComponentBasicSectionInput = {
  _?: Maybe<Scalars['String']>;
};

export type Course = {
  __typename?: 'Course';
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  durationInMinutes?: Maybe<Scalars['Int']>;
  featureImage?: Maybe<UploadFile>;
  free: Scalars['Boolean'];
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Course>>>;
  numberOfModules?: Maybe<Scalars['Int']>;
  position: Scalars['Int'];
  primaryTargetGroup?: Maybe<Enum_Course_Primarytargetgroup>;
  providerId?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  type?: Maybe<Enum_Course_Type>;
  updated_at: Scalars['DateTime'];
};

export type CourseLocalizationsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CourseAggregator = {
  __typename?: 'CourseAggregator';
  avg?: Maybe<CourseAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<CourseAggregatorMax>;
  min?: Maybe<CourseAggregatorMin>;
  sum?: Maybe<CourseAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CourseAggregatorAvg = {
  __typename?: 'CourseAggregatorAvg';
  durationInMinutes?: Maybe<Scalars['Float']>;
  numberOfModules?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  providerId?: Maybe<Scalars['Float']>;
};

export type CourseAggregatorMax = {
  __typename?: 'CourseAggregatorMax';
  durationInMinutes?: Maybe<Scalars['Float']>;
  numberOfModules?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  providerId?: Maybe<Scalars['Float']>;
};

export type CourseAggregatorMin = {
  __typename?: 'CourseAggregatorMin';
  durationInMinutes?: Maybe<Scalars['Float']>;
  numberOfModules?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  providerId?: Maybe<Scalars['Float']>;
};

export type CourseAggregatorSum = {
  __typename?: 'CourseAggregatorSum';
  durationInMinutes?: Maybe<Scalars['Float']>;
  numberOfModules?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  providerId?: Maybe<Scalars['Float']>;
};

export type CourseConnection = {
  __typename?: 'CourseConnection';
  aggregate?: Maybe<CourseAggregator>;
  groupBy?: Maybe<CourseGroupBy>;
  values?: Maybe<Array<Maybe<Course>>>;
};

export type CourseConnectionCreated_At = {
  __typename?: 'CourseConnectionCreated_at';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CourseConnectionDescription = {
  __typename?: 'CourseConnectionDescription';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CourseConnectionDurationInMinutes = {
  __typename?: 'CourseConnectionDurationInMinutes';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type CourseConnectionFeatureImage = {
  __typename?: 'CourseConnectionFeatureImage';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CourseConnectionFree = {
  __typename?: 'CourseConnectionFree';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type CourseConnectionId = {
  __typename?: 'CourseConnectionId';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CourseConnectionLanguage = {
  __typename?: 'CourseConnectionLanguage';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CourseConnectionLink = {
  __typename?: 'CourseConnectionLink';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CourseConnectionLocale = {
  __typename?: 'CourseConnectionLocale';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CourseConnectionNumberOfModules = {
  __typename?: 'CourseConnectionNumberOfModules';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type CourseConnectionPosition = {
  __typename?: 'CourseConnectionPosition';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type CourseConnectionPrimaryTargetGroup = {
  __typename?: 'CourseConnectionPrimaryTargetGroup';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CourseConnectionProviderId = {
  __typename?: 'CourseConnectionProviderId';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type CourseConnectionPublished_At = {
  __typename?: 'CourseConnectionPublished_at';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CourseConnectionTitle = {
  __typename?: 'CourseConnectionTitle';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CourseConnectionType = {
  __typename?: 'CourseConnectionType';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CourseConnectionUpdated_At = {
  __typename?: 'CourseConnectionUpdated_at';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CourseGroupBy = {
  __typename?: 'CourseGroupBy';
  created_at?: Maybe<Array<Maybe<CourseConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<CourseConnectionDescription>>>;
  durationInMinutes?: Maybe<Array<Maybe<CourseConnectionDurationInMinutes>>>;
  featureImage?: Maybe<Array<Maybe<CourseConnectionFeatureImage>>>;
  free?: Maybe<Array<Maybe<CourseConnectionFree>>>;
  id?: Maybe<Array<Maybe<CourseConnectionId>>>;
  language?: Maybe<Array<Maybe<CourseConnectionLanguage>>>;
  link?: Maybe<Array<Maybe<CourseConnectionLink>>>;
  locale?: Maybe<Array<Maybe<CourseConnectionLocale>>>;
  numberOfModules?: Maybe<Array<Maybe<CourseConnectionNumberOfModules>>>;
  position?: Maybe<Array<Maybe<CourseConnectionPosition>>>;
  primaryTargetGroup?: Maybe<Array<Maybe<CourseConnectionPrimaryTargetGroup>>>;
  providerId?: Maybe<Array<Maybe<CourseConnectionProviderId>>>;
  published_at?: Maybe<Array<Maybe<CourseConnectionPublished_At>>>;
  title?: Maybe<Array<Maybe<CourseConnectionTitle>>>;
  type?: Maybe<Array<Maybe<CourseConnectionType>>>;
  updated_at?: Maybe<Array<Maybe<CourseConnectionUpdated_At>>>;
};

export type CourseInput = {
  created_by?: Maybe<Scalars['ID']>;
  description: Scalars['String'];
  durationInMinutes?: Maybe<Scalars['Int']>;
  featureImage?: Maybe<Scalars['ID']>;
  free: Scalars['Boolean'];
  language?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  numberOfModules?: Maybe<Scalars['Int']>;
  position: Scalars['Int'];
  primaryTargetGroup?: Maybe<Enum_Course_Primarytargetgroup>;
  providerId?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  type?: Maybe<Enum_Course_Type>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum Enum_Componentbasicimage_Style {
  FullSize = 'fullSize',
  Left = 'left',
  None = 'none',
  Right = 'right'
}

export enum Enum_Course_Primarytargetgroup {
  DataConsumer = 'DATA_CONSUMER',
  DataProvider = 'DATA_PROVIDER'
}

export enum Enum_Course_Type {
  AdvancedTraining = 'ADVANCED_TRAINING',
  ContinuingEducation = 'CONTINUING_EDUCATION',
  IntroCourse = 'INTRO_COURSE'
}

export enum Enum_Guide_Contenttype {
  Text = 'TEXT',
  TextAndVideo = 'TEXT_AND_VIDEO',
  Video = 'VIDEO'
}

export enum Enum_Guide_Primarytargetgroup {
  DataConsumer = 'DATA_CONSUMER',
  DataProvider = 'DATA_PROVIDER'
}

export enum Enum_Servicemessage_Channel {
  Adminportal = 'Adminportal',
  Generell = 'Generell',
  Publiseringsportal = 'Publiseringsportal',
  Registreringsportal = 'Registreringsportal'
}

export enum Enum_Servicemessage_Message_Type {
  Error = 'ERROR',
  Info = 'INFO',
  Warning = 'WARNING'
}

export type FancyArticle = {
  __typename?: 'FancyArticle';
  content?: Maybe<Array<Maybe<FancyArticleContentDynamicZone>>>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<FancyArticle>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type FancyArticleLocalizationsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type FancyArticleAggregator = {
  __typename?: 'FancyArticleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type FancyArticleConnection = {
  __typename?: 'FancyArticleConnection';
  aggregate?: Maybe<FancyArticleAggregator>;
  groupBy?: Maybe<FancyArticleGroupBy>;
  values?: Maybe<Array<Maybe<FancyArticle>>>;
};

export type FancyArticleConnectionCreated_At = {
  __typename?: 'FancyArticleConnectionCreated_at';
  connection?: Maybe<FancyArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type FancyArticleConnectionId = {
  __typename?: 'FancyArticleConnectionId';
  connection?: Maybe<FancyArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type FancyArticleConnectionLocale = {
  __typename?: 'FancyArticleConnectionLocale';
  connection?: Maybe<FancyArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type FancyArticleConnectionPublished_At = {
  __typename?: 'FancyArticleConnectionPublished_at';
  connection?: Maybe<FancyArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type FancyArticleConnectionSubtitle = {
  __typename?: 'FancyArticleConnectionSubtitle';
  connection?: Maybe<FancyArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type FancyArticleConnectionTitle = {
  __typename?: 'FancyArticleConnectionTitle';
  connection?: Maybe<FancyArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type FancyArticleConnectionUpdated_At = {
  __typename?: 'FancyArticleConnectionUpdated_at';
  connection?: Maybe<FancyArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type FancyArticleContentDynamicZone =
  | ComponentBasicContact
  | ComponentBasicImage
  | ComponentBasicInfobox
  | ComponentBasicParagraph
  | ComponentBasicQuote
  | ComponentBasicSection;

export type FancyArticleGroupBy = {
  __typename?: 'FancyArticleGroupBy';
  created_at?: Maybe<Array<Maybe<FancyArticleConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<FancyArticleConnectionId>>>;
  locale?: Maybe<Array<Maybe<FancyArticleConnectionLocale>>>;
  published_at?: Maybe<Array<Maybe<FancyArticleConnectionPublished_At>>>;
  subtitle?: Maybe<Array<Maybe<FancyArticleConnectionSubtitle>>>;
  title?: Maybe<Array<Maybe<FancyArticleConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<FancyArticleConnectionUpdated_At>>>;
};

export type FancyArticleInput = {
  content?: Maybe<Array<Scalars['FancyArticleContentDynamicZoneInput']>>;
  created_by?: Maybe<Scalars['ID']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type FileInfoInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: Maybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type Guide = {
  __typename?: 'Guide';
  contentType?: Maybe<Enum_Guide_Contenttype>;
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  durationInMinutes?: Maybe<Scalars['Int']>;
  featureImage?: Maybe<UploadFile>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Guide>>>;
  position: Scalars['Int'];
  primaryTargetGroup?: Maybe<Enum_Guide_Primarytargetgroup>;
  providerId?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type GuideLocalizationsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type GuideAggregator = {
  __typename?: 'GuideAggregator';
  avg?: Maybe<GuideAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<GuideAggregatorMax>;
  min?: Maybe<GuideAggregatorMin>;
  sum?: Maybe<GuideAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GuideAggregatorAvg = {
  __typename?: 'GuideAggregatorAvg';
  durationInMinutes?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  providerId?: Maybe<Scalars['Float']>;
};

export type GuideAggregatorMax = {
  __typename?: 'GuideAggregatorMax';
  durationInMinutes?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  providerId?: Maybe<Scalars['Float']>;
};

export type GuideAggregatorMin = {
  __typename?: 'GuideAggregatorMin';
  durationInMinutes?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  providerId?: Maybe<Scalars['Float']>;
};

export type GuideAggregatorSum = {
  __typename?: 'GuideAggregatorSum';
  durationInMinutes?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  providerId?: Maybe<Scalars['Float']>;
};

export type GuideConnection = {
  __typename?: 'GuideConnection';
  aggregate?: Maybe<GuideAggregator>;
  groupBy?: Maybe<GuideGroupBy>;
  values?: Maybe<Array<Maybe<Guide>>>;
};

export type GuideConnectionContentType = {
  __typename?: 'GuideConnectionContentType';
  connection?: Maybe<GuideConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GuideConnectionCreated_At = {
  __typename?: 'GuideConnectionCreated_at';
  connection?: Maybe<GuideConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GuideConnectionDescription = {
  __typename?: 'GuideConnectionDescription';
  connection?: Maybe<GuideConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GuideConnectionDurationInMinutes = {
  __typename?: 'GuideConnectionDurationInMinutes';
  connection?: Maybe<GuideConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type GuideConnectionFeatureImage = {
  __typename?: 'GuideConnectionFeatureImage';
  connection?: Maybe<GuideConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GuideConnectionId = {
  __typename?: 'GuideConnectionId';
  connection?: Maybe<GuideConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GuideConnectionLanguage = {
  __typename?: 'GuideConnectionLanguage';
  connection?: Maybe<GuideConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GuideConnectionLink = {
  __typename?: 'GuideConnectionLink';
  connection?: Maybe<GuideConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GuideConnectionLocale = {
  __typename?: 'GuideConnectionLocale';
  connection?: Maybe<GuideConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GuideConnectionPosition = {
  __typename?: 'GuideConnectionPosition';
  connection?: Maybe<GuideConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type GuideConnectionPrimaryTargetGroup = {
  __typename?: 'GuideConnectionPrimaryTargetGroup';
  connection?: Maybe<GuideConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GuideConnectionProviderId = {
  __typename?: 'GuideConnectionProviderId';
  connection?: Maybe<GuideConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type GuideConnectionPublished_At = {
  __typename?: 'GuideConnectionPublished_at';
  connection?: Maybe<GuideConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GuideConnectionTitle = {
  __typename?: 'GuideConnectionTitle';
  connection?: Maybe<GuideConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GuideConnectionUpdated_At = {
  __typename?: 'GuideConnectionUpdated_at';
  connection?: Maybe<GuideConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GuideGroupBy = {
  __typename?: 'GuideGroupBy';
  contentType?: Maybe<Array<Maybe<GuideConnectionContentType>>>;
  created_at?: Maybe<Array<Maybe<GuideConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<GuideConnectionDescription>>>;
  durationInMinutes?: Maybe<Array<Maybe<GuideConnectionDurationInMinutes>>>;
  featureImage?: Maybe<Array<Maybe<GuideConnectionFeatureImage>>>;
  id?: Maybe<Array<Maybe<GuideConnectionId>>>;
  language?: Maybe<Array<Maybe<GuideConnectionLanguage>>>;
  link?: Maybe<Array<Maybe<GuideConnectionLink>>>;
  locale?: Maybe<Array<Maybe<GuideConnectionLocale>>>;
  position?: Maybe<Array<Maybe<GuideConnectionPosition>>>;
  primaryTargetGroup?: Maybe<Array<Maybe<GuideConnectionPrimaryTargetGroup>>>;
  providerId?: Maybe<Array<Maybe<GuideConnectionProviderId>>>;
  published_at?: Maybe<Array<Maybe<GuideConnectionPublished_At>>>;
  title?: Maybe<Array<Maybe<GuideConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<GuideConnectionUpdated_At>>>;
};

export type GuideInput = {
  contentType?: Maybe<Enum_Guide_Contenttype>;
  created_by?: Maybe<Scalars['ID']>;
  description: Scalars['String'];
  durationInMinutes?: Maybe<Scalars['Int']>;
  featureImage?: Maybe<Scalars['ID']>;
  language?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  position: Scalars['Int'];
  primaryTargetGroup?: Maybe<Enum_Guide_Primarytargetgroup>;
  providerId?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type InputId = {
  id: Scalars['ID'];
};

export type LocaleInput = {
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Morph =
  | Article
  | ArticleAggregator
  | ArticleConnection
  | ArticleConnectionContent
  | ArticleConnectionCreated_At
  | ArticleConnectionExcerpt
  | ArticleConnectionFeatureImage
  | ArticleConnectionId
  | ArticleConnectionLocale
  | ArticleConnectionPublished_At
  | ArticleConnectionTitle
  | ArticleConnectionUpdated_At
  | ArticleGroupBy
  | ComponentBasicContact
  | ComponentBasicImage
  | ComponentBasicInfobox
  | ComponentBasicParagraph
  | ComponentBasicQuote
  | ComponentBasicSection
  | Course
  | CourseAggregator
  | CourseAggregatorAvg
  | CourseAggregatorMax
  | CourseAggregatorMin
  | CourseAggregatorSum
  | CourseConnection
  | CourseConnectionCreated_At
  | CourseConnectionDescription
  | CourseConnectionDurationInMinutes
  | CourseConnectionFeatureImage
  | CourseConnectionFree
  | CourseConnectionId
  | CourseConnectionLanguage
  | CourseConnectionLink
  | CourseConnectionLocale
  | CourseConnectionNumberOfModules
  | CourseConnectionPosition
  | CourseConnectionPrimaryTargetGroup
  | CourseConnectionProviderId
  | CourseConnectionPublished_At
  | CourseConnectionTitle
  | CourseConnectionType
  | CourseConnectionUpdated_At
  | CourseGroupBy
  | FancyArticle
  | FancyArticleAggregator
  | FancyArticleConnection
  | FancyArticleConnectionCreated_At
  | FancyArticleConnectionId
  | FancyArticleConnectionLocale
  | FancyArticleConnectionPublished_At
  | FancyArticleConnectionSubtitle
  | FancyArticleConnectionTitle
  | FancyArticleConnectionUpdated_At
  | FancyArticleGroupBy
  | Guide
  | GuideAggregator
  | GuideAggregatorAvg
  | GuideAggregatorMax
  | GuideAggregatorMin
  | GuideAggregatorSum
  | GuideConnection
  | GuideConnectionContentType
  | GuideConnectionCreated_At
  | GuideConnectionDescription
  | GuideConnectionDurationInMinutes
  | GuideConnectionFeatureImage
  | GuideConnectionId
  | GuideConnectionLanguage
  | GuideConnectionLink
  | GuideConnectionLocale
  | GuideConnectionPosition
  | GuideConnectionPrimaryTargetGroup
  | GuideConnectionProviderId
  | GuideConnectionPublished_At
  | GuideConnectionTitle
  | GuideConnectionUpdated_At
  | GuideGroupBy
  | I18NLocale
  | Provider
  | ProviderAggregator
  | ProviderConnection
  | ProviderConnectionCreated_At
  | ProviderConnectionId
  | ProviderConnectionLocale
  | ProviderConnectionLogo
  | ProviderConnectionPublished_At
  | ProviderConnectionTitle
  | ProviderConnectionUpdated_At
  | ProviderGroupBy
  | ServiceMessage
  | ServiceMessageAggregator
  | ServiceMessageConnection
  | ServiceMessageConnectionChannel
  | ServiceMessageConnectionCreated_At
  | ServiceMessageConnectionDescription
  | ServiceMessageConnectionId
  | ServiceMessageConnectionLocale
  | ServiceMessageConnectionMessage_Type
  | ServiceMessageConnectionPublished_At
  | ServiceMessageConnectionShort_Description
  | ServiceMessageConnectionTitle
  | ServiceMessageConnectionUpdated_At
  | ServiceMessageConnectionValid_From
  | ServiceMessageConnectionValid_To
  | ServiceMessageGroupBy
  | UploadFile
  | UploadFileAggregator
  | UploadFileAggregatorAvg
  | UploadFileAggregatorMax
  | UploadFileAggregatorMin
  | UploadFileAggregatorSum
  | UploadFileConnection
  | UploadFileConnectionAlternativeText
  | UploadFileConnectionCaption
  | UploadFileConnectionCreated_At
  | UploadFileConnectionExt
  | UploadFileConnectionFormats
  | UploadFileConnectionHash
  | UploadFileConnectionHeight
  | UploadFileConnectionId
  | UploadFileConnectionMime
  | UploadFileConnectionName
  | UploadFileConnectionPreviewUrl
  | UploadFileConnectionProvider
  | UploadFileConnectionProvider_Metadata
  | UploadFileConnectionSize
  | UploadFileConnectionUpdated_At
  | UploadFileConnectionUrl
  | UploadFileConnectionWidth
  | UploadFileGroupBy
  | UserPermissionsPasswordPayload
  | UsersPermissionsLoginPayload
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsRoleAggregator
  | UsersPermissionsRoleConnection
  | UsersPermissionsRoleConnectionDescription
  | UsersPermissionsRoleConnectionId
  | UsersPermissionsRoleConnectionName
  | UsersPermissionsRoleConnectionType
  | UsersPermissionsRoleGroupBy
  | UsersPermissionsUser
  | UsersPermissionsUserAggregator
  | UsersPermissionsUserConnection
  | UsersPermissionsUserConnectionBlocked
  | UsersPermissionsUserConnectionConfirmed
  | UsersPermissionsUserConnectionCreated_At
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnectionProvider
  | UsersPermissionsUserConnectionRole
  | UsersPermissionsUserConnectionUpdated_At
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserGroupBy
  | CreateArticlePayload
  | CreateCoursePayload
  | CreateFancyArticlePayload
  | CreateGuidePayload
  | CreateProviderPayload
  | CreateRolePayload
  | CreateServiceMessagePayload
  | CreateUserPayload
  | DeleteArticlePayload
  | DeleteCoursePayload
  | DeleteFancyArticlePayload
  | DeleteFilePayload
  | DeleteGuidePayload
  | DeleteProviderPayload
  | DeleteRolePayload
  | DeleteServiceMessagePayload
  | DeleteUserPayload
  | UpdateArticlePayload
  | UpdateCoursePayload
  | UpdateFancyArticlePayload
  | UpdateGuidePayload
  | UpdateProviderPayload
  | UpdateRolePayload
  | UpdateServiceMessagePayload
  | UpdateUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createArticle?: Maybe<CreateArticlePayload>;
  createArticleLocalization: Article;
  createCourse?: Maybe<CreateCoursePayload>;
  createCourseLocalization: Course;
  createFancyArticle?: Maybe<CreateFancyArticlePayload>;
  createFancyArticleLocalization: FancyArticle;
  createGuide?: Maybe<CreateGuidePayload>;
  createGuideLocalization: Guide;
  createProvider?: Maybe<CreateProviderPayload>;
  createProviderLocalization: Provider;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  createServiceMessage?: Maybe<CreateServiceMessagePayload>;
  createServiceMessageLocalization: ServiceMessage;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  deleteArticle?: Maybe<DeleteArticlePayload>;
  deleteCourse?: Maybe<DeleteCoursePayload>;
  deleteFancyArticle?: Maybe<DeleteFancyArticlePayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteGuide?: Maybe<DeleteGuidePayload>;
  deleteProvider?: Maybe<DeleteProviderPayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  deleteServiceMessage?: Maybe<DeleteServiceMessagePayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateArticle?: Maybe<UpdateArticlePayload>;
  updateCourse?: Maybe<UpdateCoursePayload>;
  updateFancyArticle?: Maybe<UpdateFancyArticlePayload>;
  updateFileInfo: UploadFile;
  updateGuide?: Maybe<UpdateGuidePayload>;
  updateProvider?: Maybe<UpdateProviderPayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  updateServiceMessage?: Maybe<UpdateServiceMessagePayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  upload: UploadFile;
};

export type MutationCreateArticleArgs = {
  input?: Maybe<CreateArticleInput>;
};

export type MutationCreateArticleLocalizationArgs = {
  input: UpdateArticleInput;
};

export type MutationCreateCourseArgs = {
  input?: Maybe<CreateCourseInput>;
};

export type MutationCreateCourseLocalizationArgs = {
  input: UpdateCourseInput;
};

export type MutationCreateFancyArticleArgs = {
  input?: Maybe<CreateFancyArticleInput>;
};

export type MutationCreateFancyArticleLocalizationArgs = {
  input: UpdateFancyArticleInput;
};

export type MutationCreateGuideArgs = {
  input?: Maybe<CreateGuideInput>;
};

export type MutationCreateGuideLocalizationArgs = {
  input: UpdateGuideInput;
};

export type MutationCreateProviderArgs = {
  input?: Maybe<CreateProviderInput>;
};

export type MutationCreateProviderLocalizationArgs = {
  input: UpdateProviderInput;
};

export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};

export type MutationCreateServiceMessageArgs = {
  input?: Maybe<CreateServiceMessageInput>;
};

export type MutationCreateServiceMessageLocalizationArgs = {
  input: UpdateServiceMessageInput;
};

export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};

export type MutationDeleteArticleArgs = {
  input?: Maybe<DeleteArticleInput>;
};

export type MutationDeleteCourseArgs = {
  input?: Maybe<DeleteCourseInput>;
};

export type MutationDeleteFancyArticleArgs = {
  input?: Maybe<DeleteFancyArticleInput>;
};

export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};

export type MutationDeleteGuideArgs = {
  input?: Maybe<DeleteGuideInput>;
};

export type MutationDeleteProviderArgs = {
  input?: Maybe<DeleteProviderInput>;
};

export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};

export type MutationDeleteServiceMessageArgs = {
  input?: Maybe<DeleteServiceMessageInput>;
};

export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
  ref?: Maybe<Scalars['String']>;
  refId?: Maybe<Scalars['ID']>;
  source?: Maybe<Scalars['String']>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type MutationUpdateArticleArgs = {
  input?: Maybe<UpdateArticleInput>;
};

export type MutationUpdateCourseArgs = {
  input?: Maybe<UpdateCourseInput>;
};

export type MutationUpdateFancyArticleArgs = {
  input?: Maybe<UpdateFancyArticleInput>;
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};

export type MutationUpdateGuideArgs = {
  input?: Maybe<UpdateGuideInput>;
};

export type MutationUpdateProviderArgs = {
  input?: Maybe<UpdateProviderInput>;
};

export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};

export type MutationUpdateServiceMessageArgs = {
  input?: Maybe<UpdateServiceMessageInput>;
};

export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};

export type MutationUploadArgs = {
  field?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: Maybe<FileInfoInput>;
  ref?: Maybe<Scalars['String']>;
  refId?: Maybe<Scalars['ID']>;
  source?: Maybe<Scalars['String']>;
};

export type Provider = {
  __typename?: 'Provider';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Provider>>>;
  logo?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type ProviderLocalizationsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProviderAggregator = {
  __typename?: 'ProviderAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProviderConnection = {
  __typename?: 'ProviderConnection';
  aggregate?: Maybe<ProviderAggregator>;
  groupBy?: Maybe<ProviderGroupBy>;
  values?: Maybe<Array<Maybe<Provider>>>;
};

export type ProviderConnectionCreated_At = {
  __typename?: 'ProviderConnectionCreated_at';
  connection?: Maybe<ProviderConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProviderConnectionId = {
  __typename?: 'ProviderConnectionId';
  connection?: Maybe<ProviderConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProviderConnectionLocale = {
  __typename?: 'ProviderConnectionLocale';
  connection?: Maybe<ProviderConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProviderConnectionLogo = {
  __typename?: 'ProviderConnectionLogo';
  connection?: Maybe<ProviderConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProviderConnectionPublished_At = {
  __typename?: 'ProviderConnectionPublished_at';
  connection?: Maybe<ProviderConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProviderConnectionTitle = {
  __typename?: 'ProviderConnectionTitle';
  connection?: Maybe<ProviderConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProviderConnectionUpdated_At = {
  __typename?: 'ProviderConnectionUpdated_at';
  connection?: Maybe<ProviderConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProviderGroupBy = {
  __typename?: 'ProviderGroupBy';
  created_at?: Maybe<Array<Maybe<ProviderConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<ProviderConnectionId>>>;
  locale?: Maybe<Array<Maybe<ProviderConnectionLocale>>>;
  logo?: Maybe<Array<Maybe<ProviderConnectionLogo>>>;
  published_at?: Maybe<Array<Maybe<ProviderConnectionPublished_At>>>;
  title?: Maybe<Array<Maybe<ProviderConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<ProviderConnectionUpdated_At>>>;
};

export type ProviderInput = {
  created_by?: Maybe<Scalars['ID']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  logo?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  article?: Maybe<Article>;
  articles?: Maybe<Array<Maybe<Article>>>;
  articlesConnection?: Maybe<ArticleConnection>;
  course?: Maybe<Course>;
  courses?: Maybe<Array<Maybe<Course>>>;
  coursesConnection?: Maybe<CourseConnection>;
  fancyArticle?: Maybe<FancyArticle>;
  fancyArticles?: Maybe<Array<Maybe<FancyArticle>>>;
  fancyArticlesConnection?: Maybe<FancyArticleConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  guide?: Maybe<Guide>;
  guides?: Maybe<Array<Maybe<Guide>>>;
  guidesConnection?: Maybe<GuideConnection>;
  me?: Maybe<UsersPermissionsMe>;
  provider?: Maybe<Provider>;
  providers?: Maybe<Array<Maybe<Provider>>>;
  providersConnection?: Maybe<ProviderConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  serviceMessage?: Maybe<ServiceMessage>;
  serviceMessages?: Maybe<Array<Maybe<ServiceMessage>>>;
  serviceMessagesConnection?: Maybe<ServiceMessageConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
};

export type QueryArticleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryArticlesArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryArticlesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryCourseArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryCoursesArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryCoursesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryFancyArticleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryFancyArticlesArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryFancyArticlesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryFilesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryFilesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryGuideArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryGuidesArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryGuidesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryProviderArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryProvidersArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryProvidersConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryRolesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryRolesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryServiceMessageArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryServiceMessagesArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryServiceMessagesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryUsersConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RoleInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ServiceMessage = {
  __typename?: 'ServiceMessage';
  channel: Enum_Servicemessage_Channel;
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<ServiceMessage>>>;
  message_type: Enum_Servicemessage_Message_Type;
  published_at?: Maybe<Scalars['DateTime']>;
  short_description: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
  valid_from: Scalars['DateTime'];
  valid_to?: Maybe<Scalars['DateTime']>;
};

export type ServiceMessageLocalizationsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ServiceMessageAggregator = {
  __typename?: 'ServiceMessageAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ServiceMessageConnection = {
  __typename?: 'ServiceMessageConnection';
  aggregate?: Maybe<ServiceMessageAggregator>;
  groupBy?: Maybe<ServiceMessageGroupBy>;
  values?: Maybe<Array<Maybe<ServiceMessage>>>;
};

export type ServiceMessageConnectionChannel = {
  __typename?: 'ServiceMessageConnectionChannel';
  connection?: Maybe<ServiceMessageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ServiceMessageConnectionCreated_At = {
  __typename?: 'ServiceMessageConnectionCreated_at';
  connection?: Maybe<ServiceMessageConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ServiceMessageConnectionDescription = {
  __typename?: 'ServiceMessageConnectionDescription';
  connection?: Maybe<ServiceMessageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ServiceMessageConnectionId = {
  __typename?: 'ServiceMessageConnectionId';
  connection?: Maybe<ServiceMessageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ServiceMessageConnectionLocale = {
  __typename?: 'ServiceMessageConnectionLocale';
  connection?: Maybe<ServiceMessageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ServiceMessageConnectionMessage_Type = {
  __typename?: 'ServiceMessageConnectionMessage_type';
  connection?: Maybe<ServiceMessageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ServiceMessageConnectionPublished_At = {
  __typename?: 'ServiceMessageConnectionPublished_at';
  connection?: Maybe<ServiceMessageConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ServiceMessageConnectionShort_Description = {
  __typename?: 'ServiceMessageConnectionShort_description';
  connection?: Maybe<ServiceMessageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ServiceMessageConnectionTitle = {
  __typename?: 'ServiceMessageConnectionTitle';
  connection?: Maybe<ServiceMessageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ServiceMessageConnectionUpdated_At = {
  __typename?: 'ServiceMessageConnectionUpdated_at';
  connection?: Maybe<ServiceMessageConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ServiceMessageConnectionValid_From = {
  __typename?: 'ServiceMessageConnectionValid_from';
  connection?: Maybe<ServiceMessageConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ServiceMessageConnectionValid_To = {
  __typename?: 'ServiceMessageConnectionValid_to';
  connection?: Maybe<ServiceMessageConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ServiceMessageGroupBy = {
  __typename?: 'ServiceMessageGroupBy';
  channel?: Maybe<Array<Maybe<ServiceMessageConnectionChannel>>>;
  created_at?: Maybe<Array<Maybe<ServiceMessageConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<ServiceMessageConnectionDescription>>>;
  id?: Maybe<Array<Maybe<ServiceMessageConnectionId>>>;
  locale?: Maybe<Array<Maybe<ServiceMessageConnectionLocale>>>;
  message_type?: Maybe<Array<Maybe<ServiceMessageConnectionMessage_Type>>>;
  published_at?: Maybe<Array<Maybe<ServiceMessageConnectionPublished_At>>>;
  short_description?: Maybe<
    Array<Maybe<ServiceMessageConnectionShort_Description>>
  >;
  title?: Maybe<Array<Maybe<ServiceMessageConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<ServiceMessageConnectionUpdated_At>>>;
  valid_from?: Maybe<Array<Maybe<ServiceMessageConnectionValid_From>>>;
  valid_to?: Maybe<Array<Maybe<ServiceMessageConnectionValid_To>>>;
};

export type ServiceMessageInput = {
  channel: Enum_Servicemessage_Channel;
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  message_type: Enum_Servicemessage_Message_Type;
  published_at?: Maybe<Scalars['DateTime']>;
  short_description: Scalars['String'];
  title: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
  valid_from: Scalars['DateTime'];
  valid_to?: Maybe<Scalars['DateTime']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileRelatedArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<
    Array<Maybe<UploadFileConnectionProvider_Metadata>>
  >;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked?: Maybe<Scalars['Boolean']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
  username: Scalars['String'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsRolePermissionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type CreateArticleInput = {
  data?: Maybe<ArticleInput>;
};

export type CreateArticlePayload = {
  __typename?: 'createArticlePayload';
  article?: Maybe<Article>;
};

export type CreateCourseInput = {
  data?: Maybe<CourseInput>;
};

export type CreateCoursePayload = {
  __typename?: 'createCoursePayload';
  course?: Maybe<Course>;
};

export type CreateFancyArticleInput = {
  data?: Maybe<FancyArticleInput>;
};

export type CreateFancyArticlePayload = {
  __typename?: 'createFancyArticlePayload';
  fancyArticle?: Maybe<FancyArticle>;
};

export type CreateGuideInput = {
  data?: Maybe<GuideInput>;
};

export type CreateGuidePayload = {
  __typename?: 'createGuidePayload';
  guide?: Maybe<Guide>;
};

export type CreateProviderInput = {
  data?: Maybe<ProviderInput>;
};

export type CreateProviderPayload = {
  __typename?: 'createProviderPayload';
  provider?: Maybe<Provider>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateServiceMessageInput = {
  data?: Maybe<ServiceMessageInput>;
};

export type CreateServiceMessagePayload = {
  __typename?: 'createServiceMessagePayload';
  serviceMessage?: Maybe<ServiceMessage>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteArticleInput = {
  where?: Maybe<InputId>;
};

export type DeleteArticlePayload = {
  __typename?: 'deleteArticlePayload';
  article?: Maybe<Article>;
};

export type DeleteCourseInput = {
  where?: Maybe<InputId>;
};

export type DeleteCoursePayload = {
  __typename?: 'deleteCoursePayload';
  course?: Maybe<Course>;
};

export type DeleteFancyArticleInput = {
  where?: Maybe<InputId>;
};

export type DeleteFancyArticlePayload = {
  __typename?: 'deleteFancyArticlePayload';
  fancyArticle?: Maybe<FancyArticle>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteGuideInput = {
  where?: Maybe<InputId>;
};

export type DeleteGuidePayload = {
  __typename?: 'deleteGuidePayload';
  guide?: Maybe<Guide>;
};

export type DeleteProviderInput = {
  where?: Maybe<InputId>;
};

export type DeleteProviderPayload = {
  __typename?: 'deleteProviderPayload';
  provider?: Maybe<Provider>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteServiceMessageInput = {
  where?: Maybe<InputId>;
};

export type DeleteServiceMessagePayload = {
  __typename?: 'deleteServiceMessagePayload';
  serviceMessage?: Maybe<ServiceMessage>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditArticleInput = {
  content?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  excerpt?: Maybe<Scalars['String']>;
  featureImage?: Maybe<Scalars['ID']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentBasicContactInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Array<Maybe<Scalars['ID']>>>;
  jobTitle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type EditComponentBasicImageInput = {
  alternativeText?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  media?: Maybe<Array<Maybe<Scalars['ID']>>>;
  style?: Maybe<Enum_Componentbasicimage_Style>;
};

export type EditComponentBasicInfoboxInput = {
  content?: Maybe<Scalars['String']>;
  hoverIllustration?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  illustration?: Maybe<Scalars['ID']>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type EditComponentBasicParagraphInput = {
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type EditComponentBasicQuoteInput = {
  author?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type EditComponentBasicSectionInput = {
  id?: Maybe<Scalars['ID']>;
};

export type EditCourseInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  durationInMinutes?: Maybe<Scalars['Int']>;
  featureImage?: Maybe<Scalars['ID']>;
  free?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  numberOfModules?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  primaryTargetGroup?: Maybe<Enum_Course_Primarytargetgroup>;
  providerId?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Course_Type>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFancyArticleInput = {
  content?: Maybe<Array<Scalars['FancyArticleContentDynamicZoneInput']>>;
  created_by?: Maybe<Scalars['ID']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  size?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type EditGuideInput = {
  contentType?: Maybe<Enum_Guide_Contenttype>;
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  durationInMinutes?: Maybe<Scalars['Int']>;
  featureImage?: Maybe<Scalars['ID']>;
  language?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  position?: Maybe<Scalars['Int']>;
  primaryTargetGroup?: Maybe<Enum_Guide_Primarytargetgroup>;
  providerId?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditProviderInput = {
  created_by?: Maybe<Scalars['ID']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  logo?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditServiceMessageInput = {
  channel?: Maybe<Enum_Servicemessage_Channel>;
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  message_type?: Maybe<Enum_Servicemessage_Message_Type>;
  published_at?: Maybe<Scalars['DateTime']>;
  short_description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  valid_from?: Maybe<Scalars['DateTime']>;
  valid_to?: Maybe<Scalars['DateTime']>;
};

export type EditUserInput = {
  blocked?: Maybe<Scalars['Boolean']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
};

export type UpdateArticleInput = {
  data?: Maybe<EditArticleInput>;
  where?: Maybe<InputId>;
};

export type UpdateArticlePayload = {
  __typename?: 'updateArticlePayload';
  article?: Maybe<Article>;
};

export type UpdateCourseInput = {
  data?: Maybe<EditCourseInput>;
  where?: Maybe<InputId>;
};

export type UpdateCoursePayload = {
  __typename?: 'updateCoursePayload';
  course?: Maybe<Course>;
};

export type UpdateFancyArticleInput = {
  data?: Maybe<EditFancyArticleInput>;
  where?: Maybe<InputId>;
};

export type UpdateFancyArticlePayload = {
  __typename?: 'updateFancyArticlePayload';
  fancyArticle?: Maybe<FancyArticle>;
};

export type UpdateGuideInput = {
  data?: Maybe<EditGuideInput>;
  where?: Maybe<InputId>;
};

export type UpdateGuidePayload = {
  __typename?: 'updateGuidePayload';
  guide?: Maybe<Guide>;
};

export type UpdateProviderInput = {
  data?: Maybe<EditProviderInput>;
  where?: Maybe<InputId>;
};

export type UpdateProviderPayload = {
  __typename?: 'updateProviderPayload';
  provider?: Maybe<Provider>;
};

export type UpdateRoleInput = {
  data?: Maybe<EditRoleInput>;
  where?: Maybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateServiceMessageInput = {
  data?: Maybe<EditServiceMessageInput>;
  where?: Maybe<InputId>;
};

export type UpdateServiceMessagePayload = {
  __typename?: 'updateServiceMessagePayload';
  serviceMessage?: Maybe<ServiceMessage>;
};

export type UpdateUserInput = {
  data?: Maybe<EditUserInput>;
  where?: Maybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type GetContactsQueryVariables = Exact<{ [key: string]: never }>;

export type GetContactsQuery = { __typename?: 'Query' } & {
  contactPage?: Maybe<
    { __typename?: 'FancyArticle' } & Pick<FancyArticle, 'title'> & {
        content?: Maybe<
          Array<
            Maybe<
              | ({ __typename: 'ComponentBasicContact' } & Pick<
                  ComponentBasicContact,
                  'name' | 'email' | 'jobTitle' | 'phoneNumber'
                > & {
                    image?: Maybe<
                      Array<
                        Maybe<
                          { __typename?: 'UploadFile' } & Pick<
                            UploadFile,
                            'url'
                          >
                        >
                      >
                    >;
                  })
              | { __typename?: 'ComponentBasicImage' }
              | { __typename?: 'ComponentBasicInfobox' }
              | ({ __typename: 'ComponentBasicParagraph' } & Pick<
                  ComponentBasicParagraph,
                  'content'
                >)
              | { __typename?: 'ComponentBasicQuote' }
              | { __typename?: 'ComponentBasicSection' }
            >
          >
        >;
      }
  >;
};

export type GetCoursesQueryVariables = Exact<{ [key: string]: never }>;

export type GetCoursesQuery = { __typename?: 'Query' } & {
  topArticle?: Maybe<
    { __typename?: 'FancyArticle' } & Pick<FancyArticle, 'title'> & {
        content?: Maybe<
          Array<
            Maybe<
              | { __typename?: 'ComponentBasicContact' }
              | { __typename?: 'ComponentBasicImage' }
              | { __typename?: 'ComponentBasicInfobox' }
              | ({ __typename: 'ComponentBasicParagraph' } & Pick<
                  ComponentBasicParagraph,
                  'content'
                >)
              | { __typename?: 'ComponentBasicQuote' }
              | { __typename?: 'ComponentBasicSection' }
            >
          >
        >;
      }
  >;
  courses?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Course' } & Pick<
          Course,
          | 'title'
          | 'description'
          | 'type'
          | 'link'
          | 'primaryTargetGroup'
          | 'durationInMinutes'
          | 'numberOfModules'
          | 'free'
          | 'locale'
          | 'published_at'
          | 'updated_at'
          | 'language'
          | 'providerId'
        > & {
            featureImage?: Maybe<
              { __typename?: 'UploadFile' } & Pick<UploadFile, 'url'>
            >;
          }
      >
    >
  >;
  providers?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Provider' } & Pick<Provider, 'id' | 'title'> & {
            logo?: Maybe<
              { __typename?: 'UploadFile' } & Pick<
                UploadFile,
                'url' | 'alternativeText'
              >
            >;
          }
      >
    >
  >;
};

export type GetFancyArticleQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetFancyArticleQuery = { __typename?: 'Query' } & {
  fancyArticle?: Maybe<
    { __typename?: 'FancyArticle' } & Pick<
      FancyArticle,
      'title' | 'subtitle'
    > & {
        content?: Maybe<
          Array<
            Maybe<
              | { __typename?: 'ComponentBasicContact' }
              | { __typename?: 'ComponentBasicImage' }
              | { __typename?: 'ComponentBasicInfobox' }
              | ({ __typename: 'ComponentBasicParagraph' } & Pick<
                  ComponentBasicParagraph,
                  'content'
                >)
              | { __typename?: 'ComponentBasicQuote' }
              | { __typename?: 'ComponentBasicSection' }
            >
          >
        >;
      }
  >;
};

export type GetGuidanceQueryVariables = Exact<{ [key: string]: never }>;

export type GetGuidanceQuery = { __typename?: 'Query' } & {
  topArticle?: Maybe<
    { __typename?: 'FancyArticle' } & Pick<FancyArticle, 'title'> & {
        content?: Maybe<
          Array<
            Maybe<
              | { __typename?: 'ComponentBasicContact' }
              | { __typename?: 'ComponentBasicImage' }
              | ({ __typename: 'ComponentBasicInfobox' } & Pick<
                  ComponentBasicInfobox,
                  'title' | 'content' | 'link'
                > & {
                    illustration?: Maybe<
                      { __typename?: 'UploadFile' } & Pick<
                        UploadFile,
                        'url' | 'alternativeText'
                      >
                    >;
                    hoverIllustration?: Maybe<
                      { __typename?: 'UploadFile' } & Pick<
                        UploadFile,
                        'url' | 'alternativeText'
                      >
                    >;
                  })
              | ({ __typename: 'ComponentBasicParagraph' } & Pick<
                  ComponentBasicParagraph,
                  'content'
                >)
              | { __typename?: 'ComponentBasicQuote' }
              | { __typename?: 'ComponentBasicSection' }
            >
          >
        >;
      }
  >;
  guides?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Guide' } & Pick<
          Guide,
          | 'title'
          | 'description'
          | 'link'
          | 'primaryTargetGroup'
          | 'durationInMinutes'
          | 'locale'
          | 'published_at'
          | 'updated_at'
          | 'language'
          | 'contentType'
          | 'providerId'
        > & {
            featureImage?: Maybe<
              { __typename?: 'UploadFile' } & Pick<UploadFile, 'url'>
            >;
          }
      >
    >
  >;
  providers?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Provider' } & Pick<Provider, 'id' | 'title'> & {
            logo?: Maybe<
              { __typename?: 'UploadFile' } & Pick<
                UploadFile,
                'url' | 'alternativeText'
              >
            >;
          }
      >
    >
  >;
};

export const GetContactsDocument = gql`
  query GetContacts {
    contactPage: fancyArticle(id: 6) {
      title
      content {
        ... on ComponentBasicParagraph {
          __typename
          content
        }
        ... on ComponentBasicContact {
          __typename
          image {
            url
          }
          name
          email
          jobTitle
          phoneNumber
        }
      }
    }
  }
`;

/**
 * __useGetContactsQuery__
 *
 * To run a query within a React component, call `useGetContactsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContactsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContactsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContactsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetContactsQuery,
    GetContactsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetContactsQuery, GetContactsQueryVariables>(
    GetContactsDocument,
    options
  );
}
export function useGetContactsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetContactsQuery,
    GetContactsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetContactsQuery, GetContactsQueryVariables>(
    GetContactsDocument,
    options
  );
}
export type GetContactsQueryHookResult = ReturnType<typeof useGetContactsQuery>;
export type GetContactsLazyQueryHookResult = ReturnType<
  typeof useGetContactsLazyQuery
>;
export type GetContactsQueryResult = Apollo.QueryResult<
  GetContactsQuery,
  GetContactsQueryVariables
>;
export const GetCoursesDocument = gql`
  query GetCourses {
    topArticle: fancyArticle(id: 5) {
      title
      content {
        ... on ComponentBasicParagraph {
          __typename
          content
        }
      }
    }
    courses(sort: "position:asc") {
      title
      featureImage {
        url
      }
      description
      type
      link
      primaryTargetGroup
      durationInMinutes
      numberOfModules
      free
      locale
      published_at
      updated_at
      language
      providerId
    }
    providers {
      id
      title
      logo {
        url
        alternativeText
      }
    }
  }
`;

/**
 * __useGetCoursesQuery__
 *
 * To run a query within a React component, call `useGetCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCoursesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCoursesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCoursesQuery,
    GetCoursesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCoursesQuery, GetCoursesQueryVariables>(
    GetCoursesDocument,
    options
  );
}
export function useGetCoursesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCoursesQuery,
    GetCoursesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCoursesQuery, GetCoursesQueryVariables>(
    GetCoursesDocument,
    options
  );
}
export type GetCoursesQueryHookResult = ReturnType<typeof useGetCoursesQuery>;
export type GetCoursesLazyQueryHookResult = ReturnType<
  typeof useGetCoursesLazyQuery
>;
export type GetCoursesQueryResult = Apollo.QueryResult<
  GetCoursesQuery,
  GetCoursesQueryVariables
>;
export const GetFancyArticleDocument = gql`
  query GetFancyArticle($id: ID!) {
    fancyArticle(id: $id) {
      title
      subtitle
      content {
        ... on ComponentBasicParagraph {
          __typename
          content
        }
      }
    }
  }
`;

/**
 * __useGetFancyArticleQuery__
 *
 * To run a query within a React component, call `useGetFancyArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFancyArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFancyArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFancyArticleQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetFancyArticleQuery,
    GetFancyArticleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFancyArticleQuery, GetFancyArticleQueryVariables>(
    GetFancyArticleDocument,
    options
  );
}
export function useGetFancyArticleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFancyArticleQuery,
    GetFancyArticleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetFancyArticleQuery,
    GetFancyArticleQueryVariables
  >(GetFancyArticleDocument, options);
}
export type GetFancyArticleQueryHookResult = ReturnType<
  typeof useGetFancyArticleQuery
>;
export type GetFancyArticleLazyQueryHookResult = ReturnType<
  typeof useGetFancyArticleLazyQuery
>;
export type GetFancyArticleQueryResult = Apollo.QueryResult<
  GetFancyArticleQuery,
  GetFancyArticleQueryVariables
>;
export const GetGuidanceDocument = gql`
  query GetGuidance {
    topArticle: fancyArticle(id: 8) {
      title
      content {
        ... on ComponentBasicParagraph {
          __typename
          content
        }
        ... on ComponentBasicInfobox {
          __typename
          title
          content
          illustration {
            url
            alternativeText
          }
          hoverIllustration {
            url
            alternativeText
          }
          link
        }
      }
    }
    guides(sort: "position:asc") {
      title
      featureImage {
        url
      }
      description
      link
      primaryTargetGroup
      durationInMinutes
      locale
      published_at
      updated_at
      language
      contentType
      providerId
    }
    providers {
      id
      title
      logo {
        url
        alternativeText
      }
    }
  }
`;

/**
 * __useGetGuidanceQuery__
 *
 * To run a query within a React component, call `useGetGuidanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGuidanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGuidanceQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGuidanceQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetGuidanceQuery,
    GetGuidanceQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetGuidanceQuery, GetGuidanceQueryVariables>(
    GetGuidanceDocument,
    options
  );
}
export function useGetGuidanceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGuidanceQuery,
    GetGuidanceQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetGuidanceQuery, GetGuidanceQueryVariables>(
    GetGuidanceDocument,
    options
  );
}
export type GetGuidanceQueryHookResult = ReturnType<typeof useGetGuidanceQuery>;
export type GetGuidanceLazyQueryHookResult = ReturnType<
  typeof useGetGuidanceLazyQuery
>;
export type GetGuidanceQueryResult = Apollo.QueryResult<
  GetGuidanceQuery,
  GetGuidanceQueryVariables
>;
