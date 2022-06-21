import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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
  /** Input type for dynamic zone content of NewsArticle */
  NewsArticleContentDynamicZoneInput: any;
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
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ComponentBasicContactInput = {
  email: Scalars['String'];
  image?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  jobTitle?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type ComponentBasicFactbox = {
  __typename?: 'ComponentBasicFactbox';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
  variant: Enum_Componentbasicfactbox_Variant;
};

export type ComponentBasicFactboxInput = {
  content?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  variant: Enum_Componentbasicfactbox_Variant;
};

export type ComponentBasicImage = {
  __typename?: 'ComponentBasicImage';
  alternativeBackgroundColor?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  media?: Maybe<Array<Maybe<UploadFile>>>;
  style?: Maybe<Enum_Componentbasicimage_Style>;
};

export type ComponentBasicImageMediaArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ComponentBasicImageInput = {
  alternativeBackgroundColor?: InputMaybe<Scalars['Boolean']>;
  media?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  style?: InputMaybe<Enum_Componentbasicimage_Style>;
};

export type ComponentBasicInfobox = {
  __typename?: 'ComponentBasicInfobox';
  alternativeBackgroundColor?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
  hoverIllustration?: Maybe<UploadFile>;
  id: Scalars['ID'];
  illustration?: Maybe<UploadFile>;
  link?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ComponentBasicInfoboxInput = {
  alternativeBackgroundColor?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['String']>;
  hoverIllustration?: InputMaybe<Scalars['ID']>;
  illustration?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ComponentBasicParagraph = {
  __typename?: 'ComponentBasicParagraph';
  alternativeBackgroundColor?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentBasicParagraphInput = {
  alternativeBackgroundColor?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['String']>;
};

export type ComponentBasicQuote = {
  __typename?: 'ComponentBasicQuote';
  alternativeBackgroundColor?: Maybe<Scalars['Boolean']>;
  author?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentBasicQuoteInput = {
  alternativeBackgroundColor?: InputMaybe<Scalars['Boolean']>;
  author?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
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
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
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
  created_by?: InputMaybe<Scalars['ID']>;
  description: Scalars['String'];
  durationInMinutes?: InputMaybe<Scalars['Int']>;
  featureImage?: InputMaybe<Scalars['ID']>;
  free: Scalars['Boolean'];
  language?: InputMaybe<Scalars['String']>;
  link: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  numberOfModules?: InputMaybe<Scalars['Int']>;
  position: Scalars['Int'];
  primaryTargetGroup?: InputMaybe<Enum_Course_Primarytargetgroup>;
  providerId?: InputMaybe<Scalars['Int']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  type?: InputMaybe<Enum_Course_Type>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export enum Enum_Componentbasicfactbox_Variant {
  Liten = 'Liten',
  Normal = 'Normal'
}

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

export type FancyArticle = {
  __typename?: 'FancyArticle';
  content?: Maybe<Array<Maybe<FancyArticleContentDynamicZone>>>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<FancyArticle>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type FancyArticleLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
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
  | ComponentBasicFactbox
  | ComponentBasicImage
  | ComponentBasicInfobox
  | ComponentBasicParagraph
  | ComponentBasicQuote;

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
  content?: InputMaybe<Array<Scalars['FancyArticleContentDynamicZoneInput']>>;
  created_by?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: InputMaybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
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
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
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
  contentType?: InputMaybe<Enum_Guide_Contenttype>;
  created_by?: InputMaybe<Scalars['ID']>;
  description: Scalars['String'];
  durationInMinutes?: InputMaybe<Scalars['Int']>;
  featureImage?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
  link: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  position: Scalars['Int'];
  primaryTargetGroup?: InputMaybe<Enum_Guide_Primarytargetgroup>;
  providerId?: InputMaybe<Scalars['Int']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
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
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Morph =
  | ComponentBasicContact
  | ComponentBasicFactbox
  | ComponentBasicImage
  | ComponentBasicInfobox
  | ComponentBasicParagraph
  | ComponentBasicQuote
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
  | NewsArticle
  | NewsArticleAggregator
  | NewsArticleConnection
  | NewsArticleConnectionCreated_At
  | NewsArticleConnectionId
  | NewsArticleConnectionLocale
  | NewsArticleConnectionPublished
  | NewsArticleConnectionPublished_At
  | NewsArticleConnectionSlug
  | NewsArticleConnectionSocialImage
  | NewsArticleConnectionSubtitle
  | NewsArticleConnectionTitle
  | NewsArticleConnectionUpdated_At
  | NewsArticleGroupBy
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
  | CreateCoursePayload
  | CreateFancyArticlePayload
  | CreateGuidePayload
  | CreateNewsArticlePayload
  | CreateProviderPayload
  | CreateRolePayload
  | CreateUserPayload
  | DeleteCoursePayload
  | DeleteFancyArticlePayload
  | DeleteFilePayload
  | DeleteGuidePayload
  | DeleteNewsArticlePayload
  | DeleteProviderPayload
  | DeleteRolePayload
  | DeleteUserPayload
  | UpdateCoursePayload
  | UpdateFancyArticlePayload
  | UpdateGuidePayload
  | UpdateNewsArticlePayload
  | UpdateProviderPayload
  | UpdateRolePayload
  | UpdateUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createCourse?: Maybe<CreateCoursePayload>;
  createCourseLocalization: Course;
  createFancyArticle?: Maybe<CreateFancyArticlePayload>;
  createFancyArticleLocalization: FancyArticle;
  createGuide?: Maybe<CreateGuidePayload>;
  createGuideLocalization: Guide;
  createNewsArticle?: Maybe<CreateNewsArticlePayload>;
  createNewsArticleLocalization: NewsArticle;
  createProvider?: Maybe<CreateProviderPayload>;
  createProviderLocalization: Provider;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  deleteCourse?: Maybe<DeleteCoursePayload>;
  deleteFancyArticle?: Maybe<DeleteFancyArticlePayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteGuide?: Maybe<DeleteGuidePayload>;
  deleteNewsArticle?: Maybe<DeleteNewsArticlePayload>;
  deleteProvider?: Maybe<DeleteProviderPayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateCourse?: Maybe<UpdateCoursePayload>;
  updateFancyArticle?: Maybe<UpdateFancyArticlePayload>;
  updateFileInfo: UploadFile;
  updateGuide?: Maybe<UpdateGuidePayload>;
  updateNewsArticle?: Maybe<UpdateNewsArticlePayload>;
  updateProvider?: Maybe<UpdateProviderPayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  upload: UploadFile;
};

export type MutationCreateCourseArgs = {
  input?: InputMaybe<CreateCourseInput>;
};

export type MutationCreateCourseLocalizationArgs = {
  input: UpdateCourseInput;
};

export type MutationCreateFancyArticleArgs = {
  input?: InputMaybe<CreateFancyArticleInput>;
};

export type MutationCreateFancyArticleLocalizationArgs = {
  input: UpdateFancyArticleInput;
};

export type MutationCreateGuideArgs = {
  input?: InputMaybe<CreateGuideInput>;
};

export type MutationCreateGuideLocalizationArgs = {
  input: UpdateGuideInput;
};

export type MutationCreateNewsArticleArgs = {
  input?: InputMaybe<CreateNewsArticleInput>;
};

export type MutationCreateNewsArticleLocalizationArgs = {
  input: UpdateNewsArticleInput;
};

export type MutationCreateProviderArgs = {
  input?: InputMaybe<CreateProviderInput>;
};

export type MutationCreateProviderLocalizationArgs = {
  input: UpdateProviderInput;
};

export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>;
};

export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};

export type MutationDeleteCourseArgs = {
  input?: InputMaybe<DeleteCourseInput>;
};

export type MutationDeleteFancyArticleArgs = {
  input?: InputMaybe<DeleteFancyArticleInput>;
};

export type MutationDeleteFileArgs = {
  input?: InputMaybe<DeleteFileInput>;
};

export type MutationDeleteGuideArgs = {
  input?: InputMaybe<DeleteGuideInput>;
};

export type MutationDeleteNewsArticleArgs = {
  input?: InputMaybe<DeleteNewsArticleInput>;
};

export type MutationDeleteProviderArgs = {
  input?: InputMaybe<DeleteProviderInput>;
};

export type MutationDeleteRoleArgs = {
  input?: InputMaybe<DeleteRoleInput>;
};

export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>;
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
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type MutationUpdateCourseArgs = {
  input?: InputMaybe<UpdateCourseInput>;
};

export type MutationUpdateFancyArticleArgs = {
  input?: InputMaybe<UpdateFancyArticleInput>;
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};

export type MutationUpdateGuideArgs = {
  input?: InputMaybe<UpdateGuideInput>;
};

export type MutationUpdateNewsArticleArgs = {
  input?: InputMaybe<UpdateNewsArticleInput>;
};

export type MutationUpdateProviderArgs = {
  input?: InputMaybe<UpdateProviderInput>;
};

export type MutationUpdateRoleArgs = {
  input?: InputMaybe<UpdateRoleInput>;
};

export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};

export type NewsArticle = {
  __typename?: 'NewsArticle';
  content?: Maybe<Array<Maybe<NewsArticleContentDynamicZone>>>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<NewsArticle>>>;
  published?: Maybe<Scalars['DateTime']>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  socialImage?: Maybe<UploadFile>;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type NewsArticleLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type NewsArticleAggregator = {
  __typename?: 'NewsArticleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type NewsArticleConnection = {
  __typename?: 'NewsArticleConnection';
  aggregate?: Maybe<NewsArticleAggregator>;
  groupBy?: Maybe<NewsArticleGroupBy>;
  values?: Maybe<Array<Maybe<NewsArticle>>>;
};

export type NewsArticleConnectionCreated_At = {
  __typename?: 'NewsArticleConnectionCreated_at';
  connection?: Maybe<NewsArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type NewsArticleConnectionId = {
  __typename?: 'NewsArticleConnectionId';
  connection?: Maybe<NewsArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type NewsArticleConnectionLocale = {
  __typename?: 'NewsArticleConnectionLocale';
  connection?: Maybe<NewsArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type NewsArticleConnectionPublished = {
  __typename?: 'NewsArticleConnectionPublished';
  connection?: Maybe<NewsArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type NewsArticleConnectionPublished_At = {
  __typename?: 'NewsArticleConnectionPublished_at';
  connection?: Maybe<NewsArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type NewsArticleConnectionSlug = {
  __typename?: 'NewsArticleConnectionSlug';
  connection?: Maybe<NewsArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type NewsArticleConnectionSocialImage = {
  __typename?: 'NewsArticleConnectionSocialImage';
  connection?: Maybe<NewsArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type NewsArticleConnectionSubtitle = {
  __typename?: 'NewsArticleConnectionSubtitle';
  connection?: Maybe<NewsArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type NewsArticleConnectionTitle = {
  __typename?: 'NewsArticleConnectionTitle';
  connection?: Maybe<NewsArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type NewsArticleConnectionUpdated_At = {
  __typename?: 'NewsArticleConnectionUpdated_at';
  connection?: Maybe<NewsArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type NewsArticleContentDynamicZone =
  | ComponentBasicContact
  | ComponentBasicFactbox
  | ComponentBasicImage
  | ComponentBasicInfobox
  | ComponentBasicParagraph
  | ComponentBasicQuote;

export type NewsArticleGroupBy = {
  __typename?: 'NewsArticleGroupBy';
  created_at?: Maybe<Array<Maybe<NewsArticleConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<NewsArticleConnectionId>>>;
  locale?: Maybe<Array<Maybe<NewsArticleConnectionLocale>>>;
  published?: Maybe<Array<Maybe<NewsArticleConnectionPublished>>>;
  published_at?: Maybe<Array<Maybe<NewsArticleConnectionPublished_At>>>;
  slug?: Maybe<Array<Maybe<NewsArticleConnectionSlug>>>;
  socialImage?: Maybe<Array<Maybe<NewsArticleConnectionSocialImage>>>;
  subtitle?: Maybe<Array<Maybe<NewsArticleConnectionSubtitle>>>;
  title?: Maybe<Array<Maybe<NewsArticleConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<NewsArticleConnectionUpdated_At>>>;
};

export type NewsArticleInput = {
  content?: InputMaybe<Array<Scalars['NewsArticleContentDynamicZoneInput']>>;
  created_by?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  published?: InputMaybe<Scalars['DateTime']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  socialImage?: InputMaybe<Scalars['ID']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
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
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
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
  created_by?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  logo?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
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
  newsArticle?: Maybe<NewsArticle>;
  newsArticles?: Maybe<Array<Maybe<NewsArticle>>>;
  newsArticlesConnection?: Maybe<NewsArticleConnection>;
  provider?: Maybe<Provider>;
  providers?: Maybe<Array<Maybe<Provider>>>;
  providersConnection?: Maybe<ProviderConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
};

export type QueryCourseArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryCoursesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type QueryCoursesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type QueryFancyArticleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryFancyArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type QueryFancyArticlesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type QueryFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type QueryFilesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type QueryGuideArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryGuidesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type QueryGuidesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type QueryNewsArticleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryNewsArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type QueryNewsArticlesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type QueryProviderArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryProvidersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type QueryProvidersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type QueryRolesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type QueryUsersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type RoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
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
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
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
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username: Scalars['String'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
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
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
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

export type CreateCourseInput = {
  data?: InputMaybe<CourseInput>;
};

export type CreateCoursePayload = {
  __typename?: 'createCoursePayload';
  course?: Maybe<Course>;
};

export type CreateFancyArticleInput = {
  data?: InputMaybe<FancyArticleInput>;
};

export type CreateFancyArticlePayload = {
  __typename?: 'createFancyArticlePayload';
  fancyArticle?: Maybe<FancyArticle>;
};

export type CreateGuideInput = {
  data?: InputMaybe<GuideInput>;
};

export type CreateGuidePayload = {
  __typename?: 'createGuidePayload';
  guide?: Maybe<Guide>;
};

export type CreateNewsArticleInput = {
  data?: InputMaybe<NewsArticleInput>;
};

export type CreateNewsArticlePayload = {
  __typename?: 'createNewsArticlePayload';
  newsArticle?: Maybe<NewsArticle>;
};

export type CreateProviderInput = {
  data?: InputMaybe<ProviderInput>;
};

export type CreateProviderPayload = {
  __typename?: 'createProviderPayload';
  provider?: Maybe<Provider>;
};

export type CreateRoleInput = {
  data?: InputMaybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateUserInput = {
  data?: InputMaybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteCourseInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteCoursePayload = {
  __typename?: 'deleteCoursePayload';
  course?: Maybe<Course>;
};

export type DeleteFancyArticleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFancyArticlePayload = {
  __typename?: 'deleteFancyArticlePayload';
  fancyArticle?: Maybe<FancyArticle>;
};

export type DeleteFileInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteGuideInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteGuidePayload = {
  __typename?: 'deleteGuidePayload';
  guide?: Maybe<Guide>;
};

export type DeleteNewsArticleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteNewsArticlePayload = {
  __typename?: 'deleteNewsArticlePayload';
  newsArticle?: Maybe<NewsArticle>;
};

export type DeleteProviderInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteProviderPayload = {
  __typename?: 'deleteProviderPayload';
  provider?: Maybe<Provider>;
};

export type DeleteRoleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteUserInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditComponentBasicContactInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  jobTitle?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type EditComponentBasicFactboxInput = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  variant?: InputMaybe<Enum_Componentbasicfactbox_Variant>;
};

export type EditComponentBasicImageInput = {
  alternativeBackgroundColor?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  media?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  style?: InputMaybe<Enum_Componentbasicimage_Style>;
};

export type EditComponentBasicInfoboxInput = {
  alternativeBackgroundColor?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['String']>;
  hoverIllustration?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  illustration?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentBasicParagraphInput = {
  alternativeBackgroundColor?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EditComponentBasicQuoteInput = {
  alternativeBackgroundColor?: InputMaybe<Scalars['Boolean']>;
  author?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EditCourseInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  durationInMinutes?: InputMaybe<Scalars['Int']>;
  featureImage?: InputMaybe<Scalars['ID']>;
  free?: InputMaybe<Scalars['Boolean']>;
  language?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  numberOfModules?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
  primaryTargetGroup?: InputMaybe<Enum_Course_Primarytargetgroup>;
  providerId?: InputMaybe<Scalars['Int']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Course_Type>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditFancyArticleInput = {
  content?: InputMaybe<Array<Scalars['FancyArticleContentDynamicZoneInput']>>;
  created_by?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size?: InputMaybe<Scalars['Float']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type EditGuideInput = {
  contentType?: InputMaybe<Enum_Guide_Contenttype>;
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  durationInMinutes?: InputMaybe<Scalars['Int']>;
  featureImage?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  position?: InputMaybe<Scalars['Int']>;
  primaryTargetGroup?: InputMaybe<Enum_Guide_Primarytargetgroup>;
  providerId?: InputMaybe<Scalars['Int']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditNewsArticleInput = {
  content?: InputMaybe<Array<Scalars['NewsArticleContentDynamicZoneInput']>>;
  created_by?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  published?: InputMaybe<Scalars['DateTime']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  socialImage?: InputMaybe<Scalars['ID']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditProviderInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  logo?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditRoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateCourseInput = {
  data?: InputMaybe<EditCourseInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateCoursePayload = {
  __typename?: 'updateCoursePayload';
  course?: Maybe<Course>;
};

export type UpdateFancyArticleInput = {
  data?: InputMaybe<EditFancyArticleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateFancyArticlePayload = {
  __typename?: 'updateFancyArticlePayload';
  fancyArticle?: Maybe<FancyArticle>;
};

export type UpdateGuideInput = {
  data?: InputMaybe<EditGuideInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateGuidePayload = {
  __typename?: 'updateGuidePayload';
  guide?: Maybe<Guide>;
};

export type UpdateNewsArticleInput = {
  data?: InputMaybe<EditNewsArticleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateNewsArticlePayload = {
  __typename?: 'updateNewsArticlePayload';
  newsArticle?: Maybe<NewsArticle>;
};

export type UpdateProviderInput = {
  data?: InputMaybe<EditProviderInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateProviderPayload = {
  __typename?: 'updateProviderPayload';
  provider?: Maybe<Provider>;
};

export type UpdateRoleInput = {
  data?: InputMaybe<EditRoleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateUserInput = {
  data?: InputMaybe<EditUserInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type GetContactsQueryVariables = Exact<{ [key: string]: never }>;

export type GetContactsQuery = {
  __typename?: 'Query';
  contactPage?: {
    __typename?: 'FancyArticle';
    title: string;
    content?: Array<
      | {
          __typename: 'ComponentBasicContact';
          name: string;
          email: string;
          jobTitle?: string | null;
          phoneNumber?: string | null;
          image?: Array<{
            __typename?: 'UploadFile';
            url: string;
          } | null> | null;
        }
      | { __typename?: 'ComponentBasicFactbox' }
      | { __typename?: 'ComponentBasicImage' }
      | { __typename?: 'ComponentBasicInfobox' }
      | { __typename: 'ComponentBasicParagraph'; content?: string | null }
      | { __typename?: 'ComponentBasicQuote' }
      | null
    > | null;
  } | null;
};

export type GetCoursesQueryVariables = Exact<{ [key: string]: never }>;

export type GetCoursesQuery = {
  __typename?: 'Query';
  topArticle?: {
    __typename?: 'FancyArticle';
    title: string;
    content?: Array<
      | { __typename?: 'ComponentBasicContact' }
      | { __typename?: 'ComponentBasicFactbox' }
      | { __typename?: 'ComponentBasicImage' }
      | { __typename?: 'ComponentBasicInfobox' }
      | { __typename: 'ComponentBasicParagraph'; content?: string | null }
      | { __typename?: 'ComponentBasicQuote' }
      | null
    > | null;
  } | null;
  courses?: Array<{
    __typename?: 'Course';
    title: string;
    description: string;
    type?: Enum_Course_Type | null;
    link: string;
    primaryTargetGroup?: Enum_Course_Primarytargetgroup | null;
    durationInMinutes?: number | null;
    numberOfModules?: number | null;
    free: boolean;
    locale?: string | null;
    published_at?: any | null;
    updated_at: any;
    language?: string | null;
    providerId?: number | null;
    featureImage?: { __typename?: 'UploadFile'; url: string } | null;
  } | null> | null;
  providers?: Array<{
    __typename?: 'Provider';
    id: string;
    title: string;
    logo?: {
      __typename?: 'UploadFile';
      url: string;
      alternativeText?: string | null;
    } | null;
  } | null> | null;
};

export type GetFancyArticleQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetFancyArticleQuery = {
  __typename?: 'Query';
  fancyArticle?: {
    __typename?: 'FancyArticle';
    title: string;
    subtitle?: string | null;
    content?: Array<
      | { __typename?: 'ComponentBasicContact' }
      | { __typename?: 'ComponentBasicFactbox' }
      | { __typename?: 'ComponentBasicImage' }
      | { __typename?: 'ComponentBasicInfobox' }
      | { __typename: 'ComponentBasicParagraph'; content?: string | null }
      | { __typename?: 'ComponentBasicQuote' }
      | null
    > | null;
  } | null;
};

export type GetGuidanceQueryVariables = Exact<{ [key: string]: never }>;

export type GetGuidanceQuery = {
  __typename?: 'Query';
  topArticle?: {
    __typename?: 'FancyArticle';
    title: string;
    content?: Array<
      | { __typename?: 'ComponentBasicContact' }
      | { __typename?: 'ComponentBasicFactbox' }
      | { __typename?: 'ComponentBasicImage' }
      | {
          __typename: 'ComponentBasicInfobox';
          title: string;
          content?: string | null;
          link?: string | null;
          illustration?: {
            __typename?: 'UploadFile';
            url: string;
            alternativeText?: string | null;
          } | null;
          hoverIllustration?: {
            __typename?: 'UploadFile';
            url: string;
            alternativeText?: string | null;
          } | null;
        }
      | { __typename: 'ComponentBasicParagraph'; content?: string | null }
      | { __typename?: 'ComponentBasicQuote' }
      | null
    > | null;
  } | null;
  guides?: Array<{
    __typename?: 'Guide';
    title: string;
    description: string;
    link: string;
    primaryTargetGroup?: Enum_Guide_Primarytargetgroup | null;
    durationInMinutes?: number | null;
    locale?: string | null;
    published_at?: any | null;
    updated_at: any;
    language?: string | null;
    contentType?: Enum_Guide_Contenttype | null;
    providerId?: number | null;
    featureImage?: { __typename?: 'UploadFile'; url: string } | null;
  } | null> | null;
  providers?: Array<{
    __typename?: 'Provider';
    id: string;
    title: string;
    logo?: {
      __typename?: 'UploadFile';
      url: string;
      alternativeText?: string | null;
    } | null;
  } | null> | null;
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
