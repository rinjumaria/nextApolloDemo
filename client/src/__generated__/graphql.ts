/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Address = {
  __typename?: 'Address';
  cardinalDirection: Scalars['String'];
  city: Scalars['String'];
  cityName: Scalars['String'];
  cityPrefix: Scalars['String'];
  citySuffix: Scalars['String'];
  country: Scalars['String'];
  countryCode: Scalars['String'];
  county: Scalars['String'];
  direction: Scalars['String'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  ordinalDirection: Scalars['String'];
  secondaryAddress: Scalars['String'];
  state: Scalars['String'];
  stateAbbr: Scalars['String'];
  streetAddress: Scalars['String'];
  streetName: Scalars['String'];
  streetPrefix: Scalars['String'];
  streetSuffix: Scalars['String'];
  timeZone: Scalars['String'];
  zipCode: Scalars['String'];
};

export type Company = {
  __typename?: 'Company';
  bs: Scalars['String'];
  bsAdjective: Scalars['String'];
  bsBuzz: Scalars['String'];
  bsNoun: Scalars['String'];
  catchPhrase: Scalars['String'];
  catchPhraseAdjective: Scalars['String'];
  catchPhraseDescriptor: Scalars['String'];
  catchPhraseNoun: Scalars['String'];
  companyName: Scalars['String'];
  companySuffix: Scalars['String'];
};

export type Date = {
  __typename?: 'Date';
  future: Scalars['String'];
  month: Scalars['String'];
  past: Scalars['String'];
  recent: Scalars['String'];
  soon: Scalars['String'];
  weekday: Scalars['String'];
};

export type Internet = {
  __typename?: 'Internet';
  avatar: Scalars['String'];
  color: Scalars['String'];
  domainName: Scalars['String'];
  domainSuffix: Scalars['String'];
  domainWord: Scalars['String'];
  email: Scalars['String'];
  exampleEmail: Scalars['String'];
  httpMethod: Scalars['String'];
  ip: Scalars['String'];
  ipv6: Scalars['String'];
  mac: Scalars['String'];
  password: Scalars['String'];
  port: Scalars['String'];
  protocol: Scalars['String'];
  url: Scalars['String'];
  userAgent: Scalars['String'];
  userName: Scalars['String'];
};

export type Lorem = {
  __typename?: 'Lorem';
  lines: Scalars['String'];
  paragraph: Scalars['String'];
  paragraphs: Scalars['String'];
  sentence: Scalars['String'];
  sentences: Scalars['String'];
  slug: Scalars['String'];
  text: Scalars['String'];
  word: Scalars['String'];
  words: Scalars['String'];
};

export type Name = {
  __typename?: 'Name';
  firstName: Scalars['String'];
  gender: Scalars['String'];
  jobArea: Scalars['String'];
  jobDescriptor: Scalars['String'];
  jobTitle: Scalars['String'];
  jobType: Scalars['String'];
  lastName: Scalars['String'];
  middleName: Scalars['String'];
  prefix: Scalars['String'];
  suffix: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  address: Address;
  company: Company;
  date: Date;
  internet: Internet;
  lorem: Lorem;
  name: Name;
};
