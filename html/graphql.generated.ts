import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Ailo reference */
  AiloRN: string;
  /** Base64-encoded binary file */
  Binary: any;
  /** Cursor for paging through collections */
  ConnectionCursor: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
  GeneratedKey: string;
  /** date and time encoded as iso8353 */
  ISODateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: Record<string, any>;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** Date string. (e.g. "2007-12-03") */
  LocalDate: string;
  Long: number;
  /** Markdown syntax string */
  Markdown: any;
  /** IANA Time Zone name. (e.g. "America/Los_Angeles") */
  TimeZone: string;
  URL: any;
  /** Url syntax string */
  Url: any;
  ZoneId: any;
};

export type GraphQLAbrCompanyLookupResult = {
  registeredEntityName: Scalars["String"];
  addressPostcode: Scalars["String"];
  addressState: Scalars["String"];
  abn: Scalars["String"];
  acn?: Maybe<Scalars["String"]>;
};

export type GraphQLAccess = GraphQLOrganisation | GraphQLEmailContact;

export type GraphQLAccessV0 = GraphQLOrganisation | GraphQLEmailContactV0;

export type GraphQLAccount = {
  accountOwner: GraphQLAccountOwner;
  balance: GraphQLMoney;
  bill?: Maybe<GraphQLBill>;
  book: GraphQLBook;
  id: Scalars["ID"];
  reference: Scalars["AiloRN"];
  subtype: GraphQLAccountSubtype;
};

export type GraphQLAccountOwner = {
  availableBalance: GraphQLMoney;
  managingEntity?: Maybe<GraphQLLegalEntityCompanion>;
  reference: Scalars["AiloRN"];
  totalBalance: GraphQLMoney;
};

export type GraphQLAccountOwnerAvailableBalanceArgs = {
  book?: GraphQLBook;
};

export type GraphQLAccountOwnerTotalBalanceArgs = {
  book?: GraphQLBook;
};

export enum GraphQLAccountSortField {
  Book = "BOOK",
  Reference = "REFERENCE",
  Subtype = "SUBTYPE",
  Type = "TYPE",
}

export enum GraphQLAccountSubtype {
  CashCleared = "CASH_CLEARED",
  CashClearing = "CASH_CLEARING",
  Contribution = "CONTRIBUTION",
  Disbursement = "DISBURSEMENT",
  Expense = "EXPENSE",
  Income = "INCOME",
  Payable = "PAYABLE",
  PayableCleared = "PAYABLE_CLEARED",
  PayableClearing = "PAYABLE_CLEARING",
  Receivable = "RECEIVABLE",
}

export enum GraphQLAccountType {
  Asset = "ASSET",
  Equity = "EQUITY",
  Liability = "LIABILITY",
}

export type GraphQLAcknowledgeThreadInput = {
  threadAilorn: Scalars["AiloRN"];
  lastAcknowledgedAt: Scalars["ISODateTime"];
  lastAcknowledgedMessageAilorn: Scalars["AiloRN"];
};

export type GraphQLAcknowledgementInput = {
  chatId: Scalars["AiloRN"];
  lastAcknowledgedAt: Scalars["ISODateTime"];
  lastAcknowledgedMessageId: Scalars["AiloRN"];
};

export type GraphQLAcknowledgementInputV0 = {
  chatId: Scalars["AiloRN"];
  lastAcknowledgedAt: Scalars["ISODateTime"];
  lastAcknowledgedMessageId: Scalars["AiloRN"];
};

export type GraphQLAction = {
  id: Scalars["ID"];
  name: Scalars["String"];
  description: Scalars["String"];
  type: GraphQLActionType;
  typeLabel: Scalars["String"];
  dueDate: Scalars["DateTime"];
  project: GraphQLProject;
  assignee?: Maybe<GraphQLPerson>;
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<GraphQLUser>;
  modifiedBy?: Maybe<GraphQLUser>;
  doneAt?: Maybe<Scalars["DateTime"]>;
  status: GraphQLActionStatus;
  meta?: Maybe<GraphQLActionMeta>;
};

export type GraphQLActionCursor = {
  pageSize?: Scalars["Int"];
  paginateBackward?: Scalars["Boolean"];
  cursor?: Maybe<Scalars["String"]>;
};

export type GraphQLActionInitiator = GraphQLUser | GraphQLSystem;

export type GraphQLActionMeta =
  | GraphQLAssignTenancyAgreementActionMeta
  | GraphQLAssignRentActionMeta
  | GraphQLAssignTenancyActionMeta
  | GraphQLAssignNewManagementActionMeta
  | GraphQLAssignFormActionMeta
  | GraphQLRequestSignatureActionMeta
  | GraphQLManageDepositActionMeta
  | GraphQLTrackDocusignActionMeta
  | GraphQLTrackInspectionCompletedActionMeta
  | GraphQLGenerateInspectionReportActionMeta;

export enum GraphQLActionStatus {
  Active = "Active",
  Done = "Done",
}

export enum GraphQLActionType {
  Reminder = "Reminder",
  AssignTenancyAgreement = "AssignTenancyAgreement",
  AssignTenancy = "AssignTenancy",
  AssignNewManagement = "AssignNewManagement",
  AssignRent = "AssignRent",
  AssignForm = "AssignForm",
  RequestSignature = "RequestSignature",
  ManageDeposit = "ManageDeposit",
  TrackDocusign = "TrackDocusign",
  TrackInspectionCompleted = "TrackInspectionCompleted",
  GenerateInspectionReport = "GenerateInspectionReport",
}

export type GraphQLAddCentrepayDirectiveInput = {
  legalEntity: Scalars["AiloRN"];
  managingEntity: Scalars["AiloRN"];
  tenancy: Scalars["AiloRN"];
};

export type GraphQLAddCentrepayDirectiveOutput = {
  legalEntity: Scalars["AiloRN"];
  managingEntity: Scalars["AiloRN"];
  tenancy: Scalars["AiloRN"];
};

export type GraphQLAddMemberToLegalEntityInput = {
  memberPersonId: Scalars["String"];
  legalEntityId: Scalars["String"];
  roleId: Scalars["String"];
};

export type GraphQLAddMemberToOrganisationInput = {
  personId: Scalars["String"];
  organisationId: Scalars["String"];
  roleId: Scalars["String"];
};

export type GraphQLAddress = {
  unitStreetNumber: Scalars["String"];
  streetName: Scalars["String"];
  suburb?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  country: Scalars["String"];
  postcode?: Maybe<Scalars["String"]>;
};

export type GraphQLAdjustWalletBalanceInput = {
  amount: GraphQLMoneyInput;
  description: Scalars["String"];
  userFacingDescription?: Maybe<Scalars["String"]>;
  walletId: Scalars["ID"];
};

export type GraphQLAdjustmentLiabilityEntry = GraphQLLiabilityEntry & {
  amount: GraphQLMoney;
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<GraphQLActionInitiator>;
  description?: Maybe<Scalars["String"]>;
  descriptionIsCustom?: Maybe<Scalars["Boolean"]>;
  /** The date of the entry to be shown to consumers. This is the latest of createdAt and effectiveAt. */
  displayDate: Scalars["DateTime"];
  effectiveAt: Scalars["DateTime"];
  entryType: GraphQLSourceType;
  id: Scalars["ID"];
  liability: GraphQLLiability;
  /** @deprecated Use `liability` */
  liabilityId: Scalars["ID"];
  reversedByAdjustment?: Maybe<GraphQLAdjustmentLiabilityEntry>;
  reversesAdjustment?: Maybe<GraphQLAdjustmentLiabilityEntry>;
  sourceId?: Maybe<Scalars["ID"]>;
  sourceType?: Maybe<GraphQLSourceType>;
  /** @deprecated Irrelevant to adjustment liability entry */
  status?: Maybe<GraphQLBusinessTxStatusEnum>;
};

export type GraphQLAgencyPropertiesQueryInput = {
  paginationParams: GraphQLPaginationParams;
};

export type GraphQLAgencyProperty = {
  id: Scalars["ID"];
  ailorn: Scalars["AiloRN"];
  property: GraphQLProperty;
  agencyOrganisation: GraphQLOrganisation;
  /**
   * returns the first to exist of active, next or previous management
   * in that order.
   */
  mostRelevantManagement?: Maybe<GraphQLManagement>;
  address: GraphQLAddress;
};

export type GraphQLAiloForm = GraphQLForm & {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  organisation: GraphQLOrganisation;
  name: Scalars["String"];
  template: GraphQLAiloFormTemplate;
  /** Number of answers associated with this page */
  respondedFields: Scalars["Int"];
  /** Number of fields associated with this page (Excludes the 'EMPTY' field type) */
  totalFields: Scalars["Int"];
  pages: Array<GraphQLAiloFormPage>;
  ailorn: Scalars["AiloRN"];
};

export type GraphQLAiloFormField = {
  id: Scalars["ID"];
  index: Scalars["Int"];
  bullet?: Maybe<Scalars["String"]>;
  description: Scalars["Markdown"];
  aboveInfo?: Maybe<GraphQLAiloFormFieldInfo>;
  belowInfo?: Maybe<GraphQLAiloFormFieldInfo>;
  response?: Maybe<GraphQLAiloFormResponse>;
  children: Array<GraphQLAiloFormField>;
};

export type GraphQLAiloFormFieldDate = GraphQLAiloFormField & {
  id: Scalars["ID"];
  index: Scalars["Int"];
  bullet?: Maybe<Scalars["String"]>;
  description: Scalars["Markdown"];
  aboveInfo?: Maybe<GraphQLAiloFormFieldInfo>;
  belowInfo?: Maybe<GraphQLAiloFormFieldInfo>;
  response?: Maybe<GraphQLAiloFormResponse>;
  children: Array<GraphQLAiloFormField>;
  placeholder?: Maybe<Scalars["String"]>;
  dateResponse?: Maybe<GraphQLAiloFormResponseDate>;
};

export type GraphQLAiloFormFieldEmpty = GraphQLAiloFormField & {
  id: Scalars["ID"];
  index: Scalars["Int"];
  bullet?: Maybe<Scalars["String"]>;
  description: Scalars["Markdown"];
  aboveInfo?: Maybe<GraphQLAiloFormFieldInfo>;
  belowInfo?: Maybe<GraphQLAiloFormFieldInfo>;
  response?: Maybe<GraphQLAiloFormResponse>;
  children: Array<GraphQLAiloFormField>;
};

export type GraphQLAiloFormFieldInfo = {
  description: Scalars["Markdown"];
  icon?: Maybe<Scalars["Url"]>;
};

export type GraphQLAiloFormFieldNumber = GraphQLAiloFormField & {
  id: Scalars["ID"];
  index: Scalars["Int"];
  bullet?: Maybe<Scalars["String"]>;
  description: Scalars["Markdown"];
  aboveInfo?: Maybe<GraphQLAiloFormFieldInfo>;
  belowInfo?: Maybe<GraphQLAiloFormFieldInfo>;
  response?: Maybe<GraphQLAiloFormResponse>;
  children: Array<GraphQLAiloFormField>;
  unit?: Maybe<Scalars["String"]>;
  placeholder?: Maybe<Scalars["String"]>;
  numberResponse?: Maybe<GraphQLAiloFormResponseNumber>;
};

export type GraphQLAiloFormFieldText = GraphQLAiloFormField & {
  id: Scalars["ID"];
  index: Scalars["Int"];
  bullet?: Maybe<Scalars["String"]>;
  description: Scalars["Markdown"];
  aboveInfo?: Maybe<GraphQLAiloFormFieldInfo>;
  belowInfo?: Maybe<GraphQLAiloFormFieldInfo>;
  response?: Maybe<GraphQLAiloFormResponse>;
  children: Array<GraphQLAiloFormField>;
  placeholder?: Maybe<Scalars["String"]>;
  textResponse?: Maybe<GraphQLAiloFormResponseText>;
};

export type GraphQLAiloFormFieldYesNo = GraphQLAiloFormField & {
  id: Scalars["ID"];
  index: Scalars["Int"];
  bullet?: Maybe<Scalars["String"]>;
  description: Scalars["Markdown"];
  aboveInfo?: Maybe<GraphQLAiloFormFieldInfo>;
  belowInfo?: Maybe<GraphQLAiloFormFieldInfo>;
  response?: Maybe<GraphQLAiloFormResponse>;
  children: Array<GraphQLAiloFormField>;
  includeNA: Scalars["Boolean"];
  yesNoResponse?: Maybe<GraphQLAiloFormResponseYesNo>;
};

export type GraphQLAiloFormPage = {
  id: Scalars["ID"];
  index: Scalars["Int"];
  icon?: Maybe<Scalars["Url"]>;
  name: Scalars["String"];
  parentTemplate: GraphQLAiloFormTemplate;
  parentForm: GraphQLAiloForm;
  /** List of all fields flattened including children fields */
  allFields: Array<GraphQLAiloFormField>;
  /** List of all top level fields, query children to get next depth of fields */
  topLevelFields: Array<GraphQLAiloFormField>;
};

export type GraphQLAiloFormResponse = {
  id: Scalars["ID"];
  parentForm: GraphQLAiloForm;
  formattedResponse: Scalars["String"];
  field: GraphQLAiloFormField;
};

export type GraphQLAiloFormResponseDate = GraphQLAiloFormResponse & {
  id: Scalars["ID"];
  parentForm: GraphQLAiloForm;
  formattedResponse: Scalars["String"];
  field: GraphQLAiloFormField;
  date: Scalars["DateTime"];
};

export type GraphQLAiloFormResponseNumber = GraphQLAiloFormResponse & {
  id: Scalars["ID"];
  parentForm: GraphQLAiloForm;
  formattedResponse: Scalars["String"];
  field: GraphQLAiloFormField;
  number: Scalars["Float"];
};

export type GraphQLAiloFormResponsePayloadInput = {
  DATE?: Maybe<Scalars["DateTime"]>;
  NUMBER?: Maybe<Scalars["Float"]>;
  TEXT?: Maybe<Scalars["String"]>;
  YES_NO?: Maybe<Scalars["String"]>;
};

export type GraphQLAiloFormResponseText = GraphQLAiloFormResponse & {
  id: Scalars["ID"];
  parentForm: GraphQLAiloForm;
  formattedResponse: Scalars["String"];
  field: GraphQLAiloFormField;
  text: Scalars["String"];
};

export type GraphQLAiloFormResponseYesNo = GraphQLAiloFormResponse & {
  id: Scalars["ID"];
  parentForm: GraphQLAiloForm;
  formattedResponse: Scalars["String"];
  field: GraphQLAiloFormField;
  yesNoNa: GraphQLAiloFormYesNoResponse;
};

export type GraphQLAiloFormTemplate = {
  id: Scalars["ID"];
  type: GraphQLAiloFormType;
  supportedState: GraphQLAustralianState;
  version: Scalars["Int"];
  name: Scalars["String"];
  pages: Array<GraphQLAiloFormTemplatePage>;
};

export type GraphQLAiloFormTemplateField = {
  id: Scalars["ID"];
  index: Scalars["Int"];
  bullet?: Maybe<Scalars["String"]>;
  children: Array<GraphQLAiloFormTemplateField>;
  description: Scalars["Markdown"];
  aboveInfo?: Maybe<GraphQLAiloFormFieldInfo>;
  belowInfo?: Maybe<GraphQLAiloFormFieldInfo>;
  parentPage: GraphQLAiloFormTemplatePage;
};

export type GraphQLAiloFormTemplateFieldDate = GraphQLAiloFormTemplateField & {
  id: Scalars["ID"];
  index: Scalars["Int"];
  bullet?: Maybe<Scalars["String"]>;
  children: Array<GraphQLAiloFormTemplateField>;
  description: Scalars["Markdown"];
  aboveInfo?: Maybe<GraphQLAiloFormFieldInfo>;
  belowInfo?: Maybe<GraphQLAiloFormFieldInfo>;
  parentPage: GraphQLAiloFormTemplatePage;
  placeholder?: Maybe<Scalars["String"]>;
};

export type GraphQLAiloFormTemplateFieldEmpty = GraphQLAiloFormTemplateField & {
  id: Scalars["ID"];
  index: Scalars["Int"];
  bullet?: Maybe<Scalars["String"]>;
  children: Array<GraphQLAiloFormTemplateField>;
  description: Scalars["Markdown"];
  aboveInfo?: Maybe<GraphQLAiloFormFieldInfo>;
  belowInfo?: Maybe<GraphQLAiloFormFieldInfo>;
  parentPage: GraphQLAiloFormTemplatePage;
};

export type GraphQLAiloFormTemplateFieldNumber =
  GraphQLAiloFormTemplateField & {
    id: Scalars["ID"];
    index: Scalars["Int"];
    bullet?: Maybe<Scalars["String"]>;
    children: Array<GraphQLAiloFormTemplateField>;
    description: Scalars["Markdown"];
    aboveInfo?: Maybe<GraphQLAiloFormFieldInfo>;
    belowInfo?: Maybe<GraphQLAiloFormFieldInfo>;
    parentPage: GraphQLAiloFormTemplatePage;
    unit?: Maybe<Scalars["String"]>;
    placeholder?: Maybe<Scalars["String"]>;
  };

export type GraphQLAiloFormTemplateFieldText = GraphQLAiloFormTemplateField & {
  id: Scalars["ID"];
  index: Scalars["Int"];
  bullet?: Maybe<Scalars["String"]>;
  children: Array<GraphQLAiloFormTemplateField>;
  description: Scalars["Markdown"];
  aboveInfo?: Maybe<GraphQLAiloFormFieldInfo>;
  belowInfo?: Maybe<GraphQLAiloFormFieldInfo>;
  parentPage: GraphQLAiloFormTemplatePage;
  placeholder?: Maybe<Scalars["String"]>;
};

export type GraphQLAiloFormTemplateFieldYesNo = GraphQLAiloFormTemplateField & {
  id: Scalars["ID"];
  index: Scalars["Int"];
  bullet?: Maybe<Scalars["String"]>;
  children: Array<GraphQLAiloFormTemplateField>;
  description: Scalars["Markdown"];
  aboveInfo?: Maybe<GraphQLAiloFormFieldInfo>;
  belowInfo?: Maybe<GraphQLAiloFormFieldInfo>;
  parentPage: GraphQLAiloFormTemplatePage;
  includeNA: Scalars["Boolean"];
};

export type GraphQLAiloFormTemplatePage = {
  id: Scalars["ID"];
  index: Scalars["Int"];
  icon?: Maybe<Scalars["Url"]>;
  name: Scalars["String"];
  parentTemplate: GraphQLAiloFormTemplate;
  /** List of all fields flattened including children fields */
  allFields: Array<GraphQLAiloFormTemplateField>;
  /** List of all top level fields, query children to get next depth of fields */
  topLevelFields: Array<GraphQLAiloFormTemplateField>;
};

export enum GraphQLAiloFormType {
  IngoingInspection = "INGOING_INSPECTION",
}

export enum GraphQLAiloFormYesNoResponse {
  Yes = "YES",
  No = "NO",
  Na = "NA",
}

export type GraphQLAiloRnFilterComparison = {
  is?: Maybe<Scalars["Boolean"]>;
  isNot?: Maybe<Scalars["Boolean"]>;
  eq?: Maybe<Scalars["AiloRN"]>;
  neq?: Maybe<Scalars["AiloRN"]>;
  gt?: Maybe<Scalars["AiloRN"]>;
  gte?: Maybe<Scalars["AiloRN"]>;
  lt?: Maybe<Scalars["AiloRN"]>;
  lte?: Maybe<Scalars["AiloRN"]>;
  like?: Maybe<Scalars["AiloRN"]>;
  notLike?: Maybe<Scalars["AiloRN"]>;
  iLike?: Maybe<Scalars["AiloRN"]>;
  notILike?: Maybe<Scalars["AiloRN"]>;
  in?: Maybe<Array<Scalars["AiloRN"]>>;
  notIn?: Maybe<Array<Scalars["AiloRN"]>>;
};

export enum GraphQLAllowedOperations {
  None = "None",
  Create = "Create",
  Edit = "Edit",
}

export type GraphQLAmountDueToDateInput = {
  dateTime?: Maybe<Scalars["DateTime"]>;
  liabilityId: Scalars["ID"];
};

export type GraphQLArchiveLiabilityInput = {
  archivedAt?: Maybe<Scalars["DateTime"]>;
  liabilityId: Scalars["ID"];
};

export type GraphQLAssignFormActionMeta = {
  form?: Maybe<GraphQLForm>;
};

export type GraphQLAssignNewManagementActionMeta = {
  management?: Maybe<GraphQLManagement>;
};

export type GraphQLAssignRentActionMeta = {
  rent?: Maybe<GraphQLRent>;
};

export type GraphQLAssignTenancyActionMeta = {
  tenancy?: Maybe<GraphQLTenancy>;
};

export type GraphQLAssignTenancyAgreementActionMeta = {
  tenancyAgreement?: Maybe<GraphQLTenancyAgreement>;
};

export type GraphQLAssigneeAilornsComparison = {
  in?: Maybe<Array<Scalars["AiloRN"]>>;
};

export enum GraphQLAustralianState {
  Nsw = "NSW",
  Wa = "WA",
  Sa = "SA",
  Nt = "NT",
  Tas = "TAS",
  Act = "ACT",
  Qld = "QLD",
  Vic = "VIC",
}

export type GraphQLAutoPayLiabilityStatus = {
  enabled: Scalars["Boolean"];
  maximumPaymentAmount?: Maybe<GraphQLMoney>;
  /**
   * If null, it means it'll be paid using Ailo Wallet.
   * TODO: Return `WalletPaymentMethod` instead.
   */
  payerId: Scalars["AiloRN"];
  paymentMethod?: Maybe<GraphQLPaymentMethod>;
  /** @deprecated Use `AutoPayLiabilityStatus.paymentMethod.id` instead */
  paymentMethodId?: Maybe<Scalars["ID"]>;
};

export type GraphQLAutoPaymentDetails = {
  paymentMethod?: Maybe<GraphQLPaymentMethod>;
};

export type GraphQLAutoWithdrawPlan = {
  createdAt: Scalars["DateTime"];
  createdBy: Scalars["AiloRN"];
  details: GraphQLAutoWithdrawPlanDetails;
  enabled: Scalars["Boolean"];
  id: Scalars["ID"];
  owner: Scalars["AiloRN"];
  wallet: GraphQLWallet;
  walletId: Scalars["ID"];
};

export type GraphQLAutoWithdrawPlanDetails = {
  /** If `frequency` = Monthly, use `anniversaryDaysOfMonth` instead. */
  anniversary?: Maybe<Scalars["Int"]>;
  /**
   * Only used when `frequency` = Monthly. Allowed values: 1-28.
   * e.g. ['1', '15'] means a withdrawal occurs on the 1st and 15th of every month.
   */
  anniversaryDaysOfMonth?: Maybe<Array<Scalars["Int"]>>;
  autoWithdrawPlanId: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  createdBy: Scalars["AiloRN"];
  createdByV2?: Maybe<GraphQLActionInitiator>;
  endDate?: Maybe<Scalars["Date"]>;
  frequency: GraphQLQuartzPlanFrequency;
  id: Scalars["ID"];
  /**
   * Only used when `frequency` = Monthly.
   * If `true`, withdrawal will happen on the last day of the month.
   * e.g. 30th June, 31st July, 28th Feb or 29th Feb depending on leap year.
   */
  isLastDayOfTheMonth?: Maybe<Scalars["Boolean"]>;
  nextFireTime: Scalars["DateTime"];
  /** @deprecated Use `paymentMethodDestinations` instead */
  paymentMethod: GraphQLPaymentMethod;
  paymentMethodDestinations: Array<GraphQLPaymentMethodDestination>;
  /** @deprecated Use `paymentMethodDestinations` instead */
  paymentMethodId: Scalars["ID"];
  setAsideAmount?: Maybe<GraphQLMoney>;
  startDate: Scalars["Date"];
  timezoneId: Scalars["String"];
  userFacingDescription?: Maybe<Scalars["String"]>;
};

export type GraphQLBPay = GraphQLPaymentMethod & {
  ailoRN: Scalars["AiloRN"];
  billerCode: Scalars["String"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  externalId?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isAutoPay: Scalars["Boolean"];
  isAutoWithdraw: Scalars["Boolean"];
  isDefaultIn: Scalars["Boolean"];
  isDefaultOut: Scalars["Boolean"];
  isHidden: Scalars["Boolean"];
  isOnceOff?: Maybe<Scalars["Boolean"]>;
  topUpFee?: Maybe<GraphQLTransactionFee>;
  wallet: GraphQLWallet;
};

export type GraphQLBPayInput = {
  billerCode: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type GraphQLBanana = {
  id: Scalars["ID"];
  weight: GraphQLWeight;
};

export type GraphQLBankAccount = GraphQLPaymentMethod & {
  accountName?: Maybe<Scalars["String"]>;
  accountNumber?: Maybe<Scalars["String"]>;
  ailoRN: Scalars["AiloRN"];
  bsb?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  externalId?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isAutoPay: Scalars["Boolean"];
  isAutoWithdraw: Scalars["Boolean"];
  isDefaultIn: Scalars["Boolean"];
  isDefaultOut: Scalars["Boolean"];
  isHidden: Scalars["Boolean"];
  isOnceOff?: Maybe<Scalars["Boolean"]>;
  topUpFee?: Maybe<GraphQLTransactionFee>;
  wallet: GraphQLWallet;
};

export type GraphQLBankAccountBlacklist = {
  accountNumber: Scalars["String"];
  bsb: Scalars["String"];
  createdAt: Scalars["DateTime"];
  createdBy: Scalars["AiloRN"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  ownerLegalEntity: Scalars["AiloRN"];
};

export type GraphQLBankAccountBlacklistInput = {
  accountNumber: Scalars["String"];
  bsb: Scalars["String"];
  description: Scalars["String"];
  ownerLegalEntity: Scalars["AiloRN"];
};

export type GraphQLBankAccountInput = {
  accountName: Scalars["String"];
  accountNumber: Scalars["String"];
  bsb: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  hidden?: Maybe<Scalars["Boolean"]>;
  onceOff?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLBankReconciliationReport = {
  items?: Maybe<Array<Maybe<GraphQLReconciliationReportItem>>>;
};

export type GraphQLBelongToTeamsArgInput = {
  teamIds?: Array<Scalars["AiloRN"]>;
  includeUnassigned?: Scalars["Boolean"];
};

export type GraphQLBelongToTeamsArgInputV0 = {
  teamIds?: Array<Scalars["AiloRN"]>;
  includeUnassigned?: Scalars["Boolean"];
};

/** @deprecated Use `PaginationParams` instead when possible. */
export type GraphQLBidirectionalPageCursor = {
  /** If true, will return items before the cursor, rather than after it. */
  before?: Maybe<Scalars["Boolean"]>;
  cursor?: Maybe<Scalars["String"]>;
  pageSize?: Maybe<Scalars["Int"]>;
};

export type GraphQLBidirectionalPageInfo = {
  total: Scalars["Int"];
  hasNext: Scalars["Boolean"];
  nextCursor?: Maybe<Scalars["String"]>;
  hasPrevious: Scalars["Boolean"];
  previousCursor?: Maybe<Scalars["String"]>;
};

export type GraphQLBidirectionalPaginatedTenancies = {
  pageInfo: GraphQLBidirectionalPageInfo;
  items: Array<GraphQLTenancy>;
};

export type GraphQLBill = {
  id: Scalars["ID"];
  ailoRN: Scalars["AiloRN"];
  /** Never null (nullable only because of federation reasons). */
  organisation?: Maybe<GraphQLOrganisation>;
  paymentReference?: Maybe<GraphQLPaymentReference>;
  /** @deprecated Use `Bill.payer.ailoRN` instead. */
  toBePaidBy: Scalars["AiloRN"];
  /** Never null (nullable only because of federation reasons). */
  payer?: Maybe<GraphQLBillPayer>;
  /**
   * Never null (nullable only because of federation reasons).
   * @deprecated Use `Bill.payee` instead.
   */
  supplier?: Maybe<GraphQLSupplier>;
  /** Never null (nullable only because of federation reasons). */
  payee?: Maybe<GraphQLBillPayee>;
  description?: Maybe<Scalars["String"]>;
  /** @deprecated Use `Bill.dueDateV2` instead */
  dueDate: Scalars["Date"];
  dueDateV2: Scalars["LocalDate"];
  /** @deprecated Use `Bill.issueDateV2` instead */
  issueDate: Scalars["Date"];
  issueDateV2: Scalars["LocalDate"];
  timeZone: Scalars["TimeZone"];
  liabilityState?: Maybe<GraphQLBillLiabilityState>;
  invoiceNumber?: Maybe<Scalars["String"]>;
  status: GraphQLBillStatus;
  agencyStatus: GraphQLBillAgencyStatus;
  taxCategory: GraphQLTaxCategory;
  /**
   * When bill was created, was the tax automatically calculated by the UI?
   * (If null, it means it was created before the automatic tax calculation was available.)
   */
  taxAutoCalculated?: Maybe<Scalars["Boolean"]>;
  amount: GraphQLMoney;
  lineItems?: Maybe<GraphQLPaginatedLineItems>;
  relatingToManagement: Scalars["AiloRN"];
  relatedToTeam?: Maybe<Scalars["AiloRN"]>;
  createdAt: Scalars["DateTime"];
  /** @deprecated Use `Bill.createdByV2.ailoRN` instead. */
  createdBy: Scalars["AiloRN"];
  /** If null it means the bill has been created by Ailo system. */
  createdByUser?: Maybe<GraphQLUser>;
  modifiedBy: Scalars["AiloRN"];
  liability?: Maybe<GraphQLLiability>;
  organisationArchiveReason?: Maybe<Scalars["String"]>;
  /**
   * It represents the agency legal entity.
   * Never nullable (nullable only because of federation error policy).
   */
  managingEntityAilorn?: Maybe<Scalars["AiloRN"]>;
  /** It is only used to populate bill liability payment decription when debiting investor bank account, not consumer facing */
  propertyAddress?: Maybe<Scalars["String"]>;
  applyManagementFee: Scalars["Boolean"];
  /** If true the funds will not be automatically withdrawn by the supplier */
  internal: Scalars["Boolean"];
  attachments: Array<GraphQLBillAttachment>;
  /** @deprecated use `Bill.organisation.ailoRN` instead. */
  relatingToOrganisation: Scalars["AiloRN"];
  management?: Maybe<GraphQLManagement>;
  archivableByOrganisation: Scalars["Boolean"];
};

export enum GraphQLBillAgencyStatus {
  Cancelled = "Cancelled",
  Refunded = "Refunded",
  RefundFailed = "RefundFailed",
  AwaitingPayment = "AwaitingPayment",
  Overdue = "Overdue",
  Due = "Due",
  PaymentSent = "PaymentSent",
  Paid = "Paid",
}

export type GraphQLBillAttachment = {
  id: Scalars["ID"];
  /**
   * This should never be null, but because it comes from external service,
   * in a case of unexpected server error, it will be returned as null.
   * In such case, client should treat it as internal server error,
   * show an error indicator and report it to Sentry.
   */
  file?: Maybe<GraphQLFile>;
  createdAt: Scalars["DateTime"];
  createdBy: Scalars["AiloRN"];
};

export type GraphQLBillDefaultPageCursor = {
  pageSize?: Scalars["Int"];
  cursor?: Maybe<Scalars["String"]>;
  paginateBackward?: Scalars["Boolean"];
  sort?: Maybe<Scalars["String"]>;
};

export type GraphQLBillInput = {
  paymentReferenceId: Scalars["ID"];
  description?: Maybe<Scalars["String"]>;
  /** Tenancy / Management / Agency Legal Entity ID */
  toBePaidBy: Scalars["AiloRN"];
  /** Tenancy Tenants / Management Owners / Agency Legal Entity IDs */
  toBePaidByLegalEntities?: Maybe<Array<Scalars["AiloRN"]>>;
  /** @deprecated Use `payeeAiloRN` instead. */
  supplierId?: Maybe<Scalars["ID"]>;
  payeeAiloRN?: Maybe<Scalars["AiloRN"]>;
  /** @deprecated Use `dueDateV2` instead. */
  dueDate?: Maybe<Scalars["Date"]>;
  dueDateV2?: Maybe<Scalars["LocalDate"]>;
  invoiceNumber?: Maybe<Scalars["String"]>;
  status: GraphQLBillStatus;
  taxCategoryId: Scalars["String"];
  /** @deprecated Use `issueDateV2` instead. */
  issueDate?: Maybe<Scalars["Date"]>;
  issueDateV2?: Maybe<Scalars["LocalDate"]>;
  timeZone?: Maybe<Scalars["TimeZone"]>;
  taxAutoCalculated?: Maybe<Scalars["Boolean"]>;
  lineItems: Array<GraphQLLineItemInput>;
  attachmentsFileIds?: Maybe<Array<Scalars["AiloRN"]>>;
  relatingToManagement: Scalars["AiloRN"];
  relatingToOrganisation: Scalars["AiloRN"];
  managingEntityAilorn?: Maybe<Scalars["AiloRN"]>;
  propertyAddress?: Maybe<Scalars["String"]>;
  applyManagementFee?: Maybe<Scalars["Boolean"]>;
  internal?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLBillLiabilityState = {
  /** @deprecated Use `BillLiabilityState.payByDateV2` instead */
  payByDate?: Maybe<Scalars["Date"]>;
  payByDateV2?: Maybe<Scalars["LocalDate"]>;
  paymentStatus?: Maybe<Scalars["String"]>;
  /** @deprecated Use `BillLiabilityState.paidAt` instead */
  paymentDate?: Maybe<Scalars["Date"]>;
  paidAt?: Maybe<Scalars["DateTime"]>;
  dueAmount?: Maybe<GraphQLMoney>;
};

export type GraphQLBillPageCursor = {
  pageSize?: Scalars["Int"];
  cursor?: Maybe<Scalars["String"]>;
  paginateBackward?: Scalars["Boolean"];
  sort?: Maybe<GraphQLBillSortParams>;
};

export type GraphQLBillPayee =
  | GraphQLSupplier
  | GraphQLManagement
  | GraphQLLegalEntityCompanion;

export type GraphQLBillPayer =
  | GraphQLTenancy
  | GraphQLManagement
  | GraphQLLegalEntityCompanion;

export enum GraphQLBillPayerType {
  Tenancy = "Tenancy",
  Management = "Management",
  LegalEntity = "LegalEntity",
}

export enum GraphQLBillPaymentStatus {
  Due = "DUE",
  Paid = "PAID",
  Pending = "PENDING",
  Processing = "PROCESSING",
  Failed = "FAILED",
}

export enum GraphQLBillSortField {
  CreatedAt = "CreatedAt",
  DueDate = "DueDate",
  PayByDate = "PayByDate",
  PaymentDate = "PaymentDate",
}

export type GraphQLBillSortParams = {
  field: GraphQLBillSortField;
  direction: GraphQLSortDirection;
};

export enum GraphQLBillStatus {
  Void = "VOID",
  Approved = "APPROVED",
  Refunded = "REFUNDED",
}

export type GraphQLBondAuthority = {
  id: Scalars["ID"];
  ailorn: Scalars["AiloRN"];
  agencyLegalEntityAilorn: Scalars["AiloRN"];
  userFacingName: Scalars["String"];
};

export type GraphQLBondAuthorityAggregateGroupBy = {
  id?: Maybe<Scalars["ID"]>;
};

export type GraphQLBondAuthorityCountAggregate = {
  id?: Maybe<Scalars["Int"]>;
};

export type GraphQLBondAuthorityEdge = {
  /** The node containing the BondAuthority */
  node: GraphQLBondAuthority;
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
};

export type GraphQLBondAuthorityMaxAggregate = {
  id?: Maybe<Scalars["ID"]>;
};

export type GraphQLBondAuthorityMinAggregate = {
  id?: Maybe<Scalars["ID"]>;
};

export enum GraphQLBondDisbursalFailureReason {
  ReceivedLessFundsThanClaimed = "ReceivedLessFundsThanClaimed",
  ReceivedMoreFundsThanClaimed = "ReceivedMoreFundsThanClaimed",
  PaymentError = "PaymentError",
}

export enum GraphQLBook {
  Accrual = "ACCRUAL",
  Cash = "CASH",
}

export type GraphQLBooleanFieldComparison = {
  is?: Maybe<Scalars["Boolean"]>;
  isNot?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLBulkActionMigratingManagementsErrorPayload = {
  id: Scalars["ID"];
  failureReason: Scalars["String"];
};

export type GraphQLBulkActionMigratingManagementsPayload = {
  successes: Array<GraphQLMigratingManagement>;
  errors: Array<GraphQLBulkActionMigratingManagementsErrorPayload>;
};

export type GraphQLBulkActionMigrationTasksErrorPayload = {
  legalEntityId: Scalars["AiloRN"];
  failureReason: Scalars["String"];
};

export type GraphQLBulkActionMigrationTasksPayload = {
  successes: Array<Scalars["AiloRN"]>;
  errors: Array<GraphQLBulkActionMigrationTasksErrorPayload>;
};

export type GraphQLBusinessTransaction = {
  ailoRN: Scalars["AiloRN"];
  amount: GraphQLMoney;
  children?: Maybe<Array<Maybe<GraphQLBusinessTransaction>>>;
  /** Returns date & time of clearedAt or null if it is not cleared yet. */
  clearedAt?: Maybe<Scalars["DateTime"]>;
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<GraphQLUser>;
  description?: Maybe<Scalars["String"]>;
  /**
   * Returns date of clearedAt if the business transaction is cleared, else it returns an estimate based on created date and today's date.
   * If the status of the business transaction is FAIL or CLEANED, null is returned.
   * Currently does not support business transactions without a liability due to lack of Zone data in Business Transaction.
   */
  estimatedClearDate?: Maybe<Scalars["Date"]>;
  /** Returns date & time of clearedAt (Can be before cleared) */
  expectedClearedAt?: Maybe<Scalars["DateTime"]>;
  /** Returns date of when latest business transaction status is created if it's status is FAIL or CLEANED and null otherwise. */
  failedAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  idempotentKey: Scalars["String"];
  isReversal: Scalars["Boolean"];
  parent?: Maybe<GraphQLBusinessTransaction>;
  payer?: Maybe<Scalars["AiloRN"]>;
  payerLegalEntity?: Maybe<GraphQLLegalEntityCompanion>;
  paymentChannel?: Maybe<Scalars["String"]>;
  paymentMethod?: Maybe<GraphQLPaymentMethod>;
  paymentReferenceId?: Maybe<Scalars["String"]>;
  status?: Maybe<GraphQLBusinessTxStatusEnum>;
  type: GraphQLBusinessTxType;
  userFacingDescription?: Maybe<Scalars["String"]>;
};

export type GraphQLBusinessTransactionStatus = {
  status: GraphQLBusinessTxStatusEnum;
};

export enum GraphQLBusinessTxStatusEnum {
  Cleaned = "CLEANED",
  Fail = "FAIL",
  Pending = "PENDING",
  Success = "SUCCESS",
}

export enum GraphQLBusinessTxType {
  PaymentAuto = "PAYMENT_AUTO",
  PaymentManual = "PAYMENT_MANUAL",
  Refund = "REFUND",
  Reverse = "REVERSE",
  TopUpManual = "TOP_UP_MANUAL",
  VirtualAccountDebit = "VIRTUAL_ACCOUNT_DEBIT",
  WithdrawAuto = "WITHDRAW_AUTO",
  WithdrawManual = "WITHDRAW_MANUAL",
}

export type GraphQLCancelAutoPayInput = {
  liabilityId: Scalars["ID"];
};

export type GraphQLCancelAutoPayLiabilityStatusInput = {
  /**
   * Legal Entity ARN (Person/Company) if it is meant to pay liabilities using their "personal" wallet,
   * or Management folio ARN, if it's meant to pay liabilities using management folio wallet.
   */
  payerId?: Maybe<Scalars["AiloRN"]>;
  /** Current user legal entity ID. Will get deprecated soon, once we are able to get user person ARN from new authz token. */
  payerLegalEntity: Scalars["AiloRN"];
};

export type GraphQLCancelAutoWithdrawPlanInput = {
  autoWithdrawPlanId: Scalars["ID"];
};

export type GraphQLCancelInspectionAppointmentResult = {
  inspectionAppointment: GraphQLInspectionAppointment;
};

export type GraphQLCancelLiabilityPaymentPlanInput = {
  liabilityPaymentPlanId: Scalars["ID"];
  payerLegalEntityId: Scalars["AiloRN"];
};

export type GraphQLCancelRecurringFeeInput = {
  id: Scalars["AiloRN"];
  /**
   * If not provided, fee will end with the current cycle. (Future cycles will not happen.)
   * In case the fee hasn't started yet, it'll end immediately. (It's end date will be set to the date before the fee start date.)
   *
   * Optionally, pass in the date on which the fee should end.
   * Such date needs to be an end date of a fee cycle.
   */
  endDate?: Maybe<Scalars["String"]>;
};

export type GraphQLCancelVacateAbility = {
  ableToCancel: Scalars["Boolean"];
  notAbleToCancelReason?: Maybe<GraphQLNotAbleToCancelReason>;
};

export type GraphQLCentrepayAccount = {
  id: Scalars["ID"];
  paymentMethodCompanion?: Maybe<GraphQLPaymentMethodCompanion>;
};

export type GraphQLCentrepayDirective = {
  legalEntity: Scalars["AiloRN"];
  managingEntity: Scalars["AiloRN"];
  tenancy: Scalars["AiloRN"];
};

export type GraphQLCentrepayFeeOverrideInput = {
  escrowAccount: Scalars["AiloRN"];
  enabled: Scalars["Boolean"];
};

export type GraphQLCentrepayFeeSetting = {
  ailoRN: Scalars["AiloRN"];
  enabled: Scalars["Boolean"];
};

export enum GraphQLChannel {
  Email = "Email",
  Push = "Push",
}

export type GraphQLCharge = {
  amount: GraphQLTaxableAmount;
  date: Scalars["Date"];
};

export type GraphQLChargeCycle = {
  amount: GraphQLMoney;
  endDate?: Maybe<Scalars["Date"]>;
  id: Scalars["ID"];
  startDate: Scalars["Date"];
  taxAmount: GraphQLMoney;
};

export type GraphQLChargeSchedule = {
  firstChargeDate: Scalars["Date"];
};

export type GraphQLChargeScheduleInput = {
  firstChargeDate: Scalars["Date"];
};

export type GraphQLChat = {
  id: Scalars["AiloRN"];
  createdAt: Scalars["ISODateTime"];
  closedAt?: Maybe<Scalars["ISODateTime"]>;
  /** @deprecated Prefer otherAccessEntities field */
  otherOrganisations?: Maybe<GraphQLPaginatedOrganisations>;
  otherAccessEntities?: Maybe<GraphQLPaginatedAccess>;
  messages?: Maybe<GraphQLPaginatedMessages>;
  /** @deprecated Prefer participatingEntities field */
  participants?: Maybe<GraphQLPaginatedUsers>;
  participatingEntities?: Maybe<GraphQLPaginatedParticipants>;
  /**
   * Only will give a positive number when the chat is considered unread.
   * Chat may be considered 'not unread' if it is considered 'not relevant' to the user.
   */
  unreadMessagesCount?: Maybe<Scalars["Int"]>;
  /** @deprecated Prefer referencedEntities field */
  referenceIds?: Maybe<Array<Scalars["AiloRN"]>>;
  referencedEntities: Array<Maybe<GraphQLChatReferenceEntity>>;
};

export type GraphQLChatMessagesArgs = {
  pagination?: Maybe<GraphQLPaginationInput>;
};

export type GraphQLChatParticipantsArgs = {
  pagination?: Maybe<GraphQLPaginationInput>;
  excludedUserId?: Maybe<Scalars["Int"]>;
};

export type GraphQLChatParticipatingEntitiesArgs = {
  pagination?: Maybe<GraphQLPaginationInput>;
  excludedEntityId?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLChatEntityInput = {
  ailoRN?: Maybe<Scalars["AiloRN"]>;
  userAiloRN?: Maybe<Scalars["AiloRN"]>;
  emailAddress?: Maybe<Scalars["String"]>;
};

export type GraphQLChatEntityInputV0 = {
  ailoRN?: Maybe<Scalars["AiloRN"]>;
  userAiloRN?: Maybe<Scalars["AiloRN"]>;
  emailAddress?: Maybe<Scalars["String"]>;
};

export type GraphQLChatFilterArgInput = {
  BelongToTeams?: Maybe<GraphQLBelongToTeamsArgInput>;
};

export type GraphQLChatFilterArgInputV0 = {
  BelongToTeams?: Maybe<GraphQLBelongToTeamsArgInputV0>;
};

export type GraphQLChatFilterParams = {
  name: GraphQLChatFilterTypes;
  args?: Maybe<GraphQLChatFilterArgInput>;
};

export type GraphQLChatFilterParamsV0 = {
  name: GraphQLChatFilterTypesV0;
  args?: Maybe<GraphQLChatFilterArgInputV0>;
};

export enum GraphQLChatFilterTypes {
  BelongToTeams = "BelongToTeams",
  HasMessages = "HasMessages",
}

export enum GraphQLChatFilterTypesV0 {
  BelongToTeams = "BelongToTeams",
  HasMessages = "HasMessages",
}

export type GraphQLChatReferenceEntity = GraphQLTenancy | GraphQLManagement;

export type GraphQLChatReferenceEntityV0 = GraphQLTenancy | GraphQLManagement;

export type GraphQLChatV0 = {
  id: Scalars["AiloRN"];
  createdAt: Scalars["ISODateTime"];
  closedAt?: Maybe<Scalars["ISODateTime"]>;
  /** @deprecated Prefer otherAccessEntities field */
  otherOrganisations?: Maybe<GraphQLPaginatedOrganisationsV0>;
  otherAccessEntities?: Maybe<GraphQLPaginatedAccessV0>;
  messages?: Maybe<GraphQLPaginatedMessagesV0>;
  /** @deprecated Prefer participatingEntities field */
  participants?: Maybe<GraphQLPaginatedUsersV0>;
  participatingEntities?: Maybe<GraphQLPaginatedParticipantsV0>;
  /**
   * Only will give a positive number when the chat is considered unread.
   * Chat may be considered 'not unread' if it is considered 'not relevant' to the user.
   */
  unreadMessagesCount?: Maybe<Scalars["Int"]>;
  /** @deprecated Prefer referencedEntities field */
  referenceIds?: Maybe<Array<Scalars["AiloRN"]>>;
  referencedEntities: Array<Maybe<GraphQLChatReferenceEntityV0>>;
};

export type GraphQLChatV0MessagesArgs = {
  pagination?: Maybe<GraphQLPaginationInputV0>;
};

export type GraphQLChatV0ParticipantsArgs = {
  pagination?: Maybe<GraphQLPaginationInputV0>;
  excludedUserId?: Maybe<Scalars["Int"]>;
};

export type GraphQLChatV0ParticipatingEntitiesArgs = {
  pagination?: Maybe<GraphQLPaginationInputV0>;
  excludedEntityId?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLChatV2 = {
  ailorn: Scalars["AiloRN"];
  createdAt: Scalars["ISODateTime"];
  participants: Array<GraphQLContact>;
  threads?: Maybe<GraphQLPaginatedThreadsV2>;
  mostRecentMessage: GraphQLMessageSummaryV2;
  readonly: Scalars["Boolean"];
  unreadMessagesCount: Scalars["Int"];
};

export type GraphQLChatV2ThreadsArgs = {
  pagination?: Maybe<GraphQLPaginationInputV2>;
};

export type GraphQLClaimFilesResponse = {
  ok: Scalars["Boolean"];
  /** Present if `ok === true`. */
  files?: Maybe<Array<GraphQLFile>>;
  /** Present if `ok === false`. */
  errors?: Maybe<Array<GraphQLClaimFilesResponseError>>;
};

export type GraphQLClaimFilesResponseError = {
  fileId: Scalars["AiloRN"];
  code: GraphQLValidateFileErrorCode;
};

export type GraphQLClaimedFilesCount = {
  totalFiles: Scalars["Int"];
  validFiles: Scalars["Int"];
};

export type GraphQLClearManagementEndPayload = {
  management?: Maybe<GraphQLManagement>;
};

export enum GraphQLCommunicationType {
  Default = "DEFAULT",
  InvestorStatement = "INVESTOR_STATEMENT",
  TaxSummary = "TAX_SUMMARY",
  TransferSummary = "TRANSFER_SUMMARY",
  AgencyTransfer = "AGENCY_TRANSFER",
}

export type GraphQLCompany = GraphQLLegalEntity & {
  id: Scalars["ID"];
  ailoRN: Scalars["String"];
  eulaSignedAt?: Maybe<Scalars["DateTime"]>;
  organisationId: Scalars["ID"];
  organisation: GraphQLOrganisation;
  timezone: Scalars["TimeZone"];
  address1?: Maybe<Scalars["String"]>;
  address2?: Maybe<Scalars["String"]>;
  suburb?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  postcode?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  emailAddress?: Maybe<Scalars["String"]>;
  registeredEntityId?: Maybe<Scalars["String"]>;
  registeredEntityName: Scalars["String"];
  eulaSignedBy?: Maybe<GraphQLPerson>;
  currentUserPermissions: Array<Scalars["String"]>;
  owner: GraphQLPerson;
  /** Legal Entity Memberships in which this legal entity is the group of which the other people are members. */
  legalEntityMembershipsAsLegalEntity: Array<GraphQLLegalEntityMembership>;
  trustAccounts: GraphQLCompanyTrustAccountsConnection;
  /** Statements with subject = Legal Entity Ailorn */
  statements?: Maybe<GraphQLPaginatedStatements>;
  tenancies?: Maybe<GraphQLPaginatedTenancies>;
  managements?: Maybe<GraphQLPaginatedManagements>;
  tenancyBondVirtualAccounts: Array<GraphQLTenancyBondAccount>;
  externalTrustAccounts?: Maybe<Array<GraphQLExternalTrustAccount>>;
  migrationTask?: Maybe<GraphQLMigrationTask>;
  /** this can go when payment gateway splits */
  allWalletsAvailableBalance: GraphQLMoney;
  allWalletsTotalBalance: GraphQLMoney;
  kycVerifiedAccordingToLedgerService?: Maybe<Scalars["Boolean"]>;
  paymentMethods?: Maybe<GraphQLPaginatedPaymentMethods>;
  wallets: Array<GraphQLWallet>;
  contact?: Maybe<GraphQLContact>;
};

export type GraphQLCompanyTrustAccountsArgs = {
  paging?: Maybe<GraphQLCursorPaging>;
  filter?: Maybe<GraphQLTrustAccountFilter>;
  sorting?: Maybe<Array<GraphQLTrustAccountSort>>;
};

export type GraphQLCompanyStatementsArgs = {
  filter: GraphQLStatementFilter;
  cursor?: Maybe<GraphQLStatementCursor>;
  sort?: Maybe<Array<GraphQLStatementSort>>;
};

export type GraphQLCompanyTenanciesArgs = {
  managingOrganisationId?: Maybe<Scalars["AiloRN"]>;
  pageCursor: GraphQLPmPageCursor;
};

export type GraphQLCompanyManagementsArgs = {
  managingOrganisationId?: Maybe<Scalars["AiloRN"]>;
  pageCursor: GraphQLPmPageCursor;
};

export type GraphQLCompanyPaymentMethodsArgs = {
  methodType?: Maybe<GraphQLPaymentMethodType>;
};

export type GraphQLCompanyContactArgs = {
  organisationAilorn: Scalars["AiloRN"];
};

export type GraphQLCompanyFilters = {
  ownerId?: Maybe<Scalars["String"]>;
  registeredEntityNames?: Maybe<Array<Scalars["String"]>>;
};

export type GraphQLCompanyServiceInput = {
  address1?: Maybe<Scalars["String"]>;
  address2?: Maybe<Scalars["String"]>;
  suburb?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  postcode?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  organisationId?: Maybe<Scalars["ID"]>;
  registeredEntityName: Scalars["String"];
  registeredEntityId?: Maybe<Scalars["String"]>;
  ownerId: Scalars["String"];
  emailAddress?: Maybe<Scalars["String"]>;
};

export type GraphQLCompanyTrustAccountsConnection = {
  /** Paging information */
  pageInfo: GraphQLRelayPageInfo;
  /** Array of edges. */
  edges: Array<GraphQLTrustAccountEdge>;
};

export type GraphQLCompleteAssignFormActionInput = {
  id: Scalars["ID"];
  formAilorn: Scalars["AiloRN"];
};

export type GraphQLCompleteAssignFormActionPayload = {
  action?: Maybe<GraphQLAction>;
};

export type GraphQLCompleteAssignNewManagementActionInput = {
  id: Scalars["ID"];
  managementAilorn: Scalars["AiloRN"];
};

export type GraphQLCompleteAssignNewManagementActionPayload = {
  action?: Maybe<GraphQLAction>;
};

export type GraphQLCompleteAssignRentActionInput = {
  rentAilorn: Scalars["AiloRN"];
};

export type GraphQLCompleteAssignRentActionPayload = {
  action?: Maybe<GraphQLAction>;
};

export type GraphQLCompleteAssignTenancyActionInput = {
  id: Scalars["ID"];
  tenancyAilorn: Scalars["AiloRN"];
  inspectionAppointmentAilorn?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLCompleteAssignTenancyActionPayload = {
  action?: Maybe<GraphQLAction>;
};

export type GraphQLCompleteAssignTenancyAgreementActionInput = {
  tenancyId: Scalars["ID"];
  agreementDetails: GraphQLTenancyAgreementDetails;
};

export type GraphQLConsumerInvite = {
  id: Scalars["ID"];
  metadata: Scalars["String"];
};

export type GraphQLConsumerSetupInput = {
  email?: Maybe<Scalars["String"]>;
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  phone?: Maybe<Scalars["String"]>;
  migratingCustomer?: Maybe<Scalars["Boolean"]>;
  legalMiddleName?: Maybe<Scalars["String"]>;
  preferredName?: Maybe<Scalars["String"]>;
  birthDate?: Maybe<Scalars["Date"]>;
};

export type GraphQLContact = {
  id: Scalars["ID"];
  ailorn: Scalars["AiloRN"];
  types: Array<GraphQLContactType>;
  /**
   * The contact's preferred name (or first name if they haven't indicated a preferred name), followed by their last name
   * (if any), in a format ready for display. Does not include middle names.
   */
  displayName: Scalars["String"];
  /** The contact's preferred name, or their first name if they haven't indicated a preferred name */
  displayFirstName: Scalars["String"];
  status: GraphQLContactStatus;
  legalEntity?: Maybe<GraphQLLegalEntity>;
  legalEntityType?: Maybe<GraphQLContactLegalEntityType>;
  user?: Maybe<GraphQLUser>;
  primaryEmail?: Maybe<Scalars["String"]>;
  photo?: Maybe<GraphQLFile>;
  /** The owner of this contact, e.g. a Person contact who owns a Company contact */
  owner?: Maybe<GraphQLContact>;
  /** Contacts that are owned by this contact. i.e. Company contacts that are owned by a Person contact */
  contactsOwned: Array<GraphQLContact>;
  /**
   * This is the confidential part of the contact that is accessible only for entities that have a read permission against the
   * requested contact's organisation. Other entities would only be able to see the "non-confidential" fields.
   * Null if a non-authorised user tries to query for this
   */
  confidential?: Maybe<GraphQLContactConfidential>;
  allAddresses: Array<GraphQLContactPropertyAddress>;
  investorAddresses: Array<GraphQLManagementPropertyAddress>;
  tenantAddresses: Array<GraphQLTenancyPropertyAddress>;
  teams: Array<Maybe<GraphQLTeam>>;
};

export type GraphQLContactConfidential = {
  organisation?: Maybe<GraphQLOrganisation>;
  primaryPhone?: Maybe<Scalars["String"]>;
  birthDate?: Maybe<Scalars["Date"]>;
  unitStreetNumber?: Maybe<Scalars["String"]>;
  streetName?: Maybe<Scalars["String"]>;
  suburb?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  postcode?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  onAppAt?: Maybe<Scalars["DateTime"]>;
  archivedAt?: Maybe<Scalars["DateTime"]>;
  contactRole?: Maybe<Scalars["String"]>;
  preferredName?: Maybe<Scalars["String"]>;
  firstName: Scalars["String"];
  middleNames?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  modifiedAt: Scalars["DateTime"];
  modifiedBy: GraphQLActionInitiator;
};

export enum GraphQLContactLegalEntityType {
  Person = "Person",
  Company = "Company",
}

export type GraphQLContactOrEmail = {
  contactAilorn?: Maybe<Scalars["AiloRN"]>;
  email?: Maybe<Scalars["String"]>;
};

export type GraphQLContactPropertyAddress = {
  managementAilorn: Scalars["AiloRN"];
  unitStreetNumber: Scalars["String"];
  streetName: Scalars["String"];
  suburb?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  postcode?: Maybe<Scalars["String"]>;
  country: Scalars["String"];
  /** <unitStreetNumber> <streetName> */
  shortAddress: Scalars["String"];
};

export type GraphQLContactSortParams = {
  field: Scalars["String"];
  direction: GraphQLSortDirection;
};

export enum GraphQLContactStatus {
  NotOnApp = "NotOnApp",
  OnApp = "OnApp",
  Archived = "Archived",
}

export enum GraphQLContactType {
  Investor = "Investor",
  Tenant = "Tenant",
  Supplier = "Supplier",
  Agent = "Agent",
  Other = "Other",
}

export type GraphQLContactsByManagement = {
  agencyContacts: Array<GraphQLContact>;
  investorContacts: Array<GraphQLContact>;
};

export type GraphQLContactsByTenancy = {
  agencyContacts: Array<GraphQLContact>;
  tenantContacts: Array<GraphQLContact>;
};

export type GraphQLContactsFilters = {
  legalEntityTypes?: Maybe<Array<GraphQLContactLegalEntityType>>;
  excludeContactAilorns?: Maybe<Array<Scalars["AiloRN"]>>;
};

export type GraphQLContactsQueryInput = {
  pagination: GraphQLPaginationParams;
};

export type GraphQLCreateActionInput = {
  name: Scalars["String"];
  description: Scalars["String"];
  projectId: Scalars["ID"];
  assigneeAilorn: Scalars["AiloRN"];
  type: GraphQLActionType;
  dueDate: Scalars["DateTime"];
};

export type GraphQLCreateAiloFormCreateAiloFormResponseInput = {
  payload: GraphQLAiloFormResponsePayloadInput;
  fieldId: Scalars["ID"];
};

export type GraphQLCreateAiloFormInput = {
  templateId: Scalars["ID"];
  organisationAilorn: Scalars["AiloRN"];
  name: Scalars["String"];
  responses?: Maybe<Array<GraphQLCreateAiloFormCreateAiloFormResponseInput>>;
};

export type GraphQLCreateAiloFormResult = {
  form: GraphQLAiloForm;
};

export type GraphQLCreateAutoWithdrawPlanInputV2 = {
  anniversary?: Maybe<Scalars["Int"]>;
  /**
   * Only used when `frequency` = Monthly. Allowed values: 1-28.
   * e.g. ['1', '15'] means a withdrawal occurs on the 1st and 15th of every month.
   */
  anniversaryDaysOfMonth?: Maybe<Array<Scalars["Int"]>>;
  endDate?: Maybe<Scalars["Date"]>;
  frequency: GraphQLQuartzPlanFrequency;
  /**
   * Only used when `frequency` = Monthly.
   * If `true`, withdrawal will happen on the last day of the month.
   * e.g. 30th June, 31st July, 28th Feb or 29th Feb depending on leap year.
   */
  lastDayOfTheMonth?: Maybe<Scalars["Boolean"]>;
  payerLegalEntityId: Scalars["AiloRN"];
  paymentMethodDestinations: Array<GraphQLPaymentMethodDestinationInput>;
  setAsideAmount?: Maybe<GraphQLMoneyInput>;
  startDate: Scalars["Date"];
  userFacingDescription?: Maybe<Scalars["String"]>;
  walletId: Scalars["ID"];
};

export type GraphQLCreateBananaInput = {
  bananaId: Scalars["ID"];
};

export type GraphQLCreateBondInput = {
  tenancyAilorn: Scalars["AiloRN"];
  reference?: Maybe<Scalars["String"]>;
  amount: GraphQLMoneyInput;
  bondAccountAilorn?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLCreateChatInputV2 = {
  participants: Array<GraphQLContactOrEmail>;
  initialThread: GraphQLThreadInputV2;
  organisationAilorn: Scalars["AiloRN"];
};

export type GraphQLCreateExternalTrustAccountInput = {
  organisationId: Scalars["AiloRN"];
  legalEntityId: Scalars["AiloRN"];
  secretArn?: Maybe<Scalars["String"]>;
  details?: Maybe<GraphQLExternalTrustAccountDetailsInput>;
  priority?: Maybe<Scalars["Int"]>;
};

export type GraphQLCreateFeeBlueprintInput = {
  name: Scalars["String"];
  type: GraphQLFeeBlueprintType;
  taxCategoryId: Scalars["ID"];
  description?: Maybe<Scalars["String"]>;
  fixedAmount?: Maybe<GraphQLMoneyInput>;
  taxTreatment: GraphQLTaxTreatment;
  oneWeekRentPercentage?: Maybe<Scalars["Float"]>;
  frequency?: Maybe<GraphQLFeeFrequency>;
  event?: Maybe<GraphQLFeeEventType>;
  anniversaryDay?: Maybe<Scalars["Int"]>;
  anniversaryMonth?: Maybe<Scalars["Int"]>;
  organisationId: Scalars["AiloRN"];
};

export type GraphQLCreateFeeInput = {
  type: GraphQLFeeType;
  feeBlueprintId?: Maybe<Scalars["String"]>;
  managementFeeBlueprintId?: Maybe<Scalars["String"]>;
  managementId: Scalars["String"];
  amount: GraphQLMoneyInput;
  taxAmount?: Maybe<GraphQLMoneyInput>;
  percentage?: Maybe<Scalars["Float"]>;
  baseAmount?: Maybe<GraphQLMoneyInput>;
  baseAmountType?: Maybe<GraphQLFeeBaseAmountType>;
  taxCategoryId: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type GraphQLCreateInspectionAppointmentInput = {
  propertyAilorn: Scalars["AiloRN"];
  tenancyAilorn: Scalars["AiloRN"];
  type: GraphQLInspectionType;
  inspectingAgentAilorn: Scalars["AiloRN"];
  startTime?: Maybe<Scalars["DateTime"]>;
};

export type GraphQLCreateInspectionAppointmentsResult = {
  inspectionAppointments: Array<GraphQLInspectionAppointment>;
};

export type GraphQLCreateInspectionAreaFileInput = {
  fileAilorn: Scalars["AiloRN"];
  timestamp: Scalars["DateTime"];
  inspectionAreaId: Scalars["ID"];
};

export type GraphQLCreateInspectionAreaFileResult = {
  inspectionAreaFile: GraphQLInspectionAreaFile;
};

export type GraphQLCreateInspectionAreaInput = {
  index: Scalars["Int"];
  name: Scalars["String"];
  inspected: Scalars["Boolean"];
  notes?: Maybe<Scalars["String"]>;
  condition?: Maybe<GraphQLInspectionAreaCondition>;
  inspectionId: Scalars["ID"];
  files?: Maybe<Array<GraphQLCreateInspectionAreaInputFileInput>>;
  features?: Maybe<Array<GraphQLCreateInspectionAreaInputFeatureInput>>;
};

export type GraphQLCreateInspectionAreaInputFeatureInput = {
  name: Scalars["String"];
  index: Scalars["Int"];
  description?: Maybe<Scalars["String"]>;
  isClean?: Maybe<Scalars["Boolean"]>;
  isUndamaged?: Maybe<Scalars["Boolean"]>;
  isWorking?: Maybe<Scalars["Boolean"]>;
  files?: Maybe<Array<GraphQLCreateInspectionFeatureInputFileInput>>;
};

export type GraphQLCreateInspectionAreaInputFileInput = {
  fileAilorn: Scalars["AiloRN"];
  timestamp: Scalars["DateTime"];
};

export type GraphQLCreateInspectionAreaResult = {
  inspectionArea: GraphQLInspectionArea;
};

export type GraphQLCreateInspectionFeatureFileInput = {
  fileAilorn: Scalars["AiloRN"];
  timestamp: Scalars["DateTime"];
  inspectionFeatureId: Scalars["ID"];
};

export type GraphQLCreateInspectionFeatureFileResult = {
  inspectionFeatureFile: GraphQLInspectionFeatureFile;
};

export type GraphQLCreateInspectionFeatureInput = {
  name: Scalars["String"];
  index: Scalars["Int"];
  description?: Maybe<Scalars["String"]>;
  isClean?: Maybe<Scalars["Boolean"]>;
  isUndamaged?: Maybe<Scalars["Boolean"]>;
  isWorking?: Maybe<Scalars["Boolean"]>;
  inspectionAreaId: Scalars["ID"];
  files?: Maybe<Array<GraphQLCreateInspectionFeatureInputFileInput>>;
};

export type GraphQLCreateInspectionFeatureInputFileInput = {
  fileAilorn: Scalars["AiloRN"];
  timestamp: Scalars["DateTime"];
};

export type GraphQLCreateInspectionFeatureResult = {
  inspectionFeature: GraphQLInspectionFeature;
};

export type GraphQLCreateInspectionInput = {
  inspectionAppointmentId: Scalars["String"];
  agencyAilorn: Scalars["AiloRN"];
  type: GraphQLInspectionType;
  inspectingAgentAilorn: Scalars["AiloRN"];
  startedAt: Scalars["DateTime"];
  completedAt?: Maybe<Scalars["DateTime"]>;
  areas?: Maybe<Array<GraphQLCreateInspectionInputAreaInput>>;
  ailoFormAilorn?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLCreateInspectionInputAreaInput = {
  index: Scalars["Int"];
  name: Scalars["String"];
  inspected: Scalars["Boolean"];
  notes?: Maybe<Scalars["String"]>;
  condition?: Maybe<GraphQLInspectionAreaCondition>;
  files?: Maybe<Array<GraphQLCreateInspectionAreaInputFileInput>>;
  features?: Maybe<Array<GraphQLCreateInspectionAreaInputFeatureInput>>;
};

export type GraphQLCreateInspectionResult = {
  inspection: GraphQLInspection;
};

export type GraphQLCreateLiabilityPaymentPlanInput = {
  amount: GraphQLMoneyInput;
  anniversary: Scalars["Int"];
  endDate?: Maybe<Scalars["Date"]>;
  frequency: GraphQLQuartzPlanFrequency;
  liabilityId: Scalars["ID"];
  payerLegalEntityId: Scalars["AiloRN"];
  paymentMethodId: Scalars["ID"];
  startDate: Scalars["Date"];
};

export type GraphQLCreateManagementFeeBlueprintInput = {
  managementId: Scalars["ID"];
  feeBlueprintId: Scalars["ID"];
  fixedAmount?: Maybe<GraphQLMoneyInput>;
  taxTreatment: GraphQLTaxTreatment;
  oneWeekRentPercentage?: Maybe<Scalars["Float"]>;
};

export type GraphQLCreateOneKeyInput = {
  /** The record to create */
  key: GraphQLKeyInput;
};

export type GraphQLCreateOneTrustAccountInput = {
  /** The record to create */
  trustAccount: GraphQLCreateTrustAccountInput;
};

export type GraphQLCreateOneTrustAccountStatementBalanceInput = {
  /** The record to create */
  trustAccountStatementBalance: GraphQLCreateTrustAccountStatementBalanceInput;
};

export type GraphQLCreateOrUpdateManagementNoteInput = {
  id?: Maybe<Scalars["ID"]>;
  managementId: Scalars["ID"];
  note: Scalars["String"];
};

export type GraphQLCreateOrUpdateManagementNotePayload = {
  managementNote: GraphQLManagementNote;
};

export type GraphQLCreateOtherContactInput = {
  organisationAilorn: Scalars["AiloRN"];
  primaryEmail: Scalars["String"];
  firstName?: Maybe<Scalars["String"]>;
};

export type GraphQLCreatePaymentMethodInput = {
  bankAccountInput?: Maybe<GraphQLBankAccountInput>;
  bpayInput?: Maybe<GraphQLBPayInput>;
  /** If true, create a `walletOwner` if it doesn't already exist before adding the provided payment method to it */
  createWalletOwner?: Maybe<Scalars["Boolean"]>;
  creditCardInput?: Maybe<GraphQLCreditCardInputV2>;
  deleteExistingPaymentMethods?: Maybe<Scalars["Boolean"]>;
  /** ID reference from external system. Not used by ledger. */
  externalId?: Maybe<Scalars["String"]>;
  /** Organisation (e.g. agency) that is allowed to manage the provided wallet owner. Must be provided when the walletOwnerAiloRN is a supplier AiloRN. */
  managingOrganisationAiloRN?: Maybe<Scalars["AiloRN"]>;
  walletOwnerAiloRN: Scalars["AiloRN"];
};

export type GraphQLCreatePersonCompanyInput = {
  address1?: Maybe<Scalars["String"]>;
  address2?: Maybe<Scalars["String"]>;
  suburb?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  postcode?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  organisationId?: Maybe<Scalars["ID"]>;
  registeredEntityName: Scalars["String"];
  registeredEntityId?: Maybe<Scalars["String"]>;
};

export type GraphQLCreateProjectAbility = {
  ableToCreate: Scalars["Boolean"];
  notAbleToCreateReason?: Maybe<Scalars["String"]>;
};

export type GraphQLCreateProjectInput = {
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  organisationAilorn: Scalars["AiloRN"];
  assigneeAilorn: Scalars["AiloRN"];
  type: GraphQLProjectType;
  dueDate: Scalars["Date"];
  fileAilorns?: Maybe<Array<Scalars["AiloRN"]>>;
  meta: Scalars["JSONObject"];
};

export type GraphQLCreateReiFormFromUserTemplateInput = {
  /** template id of form to generate */
  reiUserTemplateId: Scalars["Int"];
  /** Form name for future reference */
  name: Scalars["String"];
  /** AiloRN of agency organisation */
  organisationAilorn: Scalars["AiloRN"];
  /** Tenancy Ailorn of the property */
  tenancyAilorn?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLCreateReiTokenInput = {
  /** REI Token */
  token: Scalars["String"];
  /** State the REI account was linked to */
  supportedAustralianState?: Maybe<GraphQLAustralianState>;
  /** AiloRN of person the token is associated with */
  personAilorn: Scalars["AiloRN"];
  /** AiloRN of agency organisation */
  organisationAilorn: Scalars["AiloRN"];
};

export type GraphQLCreateRentInput = {
  effectiveDate: Scalars["Date"];
  amountInCents: Scalars["String"];
  period: GraphQLRentFrequency;
  category: GraphQLRentCategory;
  setsChargeDate: Scalars["Boolean"];
};

export type GraphQLCreateRentReviewPayload = {
  rent?: Maybe<GraphQLRent>;
  tenancy?: Maybe<GraphQLTenancy>;
  query: GraphQLQuery;
};

export type GraphQLCreateRentsInput = {
  tenancyId: Scalars["ID"];
  rents: Array<GraphQLCreateRentInput>;
};

export type GraphQLCreateRentsPayload = {
  rents: Array<GraphQLRent>;
  query: GraphQLQuery;
};

export type GraphQLCreateStatementInput = {
  statementOwnerAiloRNs: Array<Scalars["AiloRN"]>;
  startDate: Scalars["Date"];
  endDate: Scalars["Date"];
  type: GraphQLStatementType;
  /** Statement created for is default to manual request */
  createdFor?: Maybe<GraphQLStatementCreatedFor>;
  skipValidation?: Maybe<Scalars["Boolean"]>;
  skipManagementHasPaymentsCheck?: Maybe<Scalars["Boolean"]>;
  allowUnrecognisedTransactionLineItems?: Maybe<Scalars["Boolean"]>;
  linkFileToSubject?: Maybe<Scalars["Boolean"]>;
  sendEmail?: Maybe<Scalars["Boolean"]>;
  dryRunEmail?: Maybe<Scalars["String"]>;
  /** overrideStatementValues should be null unless overriding real data. To override the real data, provide a string containing a JSON of the exact statement values wanted for the statement */
  overrideStatementValues?: Maybe<Scalars["String"]>;
};

export type GraphQLCreateStatementWithSubjectInput = {
  statementSubjectAiloRNs: Array<Scalars["AiloRN"]>;
  startDate: Scalars["Date"];
  endDate: Scalars["Date"];
  type: GraphQLStatementType;
  /** Statement created for is default to manual request */
  createdFor?: Maybe<GraphQLStatementCreatedFor>;
  skipValidation?: Maybe<Scalars["Boolean"]>;
  skipManagementHasPaymentsCheck?: Maybe<Scalars["Boolean"]>;
  allowUnrecognisedTransactionLineItems?: Maybe<Scalars["Boolean"]>;
  linkFileToSubject?: Maybe<Scalars["Boolean"]>;
  sendEmail?: Maybe<Scalars["Boolean"]>;
  dryRunEmail?: Maybe<Scalars["String"]>;
  /** overrideStatementValues should be null unless overriding real data. To override the real data, provide a string containing a JSON of the exact statement values wanted for the statement */
  overrideStatementValues?: Maybe<Scalars["String"]>;
};

export type GraphQLCreateStatementsForAllManagementsInput = {
  startDate: Scalars["Date"];
  endDate: Scalars["Date"];
  sendEmail?: Maybe<Scalars["Boolean"]>;
  type: GraphQLStatementType;
  dryRunEmail?: Maybe<Scalars["String"]>;
  skipValidation?: Maybe<Scalars["Boolean"]>;
  skipManagementHasPaymentsCheck?: Maybe<Scalars["Boolean"]>;
  allowUnrecognisedTransactionLineItems?: Maybe<Scalars["Boolean"]>;
  linkFileToSubject?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLCreateStatementsResponse = {
  statementProgresses: Array<GraphQLStatementProgress>;
  numberOfStatements: Scalars["Int"];
};

export type GraphQLCreateSupplierInput = {
  organisationAiloRN: Scalars["AiloRN"];
  abn?: Maybe<Scalars["String"]>;
  registeredEntityName?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  address?: Maybe<GraphQLSupplierAddressInput>;
  emailAddress?: Maybe<Scalars["String"]>;
};

export type GraphQLCreateTenancyAgreementPayload = {
  tenancyAgreement?: Maybe<GraphQLTenancyAgreement>;
};

export type GraphQLCreateTenancyBondClaim = {
  amount: GraphQLMoneyInput;
  bondAiloRN: Scalars["AiloRN"];
  liabilityAiloRN: Scalars["AiloRN"];
  claimOrder: Scalars["Int"];
};

export type GraphQLCreateTenantshipInput = {
  tenancyId: Scalars["ID"];
  tenantId: Scalars["ID"];
  startDate: Scalars["Date"];
  endDate?: Maybe<Scalars["Date"]>;
};

export type GraphQLCreateTenantshipPayload = {
  tenantship: GraphQLTenantship;
};

export type GraphQLCreateThreadInputV2 = {
  thread: GraphQLThreadInputV2;
  chatAilorn: Scalars["AiloRN"];
};

export type GraphQLCreateTrustAccountInput = {
  ownerLegalEntityAilorn: Scalars["AiloRN"];
};

export type GraphQLCreateTrustAccountStatementBalanceInput = {
  amountInCents: Scalars["Long"];
  date: Scalars["LocalDate"];
  reportPeriodId: Scalars["ID"];
};

export type GraphQLCreateUpdateAutoPayInput = {
  liabilityId: Scalars["ID"];
  paymentMethodId: Scalars["ID"];
};

export type GraphQLCreditCard = GraphQLPaymentMethod & {
  ailoRN: Scalars["AiloRN"];
  category?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  expiry?: Maybe<Scalars["Date"]>;
  externalId?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isAutoPay: Scalars["Boolean"];
  isAutoWithdraw: Scalars["Boolean"];
  isDefaultIn: Scalars["Boolean"];
  isDefaultOut: Scalars["Boolean"];
  isHidden: Scalars["Boolean"];
  isOnceOff?: Maybe<Scalars["Boolean"]>;
  /** Masked credit card number, e.g. "512345XXXXXX2346". */
  number?: Maybe<Scalars["String"]>;
  topUpFee?: Maybe<GraphQLTransactionFee>;
  /** E.g. "visa", "mastercard", "amex". */
  type?: Maybe<Scalars["String"]>;
  wallet: GraphQLWallet;
};

export type GraphQLCreditCardInput = {
  description?: Maybe<Scalars["String"]>;
  rawCreditCardPayload: Scalars["String"];
};

export type GraphQLCreditCardInputV2 = {
  category: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  expiry: Scalars["String"];
  number: Scalars["String"];
  token: Scalars["String"];
  type: Scalars["String"];
};

export type GraphQLCumulativeCharge = {
  amount: GraphQLTaxableAmount;
  date: Scalars["Date"];
};

export type GraphQLCursorPaging = {
  /** Paginate before opaque cursor */
  before?: Maybe<Scalars["ConnectionCursor"]>;
  /** Paginate after opaque cursor */
  after?: Maybe<Scalars["ConnectionCursor"]>;
  /** Paginate first */
  first?: Maybe<Scalars["Int"]>;
  /** Paginate last */
  last?: Maybe<Scalars["Int"]>;
};

export type GraphQLDateFieldComparison = {
  is?: Maybe<Scalars["Boolean"]>;
  isNot?: Maybe<Scalars["Boolean"]>;
  eq?: Maybe<Scalars["DateTime"]>;
  neq?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Scalars["DateTime"]>>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
  between?: Maybe<GraphQLDateFieldComparisonBetween>;
  notBetween?: Maybe<GraphQLDateFieldComparisonBetween>;
};

export type GraphQLDateFieldComparisonBetween = {
  lower: Scalars["DateTime"];
  upper: Scalars["DateTime"];
};

export type GraphQLDateRange = {
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
};

export enum GraphQLDateRangeCurrentness {
  Past = "past",
  Current = "current",
  Future = "future",
}

export type GraphQLDateRangeFilter = {
  afterDate?: Maybe<Scalars["Date"]>;
  beforeDate?: Maybe<Scalars["Date"]>;
};

export type GraphQLDeleteCentrepayDirectiveInput = {
  legalEntity: Scalars["AiloRN"];
  managingEntity: Scalars["AiloRN"];
  tenancy: Scalars["AiloRN"];
};

export type GraphQLDeleteCrnInput = {
  legalEntity: Scalars["AiloRN"];
  managingEntity: Scalars["AiloRN"];
};

export type GraphQLDeleteManagementFileInput = {
  fileAilorn: Scalars["AiloRN"];
  managementId: Scalars["ID"];
};

export type GraphQLDeleteManagementFilePayload = {
  file: GraphQLFile;
  query: GraphQLQuery;
};

export type GraphQLDeleteOneKeyInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type GraphQLDeleteRentInput = {
  rentId: Scalars["ID"];
};

export type GraphQLDeleteRentPayload = {
  rentId: Scalars["ID"];
  query: GraphQLQuery;
};

export type GraphQLDeleteTenancyFileInput = {
  fileAilorn: Scalars["AiloRN"];
  tenancyId: Scalars["ID"];
};

export type GraphQLDeleteTenancyFilePayload = {
  file: GraphQLFile;
  query: GraphQLQuery;
};

export type GraphQLDeprecatedStatementData = {
  lineItems?: Maybe<Array<GraphQLStatementLineItem>>;
  netEarnings: GraphQLMoney;
  totalExpenses: GraphQLMoney;
  totalExpensesGST: GraphQLMoney;
  totalIncome: GraphQLMoney;
};

export type GraphQLDisableExternalTrustAccountInput = {
  externalTrustAccountId: Scalars["Int"];
};

export type GraphQLDisburseFundsResponse = {
  success: Scalars["Boolean"];
};

export type GraphQLDiscrepancyReport = {
  items?: Maybe<Array<Maybe<GraphQLDiscrepancyReportItem>>>;
};

export type GraphQLDiscrepancyReportItem = {
  id?: Maybe<Scalars["String"]>;
  hasDiscrepancy?: Maybe<Scalars["Boolean"]>;
  ledger?: Maybe<Array<Maybe<GraphQLTransactionDetail>>>;
  gateway?: Maybe<Array<Maybe<GraphQLTransactionDetail>>>;
};

export enum GraphQLDomainType {
  Consumer = "Consumer",
  Agency = "Agency",
}

export type GraphQLEditRentReviewInput = {
  rentId: Scalars["ID"];
  effectiveDate: Scalars["Date"];
  amountInCents: Scalars["String"];
  period: GraphQLRentFrequency;
  setsChargeDate: Scalars["Boolean"];
  scheduledRentReviewDate: Scalars["Date"];
};

export type GraphQLEditRentReviewPayload = {
  rent?: Maybe<GraphQLRent>;
  tenancy?: Maybe<GraphQLTenancy>;
  query: GraphQLQuery;
};

export type GraphQLEditableRentReviewPayload = {
  rent?: Maybe<GraphQLRent>;
  problem?: Maybe<GraphQLEditableRentReviewProblem>;
};

export type GraphQLEditableRentReviewProblem = GraphQLProblemInterface & {
  message: Scalars["String"];
};

export type GraphQLEmailContact = {
  id: Scalars["ID"];
  ailoRN: Scalars["AiloRN"];
  emailAddress: Scalars["String"];
  name: Scalars["String"];
  createdAt: Scalars["ISODateTime"];
  owner?: Maybe<GraphQLOrganisation>;
};

export type GraphQLEmailContactV0 = {
  id: Scalars["ID"];
  ailoRN: Scalars["AiloRN"];
  emailAddress: Scalars["String"];
  name: Scalars["String"];
  createdAt: Scalars["ISODateTime"];
  owner?: Maybe<GraphQLOrganisation>;
};

export type GraphQLEnableExternalTrustAccountInput = {
  externalTrustAccountId: Scalars["Int"];
};

export type GraphQLEndManagementV2Input = {
  managementId: Scalars["ID"];
  endDate: Scalars["Date"];
  endReasonCode: GraphQLManagementEndReasonCode;
  endCauseCodes?: Maybe<Array<GraphQLManagementEndCauseCode>>;
  endNote: Scalars["String"];
};

export type GraphQLEndManagementV2Payload = {
  management: GraphQLManagement;
};

export type GraphQLEntry = {
  account: GraphQLAccount;
  accountBalance?: Maybe<GraphQLMoney>;
  amount: GraphQLMoney;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  ledgerEvent: GraphQLLedgerEvent;
  snowflake: Scalars["Long"];
  userFacingDescription: Scalars["String"];
};

export enum GraphQLEntrySortField {
  CreatedAt = "CREATED_AT",
  Snowflake = "SNOWFLAKE",
}

export type GraphQLExternalMetadataInput = {
  externalSourceId: Scalars["Int"];
  externalFeeTemplateId: Scalars["ID"];
  triggerId?: Maybe<Scalars["ID"]>;
  triggerType?: Maybe<GraphQLPMeFeeTriggerType>;
  name?: Maybe<Scalars["String"]>;
  chartAccountName?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["Float"]>;
  valueType?: Maybe<GraphQLPMeFeeValueType>;
};

export type GraphQLExternalTrustAccount = {
  id: Scalars["Int"];
  company?: Maybe<GraphQLCompany>;
  secretArn: Scalars["String"];
  priority?: Maybe<Scalars["Int"]>;
  disabled: Scalars["Boolean"];
};

export type GraphQLExternalTrustAccountCredentialsInput = {
  username: Scalars["String"];
  password: Scalars["String"];
  mfa?: Maybe<Scalars["String"]>;
};

export type GraphQLExternalTrustAccountDetailsInput = {
  credentials: GraphQLExternalTrustAccountCredentialsInput;
  systemType: GraphQLExternalTrustAccountSystemType;
  organisationName: Scalars["String"];
};

export enum GraphQLExternalTrustAccountSystemType {
  PropertyMe = "PropertyMe",
}

export type GraphQLFee = {
  id: Scalars["ID"];
  ailoRN: Scalars["AiloRN"];
  type: GraphQLFeeType;
  management: GraphQLManagement;
  blueprint?: Maybe<GraphQLFeeBlueprint>;
  managementFeeBlueprint?: Maybe<GraphQLManagementFeeBlueprint>;
  /** Never null if type = BillManagementFee */
  appliedTo?: Maybe<GraphQLBill>;
  amount: GraphQLMoney;
  percentage?: Maybe<Scalars["Float"]>;
  baseAmount?: Maybe<GraphQLMoney>;
  baseAmountType?: Maybe<GraphQLFeeBaseAmountType>;
  taxCategory: GraphQLFeeTaxCategory;
  description?: Maybe<Scalars["String"]>;
  /** TODO META-381: Make this never null after backfilling status */
  status?: Maybe<GraphQLFeeStatus>;
  createdAt: Scalars["DateTime"];
  /** Never null. */
  createdBy?: Maybe<GraphQLActionInitiator>;
  /** Never null. */
  modifiedBy?: Maybe<GraphQLActionInitiator>;
  archivedAt?: Maybe<Scalars["DateTime"]>;
  archivedBy?: Maybe<GraphQLActionInitiator>;
  archiveReason?: Maybe<Scalars["String"]>;
  taxAmount?: Maybe<GraphQLMoney>;
  liability?: Maybe<GraphQLLiability>;
};

export enum GraphQLFeeBaseAmountType {
  Bill = "Bill",
  OneWeekRent = "OneWeekRent",
}

export type GraphQLFeeBlueprint = {
  id: Scalars["ID"];
  ailoRN: Scalars["AiloRN"];
  type: GraphQLFeeBlueprintType;
  name: Scalars["String"];
  taxCategory: GraphQLFeeTaxCategory;
  event?: Maybe<GraphQLFeeEvent>;
  /** @deprecated Use `description` on `Fee` or `RecurringFee` instead. */
  description?: Maybe<Scalars["String"]>;
  /** Present if `chargeType == FixedAmount`. Null otherwise. */
  fixedAmount?: Maybe<GraphQLMoney>;
  taxTreatment: GraphQLTaxTreatment;
  /** Present if `chargeType == OneWeekRentPercentage`. Null otherwise. */
  oneWeekRentPercentage?: Maybe<Scalars["Float"]>;
  chargeType: GraphQLFeeBlueprintChargeType;
  /** Present if `type == RecurringFee`. Null otherwise. */
  frequency?: Maybe<GraphQLFeeFrequency>;
  /** Present if `type == RecurringFee`. Null otherwise. */
  anniversaryDay?: Maybe<Scalars["Int"]>;
  /** Present if `type == RecurringFee && frequency == "annually"`. Null otherwise. */
  anniversaryMonth?: Maybe<Scalars["Int"]>;
  /** Always present. (Nullable only because it's a federated field.) */
  organisation?: Maybe<GraphQLOrganisation>;
  createdAt: Scalars["DateTime"];
  createdBy: GraphQLActionInitiator;
  modifiedBy: GraphQLActionInitiator;
  archived: Scalars["Boolean"];
  archivedAt?: Maybe<Scalars["DateTime"]>;
  archivedBy?: Maybe<GraphQLActionInitiator>;
  archiveReason?: Maybe<Scalars["String"]>;
  supported?: Maybe<Scalars["Boolean"]>;
};

export enum GraphQLFeeBlueprintChargeType {
  FixedAmount = "FixedAmount",
  OneWeekRentPercentage = "OneWeekRentPercentage",
}

export enum GraphQLFeeBlueprintType {
  RecurringFee = "RecurringFee",
  OneOffFee = "OneOffFee",
  EventBasedFee = "EventBasedFee",
}

export type GraphQLFeeBlueprintsQueryConditions = {
  organisationId?: Maybe<Scalars["ID"]>;
  type?: Maybe<GraphQLFeeBlueprintType>;
  /** Exclude agency fee blueprints that are linked to non-archived management fee blueprints on the given management */
  notAppliedToManagementId?: Maybe<Scalars["ID"]>;
  archived?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLFeeEvent = {
  type: GraphQLFeeEventType;
  shortDescription: Scalars["String"];
  longDescription: Scalars["String"];
  createdAt: Scalars["DateTime"];
};

export enum GraphQLFeeEventType {
  FirstRentSettled = "firstRentSettled",
}

export enum GraphQLFeeFrequency {
  Weekly = "weekly",
  Monthly = "monthly",
  Annually = "annually",
}

export type GraphQLFeeOccurrence = {
  date: Scalars["Date"];
  taxAmount: GraphQLMoney;
  taxInclusiveAmount: GraphQLMoney;
};

export enum GraphQLFeeSort {
  CreatedAtAsc = "CREATED_AT_ASC",
  CreatedAtDesc = "CREATED_AT_DESC",
  /** Sorted in this order: Due, PaymentPending, Paid, RefundPending, Refunded, Cancelled */
  StatusProgressAsc = "STATUS_PROGRESS_ASC",
}

export enum GraphQLFeeStatus {
  Due = "Due",
  PaymentPending = "PaymentPending",
  Paid = "Paid",
  Cancelled = "Cancelled",
  RefundPending = "RefundPending",
  Refunded = "Refunded",
}

export type GraphQLFeeTaxCategory = {
  id: Scalars["String"];
  name: Scalars["String"];
  createdAt: Scalars["DateTime"];
};

export enum GraphQLFeeType {
  BillManagementFee = "BillManagementFee",
  OneOffFee = "OneOffFee",
}

export type GraphQLFeesQueryConditions = {
  type?: Maybe<Array<GraphQLFeeType>>;
  managementId?: Maybe<Array<Scalars["ID"]>>;
  appliedToAiloRN?: Maybe<Array<Scalars["AiloRN"]>>;
  status?: Maybe<Array<GraphQLFeeStatus>>;
};

export type GraphQLFile = {
  id: Scalars["AiloRN"];
  createdAt: Scalars["DateTime"];
  fileName: Scalars["String"];
  fileSize?: Maybe<Scalars["Int"]>;
  kind: GraphQLFileKind;
  contentType?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  thumbnailUrl?: Maybe<Scalars["String"]>;
  thumbnailStatus: GraphQLThumbnailStatus;
};

export type GraphQLFileInput = {
  id: Scalars["AiloRN"];
};

export type GraphQLFileInputV0 = {
  id: Scalars["AiloRN"];
};

export enum GraphQLFileKind {
  AgencyTransferStatement = "AgencyTransferStatement",
  AuthZPersonPhoto = "AuthZ_PersonPhoto",
  BillBillAttachment = "Bill_BillAttachment",
  ChatMessageFilePart = "Chat_MessageFilePart",
  InspectionReport = "InspectionReport",
  StatementInvestorStatement = "Statement_InvestorStatement",
  ProjectFile = "ProjectFile",
  TenancyFile = "TenancyFile",
  ManagementFile = "ManagementFile",
  InspectionFile = "InspectionFile",
  Receipt = "Receipt",
  CentrepayReport = "CentrepayReport",
  Unknown = "unknown",
}

export type GraphQLFileShareLink = {
  id: Scalars["ID"];
  file: GraphQLFile;
  url: Scalars["String"];
  expiresAt?: Maybe<Scalars["DateTime"]>;
};

export type GraphQLFileShareLinkMetadataInput = {
  type: GraphQLFileShareLinkMetadataType;
  recipientEmail: Scalars["String"];
  notificationId?: Maybe<Scalars["String"]>;
  emailDeliveryId?: Maybe<Scalars["String"]>;
};

export enum GraphQLFileShareLinkMetadataType {
  EmailNotificationLink = "EmailNotificationLink",
}

export type GraphQLFileWithUploadUrl = {
  file: GraphQLFile;
  uploadUrl: Scalars["String"];
};

export type GraphQLFilter = {
  search?: Maybe<Array<Maybe<GraphQLSearchFilter>>>;
  dateRange?: Maybe<GraphQLDateRangeFilter>;
};

export type GraphQLFindOrCreateBlueprintInput = {
  name: Scalars["String"];
  type: GraphQLFeeBlueprintType;
  taxCategoryId: Scalars["ID"];
  taxTreatment: GraphQLTaxTreatment;
  event?: Maybe<GraphQLFeeEventType>;
  organisationAilorn: Scalars["AiloRN"];
  externalMetadata: GraphQLExternalMetadataInput;
  fixedAmount?: Maybe<GraphQLMoneyInput>;
  oneWeekRentPercentage?: Maybe<Scalars["Float"]>;
  frequency?: Maybe<GraphQLFeeFrequency>;
  anniversaryDay?: Maybe<Scalars["Int"]>;
  anniversaryMonth?: Maybe<Scalars["Int"]>;
};

export type GraphQLFindOrCreateManagementFeeBlueprintInput = {
  managementId: Scalars["ID"];
  feeBlueprintId: Scalars["ID"];
  fixedAmount?: Maybe<GraphQLMoneyInput>;
  taxTreatment: GraphQLTaxTreatment;
  oneWeekRentPercentage?: Maybe<Scalars["Float"]>;
  pmeData?: Maybe<GraphQLExternalMetadataInput>;
};

export type GraphQLFindOrCreateOtherContactsInput = {
  organisationAilorn: Scalars["AiloRN"];
  emails: Array<Scalars["String"]>;
};

export type GraphQLFirstAndLastEntries = {
  firstEntry?: Maybe<GraphQLEntry>;
  lastEntry?: Maybe<GraphQLEntry>;
};

export type GraphQLForm = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  organisation: GraphQLOrganisation;
};

export type GraphQLFundReceived = {
  amount: GraphQLMoney;
  receivedAt: Scalars["DateTime"];
};

export type GraphQLGatewayCapturePaymentDetails = {
  url?: Maybe<Scalars["URL"]>;
};

export type GraphQLGeneralLedgerInteraction = {
  reference: Scalars["AiloRN"];
};

export type GraphQLGeneralProjectMeta = {
  management?: Maybe<GraphQLManagement>;
};

export type GraphQLGeneralStatementFilter = {
  subject?: Maybe<Scalars["AiloRN"]>;
  types?: Maybe<Array<GraphQLStatementType>>;
  createdFor?: Maybe<Array<GraphQLStatementCreatedFor>>;
};

export type GraphQLGenerateInspectionReportActionMeta = {
  inspectionAppointment?: Maybe<GraphQLInspectionAppointment>;
};

export type GraphQLGenerateInspectionReportInput = {
  inspectionId: Scalars["String"];
};

export type GraphQLGenerateInspectionReportResult = {
  inspection: GraphQLInspection;
};

export type GraphQLGenerateLiabilityEntriesInput = {
  liabilityIds: Array<Scalars["ID"]>;
};

export type GraphQLGenerateLiabilityEntriesPayload = {
  liabilityIds: Array<Scalars["ID"]>;
};

export type GraphQLGetCentrepayPaymentDirectivesFilter = {
  legalEntity?: Maybe<Scalars["AiloRN"]>;
  managingEntity?: Maybe<Scalars["AiloRN"]>;
  tenancy?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLGetCentrepayersInput = {
  tenancy: Scalars["AiloRN"];
  managingEntity: Scalars["AiloRN"];
};

export type GraphQLGetCrnInput = {
  legalEntity: Scalars["AiloRN"];
  managingEntity: Scalars["AiloRN"];
};

export type GraphQLGetCrnOutput = {
  crn: Scalars["String"];
};

export type GraphQLGetLegalEntityByCrnInput = {
  managingEntity: Scalars["AiloRN"];
  crn: Scalars["String"];
};

export type GraphQLGetLegalEntityByCrnOutput = {
  legalEntity: Scalars["AiloRN"];
};

export type GraphQLGetOrCreateWalletOwnerAndBankAccountInput = {
  accountName: Scalars["String"];
  accountNumber: Scalars["String"];
  bsb: Scalars["String"];
  description: Scalars["String"];
  walletOwnerAiloRN: Scalars["AiloRN"];
};

export type GraphQLGraphQlAilornFilterComparison = {
  is?: Maybe<Scalars["Boolean"]>;
  isNot?: Maybe<Scalars["Boolean"]>;
  eq?: Maybe<Scalars["AiloRN"]>;
  neq?: Maybe<Scalars["AiloRN"]>;
  gt?: Maybe<Scalars["AiloRN"]>;
  gte?: Maybe<Scalars["AiloRN"]>;
  lt?: Maybe<Scalars["AiloRN"]>;
  lte?: Maybe<Scalars["AiloRN"]>;
  like?: Maybe<Scalars["AiloRN"]>;
  notLike?: Maybe<Scalars["AiloRN"]>;
  iLike?: Maybe<Scalars["AiloRN"]>;
  notILike?: Maybe<Scalars["AiloRN"]>;
  in?: Maybe<Array<Scalars["AiloRN"]>>;
  notIn?: Maybe<Array<Scalars["AiloRN"]>>;
};

export type GraphQLIdFilterComparison = {
  is?: Maybe<Scalars["Boolean"]>;
  isNot?: Maybe<Scalars["Boolean"]>;
  eq?: Maybe<Scalars["ID"]>;
  neq?: Maybe<Scalars["ID"]>;
  gt?: Maybe<Scalars["ID"]>;
  gte?: Maybe<Scalars["ID"]>;
  lt?: Maybe<Scalars["ID"]>;
  lte?: Maybe<Scalars["ID"]>;
  like?: Maybe<Scalars["ID"]>;
  notLike?: Maybe<Scalars["ID"]>;
  iLike?: Maybe<Scalars["ID"]>;
  notILike?: Maybe<Scalars["ID"]>;
  in?: Maybe<Array<Scalars["ID"]>>;
  notIn?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLIgnoreMe = {
  company?: Maybe<GraphQLCompany>;
  paymentMethodCompanion?: Maybe<GraphQLPaymentMethodCompanion>;
  person?: Maybe<GraphQLPerson>;
};

export type GraphQLIncomeAndExpenseByTaxCategoryData = {
  expenses: Array<GraphQLIncomeAndExpenseByTaxCategoryDataEntry>;
  income: Array<GraphQLIncomeAndExpenseByTaxCategoryDataEntry>;
};

export type GraphQLIncomeAndExpenseByTaxCategoryDataEntry = {
  taxCategory: Scalars["String"];
  totalAmount: GraphQLMoney;
  totalTaxAmount: GraphQLMoney;
};

export type GraphQLIncomeAndExpenseByTaxCategoryInput = {
  accountOwnerReference: Scalars["AiloRN"];
  /** Filter to include only entries which have created_at < createdBefore */
  createdBefore: Scalars["DateTime"];
  /** Filter to include only entries which have created_at >= createdFrom */
  createdFrom: Scalars["DateTime"];
};

export type GraphQLIngoingTenancyUpdateInput = {
  tenancyId: Scalars["ID"];
  scheduledRentReviewDate?: Maybe<Scalars["Date"]>;
  tenancyAgreement: GraphQLTenancyAgreementSetupInput;
  rents: Array<GraphQLRentSetupInput>;
};

export type GraphQLInspection = {
  id: Scalars["ID"];
  ailorn: Scalars["AiloRN"];
  type: GraphQLInspectionType;
  startedAt: Scalars["DateTime"];
  completedAt?: Maybe<Scalars["DateTime"]>;
  areas: Array<GraphQLInspectionArea>;
  inspectionAppointment: GraphQLInspectionAppointment;
  property: GraphQLProperty;
  agency: GraphQLOrganisation;
  inspectingAgent: GraphQLPerson;
  /** @deprecated Use areaFilesForThumbnail and featureFieldsForThumbnail instead */
  files: Array<GraphQLInspectionAreaFile>;
  areaFilesForThumbnail: Array<GraphQLInspectionAreaFile>;
  featureFilesForThumbnail: Array<GraphQLInspectionFeatureFile>;
  ailoForm?: Maybe<GraphQLAiloForm>;
  tenancy: GraphQLTenancy;
  reportGenerationState: GraphQLReportGenerationState;
  latestReportProgress?: Maybe<GraphQLInspectionReportProgress>;
};

export type GraphQLInspectionAreaFilesForThumbnailArgs = {
  limit?: Maybe<Scalars["Int"]>;
};

export type GraphQLInspectionFeatureFilesForThumbnailArgs = {
  limit?: Maybe<Scalars["Int"]>;
};

export type GraphQLInspectionAggregateGroupBy = {
  id?: Maybe<Scalars["ID"]>;
  inspectingAgentAilorn?: Maybe<Scalars["AiloRN"]>;
  startedAt?: Maybe<Scalars["DateTime"]>;
};

export type GraphQLInspectionAppointment = {
  id: Scalars["ID"];
  ailorn: Scalars["AiloRN"];
  type: GraphQLInspectionType;
  startTime?: Maybe<Scalars["DateTime"]>;
  inspection?: Maybe<GraphQLInspection>;
  property: GraphQLProperty;
  tenancy: GraphQLTenancy;
  agency: GraphQLOrganisation;
  inspectingAgent: GraphQLPerson;
  previousInspection?: Maybe<GraphQLInspection>;
};

export type GraphQLInspectionAppointmentAggregateGroupBy = {
  id?: Maybe<Scalars["ID"]>;
  inspectingAgentAilorn?: Maybe<Scalars["AiloRN"]>;
  startTime?: Maybe<Scalars["DateTime"]>;
};

export type GraphQLInspectionAppointmentConnection = {
  /** Paging information */
  pageInfo: GraphQLRelayPageInfo;
  /** Array of edges. */
  edges: Array<GraphQLInspectionAppointmentEdge>;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type GraphQLInspectionAppointmentCountAggregate = {
  id?: Maybe<Scalars["Int"]>;
  inspectingAgentAilorn?: Maybe<Scalars["Int"]>;
  startTime?: Maybe<Scalars["Int"]>;
};

export type GraphQLInspectionAppointmentEdge = {
  /** The node containing the InspectionAppointment */
  node: GraphQLInspectionAppointment;
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
};

export type GraphQLInspectionAppointmentFilter = {
  id?: Maybe<GraphQLIdFilterComparison>;
  inspectingAgentAilorn?: Maybe<GraphQLInspectionAppointmentInspectingAgentAilornFilterComparison>;
  startTime?: Maybe<GraphQLDateFieldComparison>;
};

export type GraphQLInspectionAppointmentInspectingAgentAilornFilterComparison =
  {
    eq?: Maybe<Scalars["AiloRN"]>;
    in?: Maybe<Array<Scalars["AiloRN"]>>;
    notIn?: Maybe<Array<Scalars["AiloRN"]>>;
  };

export type GraphQLInspectionAppointmentMaxAggregate = {
  id?: Maybe<Scalars["ID"]>;
  inspectingAgentAilorn?: Maybe<Scalars["AiloRN"]>;
  startTime?: Maybe<Scalars["DateTime"]>;
};

export type GraphQLInspectionAppointmentMinAggregate = {
  id?: Maybe<Scalars["ID"]>;
  inspectingAgentAilorn?: Maybe<Scalars["AiloRN"]>;
  startTime?: Maybe<Scalars["DateTime"]>;
};

export type GraphQLInspectionAppointmentSort = {
  field: GraphQLInspectionAppointmentSortFields;
  direction: GraphQLRelaySortDirection;
  nulls?: Maybe<GraphQLSortNulls>;
};

export enum GraphQLInspectionAppointmentSortFields {
  Id = "id",
  InspectingAgentAilorn = "inspectingAgentAilorn",
  StartTime = "startTime",
}

export type GraphQLInspectionArea = {
  id: Scalars["ID"];
  ailorn: Scalars["AiloRN"];
  index: Scalars["Int"];
  name: Scalars["String"];
  inspected: Scalars["Boolean"];
  notes?: Maybe<Scalars["String"]>;
  condition?: Maybe<GraphQLInspectionAreaCondition>;
  inspection: GraphQLInspection;
  files: Array<GraphQLInspectionAreaFile>;
  features: Array<GraphQLInspectionFeature>;
};

export enum GraphQLInspectionAreaCondition {
  Excellent = "Excellent",
  Good = "Good",
  Fair = "Fair",
  Poor = "Poor",
}

export type GraphQLInspectionAreaFile = {
  id: Scalars["ID"];
  ailorn: Scalars["AiloRN"];
  timestamp: Scalars["DateTime"];
  inspectionArea: GraphQLInspectionArea;
  file: GraphQLFile;
};

export type GraphQLInspectionConnection = {
  /** Paging information */
  pageInfo: GraphQLRelayPageInfo;
  /** Array of edges. */
  edges: Array<GraphQLInspectionEdge>;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type GraphQLInspectionCountAggregate = {
  id?: Maybe<Scalars["Int"]>;
  inspectingAgentAilorn?: Maybe<Scalars["Int"]>;
  startedAt?: Maybe<Scalars["Int"]>;
};

export type GraphQLInspectionEdge = {
  /** The node containing the Inspection */
  node: GraphQLInspection;
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
};

export type GraphQLInspectionFeature = {
  id: Scalars["ID"];
  ailorn: Scalars["AiloRN"];
  name: Scalars["String"];
  index: Scalars["Int"];
  description?: Maybe<Scalars["String"]>;
  isClean?: Maybe<Scalars["Boolean"]>;
  isUndamaged?: Maybe<Scalars["Boolean"]>;
  isWorking?: Maybe<Scalars["Boolean"]>;
  inspectionArea: GraphQLInspectionArea;
  files: Array<GraphQLInspectionFeatureFile>;
};

export type GraphQLInspectionFeatureFile = {
  id: Scalars["ID"];
  ailorn: Scalars["AiloRN"];
  timestamp: Scalars["DateTime"];
  inspectionFeature: GraphQLInspectionFeature;
  file: GraphQLFile;
};

export type GraphQLInspectionFilter = {
  id?: Maybe<GraphQLIdFilterComparison>;
  inspectingAgentAilorn?: Maybe<GraphQLInspectionInspectingAgentAilornFilterComparison>;
  startedAt?: Maybe<GraphQLDateFieldComparison>;
};

export type GraphQLInspectionInspectingAgentAilornFilterComparison = {
  eq?: Maybe<Scalars["AiloRN"]>;
  in?: Maybe<Array<Scalars["AiloRN"]>>;
  notIn?: Maybe<Array<Scalars["AiloRN"]>>;
};

export type GraphQLInspectionMaxAggregate = {
  id?: Maybe<Scalars["ID"]>;
  inspectingAgentAilorn?: Maybe<Scalars["AiloRN"]>;
  startedAt?: Maybe<Scalars["DateTime"]>;
};

export type GraphQLInspectionMinAggregate = {
  id?: Maybe<Scalars["ID"]>;
  inspectingAgentAilorn?: Maybe<Scalars["AiloRN"]>;
  startedAt?: Maybe<Scalars["DateTime"]>;
};

export type GraphQLInspectionReportProgress = {
  id: Scalars["ID"];
  ailorn: Scalars["AiloRN"];
  fileAilorn?: Maybe<Scalars["AiloRN"]>;
  /** Report generation completion time */
  completedAt?: Maybe<Scalars["DateTime"]>;
  /** Report generation failure time */
  failedAt?: Maybe<Scalars["DateTime"]>;
  inspection: GraphQLInspection;
};

export type GraphQLInspectionSort = {
  field: GraphQLInspectionSortFields;
  direction: GraphQLRelaySortDirection;
  nulls?: Maybe<GraphQLSortNulls>;
};

export enum GraphQLInspectionSortFields {
  Id = "id",
  InspectingAgentAilorn = "inspectingAgentAilorn",
  StartedAt = "startedAt",
}

export enum GraphQLInspectionType {
  Ingoing = "Ingoing",
  Outgoing = "Outgoing",
  Routine = "Routine",
}

export type GraphQLIntFieldComparison = {
  is?: Maybe<Scalars["Boolean"]>;
  isNot?: Maybe<Scalars["Boolean"]>;
  eq?: Maybe<Scalars["Int"]>;
  neq?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Scalars["Int"]>>;
  notIn?: Maybe<Array<Scalars["Int"]>>;
  between?: Maybe<GraphQLIntFieldComparisonBetween>;
  notBetween?: Maybe<GraphQLIntFieldComparisonBetween>;
};

export type GraphQLIntFieldComparisonBetween = {
  lower: Scalars["Int"];
  upper: Scalars["Int"];
};

export type GraphQLInternalSupplierInput = {
  name?: Maybe<Scalars["String"]>;
  registeredEntityName?: Maybe<Scalars["String"]>;
  organisationReference: Scalars["AiloRN"];
  internalReference: Scalars["AiloRN"];
};

export type GraphQLKey = {
  id: Scalars["ID"];
  code: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  property: GraphQLProperty;
  organisation: GraphQLOrganisation;
};

export type GraphQLKeyAggregateGroupBy = {
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  organisationAilorn?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLKeyCountAggregate = {
  id?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  organisationAilorn?: Maybe<Scalars["Int"]>;
};

export type GraphQLKeyDeleteResponse = {
  id?: Maybe<Scalars["ID"]>;
  code?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  property?: Maybe<GraphQLProperty>;
  organisation?: Maybe<GraphQLOrganisation>;
};

export type GraphQLKeyEdge = {
  /** The node containing the Key */
  node: GraphQLKey;
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
};

export type GraphQLKeyFilter = {
  id?: Maybe<GraphQLKeyIdFilterComparison>;
  createdAt?: Maybe<GraphQLDateFieldComparison>;
  updatedAt?: Maybe<GraphQLDateFieldComparison>;
  organisationAilorn?: Maybe<GraphQLKeyOrganisationAilornFilterComparison>;
};

export type GraphQLKeyIdFilterComparison = {
  eq?: Maybe<Scalars["ID"]>;
};

export type GraphQLKeyInput = {
  code: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  propertyAilorn: Scalars["AiloRN"];
  organisationAilorn: Scalars["AiloRN"];
};

export type GraphQLKeyMaxAggregate = {
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  organisationAilorn?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLKeyMinAggregate = {
  id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  organisationAilorn?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLKeyOrganisationAilornFilterComparison = {
  eq?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLKeySort = {
  field: GraphQLKeySortFields;
  direction: GraphQLRelaySortDirection;
  nulls?: Maybe<GraphQLSortNulls>;
};

export enum GraphQLKeySortFields {
  Id = "id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  OrganisationAilorn = "organisationAilorn",
}

export type GraphQLLeaseRenewalDetails = {
  id?: Maybe<Scalars["ID"]>;
  startDate: Scalars["Date"];
  fixedTermEndDate?: Maybe<Scalars["Date"]>;
};

export type GraphQLLeaseRenewalProjectMeta = {
  management: GraphQLManagement;
  tenancy: GraphQLTenancy;
  tenancyAgreement?: Maybe<GraphQLTenancyAgreement>;
  rent?: Maybe<GraphQLRent>;
};

/** @deprecated Use `BidirectionalPageInfo` instead when possible. */
export type GraphQLLedgerBidirectionalPageInfo = {
  /** @deprecated Use `hasNext` instead. */
  hasMore: Scalars["Boolean"];
  hasNext: Scalars["Boolean"];
  hasPrevious: Scalars["Boolean"];
  nextCursor?: Maybe<Scalars["String"]>;
  previousCursor?: Maybe<Scalars["String"]>;
  total: Scalars["Int"];
};

export type GraphQLLedgerEvent = {
  ailoRN: Scalars["AiloRN"];
  businessTransaction?: Maybe<GraphQLBusinessTransaction>;
  createdAt: Scalars["DateTime"];
  description: Scalars["String"];
  domainEventKey: Scalars["String"];
  entries?: Maybe<GraphQLPaginatedEntries>;
  id: Scalars["ID"];
  interaction: GraphQLGeneralLedgerInteraction;
  occurredAt: Scalars["DateTime"];
  owing?: Maybe<GraphQLRecurringOwing>;
  paymentMethod?: Maybe<GraphQLPaymentMethodCompanion>;
  reference: Scalars["AiloRN"];
  reversalDepth?: Maybe<Scalars["Int"]>;
  type: GraphQLLedgerEventType;
};

export type GraphQLLedgerEventEntriesArgs = {
  pagination?: GraphQLPaginationParams;
};

export enum GraphQLLedgerEventType {
  Cleared = "CLEARED",
  Failed = "FAILED",
  Initiated = "INITIATED",
  InitiatedAndCleared = "INITIATED_AND_CLEARED",
}

/** @deprecated Use `BidirectionalPageCursor` instead when possible. */
export type GraphQLLedgerPageCursor = {
  cursor?: Maybe<Scalars["String"]>;
  pageSize: Scalars["Int"];
  paginateBackward?: Maybe<Scalars["Boolean"]>;
  /** sort is not supported yet. */
  sort?: Maybe<Scalars["String"]>;
};

export type GraphQLLegalEntity = {
  id: Scalars["ID"];
  ailoRN: Scalars["String"];
  eulaSignedAt?: Maybe<Scalars["DateTime"]>;
  organisationId: Scalars["ID"];
  currentUserPermissions: Array<Scalars["String"]>;
  timezone: Scalars["TimeZone"];
  emailAddress?: Maybe<Scalars["String"]>;
  /** Statements with subject = Legal Entity Ailorn */
  statements?: Maybe<GraphQLPaginatedStatements>;
  tenancies?: Maybe<GraphQLPaginatedTenancies>;
  managements?: Maybe<GraphQLPaginatedManagements>;
  contact?: Maybe<GraphQLContact>;
};

export type GraphQLLegalEntityStatementsArgs = {
  filter: GraphQLStatementFilter;
  cursor?: Maybe<GraphQLStatementCursor>;
  sort?: Maybe<Array<GraphQLStatementSort>>;
};

export type GraphQLLegalEntityTenanciesArgs = {
  managingOrganisationId?: Maybe<Scalars["AiloRN"]>;
  pageCursor: GraphQLPmPageCursor;
};

export type GraphQLLegalEntityManagementsArgs = {
  managingOrganisationId?: Maybe<Scalars["AiloRN"]>;
  pageCursor: GraphQLPmPageCursor;
};

export type GraphQLLegalEntityContactArgs = {
  organisationAilorn: Scalars["AiloRN"];
};

export type GraphQLLegalEntityCompanion = {
  id: Scalars["ID"];
  /** @deprecated Use `LegalEntityCompanion.ailoRNV2` instead. */
  ailoRN: Scalars["String"];
  ailoRNV2: Scalars["AiloRN"];
  eulaSignedAt?: Maybe<Scalars["DateTime"]>;
  organisation: GraphQLOrganisation;
  legalEntity: GraphQLLegalEntity;
};

export type GraphQLLegalEntityMembership = {
  member: GraphQLPerson;
  legalEntity: GraphQLLegalEntity;
  role: GraphQLLegalEntityRole;
};

export type GraphQLLegalEntityPersonRole = GraphQLRole & {
  id: Scalars["String"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  domain: Scalars["String"];
  permissions: Array<GraphQLPermission>;
  legalEntity: GraphQLLegalEntity;
  person: GraphQLPerson;
};

export type GraphQLLegalEntityRole = GraphQLRole & {
  id: Scalars["String"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  domain: Scalars["String"];
  permissions: Array<GraphQLPermission>;
};

export enum GraphQLLegalEntityType {
  Company = "Company",
  Person = "Person",
}

export type GraphQLLegalEntityWithExternalTrustAccount = {
  legalEntityId: Scalars["AiloRN"];
  company?: Maybe<GraphQLCompany>;
  disabled: Scalars["Boolean"];
  status?: Maybe<GraphQLMigrationTaskStatus>;
  finishedAt?: Maybe<Scalars["DateTime"]>;
};

export enum GraphQLLegalEntityWithExternalTrustAccountSortField {
  FinishedAt = "FinishedAt",
}

export type GraphQLLegalEntityWithExternalTrustAccountSortParams = {
  field: GraphQLLegalEntityWithExternalTrustAccountSortField;
  direction: GraphQLSortDirection;
};

export type GraphQLLegalEntityWithExternalTrustAccountsFilters = {
  organisationId?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLLiability = {
  /**
   * Amount computed base on how many full cycle, how many Days into a partial cycle and how much are paid up to now for this liability.
   * e.g. Tenant occupied a $100/wk property for 2 days so far and paid $30.
   * The DailyRate of this property is $100/7 = $14.29 per day.
   * This field should be 2days * $14.29 - $30 = -$1.42 (i.e. Tenant overpaid $1.42 so far and not in arrears)
   */
  amountInArrears: GraphQLMoney;
  autoPaymentDetails?: Maybe<GraphQLAutoPaymentDetails>;
  category: Scalars["String"];
  /**
   * A poorly named and designed timestamp representing a date compute base on whether payment for full cycles of liability has been made.
   * The time should always be 00am of a Date in liability's zone. This timestamp also require minus 1 sec treatment to be displayed as a Date that's accurate for the domain.
   * e.g. Tenant paid 1 full week Rent for this Mon-Sun, this field would be Monday 00am in `zone`. The actual Paid To Date should be Sunday.
   * @deprecated Use `paidToDate` instead
   */
  classicPaidTo?: Maybe<Scalars["DateTime"]>;
  consumerReference?: Maybe<Scalars["AiloRN"]>;
  /** The daily rent rate for the latest plan. */
  dailyRate: GraphQLMoney;
  /**
   * The number of days a tenant has stayed in a property and not paid anything for.
   * Eg. Tenant moves in 1/1/2021 and hasn't paid. Tenant is 1 day in arrears because they didn't pay for 1/1/2021.
   * If this tenant makes a payment for any amount, they will be 0 days in arrears, even if it doesn't cover a full day.
   */
  daysInArrears: Scalars["Int"];
  description?: Maybe<Scalars["String"]>;
  /** the amount of whichever the not-fully-paid cycle (past, today or future). if no partial-paid period, this will be full amount of whichever cycle due-to-be-paid next. */
  dueAmount?: Maybe<GraphQLMoney>;
  /** the due date of whichever not-fully-paid cycle (past, today or future). if no partial-paid period, this will be full amount of whichever cycle due-to-be-paid next. */
  dueDate?: Maybe<Scalars["DateTime"]>;
  /**
   * Date compute base on how much is paid against this liability up til now.
   * Does not require minus 1 day or 1 sec treatment. The Date is in this Liability's `zone`.
   * e.g. Tenant paid $30 into this Mon-Sun (rent = $100/week). It is 2 days and a bit worth of Rent. This field should be this Tuesday (i.e paid for Monday and Tuesday inclusive)
   * e.g. Tenant paid nothing into this Mon-Sun, this field should be last Sunday.
   */
  effectivePaidToDate?: Maybe<Scalars["Date"]>;
  entries?: Maybe<GraphQLPaginatedLiabilityEntries>;
  firstPaymentDate?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  lastPaymentDate?: Maybe<Scalars["DateTime"]>;
  /** @deprecated Use `category` instead */
  liabilityType?: Maybe<Scalars["String"]>;
  linkedChildBusinessTransactions?: Maybe<Array<GraphQLBusinessTransaction>>;
  management?: Maybe<GraphQLManagement>;
  /** the full amount of the next (as of today) rent cycle, regardless any rent payment */
  nextChargeAmount?: Maybe<GraphQLMoney>;
  /** the start date of the next (as of today) rent cycle, regardless any rent payment */
  nextChargeCreateDate?: Maybe<Scalars["DateTime"]>;
  /** @deprecated Use `nextChargeDueDate`. they are the same, this one is poorly named. */
  nextChargeDate?: Maybe<Scalars["DateTime"]>;
  /** the due date of the next rent cycle, regardless any rent payment */
  nextChargeDueDate?: Maybe<Scalars["DateTime"]>;
  /** the due amount of the next (as of today) not-fully-paid rent cycle */
  nextDueAmount?: Maybe<GraphQLMoney>;
  /** the due date of the next (as of today) not-fully-paid rent cycle */
  nextDueDate?: Maybe<Scalars["DateTime"]>;
  /**
   * Poorly named field representing Amount computed base on how many full liability cycles owed and how much are paid up to now.
   * Produce wrong result for any Liability with Overlapping LiabilityPlans, as this field uses Liaiblity Entry sum.
   * @deprecated Use `overdueAmount` instead
   */
  outstandingBalance: GraphQLMoney;
  /**
   * Amount computed base on how many full liability cycles owed and how much are paid up to now.
   * e.g. Tenant occupied a $100/wk property for 2 days so far and paid $30. This field should be $100 - $30
   */
  overdueAmount: GraphQLMoney;
  /**
   * A poorly named and designed timestamp representing Effective Paid To Date, a Date compute base on how much is paid against this liability up til now.
   * The time should always be 00am of a Date in liability's zone. This timestamp also require minus 1 sec treatment to be displayed as a Date that's accurate for the domain.
   * e.g. Tenant paid $30 into this Mon-Sun (rent = $100/week). It is 2 days and a bit worth of Rent. This field will be 00am of Wed. The actual Effective Paid To Date should be Tuesday.
   * @deprecated Use `effectivePaidToDate` instead
   */
  paidTo?: Maybe<Scalars["DateTime"]>;
  /**
   * Date compute base on whether payment for full cycles of liability has been made.
   * Does not require minus 1 day or 1 sec treatment. The Date is in this Liability's `zone`.
   * e.g. Tenant paid 1 full week Rent for this Mon-Sun, this field should be this Sunday.
   * e.g. Tenant paid nothing for this Mon-Sun, this field should be last Sunday.
   */
  paidToDate?: Maybe<Scalars["Date"]>;
  paymentKey: Scalars["GeneratedKey"];
  paymentPlans?: Maybe<GraphQLPaginatedLiabilityPaymentPlans>;
  providerReference?: Maybe<Scalars["AiloRN"]>;
  reference: Scalars["String"];
  referencedEntity?: Maybe<GraphQLLiabilityReferencedEntity>;
  relatingToManagement?: Maybe<Scalars["AiloRN"]>;
  status?: Maybe<GraphQLLiabilityStatus>;
  taxCategory: Scalars["String"];
  /**
   * If this liability has a defined termination date, what is the Amount owed from now to that termination day (incl. the termination day itself)
   * Null when there's no termination date known for the liability.
   * e.g. as of today, a Tenant owes nothing and even over paid $30. The property will be terminated in 1 month and 12 days.
   * This field should calculate how much will be owed between now and 1mth12days base on rent schedule, and minus $30 overpayment.
   */
  terminationAmountDue?: Maybe<GraphQLMoney>;
  /** The inclusive date of the liability's termination. The value is null if liability has not been terminated. */
  terminationDate?: Maybe<Scalars["Date"]>;
  timeZoneName?: Maybe<Scalars["ZoneId"]>;
  totalAmountPaid: GraphQLMoney;
  recurringFee?: Maybe<GraphQLRecurringFee>;
  owing?: Maybe<GraphQLRecurringOwing>;
};

export type GraphQLLiabilityEntriesArgs = {
  cursor?: Maybe<GraphQLBidirectionalPageCursor>;
  filterTypes?: Maybe<Array<GraphQLSourceType>>;
  sort?: Maybe<GraphQLLiabilityEntrySort>;
};

export type GraphQLLiabilityPaymentPlansArgs = {
  enabled: Scalars["Boolean"];
  payerLegalEntityId: Scalars["AiloRN"];
};

export type GraphQLLiabilityCalculation = {
  paidToDate: Scalars["Date"];
  timeZoneName: Scalars["ZoneId"];
};

export type GraphQLLiabilityCalculationInput = {
  asOf: Scalars["Date"];
  liabilityId: Scalars["ID"];
};

export type GraphQLLiabilityCategoryItem = {
  id: Scalars["ID"];
  category: Scalars["String"];
  amountLiable: GraphQLMoney;
};

export type GraphQLLiabilityCategoryReport = {
  items?: Maybe<Array<Maybe<GraphQLLiabilityCategoryItem>>>;
};

export type GraphQLLiabilityChangePreview = {
  earliestStartDateTime: Scalars["DateTime"];
  effectivePaidToDate?: Maybe<Scalars["Date"]>;
  effectivePaidToDateWithProposedPlan?: Maybe<Scalars["Date"]>;
  mergedPlans: Array<Maybe<GraphQLPlan>>;
  /** @deprecated Use `effectivePaidToDate` instead */
  paidToDate?: Maybe<Scalars["DateTime"]>;
  /** @deprecated Use `effectivePaidToDateWithProposedPlan` instead */
  paidToDateWithProposedPlan?: Maybe<Scalars["DateTime"]>;
  requiredAdjustment: GraphQLMoney;
};

export type GraphQLLiabilityEntry = {
  amount: GraphQLMoney;
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<GraphQLActionInitiator>;
  /** The date of the entry to be shown to consumers. This is the latest of createdAt and effectiveAt. */
  displayDate: Scalars["DateTime"];
  effectiveAt: Scalars["DateTime"];
  entryType: GraphQLSourceType;
  id: Scalars["ID"];
  liability: GraphQLLiability;
  /** @deprecated Use `liability` */
  liabilityId: Scalars["ID"];
  /** @deprecated Use status in PaymentLiabilityEntry businessTransaction */
  status?: Maybe<GraphQLBusinessTxStatusEnum>;
};

export type GraphQLLiabilityEntrySort = {
  field: GraphQLLiabilityEntrySortField;
};

export enum GraphQLLiabilityEntrySortField {
  DisplayDate = "DISPLAY_DATE",
  EffectiveAt = "EFFECTIVE_AT",
}

export type GraphQLLiabilityPaymentPlan = {
  createdAt: Scalars["DateTime"];
  createdBy: Scalars["AiloRN"];
  details: GraphQLLiabilityPaymentPlanDetails;
  enabled: Scalars["Boolean"];
  id: Scalars["ID"];
  liabilityId: Scalars["ID"];
  owner: Scalars["AiloRN"];
};

export type GraphQLLiabilityPaymentPlanDetails = {
  amount: GraphQLMoney;
  anniversary: Scalars["Int"];
  createdAt: Scalars["DateTime"];
  createdBy: Scalars["AiloRN"];
  endDate?: Maybe<Scalars["Date"]>;
  frequency: GraphQLQuartzPlanFrequency;
  id: Scalars["ID"];
  liabilityPaymentPlanId: Scalars["ID"];
  paymentMethod: GraphQLPaymentMethod;
  paymentMethodId: Scalars["ID"];
  startDate: Scalars["Date"];
  timezoneId: Scalars["String"];
};

export enum GraphQLLiabilityPlanFrequency {
  Daily = "DAILY",
  Fortnightly = "FORTNIGHTLY",
  Monthly = "MONTHLY",
  OnceOff = "ONCE_OFF",
  Weekly = "WEEKLY",
}

export type GraphQLLiabilityPlanInput = {
  asOfDate?: Maybe<Scalars["DateTime"]>;
  liabilityId: Scalars["ID"];
  proposedPlans: Array<Maybe<GraphQLProposedPlan>>;
};

/**
 * There should be `RecurringFee` here as well,
 * but we temporarily do not support it.
 * (Should be done eventually with steps listed at https://github.com/ailohq/property-management-service/pull/241 )
 */
export type GraphQLLiabilityReferencedEntity =
  | GraphQLBill
  | GraphQLFee
  | GraphQLTenancy;

export type GraphQLLiabilityReport = {
  reference: Scalars["String"];
  reportItems?: Maybe<Array<Maybe<GraphQLLiabilityReportItem>>>;
};

export type GraphQLLiabilityReportItem = {
  amount: GraphQLMoney;
  /** @deprecated Use `daysInArrearsV2` */
  daysInArrears: Scalars["Int"];
  daysInArrearsV2: Scalars["Int"];
  nextDueDate: Scalars["DateTime"];
  outstandingBalance: GraphQLMoney;
  /** @deprecated Use `paidToDateV2` */
  paidToDate: Scalars["DateTime"];
  paidToDateV2: Scalars["DateTime"];
  paymentDate: Scalars["DateTime"];
  /** @deprecated Use `rentArrearsV2` */
  rentArrears: GraphQLMoney;
  rentArrearsV2: GraphQLMoney;
};

export type GraphQLLiabilityStatus = {
  archivedAt?: Maybe<Scalars["DateTime"]>;
  createdAt: Scalars["DateTime"];
  createdBy: Scalars["AiloRN"];
  id: Scalars["ID"];
  isArchived: Scalars["Boolean"];
  liabilityId: Scalars["ID"];
  payerKycCheckRequired: Scalars["Boolean"];
};

export type GraphQLLineItem = {
  id: Scalars["ID"];
  /** @deprecated Use `LineItem.id` instead */
  ailoRN: Scalars["AiloRN"];
  /** @deprecated Use `LineItem.taxInclusiveAmount` instead. */
  amount: GraphQLMoney;
  taxInclusiveAmount: GraphQLMoney;
  taxAmount: GraphQLMoney;
  description: Scalars["String"];
  isTax: Scalars["Boolean"];
  createdAt: Scalars["DateTime"];
  createdBy: Scalars["AiloRN"];
  modifiedBy: Scalars["AiloRN"];
};

export type GraphQLLineItemInput = {
  /** Tax inclusive amount. */
  amount: GraphQLMoneyInput;
  taxAmount?: Maybe<GraphQLMoneyInput>;
  description: Scalars["String"];
  isTax: Scalars["Boolean"];
};

export type GraphQLListAccountsFilters = {
  accountOwnerReference: Scalars["AiloRN"];
  accountReferences?: Maybe<Array<Scalars["AiloRN"]>>;
  accountSubtypes?: Maybe<Array<GraphQLAccountSubtype>>;
  accountTypes?: Maybe<Array<GraphQLAccountType>>;
  books?: Maybe<Array<GraphQLBook>>;
  /** Default: includeAccountsWithNonPositiveBalances = true */
  includeAccountsWithNonPositiveBalances?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLListAccountsSortParams = {
  direction: GraphQLSortDirection;
  field: GraphQLAccountSortField;
};

export type GraphQLListEntriesFilters = {
  accountOwnerReference: Scalars["AiloRN"];
  /**
   * Filter to include only entries which have account's reference match NS Entities.
   * NS Entities don't have "ailo:" prefix. Usage example: [ "authz:legalentity", "bill:bill" ]
   */
  accountReferenceNSEntities?: Maybe<Array<Scalars["String"]>>;
  accountReferences?: Maybe<Array<Scalars["AiloRN"]>>;
  accountSubtypes?: Maybe<Array<GraphQLAccountSubtype>>;
  accountTypes?: Maybe<Array<GraphQLAccountType>>;
  books?: Maybe<Array<GraphQLBook>>;
  /** Filter to include only entries which have created_at < createdBefore */
  createdBefore?: Maybe<Scalars["DateTime"]>;
  /** Filter to include only entries which have created_at >= createdFrom */
  createdFrom?: Maybe<Scalars["DateTime"]>;
  includeEmptyAccountBalance?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLListEntriesSortParams = {
  direction: GraphQLSortDirection;
  field: GraphQLEntrySortField;
};

export type GraphQLLocalDateRangeCondition = {
  gt?: Maybe<Scalars["LocalDate"]>;
  gte?: Maybe<Scalars["LocalDate"]>;
  lt?: Maybe<Scalars["LocalDate"]>;
  lte?: Maybe<Scalars["LocalDate"]>;
};

export type GraphQLLockTrustAccountInput = {
  lockedUpTo: Scalars["DateTime"];
  trustAccountAilorn: Scalars["AiloRN"];
};

export type GraphQLMailbox = {
  id: Scalars["AiloRN"];
  ownerId: Scalars["AiloRN"];
  organisationId: Scalars["AiloRN"];
  provider: GraphQLProvider;
  emailAddress: Scalars["String"];
};

export type GraphQLManageDepositActionMeta = {
  deposit?: Maybe<GraphQLTenancyDeposit>;
};

export type GraphQLManagement = {
  id: Scalars["ID"];
  ailoRN: Scalars["AiloRN"];
  isDraft?: Maybe<Scalars["Boolean"]>;
  managingEntity?: Maybe<GraphQLCompany>;
  firstPublishedAt?: Maybe<Scalars["DateTime"]>;
  owners?: Maybe<Array<Maybe<GraphQLOwnership>>>;
  endDate?: Maybe<Scalars["Date"]>;
  createdAt: Scalars["DateTime"];
  migratedAt?: Maybe<Scalars["DateTime"]>;
  terminationReason?: Maybe<GraphQLManagementTerminationReason>;
  terminationNotes?: Maybe<Scalars["String"]>;
  endAbility: GraphQLManagementEndAbility;
  endReason?: Maybe<GraphQLManagementEndReason>;
  endNote?: Maybe<Scalars["String"]>;
  managementFolioAilorn: Scalars["AiloRN"];
  managementFolio: GraphQLManagementFolio;
  /**
   * Tenancies with an end date before today's date,
   * Ordered by date range desc (the ones that have ended recently first).
   */
  formerTenancies?: Maybe<GraphQLBidirectionalPaginatedTenancies>;
  /** Ordered by date range desc (the ones that have been voided recently first). */
  voidedTenancies?: Maybe<GraphQLBidirectionalPaginatedTenancies>;
  /** Tenancy with a start date later than today */
  nextTenancy?: Maybe<GraphQLTenancy>;
  /** Tenancy with start date before or equal to today and closest to today's date */
  mostRecentTenancy?: Maybe<GraphQLTenancy>;
  /**
   * returns the first to exist of active, next or previous tenancy
   * in that order.
   */
  mostRelevantTenancy?: Maybe<GraphQLTenancy>;
  currentOrNextManagementFeeSchedule?: Maybe<GraphQLManagementFeeSchedule>;
  fees?: Maybe<GraphQLPaginatedFees>;
  recurringFees: Array<GraphQLRecurringFee>;
  property: GraphQLProperty;
  files?: Maybe<GraphQLPaginatedFiles>;
  note?: Maybe<GraphQLManagementNote>;
  currentManagementAgreement?: Maybe<GraphQLManagementAgreement>;
  currentOrNextManagementAgreement?: Maybe<GraphQLManagementAgreement>;
  allManagementAgreements: Array<GraphQLManagementAgreement>;
  allTenancies?: Maybe<Array<Maybe<GraphQLTenancy>>>;
  team?: Maybe<GraphQLTeam>;
  /** Statements with subject = Mangement Ailorn */
  statements?: Maybe<GraphQLPaginatedStatements>;
  projects?: Maybe<GraphQLPaginatedProjects>;
  ownerContacts: Array<GraphQLContact>;
};

export type GraphQLManagementFormerTenanciesArgs = {
  pageCursor?: Maybe<GraphQLTenancyCursor>;
};

export type GraphQLManagementVoidedTenanciesArgs = {
  pageCursor?: Maybe<GraphQLTenancyCursor>;
};

export type GraphQLManagementFeesArgs = {
  filter?: Maybe<GraphQLManagementFeeFilter>;
  cursor?: Maybe<GraphQLPageCursorWithoutSort>;
  sort?: Maybe<Array<GraphQLFeeSort>>;
};

export type GraphQLManagementFilesArgs = {
  pageCursor?: GraphQLPaginationParams;
};

export type GraphQLManagementStatementsArgs = {
  filter: GraphQLStatementFilter;
  cursor?: Maybe<GraphQLStatementCursor>;
  sort?: Maybe<Array<GraphQLStatementSort>>;
};

export type GraphQLManagementProjectsArgs = {
  pageCursor?: GraphQLProjectCursor;
};

export type GraphQLManagementAgreement = {
  id: Scalars["ID"];
  ailoRN: Scalars["AiloRN"];
  startDate?: Maybe<Scalars["String"]>;
  fixedTermEndDate?: Maybe<Scalars["String"]>;
  managementFeeSchedules?: Maybe<GraphQLPaginatedManagementFeeSchedules>;
  createdAt: Scalars["DateTime"];
  createdBy: Scalars["Int"];
  modifiedBy: Scalars["Int"];
};

export type GraphQLManagementAndTenancyInput = {
  propertyId?: Maybe<Scalars["ID"]>;
  property?: Maybe<GraphQLPropertyInput>;
  managingEntityId: Scalars["ID"];
  management: GraphQLManagementSetupInput;
  tenancy?: Maybe<GraphQLTenancySetupInput>;
};

export enum GraphQLManagementCannotBeEndedProblem {
  TenancyEndDateMissing = "TenancyEndDateMissing",
}

export type GraphQLManagementEndAbility = {
  canBeEnded: Scalars["Boolean"];
  problem?: Maybe<GraphQLManagementCannotBeEndedProblem>;
};

export type GraphQLManagementEndCause = {
  code: GraphQLManagementEndCauseCode;
  label: Scalars["String"];
};

export enum GraphQLManagementEndCauseCode {
  Fees = "Fees",
  LevelOfService = "LevelOfService",
  Communication = "Communication",
  ChangingTeamMembers = "ChangingTeamMembers",
  Other = "Other",
}

export type GraphQLManagementEndReason = {
  code: GraphQLManagementEndReasonCode;
  label: Scalars["String"];
  causes: Array<GraphQLManagementEndCause>;
};

export enum GraphQLManagementEndReasonCode {
  LostToCompetitor = "LostToCompetitor",
  LostToOwnerSelfManaging = "LostToOwnerSelfManaging",
  OwnerOrFamilyMovedIn = "OwnerOrFamilyMovedIn",
  ManagementTerminatedByOurAgency = "ManagementTerminatedByOurAgency",
  ManagementSoldToAnotherAgency = "ManagementSoldToAnotherAgency",
  PropertyRenovations = "PropertyRenovations",
  PropertySaleByOurAgency = "PropertySaleByOurAgency",
  PropertySaleByAnotherAgency = "PropertySaleByAnotherAgency",
  PropertySaleByOwner = "PropertySaleByOwner",
  Other = "Other",
  Offboarded = "Offboarded",
}

export type GraphQLManagementFeeBlueprint = {
  id: Scalars["ID"];
  ailorn: Scalars["AiloRN"];
  feeBlueprint: GraphQLFeeBlueprint;
  management: GraphQLManagement;
  fixedAmount?: Maybe<GraphQLMoney>;
  taxTreatment: GraphQLTaxTreatment;
  oneWeekRentPercentage?: Maybe<Scalars["Float"]>;
  chargeType: GraphQLFeeBlueprintChargeType;
  createdAt: Scalars["DateTime"];
  createdBy: GraphQLActionInitiator;
  modifiedAt?: Maybe<Scalars["DateTime"]>;
  modifiedBy?: Maybe<GraphQLActionInitiator>;
  archived: Scalars["Boolean"];
  archivedAt?: Maybe<Scalars["DateTime"]>;
  archivedBy?: Maybe<GraphQLActionInitiator>;
};

export type GraphQLManagementFeeBlueprintsQueryConditions = {
  managementId?: Maybe<Scalars["ID"]>;
  archived?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLManagementFeeFilter = {
  type?: Maybe<Array<GraphQLFeeType>>;
  appliedToAiloRN?: Maybe<Array<Scalars["AiloRN"]>>;
  status?: Maybe<Array<GraphQLFeeStatus>>;
};

export type GraphQLManagementFeeSchedule = {
  id: Scalars["ID"];
  ailoRN: Scalars["AiloRN"];
  /**
   * Percentage of rent that will deduce the fee amount.
   * In range 0 - 1.
   */
  percent: Scalars["Float"];
  startDate: Scalars["String"];
  management: GraphQLManagement;
  managementAgreement: GraphQLManagementAgreement;
};

export type GraphQLManagementFilterAddressSimilarityInput = {
  search: Scalars["String"];
  /**
   * Threshold from 0 to 1 for how similar returned results must be
   * 0: All results
   * 1: Extremely similar
   */
  threshold?: Scalars["Float"];
};

export type GraphQLManagementFilterParams = {
  name: GraphQLManagementFilterTypes;
  args?: Maybe<GraphQLMgmtFilterArgInput>;
};

export enum GraphQLManagementFilterTypes {
  HasActiveTenancyInArrears = "HasActiveTenancyInArrears",
  HasActiveTenancyInArrearsFromOwing = "HasActiveTenancyInArrearsFromOwing",
  HasOverdueTenancy = "HasOverdueTenancy",
  HasOverdueTenancyFromOwing = "HasOverdueTenancyFromOwing",
  HasActiveTenancy = "HasActiveTenancy",
  HasTenancyUpForRentReviewOrLeaseRenewal = "HasTenancyUpForRentReviewOrLeaseRenewal",
  /**
   * enum BelongToTeams will eventually be deprecated,
   * use BelongToTeamsAndUnassigned instead
   */
  BelongToTeams = "BelongToTeams",
  BelongToTeamsAndUnassigned = "BelongToTeamsAndUnassigned",
  Active = "Active",
  DefaultPropertyList = "DefaultPropertyList",
  Terminated = "Terminated",
  HasOccupancyStatus = "HasOccupancyStatus",
  AddressSimilarity = "AddressSimilarity",
  ExcludeLost = "ExcludeLost",
}

export type GraphQLManagementFolio = {
  id: Scalars["ID"];
  ailorn: Scalars["AiloRN"];
  managingEntity?: Maybe<GraphQLCompany>;
  owners: Array<GraphQLManagementFolioOwnership>;
  managements: GraphQLPaginatedManagements;
  wallet?: Maybe<GraphQLWallet>;
};

export type GraphQLManagementFolioManagementsArgs = {
  paginationParams?: GraphQLPaginationParams;
};

export type GraphQLManagementFolioOwnership = {
  managementFolio: GraphQLManagementFolio;
  owner?: Maybe<GraphQLLegalEntity>;
  startDate: Scalars["LocalDate"];
  isPrimary: Scalars["Boolean"];
  consumerInvite?: Maybe<GraphQLConsumerInvite>;
};

export type GraphQLManagementNote = {
  id: Scalars["ID"];
  ailoRN: Scalars["AiloRN"];
  management: GraphQLManagement;
  note: Scalars["String"];
};

export type GraphQLManagementPropertyAddress = GraphQLContactPropertyAddress & {
  managementAilorn: Scalars["AiloRN"];
  unitStreetNumber: Scalars["String"];
  streetName: Scalars["String"];
  suburb?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  postcode?: Maybe<Scalars["String"]>;
  country: Scalars["String"];
  /** <unitStreetNumber> <streetName> */
  shortAddress: Scalars["String"];
  firstPublishedAt?: Maybe<Scalars["DateTime"]>;
  endDate?: Maybe<Scalars["Date"]>;
};

export type GraphQLManagementSetupInput = {
  startDate: Scalars["String"];
  fixedTermEndDate?: Maybe<Scalars["String"]>;
  endDate?: Maybe<Scalars["String"]>;
  percent: Scalars["Float"];
  owners: Array<GraphQLOwnershipSetupInput>;
};

export enum GraphQLManagementTerminationReason {
  Lost = "Lost",
  OffBoarded = "OffBoarded",
}

export type GraphQLMessage = {
  id: Scalars["AiloRN"];
  sentAt: Scalars["ISODateTime"];
  createdAt: Scalars["ISODateTime"];
  /** @deprecated Prefer senderV2 field */
  sender?: Maybe<GraphQLUser>;
  senderV2?: Maybe<GraphQLSender>;
  body: GraphQLMessageBody;
  meta?: Maybe<Scalars["JSON"]>;
  chat?: Maybe<GraphQLChat>;
};

export type GraphQLMessageBody = {
  parts: Array<GraphQLMessagePart>;
};

export type GraphQLMessageBodyV0 = {
  parts: Array<GraphQLMessagePartV0>;
};

export type GraphQLMessageFilePart = GraphQLMessagePart & {
  type: GraphQLMessagePartType;
  file?: Maybe<GraphQLFile>;
};

export type GraphQLMessageFilePartV0 = GraphQLMessagePartV0 & {
  type: GraphQLMessagePartTypeV0;
  file?: Maybe<GraphQLFile>;
};

export type GraphQLMessageInput = {
  chatId?: Maybe<Scalars["AiloRN"]>;
  sentAt: Scalars["ISODateTime"];
  parts: Array<GraphQLMessagePartInput>;
};

export type GraphQLMessageInputV0 = {
  chatId?: Maybe<Scalars["AiloRN"]>;
  sentAt: Scalars["ISODateTime"];
  parts: Array<GraphQLMessagePartInputV0>;
};

export type GraphQLMessageInputV2 = {
  text?: Maybe<Scalars["String"]>;
  fileAilorns: Array<Scalars["AiloRN"]>;
};

export type GraphQLMessagePart = {
  type: GraphQLMessagePartType;
};

export type GraphQLMessagePartInput = {
  type: GraphQLMessagePartType;
  text?: Maybe<Scalars["String"]>;
  file?: Maybe<GraphQLFileInput>;
};

export type GraphQLMessagePartInputV0 = {
  type: GraphQLMessagePartTypeV0;
  text?: Maybe<Scalars["String"]>;
  file?: Maybe<GraphQLFileInputV0>;
};

export enum GraphQLMessagePartType {
  Text = "text",
  File = "file",
}

export enum GraphQLMessagePartTypeV0 {
  Text = "text",
  File = "file",
}

export type GraphQLMessagePartV0 = {
  type: GraphQLMessagePartTypeV0;
};

export type GraphQLMessageSummaryV2 = {
  /**
   * The first portion of the message, truncated at 64 characters.
   * If the message contains only attachments, this will contain
   * a text summary, e.g. "sent 2 files".
   */
  snippet: Scalars["String"];
  attachmentCount: Scalars["Int"];
  sentAt: Scalars["ISODateTime"];
  sender: GraphQLContact;
};

export type GraphQLMessageTextPart = GraphQLMessagePart & {
  type: GraphQLMessagePartType;
  text: Scalars["String"];
};

export type GraphQLMessageTextPartV0 = GraphQLMessagePartV0 & {
  type: GraphQLMessagePartTypeV0;
  text: Scalars["String"];
};

export type GraphQLMessageV0 = {
  id: Scalars["AiloRN"];
  sentAt: Scalars["ISODateTime"];
  createdAt: Scalars["ISODateTime"];
  /** @deprecated Prefer senderV2 field */
  sender?: Maybe<GraphQLUser>;
  senderV2?: Maybe<GraphQLSenderV0>;
  body: GraphQLMessageBodyV0;
  meta?: Maybe<Scalars["JSON"]>;
  chat?: Maybe<GraphQLChatV0>;
};

export type GraphQLMessageV2 = {
  ailorn: Scalars["AiloRN"];
  sender: GraphQLContact;
  sentAt: Scalars["ISODateTime"];
  text?: Maybe<Scalars["String"]>;
  files: Array<GraphQLFile>;
};

export type GraphQLMgmtFilterArgInput = {
  BelongToTeams?: Maybe<Array<Scalars["AiloRN"]>>;
  BelongToTeamsAndUnassigned?: Maybe<GraphQLBelongToTeamsArgInput>;
  HasOccupancyStatus?: Maybe<Array<GraphQLOccupancyStatus>>;
  AddressSimilarity?: Maybe<GraphQLManagementFilterAddressSimilarityInput>;
};

export type GraphQLMigratingManagement = {
  id: Scalars["ID"];
  organisation?: Maybe<GraphQLOrganisation>;
  legalEntity?: Maybe<GraphQLLegalEntity>;
  trustManagementId: Scalars["String"];
  trustTenancyId?: Maybe<Scalars["String"]>;
  ailoManagement?: Maybe<GraphQLManagement>;
  ailoTenancy?: Maybe<GraphQLTenancy>;
  body: Scalars["JSON"];
  createdAt: Scalars["DateTime"];
  modifiedAt: Scalars["DateTime"];
  modifiedBy?: Maybe<GraphQLActionInitiator>;
  healthcheckRunAt?: Maybe<Scalars["DateTime"]>;
  portfolioName?: Maybe<Scalars["String"]>;
  status: GraphQLMigratingManagementStatus;
  statusChangedAt: Scalars["DateTime"];
  statusChangedBy?: Maybe<GraphQLActionInitiator>;
  approvedBy?: Maybe<GraphQLActionInitiator>;
  approvedByDisplay?: Maybe<Scalars["String"]>;
  approvedAt?: Maybe<Scalars["DateTime"]>;
  migrationFailureReason?: Maybe<Scalars["String"]>;
  exclusionReason?: Maybe<Scalars["String"]>;
  exclusionNotes?: Maybe<Scalars["String"]>;
  hasVacatingTenancy: Scalars["Boolean"];
  migrateAsVacant: Scalars["Boolean"];
  errors?: Maybe<Scalars["JSON"]>;
  postApprovalTasks?: Maybe<Scalars["JSON"]>;
  batchRef?: Maybe<Scalars["String"]>;
  paidTo?: Maybe<Scalars["Date"]>;
  partialPaidCents?: Maybe<Scalars["String"]>;
  /** Simplified publish status for display to users, only relevant when status is Approved or InProgress */
  publishStatus?: Maybe<GraphQLMigratingManagementPublishStatus>;
};

export enum GraphQLMigratingManagementPublishStatus {
  Failed = "Failed",
  InProgress = "InProgress",
  Approved = "Approved",
}

export enum GraphQLMigratingManagementSortField {
  Id = "Id",
  CreatedAt = "CreatedAt",
  ModifiedAt = "ModifiedAt",
  ApprovedAt = "ApprovedAt",
  Address = "Address",
  DataIssues = "DataIssues",
  Portfolio = "Portfolio",
  StatusChangedAt = "StatusChangedAt",
  PublishStatus = "PublishStatus",
  ExclusionReason = "ExclusionReason",
}

export type GraphQLMigratingManagementSortParams = {
  field: GraphQLMigratingManagementSortField;
  direction: GraphQLSortDirection;
};

export enum GraphQLMigratingManagementStatus {
  Created = "Created",
  Ignored = "Ignored",
  Excluded = "Excluded",
  InProgress = "InProgress",
  Approved = "Approved",
  Imported = "Imported",
}

export type GraphQLMigratingManagementsFilters = {
  ids?: Maybe<Array<Scalars["ID"]>>;
  organisationId?: Maybe<Scalars["AiloRN"]>;
  search?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  batchRef?: Maybe<Scalars["String"]>;
  portfolioName?: Maybe<Scalars["String"]>;
  withErrors?: Maybe<Scalars["Boolean"]>;
  withPostApprovalTasks?: Maybe<Scalars["Boolean"]>;
  withFailedMigration?: Maybe<Scalars["Boolean"]>;
};

export enum GraphQLMigrationIssueKey {
  VacatingTenancy = "VacatingTenancy",
}

export type GraphQLMigrationTask = {
  legalEntityId: Scalars["AiloRN"];
  company?: Maybe<GraphQLCompany>;
  status: GraphQLMigrationTaskStatus;
  startedBy?: Maybe<GraphQLActionInitiator>;
  startedAt: Scalars["DateTime"];
  finishedAt?: Maybe<Scalars["DateTime"]>;
  lastError?: Maybe<Scalars["String"]>;
};

export enum GraphQLMigrationTaskStatus {
  Ingesting = "Ingesting",
  Transforming = "Transforming",
  Success = "Success",
  Failed = "Failed",
}

export type GraphQLMoney = {
  cents: Scalars["Long"];
};

export type GraphQLMoneyInput = {
  cents: Scalars["Long"];
};

export type GraphQLMutation = {
  unlockReportPeriod: GraphQLReportPeriodLockChangeResult;
  createOneTrustAccountStatementBalance: GraphQLTrustAccountStatementBalance;
  createOneTrustAccount: GraphQLTrustAccount;
  createStatements: GraphQLCreateStatementsResponse;
  createStatementsWithSubject: GraphQLCreateStatementsResponse;
  createStatementsForAllManagements: Scalars["String"];
  retryCreateStatement?: Maybe<GraphQLStatement>;
  addTrustAccount?: Maybe<GraphQLTrustBankAccount>;
  disburseFundsToTrustAccount?: Maybe<GraphQLDisburseFundsResponse>;
  addCentrepayDirective: GraphQLAddCentrepayDirectiveOutput;
  deleteCentrepayDirective: Scalars["Boolean"];
  upsertCentrepayFeeOverride: GraphQLCentrepayFeeSetting;
  upsertOfflineProcessingEnabledForTenancy: GraphQLOfflinePaymentProcessingEnabled;
  createTenancy?: Maybe<GraphQLTenancy>;
  updateEndOfTenancy?: Maybe<GraphQLTenancy>;
  updateIngoingTenancy?: Maybe<GraphQLTenancy>;
  reviewLease?: Maybe<GraphQLTenancy>;
  voidTenancy: GraphQLVoidTenancyPayload;
  createRents?: Maybe<GraphQLCreateRentsPayload>;
  deleteRent?: Maybe<GraphQLDeleteRentPayload>;
  /** @deprecated Use `createFeeBlueprint` instead. */
  createRecurringFeeBlueprint?: Maybe<GraphQLRecurringFeeBlueprint>;
  createFeeBlueprint?: Maybe<GraphQLFeeBlueprint>;
  findOrCreateFeeBlueprint?: Maybe<GraphQLFeeBlueprint>;
  /** @deprecated Use `updateFeeBlueprint` instead. */
  updateRecurringFeeBlueprint?: Maybe<GraphQLRecurringFeeBlueprint>;
  updateFeeBlueprint?: Maybe<GraphQLFeeBlueprint>;
  clearManagementEnd?: Maybe<GraphQLClearManagementEndPayload>;
  updateManagementFee: GraphQLManagementFeeSchedule;
  createFee?: Maybe<GraphQLFee>;
  updateFee?: Maybe<GraphQLFee>;
  createRecurringFee?: Maybe<GraphQLRecurringFee>;
  createRecurringFees?: Maybe<Array<GraphQLRecurringFee>>;
  /**
   * Cancels the recurring fee by setting its end date, to stop charging the fee.
   * Any outstanding balance still needs to be paid off.
   */
  cancelRecurringFee?: Maybe<GraphQLRecurringFee>;
  updateRecurringFee?: Maybe<GraphQLRecurringFee>;
  setupManagementAndTenancy?: Maybe<GraphQLSetupResult>;
  createProperty?: Maybe<GraphQLProperty>;
  updateProperty?: Maybe<GraphQLProperty>;
  createRentCredit?: Maybe<GraphQLRentCreditDetailsPayload>;
  createTenancyAgreement?: Maybe<GraphQLCreateTenancyAgreementPayload>;
  updateTenancyAgreement?: Maybe<GraphQLUpdateTenancyAgreementPayload>;
  /** @deprecated Use `createRentReview` instead. */
  reviewRent?: Maybe<GraphQLTenancy>;
  createRentReview?: Maybe<GraphQLCreateRentReviewPayload>;
  editRentReview?: Maybe<GraphQLEditRentReviewPayload>;
  attachFilesToTenancy?: Maybe<GraphQLTenancy>;
  attachFilesToManagement?: Maybe<GraphQLManagement>;
  deleteTenancyFile?: Maybe<GraphQLDeleteTenancyFilePayload>;
  deleteManagementFile?: Maybe<GraphQLDeleteManagementFilePayload>;
  findOrCreateManagementFeeBlueprint?: Maybe<GraphQLManagementFeeBlueprint>;
  createManagementFeeBlueprint?: Maybe<GraphQLManagementFeeBlueprint>;
  updateManagementFeeBlueprint?: Maybe<GraphQLManagementFeeBlueprint>;
  createOrUpdateManagementNote?: Maybe<GraphQLCreateOrUpdateManagementNotePayload>;
  endManagementV2: GraphQLEndManagementV2Payload;
  deleteDraftManagement?: Maybe<Scalars["ID"]>;
  publishManagement?: Maybe<GraphQLManagement>;
  updateOwnerShares?: Maybe<GraphQLManagement>;
  deleteDraftTenancy?: Maybe<Scalars["ID"]>;
  publishTenancy?: Maybe<GraphQLTenancy>;
  alterTenancyStartDate?: Maybe<GraphQLTenancy>;
  createTenancyBondAccount: GraphQLTenancyBondAccount;
  createTenancyBond?: Maybe<GraphQLTenancyBond>;
  updateTenancyBond?: Maybe<GraphQLTenancyBond>;
  upsertTenancyBondClaims: Array<Maybe<GraphQLTenancyBondClaim>>;
  removeBondClaim: GraphQLTenancyBond;
  disburseTenancyBondClaims: GraphQLTenancyBond;
  cancelTenancyDeposit?: Maybe<GraphQLTenancyDeposit>;
  transferTenancyDeposit?: Maybe<GraphQLTenancyDeposit>;
  markTenancyDepositAsReleased?: Maybe<GraphQLTenancyDeposit>;
  createTenantship: GraphQLCreateTenantshipPayload;
  removeTenantship: GraphQLRemoveTenantshipPayload;
  createTeam?: Maybe<GraphQLTeam>;
  movePeopleToTeam?: Maybe<GraphQLTeam>;
  moveManagementsToTeam?: Maybe<GraphQLTeam>;
  createCentrepayAccount: GraphQLCentrepayAccount;
  createOfflinePaymentAccount: GraphQLOfflinePaymentAccount;
  createProject?: Maybe<GraphQLProject>;
  updateProject?: Maybe<GraphQLProject>;
  closeProject?: Maybe<GraphQLProject>;
  reopenProject?: Maybe<GraphQLProject>;
  archiveProject?: Maybe<Scalars["ID"]>;
  unarchiveProject?: Maybe<GraphQLProject>;
  createAction?: Maybe<GraphQLAction>;
  updateAction?: Maybe<GraphQLAction>;
  reassignAction?: Maybe<GraphQLAction>;
  updateActionDueDate?: Maybe<GraphQLAction>;
  completeAction?: Maybe<GraphQLAction>;
  uncompleteAction?: Maybe<GraphQLAction>;
  addProjectFiles?: Maybe<Array<Maybe<GraphQLProjectFile>>>;
  removeProjectFiles?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  completeAssignTenancyAgreementAction?: Maybe<GraphQLAction>;
  completeAssignRentAction?: Maybe<GraphQLCompleteAssignRentActionPayload>;
  completeAssignTenancyAction?: Maybe<GraphQLCompleteAssignTenancyActionPayload>;
  completeAssignNewManagementAction?: Maybe<GraphQLCompleteAssignNewManagementActionPayload>;
  completeAssignFormAction?: Maybe<GraphQLCompleteAssignFormActionPayload>;
  lockTrustAccount?: Maybe<GraphQLTrustAccountLock>;
  payFromWallet?: Maybe<GraphQLSagaStatusResponse>;
  receiptFunds?: Maybe<GraphQLSagaStatusResponse>;
  walletTransfer?: Maybe<GraphQLSagaStatusResponse>;
  createRecurringOwing?: Maybe<GraphQLRecurringOwing>;
  updateRecurringOwing?: Maybe<GraphQLRecurringOwing>;
  /** @deprecated Use createOrUpdateUserPreferenceV2 */
  createOrUpdateUserPreference?: Maybe<GraphQLUserPreference>;
  createOrUpdateUserPreferenceV2?: Maybe<Array<Maybe<GraphQLUserPreference>>>;
  sendCentrepayOnboardingHelpLink?: Maybe<GraphQLNotificationSent>;
  sendCentrepayAccountSetupInstructions?: Maybe<GraphQLNotificationSent>;
  createExternalTrustAccount?: Maybe<GraphQLExternalTrustAccount>;
  disableExternalTrustAccount?: Maybe<GraphQLExternalTrustAccount>;
  enableExternalTrustAccount?: Maybe<GraphQLExternalTrustAccount>;
  uploadMigrationCSV?: Maybe<Array<GraphQLMigratingManagement>>;
  updateMigratingManagement?: Maybe<GraphQLMigratingManagement>;
  removeTenancyFromMigratingManagement?: Maybe<GraphQLMigratingManagement>;
  approveMigratingManagements?: Maybe<GraphQLBulkActionMigratingManagementsPayload>;
  unapproveMigratingManagements?: Maybe<GraphQLBulkActionMigratingManagementsPayload>;
  migrateManagements?: Maybe<GraphQLBulkActionMigratingManagementsPayload>;
  publishMigratingManagements?: Maybe<GraphQLBulkActionMigratingManagementsPayload>;
  startMigration?: Maybe<GraphQLMigrationTask>;
  startAllMigrationTasks?: Maybe<GraphQLBulkActionMigrationTasksPayload>;
  /** @deprecated Use `createPaymentMethod` instead */
  addBPay?: Maybe<GraphQLBPay>;
  /** @deprecated Use `createPaymentMethod` instead */
  addBankAccount?: Maybe<GraphQLBankAccount>;
  /** @deprecated Use `createPaymentMethod` instead */
  addCreditCard?: Maybe<GraphQLCreditCard>;
  adjustLiabilityEntry?: Maybe<GraphQLAdjustmentLiabilityEntry>;
  archiveLiability: GraphQLLiabilityStatus;
  cancelAutoPay?: Maybe<GraphQLResponseStatus>;
  cancelAutoPayLiabilityStatus?: Maybe<GraphQLAutoPayLiabilityStatus>;
  cancelAutoWithdrawPlan?: Maybe<GraphQLAutoWithdrawPlan>;
  cancelLiabilityPaymentPlan?: Maybe<GraphQLLiabilityPaymentPlan>;
  cleanOrphanedBusinessTransaction: GraphQLBusinessTransactionStatus;
  cleanUnclearedBusinessTransaction: GraphQLBusinessTransactionStatus;
  /**
   * Use for BILL HOP1 late reversal and HOP2 has already been SUCCESS and cleared. Details: http://ailo.atlassian.net/wiki/spaces/TS/pages/1622245700/How+to+do+all+Reversal+Refund+like+things
   * No real world payment transaction will be created, purely Ailo adjustment internally.
   */
  createAdjustmentForPayer: GraphQLBusinessTransaction;
  createAutoWithdrawPlanV2?: Maybe<GraphQLAutoWithdrawPlan>;
  createBankAccountBlacklist: GraphQLBankAccountBlacklist;
  createLiabilityPaymentPlan?: Maybe<GraphQLLiabilityPaymentPlan>;
  createOrUpdatePaymentMethodAiloFeeWaiver: Array<
    Maybe<GraphQLPaymentMethodAiloFees>
  >;
  createOverdraftAllowance: GraphQLOverdraftAllowance;
  createPaymentMethod?: Maybe<GraphQLPaymentMethod>;
  createUpdateAutoPay?: Maybe<GraphQLResponseStatus>;
  creditFromAiloBank?: Maybe<GraphQLResponseStatus>;
  deleteBankAccountBlacklist: GraphQLBankAccountBlacklist;
  /**
   * Graphql best practice require mutation return something.
   * This should always return true.
   * Exceptions may be thrown in error.
   */
  deletePaymentMethod: Scalars["Boolean"];
  emitLiabilityStateChangedEvent?: Maybe<GraphQLLiability>;
  generateLiabilityEntries: GraphQLGenerateLiabilityEntriesPayload;
  /**
   * This should only be used by admin or service-to-service communication.
   * This is used to prevent creating duplicate bank account.
   * This never creates once-off bank account.
   */
  getOrCreateWalletOwnerAndBankAccount?: Maybe<GraphQLBankAccount>;
  partialRefundLiabilityPayment: Array<GraphQLRefundOutput>;
  payLiability?: Maybe<GraphQLResponseStatus>;
  payLiabilityFromWallet?: Maybe<GraphQLResponseStatus>;
  /**
   * Use for RENT/FEE/BILL HOP1 REDUND. Details: https://ailo.atlassian.net/wiki/spaces/TS/pages/1622245700/How+to+do+all+Reversal+Refund+like+things
   * If the payment is coming from a payment method, it will credit the money back to the payment method, so real world payment transaction will be initiated
   * If the payment is coming from a wallet, it will credit the money back to the wallet.
   */
  refundLiabilityPayment: Array<GraphQLRefundOutput>;
  reverseAdjustment?: Maybe<GraphQLAdjustmentLiabilityEntry>;
  /**
   * Use for RENT late revsersal, make sure the management fee has been refund first before late reversal of RENT. Details: https://ailo.atlassian.net/wiki/spaces/TS/pages/1622245700/How+to+do+all+Reversal+Refund+like+things
   * Use for BILL Hop2 late reversal, make sure the param are bill HOP2 BT id, no overdraft allowance will be created against Ailo bank wallet.
   * Use for BILL Hop1 late reversal and HOP2 VOIDed or FAILed.  make sure the param are bill HOP1 BT id, no overdraft allowance will be created against supplier wallet
   * Use for wallet withdraw late reversal, no overdraft allowance will be created.
   * No real world payment transaction will be created, purely Ailo adjustment internally.
   */
  reverseBusinessTx: GraphQLBusinessTransaction;
  transferToWallet?: Maybe<GraphQLResponseStatus>;
  updateAutoWithdrawPlanV2?: Maybe<GraphQLAutoWithdrawPlan>;
  updateLiabilityPaymentPlan?: Maybe<GraphQLLiabilityPaymentPlan>;
  upsertAutoPayLiabilityStatus?: Maybe<GraphQLAutoPayLiabilityStatus>;
  withdrawFromWallet?: Maybe<GraphQLResponseStatus>;
  writeOff?: Maybe<GraphQLResponseStatus>;
  createOneKey: GraphQLKey;
  updateOneKey: GraphQLKey;
  deleteOneKey: GraphQLKeyDeleteResponse;
  createInspection: GraphQLCreateInspectionResult;
  updateInspection: GraphQLUpdateInspectionResult;
  removeInspection: GraphQLRemoveInspectionResult;
  createInspectionArea: GraphQLCreateInspectionAreaResult;
  updateInspectionArea: GraphQLUpdateInspectionAreaResult;
  removeInspectionArea: GraphQLRemoveInspectionAreaResult;
  createInspectionAreaFile: GraphQLCreateInspectionAreaFileResult;
  removeInspectionAreaFile: GraphQLRemoveInspectionAreaFileResult;
  createInspectionFeature: GraphQLCreateInspectionFeatureResult;
  updateInspectionFeature: GraphQLUpdateInspectionFeatureResult;
  removeInspectionFeature: GraphQLRemoveInspectionFeatureResult;
  createInspectionFeatureFile: GraphQLCreateInspectionFeatureFileResult;
  removeInspectionFeatureFile: GraphQLRemoveInspectionFeatureFileResult;
  createInspectionAppointments: GraphQLCreateInspectionAppointmentsResult;
  updateInspectionAppointment: GraphQLUpdateInspectionAppointmentResult;
  cancelInspectionAppointment: GraphQLCancelInspectionAppointmentResult;
  generateInspectionReport: GraphQLGenerateInspectionReportResult;
  createBanana?: Maybe<GraphQLBanana>;
  createReiToken: GraphQLReiToken;
  updateReiToken: GraphQLReiToken;
  removeReiToken: GraphQLReiToken;
  createReiFormFromUserTemplate: GraphQLReiForm;
  createAiloForm: GraphQLCreateAiloFormResult;
  updateAiloForm: GraphQLUpdateAiloFormResult;
  /**
   * Creates a new file entity attached to the current user,
   * and returns it together with an AWS S3 Upload URL to which the user can upload a file.
   */
  startFileUpload: GraphQLFileWithUploadUrl;
  /**
   * Validate if the file has been uploaded.
   *
   * File needs to belong to the current user,
   * or if it's a m2m call, requires "file:claim" scope.
   */
  validateFile: GraphQLValidateFileResponse;
  /**
   * Claims files and sets their permitted read entities (related to the claimer).
   *
   * Requires "file:claim" scope.
   */
  claimFiles: GraphQLClaimFilesResponse;
  /**
   * Unclaims files and removes all read permissions (related to the claimer).
   *
   * Requires "file:claim" scope.
   */
  unclaimFiles: Scalars["Boolean"];
  createFileShareLinks: Array<GraphQLFileShareLink>;
  deleteFileShareLinks: GraphQLOkResult;
  createZipFile: GraphQLFile;
  subscribeCustomer?: Maybe<GraphQLPlatformSubscription>;
  setSubscriptionEndDate?: Maybe<GraphQLPlatformSubscription>;
  createOtherContact: GraphQLContact;
  findOrCreateOtherContacts: Array<GraphQLContact>;
  syncLegalEntity: Array<GraphQLContact>;
  createChatV2?: Maybe<GraphQLChatV2>;
  createThreadV2: GraphQLThreadV2;
  sendMessageV2: GraphQLMessageV2;
  acknowledgeThread?: Maybe<GraphQLThreadV2>;
  unacknowledgeThreadFromMessage?: Maybe<GraphQLThreadV2>;
  /** @deprecated legacy chat implementation */
  ackChat?: Maybe<GraphQLChat>;
  /** @deprecated legacy chat implementation */
  ackChatV0?: Maybe<GraphQLChatV0>;
  /** @deprecated legacy chat implementation */
  createChat?: Maybe<GraphQLChat>;
  /** @deprecated legacy chat implementation */
  createChatV0?: Maybe<GraphQLChatV0>;
  /** @deprecated legacy chat implementation */
  postMessage?: Maybe<GraphQLMessage>;
  /** @deprecated legacy chat implementation */
  postMessageV0?: Maybe<GraphQLMessageV0>;
  createBill?: Maybe<GraphQLBill>;
  archiveBill?: Maybe<GraphQLBill>;
  addBillAttachments?: Maybe<GraphQLBill>;
  createPaymentReference?: Maybe<GraphQLPaymentReference>;
  findOrCreatePaymentReference?: Maybe<GraphQLPaymentReference>;
  createSupplier?: Maybe<GraphQLSupplier>;
  findOrCreateInternalSupplier?: Maybe<GraphQLSupplier>;
  archiveSupplier?: Maybe<GraphQLSupplier>;
  updateSupplier?: Maybe<GraphQLSupplier>;
  noopAutopayment?: Maybe<Scalars["Boolean"]>;
  sendEmailVerificationCode?: Maybe<GraphQLSendEmailVerificationResponse>;
  verifyEmail?: Maybe<GraphQLVerifyEmailResponse>;
  cancelEmailVerifications?: Maybe<Scalars["Boolean"]>;
  onboardUsers?: Maybe<Array<Maybe<GraphQLUser>>>;
  updateUserEmailAddress?: Maybe<GraphQLUser>;
  completeOnboardingTask?: Maybe<GraphQLUserOnboardingTask>;
  acceptTermsOfServices?: Maybe<GraphQLPerson>;
  updatePersonProfileDetails?: Maybe<GraphQLPerson>;
  createPerson?: Maybe<GraphQLPerson>;
  createUserForPerson?: Maybe<GraphQLPerson>;
  createPeople?: Maybe<Array<GraphQLPerson>>;
  updateCompanyProfileDetails?: Maybe<GraphQLCompany>;
  createCompany?: Maybe<GraphQLCompany>;
  addMemberToOrganisation?: Maybe<GraphQLOrganisationMembership>;
  removeMemberFromOrganisation?: Maybe<Scalars["Boolean"]>;
  addMemberToLegalEntity?: Maybe<GraphQLLegalEntityMembership>;
  removeMemberFromLegalEntity?: Maybe<Scalars["Boolean"]>;
  upsertCrn?: Maybe<GraphQLUpsertCrnOutput>;
  deleteCrn?: Maybe<Scalars["Boolean"]>;
  atpEmptyStarterSchemaNoop?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLMutationUnlockReportPeriodArgs = {
  input: GraphQLUnlockReportPeriodInput;
};

export type GraphQLMutationCreateOneTrustAccountStatementBalanceArgs = {
  input: GraphQLCreateOneTrustAccountStatementBalanceInput;
};

export type GraphQLMutationCreateOneTrustAccountArgs = {
  input: GraphQLCreateOneTrustAccountInput;
};

export type GraphQLMutationCreateStatementsArgs = {
  input: GraphQLCreateStatementInput;
};

export type GraphQLMutationCreateStatementsWithSubjectArgs = {
  input: GraphQLCreateStatementWithSubjectInput;
};

export type GraphQLMutationCreateStatementsForAllManagementsArgs = {
  input: GraphQLCreateStatementsForAllManagementsInput;
};

export type GraphQLMutationRetryCreateStatementArgs = {
  progressAiloRN: Scalars["AiloRN"];
};

export type GraphQLMutationAddTrustAccountArgs = {
  input: GraphQLAddTrustAccountInput;
};

export type GraphQLMutationDisburseFundsToTrustAccountArgs = {
  input: GraphQLDisburseToTrustAccountInput;
};

export type GraphQLMutationAddCentrepayDirectiveArgs = {
  input: GraphQLAddCentrepayDirectiveInput;
};

export type GraphQLMutationDeleteCentrepayDirectiveArgs = {
  input: GraphQLDeleteCentrepayDirectiveInput;
};

export type GraphQLMutationUpsertCentrepayFeeOverrideArgs = {
  input: GraphQLCentrepayFeeOverrideInput;
};

export type GraphQLMutationUpsertOfflineProcessingEnabledForTenancyArgs = {
  input: GraphQLOfflinePaymentProcessingEnabledInput;
};

export type GraphQLMutationCreateTenancyArgs = {
  tenancyDetails: GraphQLTenancySetupInput;
  managementId: Scalars["ID"];
  autoPublish?: Maybe<Scalars["Boolean"]>;
  doNotNotify?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLMutationUpdateEndOfTenancyArgs = {
  tenancyId: Scalars["ID"];
  endDate?: Maybe<Scalars["Date"]>;
  reason?: Maybe<GraphQLVacatingReason>;
  notes?: Maybe<Scalars["String"]>;
};

export type GraphQLMutationUpdateIngoingTenancyArgs = {
  tenancyDetails: GraphQLIngoingTenancyUpdateInput;
};

export type GraphQLMutationReviewLeaseArgs = {
  tenancyId: Scalars["ID"];
  agreementDetails?: Maybe<GraphQLLeaseRenewalDetails>;
  allowCurrentTenancyAgreementToLapse?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLMutationVoidTenancyArgs = {
  tenancyId: Scalars["ID"];
};

export type GraphQLMutationCreateRentsArgs = {
  input: GraphQLCreateRentsInput;
};

export type GraphQLMutationDeleteRentArgs = {
  input: GraphQLDeleteRentInput;
};

export type GraphQLMutationCreateRecurringFeeBlueprintArgs = {
  input: GraphQLRecurringFeeBlueprintInput;
};

export type GraphQLMutationCreateFeeBlueprintArgs = {
  input: GraphQLCreateFeeBlueprintInput;
};

export type GraphQLMutationFindOrCreateFeeBlueprintArgs = {
  input: GraphQLFindOrCreateBlueprintInput;
};

export type GraphQLMutationUpdateRecurringFeeBlueprintArgs = {
  input: GraphQLUpdateRecurringFeeBlueprintInput;
};

export type GraphQLMutationUpdateFeeBlueprintArgs = {
  input: GraphQLUpdateFeeBlueprintInput;
};

export type GraphQLMutationClearManagementEndArgs = {
  managementId: Scalars["ID"];
};

export type GraphQLMutationUpdateManagementFeeArgs = {
  input: GraphQLUpdateManagementFeeInput;
};

export type GraphQLMutationCreateFeeArgs = {
  input: GraphQLCreateFeeInput;
};

export type GraphQLMutationUpdateFeeArgs = {
  input: GraphQLUpdateFeeInput;
};

export type GraphQLMutationCreateRecurringFeeArgs = {
  input: GraphQLRecurringFeeInput;
};

export type GraphQLMutationCreateRecurringFeesArgs = {
  input: Array<GraphQLRecurringFeeInput>;
};

export type GraphQLMutationCancelRecurringFeeArgs = {
  input: GraphQLCancelRecurringFeeInput;
};

export type GraphQLMutationUpdateRecurringFeeArgs = {
  input: GraphQLUpdateRecurringFeeInput;
};

export type GraphQLMutationSetupManagementAndTenancyArgs = {
  managementAndTenancyDetails: GraphQLManagementAndTenancyInput;
  autoPublish?: Maybe<Scalars["Boolean"]>;
  doNotNotify?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLMutationCreatePropertyArgs = {
  propertyDetails: GraphQLPropertyInput;
};

export type GraphQLMutationUpdatePropertyArgs = {
  updatePropertyInput: GraphQLUpdatePropertyInput;
};

export type GraphQLMutationCreateRentCreditArgs = {
  input: GraphQLRentCreditDetailsInput;
};

export type GraphQLMutationCreateTenancyAgreementArgs = {
  tenancyId: Scalars["ID"];
  agreementDetails: GraphQLTenancyAgreementDetails;
};

export type GraphQLMutationUpdateTenancyAgreementArgs = {
  input: GraphQLUpdateTenancyAgreementInput;
};

export type GraphQLMutationReviewRentArgs = {
  tenancyId: Scalars["ID"];
  rentDetails: GraphQLRentReviewDetails;
};

export type GraphQLMutationCreateRentReviewArgs = {
  tenancyId: Scalars["ID"];
  rentDetails: GraphQLRentReviewDetails;
};

export type GraphQLMutationEditRentReviewArgs = {
  input: GraphQLEditRentReviewInput;
};

export type GraphQLMutationAttachFilesToTenancyArgs = {
  tenancyId: Scalars["ID"];
  fileIds: Array<Scalars["AiloRN"]>;
};

export type GraphQLMutationAttachFilesToManagementArgs = {
  managementId: Scalars["ID"];
  fileIds: Array<Scalars["AiloRN"]>;
  fileOwnerAilorn?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLMutationDeleteTenancyFileArgs = {
  input: GraphQLDeleteTenancyFileInput;
};

export type GraphQLMutationDeleteManagementFileArgs = {
  input: GraphQLDeleteManagementFileInput;
};

export type GraphQLMutationFindOrCreateManagementFeeBlueprintArgs = {
  input: GraphQLFindOrCreateManagementFeeBlueprintInput;
};

export type GraphQLMutationCreateManagementFeeBlueprintArgs = {
  input: GraphQLCreateManagementFeeBlueprintInput;
};

export type GraphQLMutationUpdateManagementFeeBlueprintArgs = {
  input: GraphQLUpdateManagementFeeBlueprintInput;
};

export type GraphQLMutationCreateOrUpdateManagementNoteArgs = {
  input: GraphQLCreateOrUpdateManagementNoteInput;
};

export type GraphQLMutationEndManagementV2Args = {
  input: GraphQLEndManagementV2Input;
};

export type GraphQLMutationDeleteDraftManagementArgs = {
  managementId: Scalars["ID"];
};

export type GraphQLMutationPublishManagementArgs = {
  managementId: Scalars["ID"];
};

export type GraphQLMutationUpdateOwnerSharesArgs = {
  managementId: Scalars["ID"];
  ownerShares: Array<GraphQLOwnerShareInput>;
};

export type GraphQLMutationDeleteDraftTenancyArgs = {
  tenancyId: Scalars["ID"];
};

export type GraphQLMutationPublishTenancyArgs = {
  tenancyId: Scalars["ID"];
};

export type GraphQLMutationAlterTenancyStartDateArgs = {
  tenancyId: Scalars["ID"];
  startDate: Scalars["String"];
};

export type GraphQLMutationCreateTenancyBondAccountArgs = {
  managingEntity: Scalars["AiloRN"];
};

export type GraphQLMutationCreateTenancyBondArgs = {
  bondDetails: GraphQLCreateBondInput;
};

export type GraphQLMutationUpdateTenancyBondArgs = {
  bondDetails: GraphQLUpdateBondInput;
};

export type GraphQLMutationUpsertTenancyBondClaimsArgs = {
  bond: GraphQLUpsertTenancyBondClaims;
};

export type GraphQLMutationRemoveBondClaimArgs = {
  bondAilorn: Scalars["AiloRN"];
};

export type GraphQLMutationDisburseTenancyBondClaimsArgs = {
  bondId: Scalars["ID"];
};

export type GraphQLMutationCancelTenancyDepositArgs = {
  tenancyDepositId: Scalars["AiloRN"];
};

export type GraphQLMutationTransferTenancyDepositArgs = {
  tenancyDepositId: Scalars["AiloRN"];
  transferAmount?: Maybe<GraphQLMoneyInput>;
};

export type GraphQLMutationMarkTenancyDepositAsReleasedArgs = {
  tenancyDepositId: Scalars["AiloRN"];
};

export type GraphQLMutationCreateTenantshipArgs = {
  input: GraphQLCreateTenantshipInput;
};

export type GraphQLMutationRemoveTenantshipArgs = {
  input: GraphQLRemoveTenantshipInput;
};

export type GraphQLMutationCreateTeamArgs = {
  organisationId: Scalars["AiloRN"];
  name: Scalars["String"];
};

export type GraphQLMutationMovePeopleToTeamArgs = {
  memberIds: Array<Scalars["AiloRN"]>;
  teamId: Scalars["AiloRN"];
};

export type GraphQLMutationMoveManagementsToTeamArgs = {
  managementIds: Array<Scalars["AiloRN"]>;
  teamId: Scalars["AiloRN"];
};

export type GraphQLMutationCreateCentrepayAccountArgs = {
  managingEntity: Scalars["AiloRN"];
};

export type GraphQLMutationCreateOfflinePaymentAccountArgs = {
  managingEntity: Scalars["AiloRN"];
};

export type GraphQLMutationCreateProjectArgs = {
  input: GraphQLCreateProjectInput;
};

export type GraphQLMutationUpdateProjectArgs = {
  input: GraphQLUpdateProjectInput;
};

export type GraphQLMutationCloseProjectArgs = {
  id: Scalars["ID"];
};

export type GraphQLMutationReopenProjectArgs = {
  id: Scalars["ID"];
};

export type GraphQLMutationArchiveProjectArgs = {
  id: Scalars["ID"];
};

export type GraphQLMutationUnarchiveProjectArgs = {
  id: Scalars["ID"];
};

export type GraphQLMutationCreateActionArgs = {
  input: GraphQLCreateActionInput;
};

export type GraphQLMutationUpdateActionArgs = {
  input: GraphQLUpdateActionInput;
};

export type GraphQLMutationReassignActionArgs = {
  id: Scalars["ID"];
  assigneeAilorn: Scalars["AiloRN"];
};

export type GraphQLMutationUpdateActionDueDateArgs = {
  id: Scalars["ID"];
  dueDate: Scalars["DateTime"];
};

export type GraphQLMutationCompleteActionArgs = {
  id: Scalars["ID"];
};

export type GraphQLMutationUncompleteActionArgs = {
  id: Scalars["ID"];
};

export type GraphQLMutationAddProjectFilesArgs = {
  projectId: Scalars["ID"];
  fileAilorns: Array<Scalars["AiloRN"]>;
};

export type GraphQLMutationRemoveProjectFilesArgs = {
  projectFileIds: Array<Scalars["ID"]>;
};

export type GraphQLMutationCompleteAssignTenancyAgreementActionArgs = {
  id: Scalars["ID"];
  input: GraphQLCompleteAssignTenancyAgreementActionInput;
};

export type GraphQLMutationCompleteAssignRentActionArgs = {
  id: Scalars["ID"];
  input: GraphQLCompleteAssignRentActionInput;
};

export type GraphQLMutationCompleteAssignTenancyActionArgs = {
  input: GraphQLCompleteAssignTenancyActionInput;
};

export type GraphQLMutationCompleteAssignNewManagementActionArgs = {
  input: GraphQLCompleteAssignNewManagementActionInput;
};

export type GraphQLMutationCompleteAssignFormActionArgs = {
  input: GraphQLCompleteAssignFormActionInput;
};

export type GraphQLMutationLockTrustAccountArgs = {
  input: GraphQLLockTrustAccountInput;
};

export type GraphQLMutationPayFromWalletArgs = {
  payFromWalletInput: GraphQLPayFromWalletInput;
};

export type GraphQLMutationReceiptFundsArgs = {
  receiptFundsInput: GraphQLReceiptFundsInput;
};

export type GraphQLMutationWalletTransferArgs = {
  walletTransferInput: GraphQLWalletTransferInput;
};

export type GraphQLMutationCreateRecurringOwingArgs = {
  owing: GraphQLRecurringOwingInput;
};

export type GraphQLMutationUpdateRecurringOwingArgs = {
  owing: GraphQLRecurringOwingCalculationInput;
  owingId: Scalars["ID"];
  reason: Scalars["String"];
};

export type GraphQLMutationCreateOrUpdateUserPreferenceArgs = {
  preference: GraphQLUserNotificationPreferenceInput;
};

export type GraphQLMutationCreateOrUpdateUserPreferenceV2Args = {
  preference: GraphQLUserNotificationPreferenceInputV2;
};

export type GraphQLMutationSendCentrepayOnboardingHelpLinkArgs = {
  agencyAilorn: Scalars["AiloRN"];
};

export type GraphQLMutationSendCentrepayAccountSetupInstructionsArgs = {
  agencyAilorn: Scalars["AiloRN"];
};

export type GraphQLMutationCreateExternalTrustAccountArgs = {
  details: GraphQLCreateExternalTrustAccountInput;
};

export type GraphQLMutationDisableExternalTrustAccountArgs = {
  details: GraphQLDisableExternalTrustAccountInput;
};

export type GraphQLMutationEnableExternalTrustAccountArgs = {
  details: GraphQLEnableExternalTrustAccountInput;
};

export type GraphQLMutationUploadMigrationCsvArgs = {
  input: GraphQLUploadMigrationCsvInput;
};

export type GraphQLMutationUpdateMigratingManagementArgs = {
  input: GraphQLUpdateMigratingManagementInput;
};

export type GraphQLMutationRemoveTenancyFromMigratingManagementArgs = {
  input: GraphQLRemoveTenancyFromMigratingManagementInput;
};

export type GraphQLMutationApproveMigratingManagementsArgs = {
  migratingManagementIds: Array<Scalars["ID"]>;
};

export type GraphQLMutationUnapproveMigratingManagementsArgs = {
  migratingManagementIds: Array<Scalars["ID"]>;
};

export type GraphQLMutationMigrateManagementsArgs = {
  migratingManagementIds: Array<Scalars["ID"]>;
};

export type GraphQLMutationPublishMigratingManagementsArgs = {
  migratingManagementIds: Array<Scalars["ID"]>;
};

export type GraphQLMutationStartMigrationArgs = {
  legalEntityId: Scalars["AiloRN"];
};

export type GraphQLMutationAddBPayArgs = {
  details: GraphQLBPayInput;
  owner: Scalars["AiloRN"];
};

export type GraphQLMutationAddBankAccountArgs = {
  details: GraphQLBankAccountInput;
  owner: Scalars["AiloRN"];
};

export type GraphQLMutationAddCreditCardArgs = {
  details: GraphQLCreditCardInput;
  owner: Scalars["AiloRN"];
};

export type GraphQLMutationAdjustLiabilityEntryArgs = {
  adjustmentType: Scalars["String"];
  amount: GraphQLMoneyInput;
  description: Scalars["String"];
  descriptionIsCustom?: Maybe<Scalars["Boolean"]>;
  effectiveAt: Scalars["DateTime"];
  idempotencyKey: Scalars["String"];
  liabilityId: Scalars["ID"];
};

export type GraphQLMutationArchiveLiabilityArgs = {
  input: GraphQLArchiveLiabilityInput;
};

export type GraphQLMutationCancelAutoPayArgs = {
  cancelAutoPayInput: GraphQLCancelAutoPayInput;
};

export type GraphQLMutationCancelAutoPayLiabilityStatusArgs = {
  cancelAutoPayLiabilityStatusInput: GraphQLCancelAutoPayLiabilityStatusInput;
};

export type GraphQLMutationCancelAutoWithdrawPlanArgs = {
  cancelAutoWithdrawInput: GraphQLCancelAutoWithdrawPlanInput;
};

export type GraphQLMutationCancelLiabilityPaymentPlanArgs = {
  cancelLiabilityPaymentPlanInput: GraphQLCancelLiabilityPaymentPlanInput;
};

export type GraphQLMutationCleanOrphanedBusinessTransactionArgs = {
  businessTransactionId: Scalars["ID"];
};

export type GraphQLMutationCleanUnclearedBusinessTransactionArgs = {
  businessTransactionId: Scalars["ID"];
  description: Scalars["String"];
};

export type GraphQLMutationCreateAdjustmentForPayerArgs = {
  businessTxId: Scalars["ID"];
  payerReference: Scalars["AiloRN"];
};

export type GraphQLMutationCreateAutoWithdrawPlanV2Args = {
  createAutoWithdrawPlanInput: GraphQLCreateAutoWithdrawPlanInputV2;
};

export type GraphQLMutationCreateBankAccountBlacklistArgs = {
  blackListItem: GraphQLBankAccountBlacklistInput;
};

export type GraphQLMutationCreateLiabilityPaymentPlanArgs = {
  createLiabilityPaymentPlanInput: GraphQLCreateLiabilityPaymentPlanInput;
};

export type GraphQLMutationCreateOrUpdatePaymentMethodAiloFeeWaiverArgs = {
  feeWaiverInput: GraphQLPaymentMethodAiloFeeWaiverInput;
};

export type GraphQLMutationCreateOverdraftAllowanceArgs = {
  input: GraphQLOverdraftAllowanceInput;
};

export type GraphQLMutationCreatePaymentMethodArgs = {
  input?: Maybe<GraphQLCreatePaymentMethodInput>;
};

export type GraphQLMutationCreateUpdateAutoPayArgs = {
  createUpdateAutoPayInput: GraphQLCreateUpdateAutoPayInput;
};

export type GraphQLMutationCreditFromAiloBankArgs = {
  walletCreditInput: GraphQLAdjustWalletBalanceInput;
};

export type GraphQLMutationDeleteBankAccountBlacklistArgs = {
  id: Scalars["ID"];
};

export type GraphQLMutationDeletePaymentMethodArgs = {
  disableAutoPlans?: Maybe<Scalars["Boolean"]>;
  paymentMethodId: Scalars["ID"];
};

export type GraphQLMutationEmitLiabilityStateChangedEventArgs = {
  liabilityId: Scalars["ID"];
};

export type GraphQLMutationGenerateLiabilityEntriesArgs = {
  input: GraphQLGenerateLiabilityEntriesInput;
};

export type GraphQLMutationGetOrCreateWalletOwnerAndBankAccountArgs = {
  input: GraphQLGetOrCreateWalletOwnerAndBankAccountInput;
};

export type GraphQLMutationPartialRefundLiabilityPaymentArgs = {
  amount: GraphQLMoneyInput;
  businessTxId: Scalars["AiloRN"];
  cascade?: Maybe<Scalars["Boolean"]>;
  description: Scalars["String"];
  destinationWalletId?: Maybe<Scalars["String"]>;
};

export type GraphQLMutationPayLiabilityArgs = {
  amount: GraphQLMoneyInput;
  idempotentKey: Scalars["GeneratedKey"];
  liabilityId: Scalars["ID"];
  paymentMethodId: Scalars["ID"];
};

export type GraphQLMutationPayLiabilityFromWalletArgs = {
  amount: GraphQLMoneyInput;
  idempotentKey: Scalars["GeneratedKey"];
  liability: Scalars["AiloRN"];
  wallet: Scalars["AiloRN"];
};

export type GraphQLMutationRefundLiabilityPaymentArgs = {
  businessTxId: Scalars["AiloRN"];
  cascade?: Maybe<Scalars["Boolean"]>;
  description: Scalars["String"];
};

export type GraphQLMutationReverseAdjustmentArgs = {
  input: GraphQLReverseAdjustmentInput;
};

export type GraphQLMutationReverseBusinessTxArgs = {
  businessTxId: Scalars["ID"];
};

export type GraphQLMutationTransferToWalletArgs = {
  transferToWalletInput: GraphQLTransferToWalletInput;
};

export type GraphQLMutationUpdateAutoWithdrawPlanV2Args = {
  updateAutoWithdrawInput: GraphQLUpdateAutoWithdrawPlanInputV2;
};

export type GraphQLMutationUpdateLiabilityPaymentPlanArgs = {
  updateLiabilityPaymentPlanInput: GraphQLUpdateLiabilityPaymentPlanInput;
};

export type GraphQLMutationUpsertAutoPayLiabilityStatusArgs = {
  upsertAutoPayLiabilityStatusInput: GraphQLUpsertAutoPayLiabilityStatusInput;
};

export type GraphQLMutationWithdrawFromWalletArgs = {
  withdrawInput: GraphQLWithdrawInput;
};

export type GraphQLMutationWriteOffArgs = {
  walletCreditInput: GraphQLAdjustWalletBalanceInput;
};

export type GraphQLMutationCreateOneKeyArgs = {
  input: GraphQLCreateOneKeyInput;
};

export type GraphQLMutationUpdateOneKeyArgs = {
  input: GraphQLUpdateOneKeyInput;
};

export type GraphQLMutationDeleteOneKeyArgs = {
  input: GraphQLDeleteOneKeyInput;
};

export type GraphQLMutationCreateInspectionArgs = {
  createInspectionInput: GraphQLCreateInspectionInput;
};

export type GraphQLMutationUpdateInspectionArgs = {
  updateInspectionInput: GraphQLUpdateInspectionInput;
};

export type GraphQLMutationRemoveInspectionArgs = {
  id: Scalars["ID"];
};

export type GraphQLMutationCreateInspectionAreaArgs = {
  createInspectionAreaInput: GraphQLCreateInspectionAreaInput;
};

export type GraphQLMutationUpdateInspectionAreaArgs = {
  updateInspectionAreaInput: GraphQLUpdateInspectionAreaInput;
};

export type GraphQLMutationRemoveInspectionAreaArgs = {
  id: Scalars["ID"];
};

export type GraphQLMutationCreateInspectionAreaFileArgs = {
  createInspectionAreaFileInput: GraphQLCreateInspectionAreaFileInput;
};

export type GraphQLMutationRemoveInspectionAreaFileArgs = {
  id: Scalars["ID"];
};

export type GraphQLMutationCreateInspectionFeatureArgs = {
  createInspectionFeatureInput: GraphQLCreateInspectionFeatureInput;
};

export type GraphQLMutationUpdateInspectionFeatureArgs = {
  updateInspectionFeatureInput: GraphQLUpdateInspectionFeatureInput;
};

export type GraphQLMutationRemoveInspectionFeatureArgs = {
  id: Scalars["ID"];
};

export type GraphQLMutationCreateInspectionFeatureFileArgs = {
  createInspectionFeatureFileInput: GraphQLCreateInspectionFeatureFileInput;
};

export type GraphQLMutationRemoveInspectionFeatureFileArgs = {
  id: Scalars["ID"];
};

export type GraphQLMutationCreateInspectionAppointmentsArgs = {
  agencyAilorn: Scalars["AiloRN"];
  input: Array<GraphQLCreateInspectionAppointmentInput>;
};

export type GraphQLMutationUpdateInspectionAppointmentArgs = {
  input: GraphQLUpdateInspectionAppointmentInput;
};

export type GraphQLMutationCancelInspectionAppointmentArgs = {
  id: Scalars["ID"];
};

export type GraphQLMutationGenerateInspectionReportArgs = {
  generateInspectionReportInput: GraphQLGenerateInspectionReportInput;
};

export type GraphQLMutationCreateBananaArgs = {
  input: GraphQLCreateBananaInput;
};

export type GraphQLMutationCreateReiTokenArgs = {
  createReiTokenInput: GraphQLCreateReiTokenInput;
};

export type GraphQLMutationUpdateReiTokenArgs = {
  updateReiTokenInput: GraphQLUpdateReiTokenInput;
};

export type GraphQLMutationRemoveReiTokenArgs = {
  removeReiTokenInput: GraphQLRemoveReiTokenInput;
};

export type GraphQLMutationCreateReiFormFromUserTemplateArgs = {
  createReiFormFromUserTemplateInput: GraphQLCreateReiFormFromUserTemplateInput;
};

export type GraphQLMutationCreateAiloFormArgs = {
  createAiloFormInput: GraphQLCreateAiloFormInput;
};

export type GraphQLMutationUpdateAiloFormArgs = {
  updateAiloFormInput: GraphQLUpdateAiloFormInput;
};

export type GraphQLMutationStartFileUploadArgs = {
  fileName: Scalars["String"];
  fileKind?: Maybe<GraphQLFileKind>;
  ownerId?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLMutationValidateFileArgs = {
  fileId: Scalars["AiloRN"];
  fileKind?: Maybe<GraphQLFileKind>;
};

export type GraphQLMutationClaimFilesArgs = {
  filesIds: Array<Scalars["AiloRN"]>;
  fileKind?: Maybe<GraphQLFileKind>;
  ownerId: Scalars["AiloRN"];
  claimerId: Scalars["AiloRN"];
  permittedReadEntitiesIds?: Maybe<Array<Scalars["AiloRN"]>>;
};

export type GraphQLMutationUnclaimFilesArgs = {
  filesIds: Array<Scalars["AiloRN"]>;
  claimerId: Scalars["AiloRN"];
};

export type GraphQLMutationCreateFileShareLinksArgs = {
  fileIds: Array<Scalars["AiloRN"]>;
  metadata: GraphQLFileShareLinkMetadataInput;
  shareUntil?: Maybe<Scalars["DateTime"]>;
};

export type GraphQLMutationDeleteFileShareLinksArgs = {
  ids: Array<Scalars["ID"]>;
};

export type GraphQLMutationCreateZipFileArgs = {
  fileIds: Array<Scalars["AiloRN"]>;
  fileName: Scalars["String"];
  ownerId?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLMutationSubscribeCustomerArgs = {
  subscription?: Maybe<GraphQLPlatformSubscriptionInput>;
};

export type GraphQLMutationSetSubscriptionEndDateArgs = {
  subscription?: Maybe<GraphQLSubscriptionEndDateInput>;
};

export type GraphQLMutationCreateOtherContactArgs = {
  input: GraphQLCreateOtherContactInput;
};

export type GraphQLMutationFindOrCreateOtherContactsArgs = {
  input: GraphQLFindOrCreateOtherContactsInput;
};

export type GraphQLMutationSyncLegalEntityArgs = {
  input: GraphQLSyncLegalEntityInput;
};

export type GraphQLMutationCreateChatV2Args = {
  input: GraphQLCreateChatInputV2;
};

export type GraphQLMutationCreateThreadV2Args = {
  input: GraphQLCreateThreadInputV2;
};

export type GraphQLMutationSendMessageV2Args = {
  input: GraphQLSendMessageInputV2;
};

export type GraphQLMutationAcknowledgeThreadArgs = {
  input: GraphQLAcknowledgeThreadInput;
};

export type GraphQLMutationUnacknowledgeThreadFromMessageArgs = {
  input: GraphQLUnacknowledgeThreadFromMessageInput;
};

export type GraphQLMutationAckChatArgs = {
  acknowledgement: GraphQLAcknowledgementInput;
};

export type GraphQLMutationAckChatV0Args = {
  acknowledgement: GraphQLAcknowledgementInputV0;
};

export type GraphQLMutationCreateChatArgs = {
  chatEntities: Array<GraphQLChatEntityInput>;
  message?: Maybe<GraphQLMessageInput>;
  currentAgencyId: Scalars["AiloRN"];
};

export type GraphQLMutationCreateChatV0Args = {
  chatEntities: Array<GraphQLChatEntityInputV0>;
  message?: Maybe<GraphQLMessageInputV0>;
  currentAgencyId: Scalars["AiloRN"];
};

export type GraphQLMutationPostMessageArgs = {
  message: GraphQLMessageInput;
  chatId?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLMutationPostMessageV0Args = {
  message: GraphQLMessageInputV0;
  chatId?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLMutationCreateBillArgs = {
  billDetails: GraphQLBillInput;
};

export type GraphQLMutationArchiveBillArgs = {
  billId: Scalars["ID"];
  reason?: Maybe<Scalars["String"]>;
};

export type GraphQLMutationAddBillAttachmentsArgs = {
  billId: Scalars["AiloRN"];
  attachmentsFileIds: Array<Scalars["AiloRN"]>;
  payersLegalEntitiesIds?: Maybe<Array<Scalars["AiloRN"]>>;
};

export type GraphQLMutationCreatePaymentReferenceArgs = {
  paymentReferenceDetails: GraphQLPaymentReferenceInput;
};

export type GraphQLMutationFindOrCreatePaymentReferenceArgs = {
  paymentReferenceDetails: GraphQLPaymentReferenceInput;
};

export type GraphQLMutationCreateSupplierArgs = {
  input: GraphQLCreateSupplierInput;
};

export type GraphQLMutationFindOrCreateInternalSupplierArgs = {
  supplierDetails: GraphQLInternalSupplierInput;
};

export type GraphQLMutationArchiveSupplierArgs = {
  supplierId: Scalars["ID"];
};

export type GraphQLMutationUpdateSupplierArgs = {
  input: GraphQLUpdateSupplierInput;
};

export type GraphQLMutationSendEmailVerificationCodeArgs = {
  emailAddress: Scalars["String"];
};

export type GraphQLMutationVerifyEmailArgs = {
  emailAddress: Scalars["String"];
  verificationCode: Scalars["String"];
};

export type GraphQLMutationOnboardUsersArgs = {
  userIds: Array<Scalars["AiloRN"]>;
  sendWelcomeEmail?: Scalars["Boolean"];
};

export type GraphQLMutationUpdateUserEmailAddressArgs = {
  userId: Scalars["AiloRN"];
  emailAddress: Scalars["String"];
  sendEmailChangeWarningEmail?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLMutationCompleteOnboardingTaskArgs = {
  onboardingTaskId: GraphQLOnboardingTaskId;
};

export type GraphQLMutationUpdatePersonProfileDetailsArgs = {
  input: GraphQLUpdatePersonProfileDetailsInput;
};

export type GraphQLMutationCreatePersonArgs = {
  personDetails?: Maybe<GraphQLPersonServiceInput>;
  userDetails?: Maybe<GraphQLUserServiceInput>;
};

export type GraphQLMutationCreateUserForPersonArgs = {
  personId: Scalars["ID"];
  email?: Maybe<Scalars["String"]>;
};

export type GraphQLMutationCreatePeopleArgs = {
  peopleDetails: Array<GraphQLPersonServiceInput>;
  useExistingPersonOnClashingEmail?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLMutationUpdateCompanyProfileDetailsArgs = {
  input: GraphQLUpdateCompanyProfileDetailsInput;
};

export type GraphQLMutationCreateCompanyArgs = {
  companyDetails: GraphQLCompanyServiceInput;
  organisationDetails?: Maybe<GraphQLOrganisationServiceInput>;
};

export type GraphQLMutationAddMemberToOrganisationArgs = {
  input: GraphQLAddMemberToOrganisationInput;
};

export type GraphQLMutationRemoveMemberFromOrganisationArgs = {
  input: GraphQLRemoveMemberFromOrganisationInput;
};

export type GraphQLMutationAddMemberToLegalEntityArgs = {
  input: GraphQLAddMemberToLegalEntityInput;
};

export type GraphQLMutationRemoveMemberFromLegalEntityArgs = {
  input: GraphQLRemoveMemberFromLegalEntityInput;
};

export type GraphQLMutationUpsertCrnArgs = {
  input: GraphQLUpsertCrnInput;
};

export type GraphQLMutationDeleteCrnArgs = {
  input: GraphQLDeleteCrnInput;
};

export type GraphQLNewManagementProjectMeta = {
  management?: Maybe<GraphQLManagement>;
};

export type GraphQLNewTenancyProjectMeta = {
  management: GraphQLManagement;
  tenancy?: Maybe<GraphQLTenancy>;
};

export enum GraphQLNotAbleToCancelReason {
  TenancyIsNotVacating = "TenancyIsNotVacating",
  TenancyEndDateIsInThePast = "TenancyEndDateIsInThePast",
  ManagementHasIngoingTenancy = "ManagementHasIngoingTenancy",
  AlreadyChargedForPeriodWithEndDate = "AlreadyChargedForPeriodWithEndDate",
  ManagementIsEnding = "ManagementIsEnding",
}

export type GraphQLNotificationBody = {
  notificationId: Scalars["AiloRN"];
  notificationType: Scalars["String"];
  channel: Scalars["String"];
  title: Scalars["String"];
  templateName: Scalars["String"];
  templateHash: Scalars["String"];
  deliveryStatus: GraphQLNotificationDeliveryStatus;
  recipients: Array<Maybe<GraphQLUser>>;
  body: Scalars["String"];
};

export enum GraphQLNotificationDeliveryStatus {
  Sent = "Sent",
  Delivered = "Delivered",
  Failed = "Failed",
  Skipped = "Skipped",
}

export type GraphQLNotificationSent = {
  sent: Scalars["Boolean"];
};

export enum GraphQLOccupancyStatus {
  Vacant = "Vacant",
  Occupied = "Occupied",
  Vacating = "Vacating",
}

export type GraphQLOfflinePaymentAccount = {
  id: Scalars["ID"];
  paymentMethodCompanion?: Maybe<GraphQLPaymentMethodCompanion>;
};

export type GraphQLOfflinePaymentProcessingEnabled = {
  tenancy: Scalars["AiloRN"];
  enabled: Scalars["Boolean"];
};

export type GraphQLOfflinePaymentProcessingEnabledInput = {
  tenancy: Scalars["AiloRN"];
  enabled: Scalars["Boolean"];
};

export type GraphQLOffsetPageInfo = {
  total: Scalars["Int"];
  hasMore: Scalars["Boolean"];
  nextOffset?: Maybe<Scalars["Int"]>;
};

export type GraphQLOffsetPaginationInputV2 = {
  pageSize: Scalars["Int"];
  offset?: Maybe<Scalars["Int"]>;
};

export type GraphQLOkResult = {
  _ok: Scalars["Boolean"];
};

export type GraphQLOnboardingTask = {
  id: GraphQLOnboardingTaskId;
  description: Scalars["String"];
};

export enum GraphQLOnboardingTaskId {
  CompleteAiloOverview = "CompleteAiloOverview",
  AddPaymentMethod = "AddPaymentMethod",
  VerifyPhoneNumber = "VerifyPhoneNumber",
  AcceptTermsOfService = "AcceptTermsOfService",
  AllowPushNotifications = "AllowPushNotifications",
  SetupAutoRentPayment = "SetupAutoRentPayment",
  GetToKnowAilo = "GetToKnowAilo",
  AcceptAgencyTermsOfService = "AcceptAgencyTermsOfService",
  PayTenancyDeposit = "PayTenancyDeposit",
}

export type GraphQLOrganisation = {
  id: Scalars["ID"];
  ailoRN: Scalars["AiloRN"];
  name: Scalars["String"];
  orgType: GraphQLOrganisationType;
  createdAt: Scalars["DateTime"];
  modifiedAt?: Maybe<Scalars["DateTime"]>;
  members?: Maybe<GraphQLPaginatedPeople>;
  legalEntities: Array<GraphQLLegalEntity>;
  memberships: Array<GraphQLOrganisationMembership>;
  teams: Array<GraphQLTeam>;
  availableFeatures: Array<GraphQLPlatformFeature>;
  activeSubscriptions?: Maybe<GraphQLPaginatedPlatformSubscriptions>;
  pastSubscriptions?: Maybe<GraphQLPaginatedPlatformSubscriptions>;
  effectiveUserContact?: Maybe<GraphQLContact>;
  /** Returns only the external suppliers. */
  suppliers: GraphQLPaginatedSuppliers;
  /** @deprecated Use `Organisation.suppliers` instead */
  externalSuppliers: GraphQLPaginatedSuppliers;
};

export type GraphQLOrganisationMembersArgs = {
  pageCursor?: Maybe<GraphQLPageCursor>;
};

export type GraphQLOrganisationActiveSubscriptionsArgs = {
  cursor: GraphQLPageCursor;
};

export type GraphQLOrganisationPastSubscriptionsArgs = {
  cursor: GraphQLPageCursor;
};

export type GraphQLOrganisationSuppliersArgs = {
  cursor: GraphQLBillDefaultPageCursor;
};

export type GraphQLOrganisationExternalSuppliersArgs = {
  cursor: GraphQLBillDefaultPageCursor;
};

export type GraphQLOrganisationMembership = {
  member: GraphQLPerson;
  organisation: GraphQLOrganisation;
  /** @deprecated Use `OrganisationMembership.member` instead. */
  person: GraphQLPerson;
  role: GraphQLOrganisationRole;
};

export type GraphQLOrganisationPersonRole = GraphQLRole & {
  id: Scalars["String"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  domain: Scalars["String"];
  permissions: Array<GraphQLPermission>;
  organisation: GraphQLOrganisation;
};

export type GraphQLOrganisationRole = GraphQLRole & {
  id: Scalars["String"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  domain: Scalars["String"];
  permissions: Array<GraphQLPermission>;
};

export type GraphQLOrganisationServiceInput = {
  name: Scalars["String"];
  orgType: GraphQLOrganisationType;
};

export enum GraphQLOrganisationType {
  Agency = "Agency",
  Generic = "Generic",
}

export type GraphQLOrganisationsFilter = {
  orgType?: Maybe<GraphQLOrganisationType>;
};

export type GraphQLOverdraftAllowance = {
  amount: GraphQLMoney;
  createdAt: Scalars["DateTime"];
  createdBy: Scalars["AiloRN"];
  endAt: Scalars["DateTime"];
  id: Scalars["ID"];
  startAt: Scalars["DateTime"];
  type: Scalars["String"];
  walletId: Scalars["ID"];
};

export type GraphQLOverdraftAllowanceInput = {
  amount: GraphQLMoneyInput;
  endAt: Scalars["DateTime"];
  startAt: Scalars["DateTime"];
  walletId: Scalars["ID"];
};

export type GraphQLOwingProgress = {
  /**  cumulative charge representing all not fully paid days up to and including yesterday  */
  arrears: GraphQLCumulativeCharge;
  /**  the earliest not fully paid charge  */
  due?: Maybe<GraphQLCharge>;
  /**  cumulative charge representing total remaining amount to be paid  */
  endOfOwing?: Maybe<GraphQLCumulativeCharge>;
  firstPaidAt?: Maybe<Scalars["DateTime"]>;
  lastPaidAt?: Maybe<Scalars["DateTime"]>;
  /**  next (from today) charge regardless of whether it is paid or not  */
  nextCharge?: Maybe<GraphQLCharge>;
  /**  the next (from today) not fully paid charge  */
  nextDue?: Maybe<GraphQLCharge>;
  /**  cumulative charge representing all not fully paid cycles that are due up to today  */
  overdue: GraphQLCumulativeCharge;
  paidTo: GraphQLPaidTo;
  /**  The total amount of money paid towards this owing. This does not include adjustments */
  totalPaid: GraphQLMoney;
};

export type GraphQLOwingReferencedEntity = GraphQLRecurringFee | GraphQLTenancy;

export type GraphQLOwingSummary = {
  chargeCycle: GraphQLUnpersistedChargeCycle;
  chargeRates?: Maybe<Array<Maybe<Scalars["String"]>>>;
  firstChargeDate: Scalars["Date"];
  frequency: GraphQLRecurringFrequency;
};

export type GraphQLOwnerShareInput = {
  ownerId: Scalars["ID"];
  sharesOwned: Scalars["Int"];
};

export type GraphQLOwnership = {
  managementId: Scalars["ID"];
  owner?: Maybe<GraphQLLegalEntity>;
  startDate: Scalars["String"];
  endDate?: Maybe<Scalars["String"]>;
  sharesOwned: Scalars["Int"];
  sharesRatio: Scalars["Float"];
  /**
   * Total shares owned by all ownerships of the management
   * @deprecated Use `Management.sharesRatio` or `Management.sharesOwned` instead.
   */
  totalShares: Scalars["Int"];
  ownerId: Scalars["ID"];
  consumerInvite?: Maybe<GraphQLConsumerInvite>;
};

export type GraphQLOwnershipInput = {
  managementId: Scalars["ID"];
  ownerId: Scalars["ID"];
  startDate: Scalars["String"];
  endDate?: Maybe<Scalars["String"]>;
  sharesOwned: Scalars["Int"];
};

export type GraphQLOwnershipSetupInput = {
  ownerId?: Maybe<Scalars["ID"]>;
  sharesOwned: Scalars["Int"];
  consumer?: Maybe<GraphQLConsumerSetupInput>;
};

export type GraphQLPmPageCursor = {
  pageSize?: Scalars["Int"];
  cursor?: Maybe<Scalars["String"]>;
  paginateBackward?: Scalars["Boolean"];
  sort?: Maybe<Scalars["String"]>;
};

export enum GraphQLPMeFeeTriggerType {
  FirstRentReceipt = "FirstRentReceipt",
  Manual = "Manual",
  FirstReceiptPerStatement = "FirstReceiptPerStatement",
  InvoiceReceipt = "InvoiceReceipt",
  InspectionOnRoutine = "InspectionOnRoutine",
  InspectionOnEntry = "InspectionOnEntry",
  InspectionOnExit = "InspectionOnExit",
  BillCreated = "BillCreated",
}

export enum GraphQLPMeFeeValueType {
  Fixed = "Fixed",
  Percent = "Percent",
}

export type GraphQLPageCursor = {
  pageSize?: Maybe<Scalars["Int"]>;
  cursor?: Maybe<Scalars["String"]>;
  sort?: Maybe<Scalars["String"]>;
};

export type GraphQLPageCursorWithoutSort = {
  pageSize?: Maybe<Scalars["Int"]>;
  cursor?: Maybe<Scalars["String"]>;
};

export type GraphQLPageInfo = {
  total: Scalars["Int"];
  hasMore: Scalars["Boolean"];
  nextCursor?: Maybe<Scalars["String"]>;
};

export type GraphQLPaginatedAccess = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLAccess>;
};

export type GraphQLPaginatedAccessV0 = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLAccessV0>;
};

export type GraphQLPaginatedAccounts = {
  items: Array<Maybe<GraphQLAccount>>;
  pageInfo: GraphQLBidirectionalPageInfo;
};

export type GraphQLPaginatedActions = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLAction>;
};

export type GraphQLPaginatedAgencyProperties = {
  pageInfo: GraphQLBidirectionalPageInfo;
  items: Array<GraphQLAgencyProperty>;
};

export type GraphQLPaginatedAgencyPropertySearchItems = {
  pageInfo: GraphQLBidirectionalPageInfo;
  items: Array<GraphQLAgencyProperty>;
};

export type GraphQLPaginatedAutoWithdrawPlans = {
  items?: Maybe<Array<GraphQLAutoWithdrawPlan>>;
  pageInfo: GraphQLPageInfo;
};

export type GraphQLPaginatedBills = {
  pageInfo: GraphQLBidirectionalPageInfo;
  items: Array<GraphQLBill>;
};

export type GraphQLPaginatedChargeCycles = {
  items: Array<Maybe<GraphQLChargeCycle>>;
  pageInfo: GraphQLBidirectionalPageInfo;
};

export type GraphQLPaginatedChats = {
  pageInfo: GraphQLPageInfo;
  items: Array<Maybe<GraphQLChat>>;
};

export type GraphQLPaginatedChatsInputV2 = {
  organisationAilorn: Scalars["AiloRN"];
  pagination: GraphQLOffsetPaginationInputV2;
  /**
   * All chats returned must have at least one of the following
   * contacts as a participant.
   */
  mustIncludeOneOf?: Maybe<Array<GraphQLContactOrEmail>>;
  /**
   * All chats returned must have all of the following contacts
   * as participants.
   */
  mustIncludeAllOf?: Maybe<Array<GraphQLContactOrEmail>>;
  /**
   * All chats returned must have all of, and only, the following contacts
   * as participants.
   */
  mustIncludeExactly?: Maybe<Array<GraphQLContactOrEmail>>;
};

export type GraphQLPaginatedChatsV0 = {
  pageInfo: GraphQLPageInfo;
  items: Array<Maybe<GraphQLChatV0>>;
};

export type GraphQLPaginatedChatsV2 = {
  offsetPageInfo: GraphQLOffsetPageInfo;
  items: Array<GraphQLChatV2>;
};

export type GraphQLPaginatedCompanies = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLCompany>;
};

export type GraphQLPaginatedContactSearchItems = {
  pageInfo: GraphQLBidirectionalPageInfo;
  items: Array<GraphQLContact>;
};

export type GraphQLPaginatedContacts = {
  pageInfo: GraphQLBidirectionalPageInfo;
  items: Array<GraphQLContact>;
};

export type GraphQLPaginatedEmailContacts = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLEmailContact>;
};

export type GraphQLPaginatedEmailContactsV0 = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLEmailContactV0>;
};

export type GraphQLPaginatedEntries = {
  items: Array<Maybe<GraphQLEntry>>;
  pageInfo: GraphQLBidirectionalPageInfo;
};

export type GraphQLPaginatedFeeBlueprints = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLFeeBlueprint>;
};

export type GraphQLPaginatedFees = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLFee>;
};

export type GraphQLPaginatedFiles = {
  pageInfo: GraphQLBidirectionalPageInfo;
  items: Array<Maybe<GraphQLFile>>;
};

export type GraphQLPaginatedLegalEntities = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLLegalEntity>;
};

export type GraphQLPaginatedLegalEntityWithExternalTrustAccounts = {
  pageInfo: GraphQLBidirectionalPageInfo;
  items: Array<Maybe<GraphQLLegalEntityWithExternalTrustAccount>>;
};

export type GraphQLPaginatedLiabilityEntries = {
  items: Array<GraphQLLiabilityEntry>;
  pageInfo: GraphQLLedgerBidirectionalPageInfo;
};

export type GraphQLPaginatedLiabilityPaymentPlans = {
  items?: Maybe<Array<GraphQLLiabilityPaymentPlan>>;
  pageInfo?: Maybe<GraphQLPageInfo>;
};

export type GraphQLPaginatedLineItems = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLLineItem>;
};

export type GraphQLPaginatedManagementAgreements = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLManagementAgreement>;
};

export type GraphQLPaginatedManagementFeeBlueprints = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLManagementFeeBlueprint>;
};

export type GraphQLPaginatedManagementFeeSchedules = {
  pageInfo: GraphQLPageInfo;
  items: Array<Maybe<GraphQLManagementFeeSchedule>>;
};

export type GraphQLPaginatedManagementFolioOwnerships = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLManagementFolioOwnership>;
};

export type GraphQLPaginatedManagementFolios = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLManagementFolio>;
};

export type GraphQLPaginatedManagements = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLManagement>;
};

export type GraphQLPaginatedMessages = {
  pageInfo: GraphQLPageInfo;
  items: Array<Maybe<GraphQLMessage>>;
};

export type GraphQLPaginatedMessagesV0 = {
  pageInfo: GraphQLPageInfo;
  items: Array<Maybe<GraphQLMessageV0>>;
};

export type GraphQLPaginatedMessagesV2 = {
  pageInfo: GraphQLPageInfo;
  items: Array<Maybe<GraphQLMessageV2>>;
};

export type GraphQLPaginatedMigratingManagements = {
  pageInfo: GraphQLBidirectionalPageInfo;
  items: Array<Maybe<GraphQLMigratingManagement>>;
};

export type GraphQLPaginatedOrganisations = {
  pageInfo: GraphQLPageInfo;
  items: Array<Maybe<GraphQLOrganisation>>;
};

export type GraphQLPaginatedOrganisationsV0 = {
  pageInfo: GraphQLPageInfo;
  items: Array<Maybe<GraphQLOrganisation>>;
};

export type GraphQLPaginatedOwnerships = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLOwnership>;
};

export type GraphQLPaginatedParticipants = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLParticipant>;
};

export type GraphQLPaginatedParticipantsV0 = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLParticipantV0>;
};

export type GraphQLPaginatedPaymentMethods = {
  items: Array<Maybe<GraphQLPaymentMethod>>;
  pageInfo?: Maybe<GraphQLPageInfo>;
};

export type GraphQLPaginatedPaymentReferences = {
  pageInfo: GraphQLPageInfo;
  items: Array<Maybe<GraphQLPaymentReference>>;
};

export type GraphQLPaginatedPeople = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLPerson>;
};

export type GraphQLPaginatedPlatformSubscriptions = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLPlatformSubscription>;
};

export type GraphQLPaginatedProjectFiles = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLProjectFile>;
};

export type GraphQLPaginatedProjects = {
  pageInfo: GraphQLBidirectionalPageInfo;
  items: Array<GraphQLProject>;
};

export type GraphQLPaginatedProperties = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLProperty>;
};

export type GraphQLPaginatedReconciliationDetail = {
  items: Array<GraphQLReconciliationDetailReportItem>;
  pageInfo: GraphQLLedgerBidirectionalPageInfo;
};

export type GraphQLPaginatedRecurringFeeBlueprints = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLRecurringFeeBlueprint>;
};

export type GraphQLPaginatedRecurringOwingEvents = {
  items: Array<Maybe<GraphQLRecurringOwingEvent>>;
  pageInfo: GraphQLBidirectionalPageInfo;
};

export type GraphQLPaginatedRents = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLRent>;
};

export type GraphQLPaginatedStatementProgresses = {
  pageInfo: GraphQLBidirectionalPageInfo;
  items: Array<Maybe<GraphQLStatementProgress>>;
};

export type GraphQLPaginatedStatementTransactionLineItem = {
  items: Array<GraphQLStatementTransactionLineItem>;
  pageInfo: GraphQLLedgerBidirectionalPageInfo;
};

export type GraphQLPaginatedStatements = {
  pageInfo: GraphQLBidirectionalPageInfo;
  items: Array<GraphQLStatement>;
};

export type GraphQLPaginatedSuppliers = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLSupplier>;
};

export type GraphQLPaginatedTenancies = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLTenancy>;
};

export type GraphQLPaginatedTenancyAgreements = {
  pageInfo: GraphQLPageInfo;
  items: Array<Maybe<GraphQLTenancyAgreement>>;
};

export type GraphQLPaginatedThreadsV2 = {
  pageInfo: GraphQLPageInfo;
  items: Array<Maybe<GraphQLThreadV2>>;
};

export type GraphQLPaginatedTransactionReport = {
  items?: Maybe<Array<Maybe<GraphQLTransactionReportItem>>>;
  pageInfo?: Maybe<GraphQLLedgerBidirectionalPageInfo>;
};

export type GraphQLPaginatedUserEmailVerifications = {
  pageInfo: GraphQLPageInfo;
  items: Array<GraphQLUserEmailVerification>;
};

export type GraphQLPaginatedUsers = {
  pageInfo: GraphQLPageInfo;
  items: Array<Maybe<GraphQLUser>>;
};

export type GraphQLPaginatedUsersV0 = {
  pageInfo: GraphQLPageInfo;
  items: Array<Maybe<GraphQLUser>>;
};

export type GraphQLPaginatedWalletEntriesWithBtStatus = {
  items: Array<GraphQLWalletEntry>;
  pageInfo: GraphQLLedgerBidirectionalPageInfo;
};

export type GraphQLPaginationInput = {
  pageSize: Scalars["Int"];
  nextCursor?: Maybe<Scalars["String"]>;
};

export type GraphQLPaginationInputV0 = {
  pageSize: Scalars["Int"];
  nextCursor?: Maybe<Scalars["String"]>;
};

export type GraphQLPaginationInputV2 = {
  pageSize: Scalars["Int"];
  cursor?: Maybe<Scalars["String"]>;
};

export type GraphQLPaginationParams = {
  cursor?: Maybe<Scalars["String"]>;
  pageSize?: Maybe<Scalars["Int"]>;
  /** If true, will return items before the cursor, rather than after it. */
  before?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLPaginationParamsWithPageNumber = {
  cursor?: Maybe<Scalars["String"]>;
  /** Current page number (positive value) */
  page?: Maybe<Scalars["Int"]>;
  /** Number of items per page */
  pageSize?: Maybe<Scalars["Int"]>;
  /** If true, will return items before the cursor, rather than after it. */
  before?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLPaidTo = {
  classic: GraphQLPaidToDate;
  effective: GraphQLPaidToDate;
};

export type GraphQLPaidToDate = {
  date: Scalars["Date"];
  partPayment: GraphQLMoney;
};

export type GraphQLPaidToDateDetails = {
  amountInArrearsBeforeEntry: GraphQLMoney;
  daysInArrearsBeforeEntry: Scalars["Int"];
  effectivePaidToDate: Scalars["Date"];
  effectivePaidToDateBeforeEntry: Scalars["Date"];
  effectivePaidToDateCredit: GraphQLMoney;
  paidToDate: Scalars["Date"];
  paidToDateBeforeEntry: Scalars["Date"];
  paidToDateCredit: GraphQLMoney;
};

export enum GraphQLPaidUsingType {
  AiloWallet = "AILO_WALLET",
  EftIntoTrustAccount = "EFT_INTO_TRUST_ACCOUNT",
  PaymentMethod = "PAYMENT_METHOD",
}

export type GraphQLParticipant = GraphQLUser | GraphQLEmailContact;

export type GraphQLParticipantV0 = GraphQLUser | GraphQLEmailContactV0;

export type GraphQLPayFromWalletInput = {
  amount: GraphQLMoneyInput;
  description: Scalars["String"];
  idempotencyKey: Scalars["String"];
  purposeId: Scalars["ID"];
  walletOwner: Scalars["AiloRN"];
};

export type GraphQLPaymentAllocationInput = {
  amount: GraphQLMoneyInput;
  description: Scalars["String"];
  purposeId: Scalars["ID"];
};

export type GraphQLPaymentLiabilityEntry = GraphQLLiabilityEntry & {
  amount: GraphQLMoney;
  businessTransaction: GraphQLBusinessTransaction;
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<GraphQLActionInitiator>;
  /** The date of the entry to be shown to consumers. This is the latest of createdAt and effectiveAt. */
  displayDate: Scalars["DateTime"];
  effectiveAt: Scalars["DateTime"];
  entryType: GraphQLSourceType;
  id: Scalars["ID"];
  liability: GraphQLLiability;
  /** @deprecated Use `liability` */
  liabilityId: Scalars["ID"];
  /** @deprecated Use status in PaymentLiabilityEntry businessTransaction */
  status?: Maybe<GraphQLBusinessTxStatusEnum>;
};

export type GraphQLPaymentMethod = {
  ailoRN: Scalars["AiloRN"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  externalId?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isAutoPay: Scalars["Boolean"];
  isAutoWithdraw: Scalars["Boolean"];
  isDefaultIn: Scalars["Boolean"];
  isDefaultOut: Scalars["Boolean"];
  isHidden: Scalars["Boolean"];
  isOnceOff?: Maybe<Scalars["Boolean"]>;
  topUpFee?: Maybe<GraphQLTransactionFee>;
  wallet: GraphQLWallet;
};

export type GraphQLPaymentMethodAiloFeeFilterEntryInput = {
  active: Scalars["Boolean"];
  endDate?: Maybe<Scalars["Date"]>;
  paymentMethodType: Scalars["String"];
  startDate?: Maybe<Scalars["Date"]>;
};

export type GraphQLPaymentMethodAiloFeeWaiverInput = {
  filterEntries?: Maybe<
    Array<Maybe<GraphQLPaymentMethodAiloFeeFilterEntryInput>>
  >;
  notes?: Maybe<Scalars["String"]>;
  ownerLegalEntity: Scalars["AiloRN"];
};

export type GraphQLPaymentMethodAiloFees = {
  appliesToId?: Maybe<Scalars["String"]>;
  feeBasisPoints?: Maybe<Scalars["Int"]>;
  feeFlatCents?: Maybe<Scalars["Int"]>;
  feeName?: Maybe<Scalars["String"]>;
  filterEntryEffectiveFromInclusive?: Maybe<Scalars["Date"]>;
  filterEntryEffectiveToInclusive?: Maybe<Scalars["Date"]>;
  filterName?: Maybe<Scalars["String"]>;
  filterNote?: Maybe<Scalars["String"]>;
  filterType?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  methodCategory?: Maybe<Scalars["String"]>;
  methodType: Scalars["String"];
};

export type GraphQLPaymentMethodCompanion = {
  id: Scalars["AiloRN"];
  paymentMethod: GraphQLPaymentMethod;
};

export type GraphQLPaymentMethodDestination = {
  paymentMethod: GraphQLPaymentMethod;
  paymentMethodId: Scalars["ID"];
  share: Scalars["Int"];
};

export type GraphQLPaymentMethodDestinationInput = {
  paymentMethodId: Scalars["ID"];
  share: Scalars["Int"];
};

export type GraphQLPaymentMethodSearchOptions = {
  externalId?: Maybe<Scalars["String"]>;
  includeDeleted?: Maybe<Scalars["Boolean"]>;
  includeHidden?: Maybe<Scalars["Boolean"]>;
  includeOnceOff?: Maybe<Scalars["Boolean"]>;
  ownerAiloRN?: Maybe<Scalars["AiloRN"]>;
  type?: Maybe<GraphQLPaymentMethodType>;
};

export enum GraphQLPaymentMethodType {
  BPay = "BPay",
  BankAccount = "BankAccount",
  CreditCard = "CreditCard",
  VirtualAccount = "VirtualAccount",
}

export type GraphQLPaymentReference = {
  id: Scalars["ID"];
  supplier: GraphQLSupplier;
  /**
   * Always present if supplier is external, otherwise empty.
   * @deprecated Use `PaymentReference.supplierPaymentMethodCompanion.ailoRN` instead.
   */
  supplierPaymentMethodReference?: Maybe<Scalars["AiloRN"]>;
  /**
   * Only present if it's an external supplier.
   * If it's an internal supplier, the bill will be paid to supplier's Ailo wallet.
   */
  supplierPaymentMethodCompanion?: Maybe<GraphQLPaymentMethodCompanion>;
  crn?: Maybe<Scalars["String"]>;
  paymentDescription?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  createdBy: Scalars["AiloRN"];
  modifiedBy: Scalars["AiloRN"];
};

export type GraphQLPaymentReferenceInput = {
  supplierId: Scalars["ID"];
  /** Required if supplier is external. */
  supplierPaymentMethodReference?: Maybe<Scalars["AiloRN"]>;
  crn?: Maybe<Scalars["String"]>;
  paymentDescription?: Maybe<Scalars["String"]>;
};

export type GraphQLPaymentReferencesQueryConditions = {
  /** @deprecated Use `PaymentReferencesQueryConditions.payeeId` instead */
  supplierId?: Maybe<Scalars["ID"]>;
  payeeId?: Maybe<Scalars["AiloRN"]>;
  billPayerId?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLPermission = {
  id: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type GraphQLPerson = GraphQLLegalEntity & {
  id: Scalars["ID"];
  ailoRN: Scalars["String"];
  eulaSignedAt?: Maybe<Scalars["DateTime"]>;
  organisationId: Scalars["ID"];
  organisation: GraphQLOrganisation;
  timezone: Scalars["TimeZone"];
  emailAddress?: Maybe<Scalars["String"]>;
  /**
   * Future email address that is currently in pending verification status.
   * Will be set to null once verification succeeds or expires.
   */
  pendingEmailAddress?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  /** Equal to `preferredName` if given, otherwise `legalFirstName`. */
  firstName: Scalars["String"];
  legalFirstName: Scalars["String"];
  legalMiddleName?: Maybe<Scalars["String"]>;
  preferredName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  unitStreetNumber?: Maybe<Scalars["String"]>;
  streetName?: Maybe<Scalars["String"]>;
  suburb?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  postcode?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  birthDate?: Maybe<Scalars["Date"]>;
  photo?: Maybe<GraphQLFile>;
  /**
   * Has KYC (Know Your Customer) verification check has been done for this person?
   * It is required for them to be eligible to transfer money out of Ailo platform.
   */
  kycVerified: Scalars["Boolean"];
  user?: Maybe<GraphQLUser>;
  occupation?: Maybe<Scalars["String"]>;
  jobTitle?: Maybe<Scalars["String"]>;
  taxFileNumber?: Maybe<Scalars["String"]>;
  signUpCompleted?: Maybe<Scalars["Boolean"]>;
  currentUserPermissions: Array<Scalars["String"]>;
  metadata?: Maybe<Scalars["String"]>;
  phoneNoVerifiedAt?: Maybe<Scalars["DateTime"]>;
  companiesOwned?: Maybe<GraphQLPaginatedCompanies>;
  organisationMemberships: Array<GraphQLOrganisationMembership>;
  /** Legal Entity Memberships in which this person is a member. */
  legalEntityMembershipsAsMember: Array<GraphQLLegalEntityMembership>;
  /** @deprecated Use `Person.organisationMemberships`. */
  organisationRoles: Array<GraphQLOrganisationPersonRole>;
  /** @deprecated Use `Person.legalEntityMembershipsAsMember`. */
  legalEntityRoles: Array<GraphQLLegalEntityPersonRole>;
  /** Legal Entity Memberships in which this legal entity is the group of which the other people are members. */
  legalEntityMembershipsAsLegalEntity: Array<GraphQLLegalEntityMembership>;
  /** Statements with subject = Legal Entity Ailorn */
  statements?: Maybe<GraphQLPaginatedStatements>;
  tenancies?: Maybe<GraphQLPaginatedTenancies>;
  managements?: Maybe<GraphQLPaginatedManagements>;
  team?: Maybe<GraphQLTeam>;
  /** this can go when payment gateway splits */
  allWalletsAvailableBalance: GraphQLMoney;
  allWalletsTotalBalance: GraphQLMoney;
  kycVerifiedAccordingToLedgerService?: Maybe<Scalars["Boolean"]>;
  paymentMethods?: Maybe<GraphQLPaginatedPaymentMethods>;
  wallets: Array<GraphQLWallet>;
  reiTokensForOrg: Array<GraphQLReiToken>;
  reiTemplatesForOrg: Array<GraphQLReiTemplate>;
  mailboxes: Array<GraphQLMailbox>;
  contact?: Maybe<GraphQLContact>;
};

export type GraphQLPersonCompaniesOwnedArgs = {
  pageCursor?: Maybe<GraphQLPageCursor>;
  filters?: Maybe<GraphQLCompanyFilters>;
};

export type GraphQLPersonStatementsArgs = {
  filter: GraphQLStatementFilter;
  cursor?: Maybe<GraphQLStatementCursor>;
  sort?: Maybe<Array<GraphQLStatementSort>>;
};

export type GraphQLPersonTenanciesArgs = {
  managingOrganisationId?: Maybe<Scalars["AiloRN"]>;
  pageCursor: GraphQLPmPageCursor;
};

export type GraphQLPersonManagementsArgs = {
  managingOrganisationId?: Maybe<Scalars["AiloRN"]>;
  pageCursor: GraphQLPmPageCursor;
};

export type GraphQLPersonTeamArgs = {
  organisationId: Scalars["ID"];
};

export type GraphQLPersonPaymentMethodsArgs = {
  methodType?: Maybe<GraphQLPaymentMethodType>;
};

export type GraphQLPersonReiTokensForOrgArgs = {
  organisationAilorn: Scalars["AiloRN"];
};

export type GraphQLPersonReiTemplatesForOrgArgs = {
  organisationAilorn: Scalars["AiloRN"];
};

export type GraphQLPersonMailboxesArgs = {
  organisationId?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLPersonContactArgs = {
  organisationAilorn: Scalars["AiloRN"];
};

export type GraphQLPersonServiceInput = {
  emailAddress?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  legalMiddleName?: Maybe<Scalars["String"]>;
  preferredName?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  phoneNoVerifiedAt?: Maybe<Scalars["DateTime"]>;
  occupation?: Maybe<Scalars["String"]>;
  jobTitle?: Maybe<Scalars["String"]>;
  taxFileNumber?: Maybe<Scalars["String"]>;
  metadata?: Maybe<Scalars["String"]>;
  birthDate?: Maybe<Scalars["Date"]>;
  pmeContactId?: Maybe<Scalars["String"]>;
  pmeContactPersonId?: Maybe<Scalars["String"]>;
  companiesOwned?: Maybe<Array<GraphQLCreatePersonCompanyInput>>;
};

export type GraphQLPlan = {
  amount: GraphQLMoney;
  /** @deprecated No longer needed. PM service also got rid of it. */
  endDate?: Maybe<Scalars["DateTime"]>;
  frequency: GraphQLQuartzPlanFrequency;
  isExisting?: Maybe<Scalars["Boolean"]>;
  startDate: Scalars["DateTime"];
};

export type GraphQLPlanBasedLiabilityEntry = GraphQLLiabilityEntry & {
  amount: GraphQLMoney;
  /** @deprecated Use `paidToDate` instead */
  classicPaidTo: Scalars["Date"];
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<GraphQLActionInitiator>;
  cycleEndDate: Scalars["Date"];
  cycleStartDate: Scalars["Date"];
  /** The date of the entry to be shown to consumers. This is the latest of createdAt and effectiveAt. */
  displayDate: Scalars["DateTime"];
  effectiveAt: Scalars["DateTime"];
  entryType: GraphQLSourceType;
  frequency?: Maybe<GraphQLLiabilityPlanFrequency>;
  id: Scalars["ID"];
  liability: GraphQLLiability;
  /** @deprecated Use `liability` */
  liabilityId: Scalars["ID"];
  /** The date the liability has been paid to after this entry took place. */
  paidToDate: Scalars["Date"];
  /** @deprecated Irrelevant to plan based liability entry */
  status?: Maybe<GraphQLBusinessTxStatusEnum>;
};

export type GraphQLPlatformFeature = {
  id: GraphQLPlatformFeatureId;
  description?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
};

export enum GraphQLPlatformFeatureId {
  LpmaAccess = "LpmaAccess",
  InvestorAccess = "InvestorAccess",
  TenantAccess = "TenantAccess",
  ConsumerAccess = "ConsumerAccess",
  AgencyAccess = "AgencyAccess",
  WalletAccess = "WalletAccess",
  AutoPayRent = "AutoPayRent",
  AutoWalletWithdraw = "AutoWalletWithdraw",
  Bills = "Bills",
  Projects = "Projects",
  Chat = "Chat",
  Properties = "Properties",
  Customers = "Customers",
  NewConsumerAppNav = "NewConsumerAppNav",
  Onboarding = "Onboarding",
  TransactionFees = "TransactionFees",
  FileUpload = "FileUpload",
  FeeFreeRent = "FeeFreeRent",
  BillAttachments = "BillAttachments",
  AgencyInternalSuppliers = "AgencyInternalSuppliers",
  InvestorInternalSuppliers = "InvestorInternalSuppliers",
  NotificationPriming = "NotificationPriming",
  AutoPayBillsAsInvestor = "AutoPayBillsAsInvestor",
  LiabilityPaymentPlan = "LiabilityPaymentPlan",
  ViewBillAsAgent = "ViewBillAsAgent",
  ViewAgencyWallet = "ViewAgencyWallet",
  AgencyWalletManualWithdrawal = "AgencyWalletManualWithdrawal",
  ArchiveBillAsAgent = "ArchiveBillAsAgent",
  ViewAgencyWalletTransactions = "ViewAgencyWalletTransactions",
  AutoWithdrawPlan = "AutoWithdrawPlan",
  LedgerRemake = "LedgerRemake",
  ConsumerAppKycCheck = "ConsumerAppKycCheck",
  ZendeskWidget = "ZendeskWidget",
  ConsumerAppUserEmailChange = "ConsumerAppUserEmailChange",
  ForceFileDownloadFlag = "ForceFileDownloadFlag",
  AuthorizedHelpUrl = "AuthorizedHelpUrl",
  InvestorRentTab = "InvestorRentTab",
  AgencyAppPropertyFees = "AgencyAppPropertyFees",
  AgencyAppPropertyBills = "AgencyAppPropertyBills",
  ApplyNewFee = "ApplyNewFee",
  EditApplyNewFee = "EditApplyNewFee",
  CancelRecurringFee = "CancelRecurringFee",
  EditRecurringFee = "EditRecurringFee",
  EditManagementFee = "EditManagementFee",
  FeeBlueprints = "FeeBlueprints",
  OneOffFeeBlueprints = "OneOffFeeBlueprints",
  TeamChatsFilter = "TeamChatsFilter",
  MobileTeamChatsFilter = "MobileTeamChatsFilter",
  TotalUnreadChatsCount = "TotalUnreadChatsCount",
  TeamUnreadChatsCount = "TeamUnreadChatsCount",
  ConsumerProfileProperties = "ConsumerProfileProperties",
  InvestorPropertyWallet = "InvestorPropertyWallet",
  MetabaseReporting = "MetabaseReporting",
  BlockInactiveChats = "BlockInactiveChats",
  AgencyAppViewConsumersMoneySettings = "AgencyAppViewConsumersMoneySettings",
  ZendeskWidgetRestrictedForms = "ZendeskWidgetRestrictedForms",
  InactiveChatEnhancements = "InactiveChatEnhancements",
  WelcomeMessageParticipants = "WelcomeMessageParticipants",
  Deposits = "Deposits",
  BillManagementFee = "BillManagementFee",
  MailboxLinking = "MailboxLinking",
  AgencyAppSupplierCreate = "AgencyAppSupplierCreate",
  TransferDeposits = "TransferDeposits",
  ContactsTabCustomers = "ContactsTabCustomers",
  ContactsTab = "ContactsTab",
  CubejsReporting = "CubejsReporting",
  ContactsTabOtherContacts = "ContactsTabOtherContacts",
  OnboardingTabInPmApp = "OnboardingTabInPMApp",
  OnboardingTabRefresh = "OnboardingTabRefresh",
  ManageExpenseForm = "ManageExpenseForm",
  ExpensesCard = "ExpensesCard",
  TenancyBonds = "TenancyBonds",
  TenancyLedgerStatementDownload = "TenancyLedgerStatementDownload",
  OnboardingTabPublishProperty = "OnboardingTabPublishProperty",
  OwnershipStatementInclBeforeGst = "OwnershipStatementInclBeforeGst",
  DisplayFormsTab = "DisplayFormsTab",
  TenancyBondClaim = "TenancyBondClaim",
  CreateNewChat = "CreateNewChat",
  OwnershipStatementShowNextRentScheduleForNewProperties = "OwnershipStatementShowNextRentScheduleForNewProperties",
  OwnershipStatementBillAndFeeDescription = "OwnershipStatementBillAndFeeDescription",
  StatementsAddedToManagementFiles = "StatementsAddedToManagementFiles",
  CreateLeaseRenewalProject = "CreateLeaseRenewalProject",
  ViewChatThreads = "ViewChatThreads",
  SplitJointOwnershipStatement = "SplitJointOwnershipStatement",
  EditTenancyBondClaim = "EditTenancyBondClaim",
  AllowFeatureOverride = "AllowFeatureOverride",
  InAppReview = "InAppReview",
  ReportingTeamFilter = "ReportingTeamFilter",
  ManagementFeeBlueprint = "ManagementFeeBlueprint",
  WalletStatementUserFacingDescription = "WalletStatementUserFacingDescription",
  TransferSummaryStatement = "TransferSummaryStatement",
  BondsReport = "BondsReport",
  CreateNewTenancyProject = "CreateNewTenancyProject",
  CreateGeneralProject = "CreateGeneralProject",
  AnalyticsDashboard = "AnalyticsDashboard",
  CreateAndViewPropertyKeys = "CreateAndViewPropertyKeys",
  EditPropertyKeys = "EditPropertyKeys",
  DeletePropertyKeys = "DeletePropertyKeys",
  InvestorFormerTenanciesCard = "InvestorFormerTenanciesCard",
  BypassRentLimit = "BypassRentLimit",
  TenancyLedgerHeadersUseLedger = "TenancyLedgerHeadersUseLedger",
  TenancyLedgerArrearsInHeader = "TenancyLedgerArrearsInHeader",
  AgencyTransferStatement = "AgencyTransferStatement",
  EndManagement = "EndManagement",
  RemoveManagementEnd = "RemoveManagementEnd",
  EditManagementEnd = "EditManagementEnd",
  TenancyLedgerLineItemsUseLedger = "TenancyLedgerLineItemsUseLedger",
  TransferBillsDueWarning = "TransferBillsDueWarning",
  Centrepay = "Centrepay",
  FilterBillByTeam = "FilterBillByTeam",
  NewLostManagementsList = "NewLostManagementsList",
  PropertyIssuesMissingFees = "PropertyIssuesMissingFees",
  VoidIngoingTenancy = "VoidIngoingTenancy",
  ConsumerCreateNewChat = "ConsumerCreateNewChat",
  TruncateProjectList = "TruncateProjectList",
  PropertySearchFromSearchService = "PropertySearchFromSearchService",
  MarkAsUnread = "MarkAsUnread",
  TrustAccounting = "TrustAccounting",
  Disbursements = "Disbursements",
  AgencyIncomeTotals = "AgencyIncomeTotals",
  ArrearsListFromOwing = "ArrearsListFromOwing",
  OverdueListFromOwing = "OverdueListFromOwing",
  TenancyDetailsDragAndDrop = "TenancyDetailsDragAndDrop",
  CreateNewManagementProject = "CreateNewManagementProject",
  EnableBillAutoPayLimit = "EnableBillAutoPayLimit",
  RevenueReport = "RevenueReport",
  ContactCardWeb = "ContactCardWeb",
  ChatDetailsMobile = "ChatDetailsMobile",
  ChatDetailsWeb = "ChatDetailsWeb",
  TrustReconciliation = "TrustReconciliation",
  EventBasedFee = "EventBasedFee",
  CreateVacatingTenancyProject = "CreateVacatingTenancyProject",
}

export type GraphQLPlatformPlan = {
  id: Scalars["String"];
  price: GraphQLMoney;
  product: GraphQLPlatformProduct;
  features: Array<GraphQLPlatformFeature>;
};

export type GraphQLPlatformProduct = {
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type GraphQLPlatformSubscription = {
  id: Scalars["ID"];
  plan: GraphQLPlatformPlan;
  startsOn: Scalars["Date"];
  endsOn?: Maybe<Scalars["Date"]>;
  customer?: Maybe<GraphQLOrganisation>;
};

export type GraphQLPlatformSubscriptionInput = {
  customerId: Scalars["ID"];
  planId: Scalars["String"];
  startsOn: Scalars["Date"];
  endsOn?: Maybe<Scalars["Date"]>;
};

export type GraphQLPreviewMultipleRentReviewsInput = {
  rentFrequency: GraphQLQuartzPlanFrequency;
  rentReviewDetails: Array<GraphQLRentReviewInput>;
};

export type GraphQLPreviewedRentSchedule = {
  amountInCents: Scalars["String"];
  period: GraphQLRentFrequency;
  startDate: Scalars["Date"];
  endDate: Scalars["Date"];
  proRata: Scalars["Boolean"];
};

export type GraphQLProblemInterface = {
  message: Scalars["String"];
};

export type GraphQLProject = {
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  type: GraphQLProjectType;
  dueDate: Scalars["Date"];
  organisation?: Maybe<GraphQLOrganisation>;
  assignee: GraphQLPerson;
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<GraphQLUser>;
  modifiedBy?: Maybe<GraphQLUser>;
  closedAt?: Maybe<Scalars["DateTime"]>;
  archivedAt?: Maybe<Scalars["DateTime"]>;
  status: GraphQLProjectStatus;
  reference: Scalars["String"];
  meta?: Maybe<GraphQLProjectMeta>;
  actions?: Maybe<GraphQLPaginatedActions>;
  files?: Maybe<GraphQLPaginatedProjectFiles>;
};

export type GraphQLProjectActionsArgs = {
  cursor?: GraphQLActionCursor;
};

export type GraphQLProjectFilesArgs = {
  cursor?: GraphQLProjectFileCursor;
};

export type GraphQLProjectCursor = {
  pageSize?: Scalars["Int"];
  paginateBackward?: Scalars["Boolean"];
  cursor?: Maybe<Scalars["String"]>;
  sort?: Maybe<Scalars["String"]>;
};

export type GraphQLProjectFile = {
  id: Scalars["ID"];
  file?: Maybe<GraphQLFile>;
  project: GraphQLProject;
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<GraphQLUser>;
};

export type GraphQLProjectFileCursor = {
  pageSize?: Scalars["Int"];
  paginateBackward?: Scalars["Boolean"];
  cursor?: Maybe<Scalars["String"]>;
};

export type GraphQLProjectFilter = {
  status?: Maybe<GraphQLStatusComparison>;
  assigneeAilorns?: Maybe<GraphQLAssigneeAilornsComparison>;
  types?: Maybe<GraphQLProjectTypesComparison>;
};

export type GraphQLProjectMeta =
  | GraphQLGeneralProjectMeta
  | GraphQLLeaseRenewalProjectMeta
  | GraphQLNewTenancyProjectMeta
  | GraphQLNewManagementProjectMeta
  | GraphQLVacatingTenancyProjectMeta;

export enum GraphQLProjectStatus {
  Open = "Open",
  Closed = "Closed",
  Archived = "Archived",
}

export enum GraphQLProjectType {
  General = "General",
  LeaseRenewal = "LeaseRenewal",
  NewTenancy = "NewTenancy",
  NewManagement = "NewManagement",
  VacatingTenancy = "VacatingTenancy",
}

export type GraphQLProjectTypesComparison = {
  in?: Maybe<Array<GraphQLProjectType>>;
};

export type GraphQLProperty = {
  id: Scalars["ID"];
  ailorn: Scalars["AiloRN"];
  address: GraphQLAddress;
  managements: Array<GraphQLManagement>;
  keys: Array<GraphQLKey>;
  inspections: Array<GraphQLInspection>;
  inspectionAppointments: Array<GraphQLInspectionAppointment>;
};

export type GraphQLPropertyKeysArgs = {
  filter?: Maybe<GraphQLKeyFilter>;
  sorting?: Maybe<Array<GraphQLKeySort>>;
};

export type GraphQLPropertyInspectionsArgs = {
  organisationAilorn: Scalars["AiloRN"];
};

export type GraphQLPropertyInspectionAppointmentsArgs = {
  organisationAilorn: Scalars["AiloRN"];
};

export type GraphQLPropertyInput = {
  unitStreetNumber: Scalars["String"];
  streetName: Scalars["String"];
  suburb?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  country: Scalars["String"];
  postcode?: Maybe<Scalars["String"]>;
};

export type GraphQLProposedPlan = {
  amount: GraphQLMoneyInput;
  desiredStartDate: Scalars["DateTime"];
  frequency: GraphQLQuartzPlanFrequency;
};

export type GraphQLProposedRent = {
  amountInCents: Scalars["String"];
  period: GraphQLRentFrequency;
  effectiveDate: Scalars["Date"];
  setsChargeDate: Scalars["Boolean"];
};

export enum GraphQLProvider {
  Google = "Google",
}

export type GraphQLPurpose = {
  id: Scalars["ID"];
  payableBy: Scalars["AiloRN"];
  payableTo: Scalars["AiloRN"];
  reference: Scalars["AiloRN"];
  /**
   * federating to a PurposeReference is complicated by this bug, as we need multiple @key annotations on the RecurringOwing:
   * https://github.com/graphql-java-kickstart/graphql-java-tools/issues/615
   * payable: PurposeReference
   */
  type: GraphQLPurposeType;
};

export enum GraphQLPurposeType {
  AccountTransfer = "ACCOUNT_TRANSFER",
  Bill = "BILL",
  Deposit = "DEPOSIT",
  Disbursement = "DISBURSEMENT",
  Fee = "FEE",
  NegativeWalletBalance = "NEGATIVE_WALLET_BALANCE",
  Rent = "RENT",
}

export enum GraphQLQuartzPlanFrequency {
  Daily = "daily",
  Fortnightly = "fortnightly",
  Monthly = "monthly",
  Weekly = "weekly",
}

export type GraphQLQuery = {
  reconciliationReportPeriod?: Maybe<GraphQLReconciliationReportPeriod>;
  reconciliationReportPeriods: GraphQLReconciliationReportPeriodConnection;
  trustAccount?: Maybe<GraphQLTrustAccount>;
  trustAccounts: GraphQLTrustAccountConnection;
  trustAccountWallet?: Maybe<GraphQLTrustAccountWallet>;
  trustAccountWallets: GraphQLTrustAccountWalletConnection;
  statement?: Maybe<GraphQLStatement>;
  statements?: Maybe<GraphQLPaginatedStatements>;
  statementProgresses?: Maybe<GraphQLPaginatedStatementProgresses>;
  statementProgress?: Maybe<GraphQLStatementProgress>;
  searchContacts?: Maybe<GraphQLPaginatedContactSearchItems>;
  searchAgencyProperties?: Maybe<GraphQLPaginatedAgencyPropertySearchItems>;
  getTrustAccounts: Array<GraphQLTrustBankAccount>;
  getCentrepayers: Array<GraphQLCentrepayDirective>;
  getCentrepayPaymentDirectives: Array<GraphQLCentrepayDirective>;
  getCentrepayFeeSetting: GraphQLCentrepayFeeSetting;
  getOfflineProcessingEnabledForTenancy: GraphQLOfflinePaymentProcessingEnabled;
  tenancy?: Maybe<GraphQLTenancy>;
  rent?: Maybe<GraphQLRent>;
  /** @deprecated Use `feeBlueprint` instead. */
  recurringFeeBlueprint?: Maybe<GraphQLRecurringFeeBlueprint>;
  feeBlueprint?: Maybe<GraphQLFeeBlueprint>;
  /** @deprecated Use `feeBlueprints` instead. */
  recurringFeeBlueprints?: Maybe<Array<GraphQLRecurringFeeBlueprint>>;
  /** @deprecated Use `feeBlueprints` instead. */
  recurringFeeBlueprintsV2?: Maybe<GraphQLPaginatedRecurringFeeBlueprints>;
  feeBlueprints?: Maybe<GraphQLPaginatedFeeBlueprints>;
  feeTaxCategories?: Maybe<Array<GraphQLFeeTaxCategory>>;
  managementFeeSchedule: GraphQLManagementFeeSchedule;
  managementFolio?: Maybe<GraphQLManagementFolio>;
  managementFolios?: Maybe<GraphQLPaginatedManagementFolios>;
  fee?: Maybe<GraphQLFee>;
  fees?: Maybe<GraphQLPaginatedFees>;
  feeEvents?: Maybe<Array<GraphQLFeeEvent>>;
  recurringFee?: Maybe<GraphQLRecurringFee>;
  recurringFees?: Maybe<Array<GraphQLRecurringFee>>;
  properties?: Maybe<GraphQLPaginatedProperties>;
  property?: Maybe<GraphQLProperty>;
  tenancyAgreement?: Maybe<GraphQLTenancyAgreement>;
  managementFeeBlueprint?: Maybe<GraphQLManagementFeeBlueprint>;
  managementFeeBlueprints?: Maybe<GraphQLPaginatedManagementFeeBlueprints>;
  managementEndReasons: Array<GraphQLManagementEndReason>;
  agencyProperty?: Maybe<GraphQLAgencyProperty>;
  agencyPropertyByOrgAndProperty?: Maybe<GraphQLAgencyProperty>;
  agencyProperties: GraphQLPaginatedAgencyProperties;
  management?: Maybe<GraphQLManagement>;
  managements?: Maybe<GraphQLPaginatedManagements>;
  /** @deprecated Use LegalEntity.managements instead */
  managementsForOwner?: Maybe<GraphQLPaginatedManagements>;
  rentSchedule?: Maybe<GraphQLRentSchedule>;
  /** @deprecated Use LegalEntity.tenancies instead */
  tenanciesForTenant?: Maybe<GraphQLPaginatedTenancies>;
  getTenancyBondAccountsByManagingEntity: Array<GraphQLTenancyBondAccount>;
  team?: Maybe<GraphQLTeam>;
  getCentrepayAccountByManagingEntity?: Maybe<GraphQLCentrepayAccount>;
  getOfflinePaymentAccountsByManagingEntity: Array<GraphQLOfflinePaymentAccount>;
  project?: Maybe<GraphQLProject>;
  canCreateProjectOfType?: Maybe<GraphQLCreateProjectAbility>;
  projectsByOrganisation?: Maybe<GraphQLPaginatedProjects>;
  action?: Maybe<GraphQLAction>;
  checkSagaStatus?: Maybe<GraphQLSagaStatusResponse>;
  getTrustAccountLock?: Maybe<GraphQLTrustAccountLock>;
  payablePurposes?: Maybe<Array<GraphQLPurpose>>;
  paidToDatePreview: GraphQLPaidTo;
  recurringOwing?: Maybe<GraphQLRecurringOwing>;
  recurringOwingByReference?: Maybe<GraphQLRecurringOwing>;
  recurringOwingPreviewSummary: Array<GraphQLOwingSummary>;
  /** @deprecated use userPreferencesByUserIdAndType */
  userPreferenceByUserId?: Maybe<GraphQLUserPreference>;
  userPreferencesByUserIdAndType?: Maybe<Array<Maybe<GraphQLUserPreference>>>;
  getNotification: GraphQLNotificationBody;
  migrationLegalEntitiesWithExternalTrustAccount?: Maybe<GraphQLPaginatedLegalEntityWithExternalTrustAccounts>;
  migratingManagement?: Maybe<GraphQLMigratingManagement>;
  migratingManagements?: Maybe<GraphQLPaginatedMigratingManagements>;
  /**
   * Amount due to be paid up til the 00am of the given timestamp minus all payment made against this liability up til now.
   * e.g. if liability is $100/wk rent. Tenant paid nothing, and input time is Wed 10am, this will return 2days * 100/7
   */
  amountDueToDate?: Maybe<GraphQLMoney>;
  autoPayLiabilityStatus?: Maybe<GraphQLAutoPayLiabilityStatus>;
  autoPayLiabilityStatuses?: Maybe<Array<Maybe<GraphQLAutoPayLiabilityStatus>>>;
  autoWithdrawPlanById?: Maybe<GraphQLAutoWithdrawPlan>;
  autoWithdrawPlans?: Maybe<GraphQLPaginatedAutoWithdrawPlans>;
  bankReconciliationDetailReport?: Maybe<GraphQLPaginatedReconciliationDetail>;
  bankReconciliationReport?: Maybe<GraphQLBankReconciliationReport>;
  gatewayCapturePaymentDetails?: Maybe<GraphQLGatewayCapturePaymentDetails>;
  ignoreMe?: Maybe<GraphQLIgnoreMe>;
  liabilityById?: Maybe<GraphQLLiability>;
  liabilityCalculation?: Maybe<GraphQLLiabilityCalculation>;
  liabilityEntry?: Maybe<GraphQLLiabilityEntry>;
  liabilityPaymentPlanById?: Maybe<GraphQLLiabilityPaymentPlan>;
  liabilityPaymentPlans?: Maybe<GraphQLPaginatedLiabilityPaymentPlans>;
  liabilityPlanChangePreview?: Maybe<GraphQLLiabilityChangePreview>;
  liabilityReportIgnoreMe?: Maybe<GraphQLLiabilityReport>;
  listBankAccountBlacklistByOwner?: Maybe<Array<GraphQLBankAccountBlacklist>>;
  listPaymentMethodAiloFeesWaiverByOwner?: Maybe<
    Array<Maybe<GraphQLPaymentMethodAiloFees>>
  >;
  managementFolioIgnoreMe?: Maybe<GraphQLManagementFolio>;
  paymentMethodById?: Maybe<GraphQLPaymentMethod>;
  paymentMethods?: Maybe<GraphQLPaginatedPaymentMethods>;
  /** @deprecated Use `paymentMethods` instead. */
  paymentMethodsByOwner?: Maybe<GraphQLPaginatedPaymentMethods>;
  previewMultipleRentReviews?: Maybe<Array<Maybe<GraphQLRentReviewPlan>>>;
  rentReviewPreview?: Maybe<Array<Maybe<GraphQLRentReviewPlan>>>;
  /** @deprecated The return type is deprecated. This is only being used for integration tests and will be removed eventually. */
  statementByAccount?: Maybe<GraphQLDeprecatedStatementData>;
  taxSummaryStatementData: GraphQLTaxSummaryStatementData;
  tenancyLedgerLineItems: Array<GraphQLTenancyLedgerLineItem>;
  totalClearedRentReceivedInWallets: GraphQLTotalClearedRentReceived;
  transactionDetailsById?: Maybe<GraphQLTransactionDetails>;
  transactionReport?: Maybe<GraphQLPaginatedTransactionReport>;
  transferSummaryStatementData?: Maybe<GraphQLWalletStatementData>;
  /**
   * Query to get the range of a transfer summary statement.
   * The input businessTx and matching toDateTime corresponds to the transfer from management wallet to an investor's bank account.
   * This query returns the timestamp of that transfer (toDateTime), and the timestamp of the previous non-failed transfer (fromDateTime).
   * TransferSummaryStatementRange is to be applied as part of TransferSummaryStatementInput for the transferSummaryStatementData endpoint.
   */
  transferSummaryStatementRange?: Maybe<GraphQLTransferSummaryStatementRange>;
  walletBalanceReport?: Maybe<GraphQLWalletBalanceReport>;
  walletById?: Maybe<GraphQLWallet>;
  walletByWalletOwnerReference?: Maybe<GraphQLWallet>;
  /** @deprecated Use `walletEntriesByOwnerRef` instead */
  walletEntriesWithStatusByOwnerRef?: Maybe<GraphQLPaginatedWalletEntriesWithBtStatus>;
  walletOwnerLiabilityReport?: Maybe<GraphQLWalletOwnerLiabilityReport>;
  walletStatement?: Maybe<GraphQLWalletStatementData>;
  key?: Maybe<GraphQLKey>;
  inspections: Array<GraphQLInspection>;
  inspection: GraphQLInspection;
  inspectionAreas: Array<GraphQLInspectionArea>;
  inspectionArea: GraphQLInspectionArea;
  inspectionFeatures: Array<GraphQLInspectionFeature>;
  inspectionFeature: GraphQLInspectionFeature;
  inspectionConnection: GraphQLInspectionConnection;
  inspectionAppointment: GraphQLInspectionAppointment;
  inspectionAppointmentConnection: GraphQLInspectionAppointmentConnection;
  accountOwner?: Maybe<GraphQLAccountOwner>;
  accounts?: Maybe<GraphQLPaginatedAccounts>;
  entries?: Maybe<GraphQLPaginatedEntries>;
  firstAndLastEntries?: Maybe<GraphQLFirstAndLastEntries>;
  incomeAndExpenseByTaxCategory?: Maybe<GraphQLIncomeAndExpenseByTaxCategoryData>;
  ledgerEvent?: Maybe<GraphQLLedgerEvent>;
  reiTokens: Array<GraphQLReiToken>;
  reiToken: GraphQLReiToken;
  form: GraphQLForm;
  reiForm: GraphQLReiForm;
  ailoForms: Array<GraphQLAiloForm>;
  ailoForm: GraphQLAiloForm;
  ailoFormTemplates: Array<GraphQLAiloFormTemplate>;
  ailoFormTemplate: GraphQLAiloFormTemplate;
  ailoFormTemplateByType: GraphQLAiloFormTemplate;
  ailoLiabilityReport: GraphQLLiabilityCategoryReport;
  walletOwnerBalanceReport: GraphQLWalletOwnerBalanceReport;
  discrepancyReport: GraphQLDiscrepancyReport;
  file?: Maybe<GraphQLFile>;
  claimedFilesCount?: Maybe<GraphQLClaimedFilesCount>;
  contacts: GraphQLPaginatedContacts;
  contactsByIds: Array<GraphQLContact>;
  contactsByEmails: Array<GraphQLContact>;
  contactsByUserAilorns: Array<GraphQLContact>;
  contactsByTenancy: GraphQLContactsByTenancy;
  contactsByManagement: GraphQLContactsByManagement;
  findChatsV2: GraphQLPaginatedChatsV2;
  chatV2: GraphQLChatV2;
  threadV2: GraphQLThreadV2;
  messageV2: GraphQLMessageV2;
  unreadMessagesCount: Scalars["Int"];
  /**
   * `referenceAiloRNs` is deprecated, use `referenceIds` instead.
   * @deprecated legacy chat implementation
   */
  chats?: Maybe<GraphQLPaginatedChats>;
  /**
   * `referenceAiloRNs` is deprecated, use `referenceIds` instead.
   * @deprecated legacy chat implementation
   */
  chatsV0?: Maybe<GraphQLPaginatedChatsV0>;
  /** @deprecated legacy chat implementation */
  chat?: Maybe<GraphQLChat>;
  /** @deprecated legacy chat implementation */
  chatV0?: Maybe<GraphQLChatV0>;
  /** @deprecated legacy chat implementation */
  chatWithExactAccess?: Maybe<GraphQLChat>;
  /** @deprecated legacy chat implementation */
  chatWithExactAccessV0?: Maybe<GraphQLChatV0>;
  /** @deprecated legacy chat implementation */
  unreadChatsCount?: Maybe<Scalars["Int"]>;
  /** @deprecated legacy chat implementation */
  unreadChatsCountV0?: Maybe<Scalars["Int"]>;
  /** @deprecated legacy chat implementation */
  message?: Maybe<GraphQLMessage>;
  /** @deprecated legacy chat implementation */
  messageV0?: Maybe<GraphQLMessageV0>;
  /** @deprecated legacy chat implementation */
  emailContact?: Maybe<GraphQLEmailContact>;
  /** @deprecated legacy chat implementation */
  emailContactV0?: Maybe<GraphQLEmailContactV0>;
  /** @deprecated legacy chat implementation */
  emailContacts?: Maybe<GraphQLPaginatedEmailContacts>;
  /** @deprecated legacy chat implementation */
  emailContactsV0?: Maybe<GraphQLPaginatedEmailContactsV0>;
  billById: GraphQLBill;
  bills?: Maybe<GraphQLPaginatedBills>;
  paymentReferences?: Maybe<GraphQLPaginatedPaymentReferences>;
  taxCategories: Array<GraphQLTaxCategory>;
  taxCategoryById?: Maybe<GraphQLTaxCategory>;
  /** @deprecated Use `supplier` instead */
  supplierById?: Maybe<GraphQLSupplier>;
  supplier?: Maybe<GraphQLSupplier>;
  suppliers: GraphQLPaginatedSuppliers;
  emptyAutopayment?: Maybe<Scalars["Boolean"]>;
  /** @deprecated Use 'effectiveUser' instead */
  currentUser?: Maybe<GraphQLUser>;
  effectiveUser?: Maybe<GraphQLUser>;
  actualUser?: Maybe<GraphQLUser>;
  user?: Maybe<GraphQLUser>;
  users: Array<GraphQLUser>;
  userEmailVerifications?: Maybe<GraphQLPaginatedUserEmailVerifications>;
  userEmailVerification?: Maybe<GraphQLUserEmailVerification>;
  legalEntity?: Maybe<GraphQLLegalEntity>;
  legalEntities?: Maybe<GraphQLPaginatedLegalEntities>;
  personEmailInUse: Scalars["Boolean"];
  people?: Maybe<GraphQLPaginatedPeople>;
  person?: Maybe<GraphQLPerson>;
  abrCompanyLookup?: Maybe<GraphQLAbrCompanyLookupResult>;
  company?: Maybe<GraphQLCompany>;
  companies?: Maybe<GraphQLPaginatedCompanies>;
  organisation?: Maybe<GraphQLOrganisation>;
  organisations?: Maybe<GraphQLPaginatedOrganisations>;
  roles?: Maybe<Array<GraphQLRole>>;
  /** @deprecated Use `LegalEntity.legalEntityMembershipsAsLegalEntity` instead. */
  rolesAtLegalEntity?: Maybe<Array<GraphQLLegalEntityPersonRole>>;
  getCrn?: Maybe<GraphQLGetCrnOutput>;
  getLegalEntityByCrn?: Maybe<GraphQLGetLegalEntityByCrnOutput>;
  atpEmptyStarterSchemaNoop?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLQueryReconciliationReportPeriodArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryReconciliationReportPeriodsArgs = {
  paging?: Maybe<GraphQLCursorPaging>;
  filter?: Maybe<GraphQLReconciliationReportPeriodFilter>;
  sorting?: Maybe<Array<GraphQLReconciliationReportPeriodSort>>;
};

export type GraphQLQueryTrustAccountArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryTrustAccountsArgs = {
  paging?: Maybe<GraphQLCursorPaging>;
  filter?: Maybe<GraphQLTrustAccountFilter>;
  sorting?: Maybe<Array<GraphQLTrustAccountSort>>;
};

export type GraphQLQueryTrustAccountWalletArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryTrustAccountWalletsArgs = {
  paging?: Maybe<GraphQLCursorPaging>;
  filter?: Maybe<GraphQLTrustAccountWalletFilter>;
  sorting?: Maybe<Array<GraphQLTrustAccountWalletSort>>;
};

export type GraphQLQueryStatementArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryStatementsArgs = {
  filter?: Maybe<GraphQLGeneralStatementFilter>;
  paginationParams?: Maybe<GraphQLPaginationParams>;
  sort?: Maybe<Array<GraphQLStatementSort>>;
};

export type GraphQLQueryStatementProgressesArgs = {
  filter: GraphQLStatementProgressFilter;
  cursor: GraphQLStatementProgressCursor;
};

export type GraphQLQueryStatementProgressArgs = {
  id: Scalars["ID"];
};

export type GraphQLQuerySearchContactsArgs = {
  organisationAilornIn?: Maybe<Array<Scalars["AiloRN"]>>;
  typeOf?: Maybe<Array<Scalars["String"]>>;
  legalEntityType?: Maybe<Array<Scalars["String"]>>;
  query?: Maybe<Scalars["String"]>;
  sort?: Maybe<Array<GraphQLContactSortParams>>;
  paginationParams?: Maybe<GraphQLPaginationParamsWithPageNumber>;
};

export type GraphQLQuerySearchAgencyPropertiesArgs = {
  input: GraphQLSearchAgencyPropertiesQueryInput;
};

export type GraphQLQueryGetTrustAccountsArgs = {
  input: GraphQLGetTrustAccountInput;
};

export type GraphQLQueryGetCentrepayersArgs = {
  input: GraphQLGetCentrepayersInput;
};

export type GraphQLQueryGetCentrepayPaymentDirectivesArgs = {
  input: GraphQLGetCentrepayPaymentDirectivesFilter;
};

export type GraphQLQueryGetCentrepayFeeSettingArgs = {
  escrowAccount: Scalars["AiloRN"];
};

export type GraphQLQueryGetOfflineProcessingEnabledForTenancyArgs = {
  tenancy: Scalars["AiloRN"];
};

export type GraphQLQueryTenancyArgs = {
  tenancyId: Scalars["ID"];
};

export type GraphQLQueryRentArgs = {
  id: Scalars["AiloRN"];
};

export type GraphQLQueryRecurringFeeBlueprintArgs = {
  id: Scalars["AiloRN"];
};

export type GraphQLQueryFeeBlueprintArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryRecurringFeeBlueprintsArgs = {
  conditions: GraphQLRecurringFeeBlueprintsQueryInput;
};

export type GraphQLQueryRecurringFeeBlueprintsV2Args = {
  conditions?: Maybe<GraphQLRecurringFeeBlueprintsQueryConditions>;
  cursor?: Maybe<GraphQLPageCursorWithoutSort>;
};

export type GraphQLQueryFeeBlueprintsArgs = {
  conditions?: Maybe<GraphQLFeeBlueprintsQueryConditions>;
  cursor?: Maybe<GraphQLPageCursorWithoutSort>;
};

export type GraphQLQueryManagementFeeScheduleArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryManagementFolioArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryManagementFoliosArgs = {
  id?: Maybe<Array<Scalars["ID"]>>;
  ownerId?: Maybe<Array<Scalars["ID"]>>;
  managingEntityId?: Maybe<Array<Scalars["ID"]>>;
  paginationParams?: GraphQLPaginationParams;
};

export type GraphQLQueryFeeArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryFeesArgs = {
  conditions?: Maybe<GraphQLFeesQueryConditions>;
  cursor?: Maybe<GraphQLPageCursorWithoutSort>;
  sort?: Maybe<Array<GraphQLFeeSort>>;
};

export type GraphQLQueryRecurringFeeArgs = {
  id: Scalars["AiloRN"];
};

export type GraphQLQueryRecurringFeesArgs = {
  conditions: GraphQLRecurringFeesQueryInput;
};

export type GraphQLQueryPropertiesArgs = {
  pageCursor: GraphQLPmPageCursor;
  search?: Maybe<Scalars["String"]>;
};

export type GraphQLQueryPropertyArgs = {
  propertyId: Scalars["ID"];
};

export type GraphQLQueryTenancyAgreementArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryManagementFeeBlueprintArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryManagementFeeBlueprintsArgs = {
  conditions?: Maybe<GraphQLManagementFeeBlueprintsQueryConditions>;
  cursor?: Maybe<GraphQLPageCursorWithoutSort>;
};

export type GraphQLQueryAgencyPropertyArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryAgencyPropertyByOrgAndPropertyArgs = {
  organisationAilorn: Scalars["AiloRN"];
  propertyId: Scalars["ID"];
};

export type GraphQLQueryAgencyPropertiesArgs = {
  input: GraphQLAgencyPropertiesQueryInput;
};

export type GraphQLQueryManagementArgs = {
  managementId: Scalars["ID"];
};

export type GraphQLQueryManagementsArgs = {
  pageCursor: GraphQLPmPageCursor;
  organisationId?: Maybe<Scalars["ID"]>;
  search?: Maybe<Scalars["String"]>;
};

export type GraphQLQueryManagementsForOwnerArgs = {
  ownerId: Scalars["AiloRN"];
  pageCursor: GraphQLPmPageCursor;
};

export type GraphQLQueryRentScheduleArgs = {
  id: Scalars["AiloRN"];
};

export type GraphQLQueryTenanciesForTenantArgs = {
  tenantId: Scalars["AiloRN"];
  pageCursor: GraphQLPmPageCursor;
};

export type GraphQLQueryGetTenancyBondAccountsByManagingEntityArgs = {
  managingEntity: Scalars["AiloRN"];
};

export type GraphQLQueryTeamArgs = {
  teamId: Scalars["AiloRN"];
};

export type GraphQLQueryGetCentrepayAccountByManagingEntityArgs = {
  managingEntity: Scalars["AiloRN"];
};

export type GraphQLQueryGetOfflinePaymentAccountsByManagingEntityArgs = {
  managingEntity: Scalars["AiloRN"];
};

export type GraphQLQueryProjectArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryCanCreateProjectOfTypeArgs = {
  managementAilorn: Scalars["AiloRN"];
  type: GraphQLProjectType;
};

export type GraphQLQueryProjectsByOrganisationArgs = {
  organisationAilorn: Scalars["AiloRN"];
  filter?: Maybe<GraphQLProjectFilter>;
  pageCursor?: GraphQLProjectCursor;
};

export type GraphQLQueryActionArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryCheckSagaStatusArgs = {
  sagaId?: Maybe<Scalars["ID"]>;
};

export type GraphQLQueryGetTrustAccountLockArgs = {
  trustAccountAilorn: Scalars["AiloRN"];
};

export type GraphQLQueryPayablePurposesArgs = {
  payableBy: Array<Scalars["AiloRN"]>;
};

export type GraphQLQueryPaidToDatePreviewArgs = {
  owing: GraphQLRecurringOwingCalculationInput;
  totalAmountPaid?: Maybe<GraphQLMoneyInput>;
};

export type GraphQLQueryRecurringOwingArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryRecurringOwingByReferenceArgs = {
  ref: Scalars["AiloRN"];
};

export type GraphQLQueryRecurringOwingPreviewSummaryArgs = {
  owing: GraphQLRecurringOwingCalculationInput;
};

export type GraphQLQueryUserPreferenceByUserIdArgs = {
  userId: Scalars["AiloRN"];
};

export type GraphQLQueryUserPreferencesByUserIdAndTypeArgs = {
  userId: Scalars["AiloRN"];
  communicationType?: Maybe<GraphQLCommunicationType>;
};

export type GraphQLQueryGetNotificationArgs = {
  notificationId: Scalars["AiloRN"];
};

export type GraphQLQueryMigrationLegalEntitiesWithExternalTrustAccountArgs = {
  pagination: GraphQLPaginationParams;
  filters: GraphQLLegalEntityWithExternalTrustAccountsFilters;
  sort: GraphQLLegalEntityWithExternalTrustAccountSortParams;
};

export type GraphQLQueryMigratingManagementArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryMigratingManagementsArgs = {
  pagination: GraphQLPaginationParams;
  filters?: Maybe<GraphQLMigratingManagementsFilters>;
  sort: GraphQLMigratingManagementSortParams;
};

export type GraphQLQueryAmountDueToDateArgs = {
  amountDueToDateInput: GraphQLAmountDueToDateInput;
};

export type GraphQLQueryAutoPayLiabilityStatusArgs = {
  payerId?: Maybe<Scalars["AiloRN"]>;
  payerLegalEntityId: Scalars["AiloRN"];
};

export type GraphQLQueryAutoPayLiabilityStatusesArgs = {
  payerLegalEntityId: Scalars["AiloRN"];
};

export type GraphQLQueryAutoWithdrawPlanByIdArgs = {
  autoWithdrawPlanId: Scalars["ID"];
  payerLegalEntityId?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLQueryAutoWithdrawPlansArgs = {
  disableOwnerFilter?: Maybe<Scalars["Boolean"]>;
  enabled: Scalars["Boolean"];
  payerLegalEntityId: Scalars["AiloRN"];
};

export type GraphQLQueryBankReconciliationDetailReportArgs = {
  cursor?: Maybe<GraphQLBidirectionalPageCursor>;
  filter?: Maybe<GraphQLFilter>;
};

export type GraphQLQueryBankReconciliationReportArgs = {
  filter?: Maybe<GraphQLDateRangeFilter>;
};

export type GraphQLQueryGatewayCapturePaymentDetailsArgs = {
  owner: Scalars["AiloRN"];
};

export type GraphQLQueryLiabilityByIdArgs = {
  liabilityId: Scalars["ID"];
};

export type GraphQLQueryLiabilityCalculationArgs = {
  liabilityCalculationInput: GraphQLLiabilityCalculationInput;
};

export type GraphQLQueryLiabilityEntryArgs = {
  liabilityEntryId: Scalars["ID"];
};

export type GraphQLQueryLiabilityPaymentPlanByIdArgs = {
  liabilityPaymentPlanId: Scalars["ID"];
  payerLegalEntityId: Scalars["AiloRN"];
};

export type GraphQLQueryLiabilityPaymentPlansArgs = {
  enabled: Scalars["Boolean"];
  payerLegalEntityId: Scalars["AiloRN"];
};

export type GraphQLQueryLiabilityPlanChangePreviewArgs = {
  planToPreview: GraphQLLiabilityPlanInput;
};

export type GraphQLQueryListBankAccountBlacklistByOwnerArgs = {
  owner: Scalars["AiloRN"];
};

export type GraphQLQueryListPaymentMethodAiloFeesWaiverByOwnerArgs = {
  owner: Scalars["AiloRN"];
};

export type GraphQLQueryPaymentMethodByIdArgs = {
  paymentMethodId: Scalars["ID"];
};

export type GraphQLQueryPaymentMethodsArgs = {
  conditions?: Maybe<GraphQLPaymentMethodSearchOptions>;
};

export type GraphQLQueryPaymentMethodsByOwnerArgs = {
  options?: Maybe<GraphQLPaymentMethodSearchOptions>;
  owner: Scalars["AiloRN"];
};

export type GraphQLQueryPreviewMultipleRentReviewsArgs = {
  proposedPlan: GraphQLPreviewMultipleRentReviewsInput;
};

export type GraphQLQueryRentReviewPreviewArgs = {
  proposedPlan: GraphQLRentReviewProposedPlanInput;
};

export type GraphQLQueryStatementByAccountArgs = {
  statementByAccountInput: GraphQLStatementByAccountInput;
};

export type GraphQLQueryTaxSummaryStatementDataArgs = {
  statementRequest: GraphQLTaxSummaryStatementInput;
};

export type GraphQLQueryTenancyLedgerLineItemsArgs = {
  input?: Maybe<GraphQLTenancyLedgerLineItemsInput>;
};

export type GraphQLQueryTotalClearedRentReceivedInWalletsArgs = {
  ownerRef: Scalars["AiloRN"];
};

export type GraphQLQueryTransactionDetailsByIdArgs = {
  businessTransactionId: Scalars["AiloRN"];
};

export type GraphQLQueryTransactionReportArgs = {
  cursor: GraphQLLedgerPageCursor;
  filter?: Maybe<GraphQLFilter>;
};

export type GraphQLQueryTransferSummaryStatementDataArgs = {
  input?: Maybe<GraphQLTransferSummaryStatementInput>;
};

export type GraphQLQueryTransferSummaryStatementRangeArgs = {
  input?: Maybe<GraphQLTransferSummaryStatementRangeInput>;
};

export type GraphQLQueryWalletBalanceReportArgs = {
  filter?: Maybe<GraphQLFilter>;
};

export type GraphQLQueryWalletByIdArgs = {
  walletId: Scalars["ID"];
};

export type GraphQLQueryWalletByWalletOwnerReferenceArgs = {
  walletOwnerReference: Scalars["AiloRN"];
};

export type GraphQLQueryWalletEntriesWithStatusByOwnerRefArgs = {
  aggregated?: Maybe<Scalars["Boolean"]>;
  cursor?: Maybe<GraphQLLedgerPageCursor>;
  ownerRef: Scalars["AiloRN"];
  relatingToManagementAilorn?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLQueryWalletOwnerLiabilityReportArgs = {
  filter?: Maybe<GraphQLDateRangeFilter>;
};

export type GraphQLQueryWalletStatementArgs = {
  input: GraphQLWalletStatementInput;
};

export type GraphQLQueryKeyArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryInspectionArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryInspectionAreaArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryInspectionFeatureArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryInspectionConnectionArgs = {
  paging?: Maybe<GraphQLCursorPaging>;
  filter?: Maybe<GraphQLInspectionFilter>;
  sorting?: Maybe<Array<GraphQLInspectionSort>>;
};

export type GraphQLQueryInspectionAppointmentArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryInspectionAppointmentConnectionArgs = {
  paging?: Maybe<GraphQLCursorPaging>;
  filter?: Maybe<GraphQLInspectionAppointmentFilter>;
  sorting?: Maybe<Array<GraphQLInspectionAppointmentSort>>;
};

export type GraphQLQueryAccountOwnerArgs = {
  reference: Scalars["AiloRN"];
};

export type GraphQLQueryAccountsArgs = {
  filters: GraphQLListAccountsFilters;
  pagination?: GraphQLPaginationParams;
  sorts?: Array<GraphQLListAccountsSortParams>;
};

export type GraphQLQueryEntriesArgs = {
  filters: GraphQLListEntriesFilters;
  pagination?: GraphQLPaginationParams;
  sorts?: Array<GraphQLListEntriesSortParams>;
};

export type GraphQLQueryFirstAndLastEntriesArgs = {
  filters: GraphQLListEntriesFilters;
};

export type GraphQLQueryIncomeAndExpenseByTaxCategoryArgs = {
  input?: Maybe<GraphQLIncomeAndExpenseByTaxCategoryInput>;
};

export type GraphQLQueryLedgerEventArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryReiTokenArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryFormArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryReiFormArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryAiloFormArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryAiloFormTemplateArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryAiloFormTemplateByTypeArgs = {
  version?: Maybe<Scalars["Int"]>;
  state: GraphQLAustralianState;
  type: GraphQLAiloFormType;
};

export type GraphQLQueryAiloLiabilityReportArgs = {
  filter?: Maybe<GraphQLDateRangeFilter>;
};

export type GraphQLQueryWalletOwnerBalanceReportArgs = {
  filter?: Maybe<GraphQLDateRangeFilter>;
};

export type GraphQLQueryDiscrepancyReportArgs = {
  filter?: Maybe<GraphQLFilter>;
};

export type GraphQLQueryFileArgs = {
  id: Scalars["AiloRN"];
};

export type GraphQLQueryClaimedFilesCountArgs = {
  claimerAilorn: Scalars["AiloRN"];
  fileKind?: Maybe<GraphQLFileKind>;
};

export type GraphQLQueryContactsArgs = {
  input: GraphQLContactsQueryInput;
};

export type GraphQLQueryContactsByIdsArgs = {
  ids: Array<Scalars["ID"]>;
};

export type GraphQLQueryContactsByEmailsArgs = {
  organisationAilorn: Scalars["AiloRN"];
  emails: Array<Scalars["String"]>;
};

export type GraphQLQueryContactsByUserAilornsArgs = {
  organisationAilorn: Scalars["AiloRN"];
  userAilorns: Array<Scalars["AiloRN"]>;
};

export type GraphQLQueryContactsByTenancyArgs = {
  tenancyAilorn: Scalars["AiloRN"];
  filters?: Maybe<GraphQLContactsFilters>;
};

export type GraphQLQueryContactsByManagementArgs = {
  managementAilorn: Scalars["AiloRN"];
  filters?: Maybe<GraphQLContactsFilters>;
};

export type GraphQLQueryFindChatsV2Args = {
  input: GraphQLPaginatedChatsInputV2;
};

export type GraphQLQueryChatV2Args = {
  chatAilorn: Scalars["AiloRN"];
};

export type GraphQLQueryThreadV2Args = {
  threadAilorn: Scalars["AiloRN"];
};

export type GraphQLQueryMessageV2Args = {
  messageAilorn: Scalars["AiloRN"];
};

export type GraphQLQueryUnreadMessagesCountArgs = {
  input: GraphQLUnreadMessagesCountInput;
};

export type GraphQLQueryChatsArgs = {
  referenceAiloRNs?: Maybe<Array<Scalars["AiloRN"]>>;
  referenceIds?: Maybe<Array<Scalars["AiloRN"]>>;
  filters?: Array<GraphQLChatFilterParams>;
};

export type GraphQLQueryChatsV0Args = {
  referenceAiloRNs?: Maybe<Array<Scalars["AiloRN"]>>;
  referenceIds?: Maybe<Array<Scalars["AiloRN"]>>;
  filters?: Array<GraphQLChatFilterParamsV0>;
};

export type GraphQLQueryChatArgs = {
  id: Scalars["AiloRN"];
};

export type GraphQLQueryChatV0Args = {
  id: Scalars["AiloRN"];
};

export type GraphQLQueryChatWithExactAccessArgs = {
  accessEntities: Array<Scalars["AiloRN"]>;
};

export type GraphQLQueryChatWithExactAccessV0Args = {
  accessEntities: Array<Scalars["AiloRN"]>;
};

export type GraphQLQueryMessageArgs = {
  id: Scalars["AiloRN"];
};

export type GraphQLQueryMessageV0Args = {
  id: Scalars["AiloRN"];
};

export type GraphQLQueryEmailContactArgs = {
  id: Scalars["AiloRN"];
};

export type GraphQLQueryEmailContactV0Args = {
  id: Scalars["AiloRN"];
};

export type GraphQLQueryEmailContactsArgs = {
  pagination?: Maybe<GraphQLPaginationInput>;
  ownerIds?: Maybe<Array<Scalars["AiloRN"]>>;
};

export type GraphQLQueryEmailContactsV0Args = {
  pagination?: Maybe<GraphQLPaginationInputV0>;
  ownerIds?: Maybe<Array<Scalars["AiloRN"]>>;
};

export type GraphQLQueryBillByIdArgs = {
  billId: Scalars["ID"];
};

export type GraphQLQueryBillsArgs = {
  id?: Maybe<Array<Scalars["AiloRN"]>>;
  organisationId?: Maybe<Array<Scalars["AiloRN"]>>;
  payerId?: Maybe<Array<Scalars["AiloRN"]>>;
  payerIdNotIn?: Maybe<Array<Scalars["AiloRN"]>>;
  payerType?: Maybe<Array<GraphQLBillPayerType>>;
  payeeId?: Maybe<Array<Scalars["AiloRN"]>>;
  taxCategoryId?: Maybe<Array<Scalars["String"]>>;
  taxCategoryIdNotIn?: Maybe<Array<Scalars["String"]>>;
  status?: Maybe<Array<GraphQLBillStatus>>;
  paymentStatus?: Maybe<Array<GraphQLBillPaymentStatus>>;
  management?: Maybe<Array<Scalars["AiloRN"]>>;
  team?: Maybe<Array<Scalars["AiloRN"]>>;
  paid?: Maybe<Scalars["Boolean"]>;
  dueDate?: Maybe<GraphQLLocalDateRangeCondition>;
  payByDate?: Maybe<GraphQLLocalDateRangeCondition>;
  paymentDate?: Maybe<GraphQLLocalDateRangeCondition>;
  invoiceNumber?: Maybe<Array<Scalars["String"]>>;
  agencyStatus?: Maybe<Array<GraphQLBillAgencyStatus>>;
  sort?: Maybe<GraphQLBillSortParams>;
  cursor?: Maybe<GraphQLPageCursorWithoutSort>;
  excludeBillsWithEmptyPaymentStatus?: Maybe<Scalars["Boolean"]>;
  includeUnassigned?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLQueryPaymentReferencesArgs = {
  cursor?: Maybe<GraphQLBillDefaultPageCursor>;
  conditions?: Maybe<GraphQLPaymentReferencesQueryConditions>;
};

export type GraphQLQueryTaxCategoryByIdArgs = {
  taxCategoryId: Scalars["String"];
};

export type GraphQLQuerySupplierByIdArgs = {
  supplierId: Scalars["ID"];
};

export type GraphQLQuerySupplierArgs = {
  id: Scalars["ID"];
};

export type GraphQLQuerySuppliersArgs = {
  cursor: GraphQLPageCursor;
  conditions?: Maybe<GraphQLSuppliersQueryInput>;
};

export type GraphQLQueryUserArgs = {
  id: Scalars["Int"];
};

export type GraphQLQueryUsersArgs = {
  ids: Array<Scalars["Int"]>;
};

export type GraphQLQueryUserEmailVerificationsArgs = {
  userId?: Maybe<Scalars["AiloRN"]>;
  emailAddressStartsWith?: Maybe<Scalars["String"]>;
  pageCursor?: Maybe<GraphQLPageCursor>;
};

export type GraphQLQueryUserEmailVerificationArgs = {
  id: Scalars["AiloRN"];
};

export type GraphQLQueryLegalEntityArgs = {
  id: Scalars["AiloRN"];
};

export type GraphQLQueryLegalEntitiesArgs = {
  pageCursor?: Maybe<GraphQLPageCursor>;
  searchQuery?: Maybe<Scalars["String"]>;
};

export type GraphQLQueryPersonEmailInUseArgs = {
  email: Scalars["String"];
};

export type GraphQLQueryPeopleArgs = {
  pageCursor?: Maybe<GraphQLPageCursor>;
  search?: Maybe<Scalars["String"]>;
  domainType?: Maybe<GraphQLDomainType>;
};

export type GraphQLQueryPersonArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryAbrCompanyLookupArgs = {
  abnOrAcn: Scalars["String"];
};

export type GraphQLQueryCompanyArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryCompaniesArgs = {
  pageCursor?: Maybe<GraphQLPageCursor>;
  search?: Maybe<Scalars["String"]>;
  orgType?: Maybe<GraphQLOrganisationType>;
};

export type GraphQLQueryOrganisationArgs = {
  id: Scalars["ID"];
};

export type GraphQLQueryOrganisationsArgs = {
  pageCursor?: Maybe<GraphQLPageCursor>;
  orgType?: Maybe<GraphQLOrganisationType>;
  search?: Maybe<Scalars["String"]>;
};

export type GraphQLQueryRolesArgs = {
  conditions?: Maybe<GraphQLRolesQueryConditions>;
};

export type GraphQLQueryRolesAtLegalEntityArgs = {
  legalEntity: Scalars["AiloRN"];
};

export type GraphQLQueryGetCrnArgs = {
  input: GraphQLGetCrnInput;
};

export type GraphQLQueryGetLegalEntityByCrnArgs = {
  input: GraphQLGetLegalEntityByCrnInput;
};

export type GraphQLReceiptFundsInput = {
  allocations: Array<GraphQLPaymentAllocationInput>;
  idempotencyKey: Scalars["String"];
  paidByReference?: Maybe<Scalars["String"]>;
  paidUsing?: Maybe<GraphQLPaidUsingType>;
  trustAccount: Scalars["AiloRN"];
};

export type GraphQLReconciliationDetailReportItem = {
  businessTransactionId: Scalars["AiloRN"];
  categoryId: Scalars["Int"];
  fees?: Maybe<GraphQLMoney>;
  id: Scalars["Int"];
  paymentTransactionId?: Maybe<Scalars["AiloRN"]>;
  paymentType?: Maybe<Scalars["String"]>;
  requested?: Maybe<GraphQLMoney>;
  total: GraphQLMoney;
  transactionType?: Maybe<Scalars["String"]>;
};

export type GraphQLReconciliationReportItem = {
  count: Scalars["Long"];
  fees?: Maybe<GraphQLMoney>;
  id?: Maybe<Scalars["Int"]>;
  paymentType?: Maybe<Scalars["String"]>;
  requested?: Maybe<GraphQLMoney>;
  total: GraphQLMoney;
  transactionType?: Maybe<Scalars["String"]>;
};

export type GraphQLReconciliationReportPeriod = {
  id: Scalars["ID"];
  ailorn: Scalars["AiloRN"];
  month: Scalars["Int"];
  year: Scalars["Int"];
  locked: Scalars["Boolean"];
  trustAccountAilorn: Scalars["AiloRN"];
  trustAccount: GraphQLTrustAccount;
  legalEntity?: Maybe<GraphQLCompany>;
  lastAddedStatementBalance?: Maybe<GraphQLTrustAccountStatementBalance>;
  canAlterLock: Scalars["Boolean"];
};

export type GraphQLReconciliationReportPeriodConnection = {
  /** Paging information */
  pageInfo: GraphQLRelayPageInfo;
  /** Array of edges. */
  edges: Array<GraphQLReconciliationReportPeriodEdge>;
};

export type GraphQLReconciliationReportPeriodEdge = {
  /** The node containing the ReconciliationReportPeriod */
  node: GraphQLReconciliationReportPeriod;
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
};

export type GraphQLReconciliationReportPeriodFilter = {
  and?: Maybe<Array<GraphQLReconciliationReportPeriodFilter>>;
  or?: Maybe<Array<GraphQLReconciliationReportPeriodFilter>>;
  id?: Maybe<GraphQLIdFilterComparison>;
  month?: Maybe<GraphQLIntFieldComparison>;
  year?: Maybe<GraphQLIntFieldComparison>;
  locked?: Maybe<GraphQLBooleanFieldComparison>;
  trustAccountAilorn?: Maybe<GraphQLGraphQlAilornFilterComparison>;
};

export type GraphQLReconciliationReportPeriodSort = {
  field: GraphQLReconciliationReportPeriodSortFields;
  direction: GraphQLRelaySortDirection;
  nulls?: Maybe<GraphQLSortNulls>;
};

export enum GraphQLReconciliationReportPeriodSortFields {
  Id = "id",
  Month = "month",
  Year = "year",
  Locked = "locked",
  TrustAccountAilorn = "trustAccountAilorn",
}

export type GraphQLRecurringFee = {
  /** @deprecated Use `idV2` or `ailoRN` instead. */
  id: Scalars["AiloRN"];
  idV2: Scalars["ID"];
  ailoRN: Scalars["AiloRN"];
  name: Scalars["String"];
  /** Null only if the current user isn't authorized to access the management. (e.g. Tenant.) */
  managementAgreement?: Maybe<GraphQLManagementAgreement>;
  /** Null only if the current user isn't authorized to access the management. (e.g. Tenant.) */
  management?: Maybe<GraphQLManagement>;
  taxCategory: GraphQLFeeTaxCategory;
  taxTreatment: GraphQLTaxTreatment;
  frequency: GraphQLFeeFrequency;
  startDate: Scalars["String"];
  endDate?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  createdAt: Scalars["String"];
  createdBy: Scalars["AiloRN"];
  modifiedBy: Scalars["AiloRN"];
  /** @deprecated Use `blueprintV2` instead. */
  blueprint: GraphQLRecurringFeeBlueprint;
  blueprintV2: GraphQLFeeBlueprint;
  schedules: Array<GraphQLRecurringFeeSchedule>;
  /**
   * The most recent schedule that has already started (even if it has already ended due to fee being cancelled or management ending).
   * If none exist, return the schedule that will start next.
   */
  currentOrNextSchedule?: Maybe<GraphQLRecurringFeeSchedule>;
  liability?: Maybe<GraphQLLiability>;
  /** Whether local date is currently on or past the fee's final charge cycle */
  nextOccurrence?: Maybe<GraphQLFeeOccurrence>;
  cancelled: Scalars["Boolean"];
  /**
   * True if the fee has been cancelled while it was still in the future,
   * or archived before it has been paid.
   *
   * An archived fee is archived forever;
   * and its' liabilities will also get archived.
   */
  archived: Scalars["Boolean"];
  currentness: GraphQLDateRangeCurrentness;
  owing?: Maybe<GraphQLRecurringOwing>;
};

export type GraphQLRecurringFeeBlueprint = {
  id: Scalars["AiloRN"];
  type: Scalars["String"];
  name: Scalars["String"];
  taxCategory: GraphQLFeeTaxCategory;
  description?: Maybe<Scalars["String"]>;
  fixedAmount: GraphQLMoney;
  taxTreatment: GraphQLTaxTreatment;
  oneWeekRentPercentage?: Maybe<Scalars["Float"]>;
  frequency: GraphQLFeeFrequency;
  frequencyFormatted: Scalars["String"];
  anniversaryDay: Scalars["Int"];
  anniversaryMonth?: Maybe<Scalars["Int"]>;
  /** @deprecated Use `organisation.id` instead. */
  createdByOrganisation: Scalars["AiloRN"];
  /** @deprecated Use `organisation.id` instead. */
  organisationId: Scalars["AiloRN"];
  /** Always present. (Nullable only because it's a federated field.) */
  organisation?: Maybe<GraphQLOrganisation>;
  createdAt: Scalars["DateTime"];
  createdBy: Scalars["AiloRN"];
  modifiedBy: Scalars["AiloRN"];
  archived: Scalars["Boolean"];
  archivedAt?: Maybe<Scalars["DateTime"]>;
  archivedBy?: Maybe<Scalars["AiloRN"]>;
  archiveReason?: Maybe<Scalars["String"]>;
};

export type GraphQLRecurringFeeBlueprintInput = {
  name: Scalars["String"];
  taxCategoryId: Scalars["ID"];
  description?: Maybe<Scalars["String"]>;
  fixedAmount: GraphQLMoneyInput;
  taxTreatment: GraphQLTaxTreatment;
  frequency: GraphQLFeeFrequency;
  anniversaryDay: Scalars["Int"];
  anniversaryMonth?: Maybe<Scalars["Int"]>;
  organisationId: Scalars["AiloRN"];
};

export type GraphQLRecurringFeeBlueprintsQueryConditions = {
  organisationId?: Maybe<Scalars["AiloRN"]>;
  archived?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLRecurringFeeBlueprintsQueryInput = {
  createdByOrganisation: Scalars["AiloRN"];
  archived?: Maybe<Scalars["Boolean"]>;
};

export enum GraphQLRecurringFeeCurrentness {
  Past = "past",
  Current = "current",
  Future = "future",
}

export type GraphQLRecurringFeeInput = {
  blueprintId: Scalars["AiloRN"];
  managementAgreementId: Scalars["AiloRN"];
  endDate?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  schedules: Array<GraphQLRecurringFeeScheduleInput>;
};

export enum GraphQLRecurringFeePaymentStatus {
  Overdue = "overdue",
  /**
   * Currently not overdue but may become overdue in the future
   * once the next occurrence starts
   */
  PaidForNow = "paidForNow",
  /**
   * Currently not overdue and fee has no more occurrences so it should
   * never become overdue again
   */
  PaidCompletely = "paidCompletely",
}

export type GraphQLRecurringFeeSchedule = {
  id: Scalars["AiloRN"];
  feeId: Scalars["AiloRN"];
  taxAmount: GraphQLMoney;
  taxInclusiveAmount: GraphQLMoney;
  startDate: Scalars["String"];
  createdAt: Scalars["String"];
  createdBy: Scalars["AiloRN"];
};

export type GraphQLRecurringFeeScheduleInput = {
  taxAmount: GraphQLMoneyInput;
  taxInclusiveAmount: GraphQLMoneyInput;
  startDate: Scalars["String"];
};

export type GraphQLRecurringFeesQueryInput = {
  managementId?: Maybe<Scalars["AiloRN"]>;
  managementAgreementId?: Maybe<Scalars["AiloRN"]>;
  createdByOrganisation?: Maybe<Scalars["AiloRN"]>;
  archived?: Maybe<Scalars["Boolean"]>;
  currentness?: Maybe<Array<GraphQLRecurringFeeCurrentness>>;
  paymentStatus?: Maybe<Array<GraphQLRecurringFeePaymentStatus>>;
};

export enum GraphQLRecurringFrequency {
  Annually = "ANNUALLY",
  Fortnightly = "FORTNIGHTLY",
  Monthly = "MONTHLY",
  Onceoff = "ONCEOFF",
  Weekly = "WEEKLY",
}

export type GraphQLRecurringOwing = {
  ailoRN: Scalars["AiloRN"];
  chargeCycles?: Maybe<GraphQLPaginatedChargeCycles>;
  chargeSchedules: Array<GraphQLChargeSchedule>;
  id: Scalars["ID"];
  liability?: Maybe<GraphQLLiability>;
  owingType: GraphQLRecurringOwingType;
  progress: GraphQLOwingProgress;
  ratePeriods: Array<GraphQLRecurringOwingRatePeriod>;
  recurringOwingEvents?: Maybe<GraphQLPaginatedRecurringOwingEvents>;
  reference: Scalars["AiloRN"];
  referencedEntity?: Maybe<GraphQLOwingReferencedEntity>;
};

export type GraphQLRecurringOwingChargeCyclesArgs = {
  pagination?: GraphQLPaginationParams;
};

export type GraphQLRecurringOwingRecurringOwingEventsArgs = {
  pagination?: GraphQLPaginationParams;
};

export type GraphQLRecurringOwingCalculationInput = {
  chargeSchedules: Array<GraphQLChargeScheduleInput>;
  ratePeriods: Array<GraphQLRecurringOwingRatePeriodInput>;
};

export type GraphQLRecurringOwingEvent = {
  businessTransaction?: Maybe<GraphQLBusinessTransaction>;
  causeReference: Scalars["AiloRN"];
  changeInOwedAmount: GraphQLMoney;
  changeInOwedTaxAmount: GraphQLMoney;
  createdAt: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  effectiveAt: Scalars["DateTime"];
  emittedAt?: Maybe<Scalars["DateTime"]>;
  eventType: GraphQLRecurringOwingEventType;
  id: Scalars["ID"];
  internalDescription: Scalars["String"];
  modifiedAt: Scalars["DateTime"];
  paidTo?: Maybe<GraphQLPaidTo>;
  recurringOwing?: Maybe<GraphQLRecurringOwing>;
  reversalOf?: Maybe<Scalars["AiloRN"]>;
};

export enum GraphQLRecurringOwingEventType {
  Adjustment = "ADJUSTMENT",
  AdjustmentReversal = "ADJUSTMENT_REVERSAL",
  OwingChanged = "OWING_CHANGED",
  OwingDue = "OWING_DUE",
  Payment = "PAYMENT",
  PaymentFailure = "PAYMENT_FAILURE",
  PaymentReversal = "PAYMENT_REVERSAL",
  Refund = "REFUND",
  RefundFailure = "REFUND_FAILURE",
  RefundReversal = "REFUND_REVERSAL",
}

export type GraphQLRecurringOwingInput = {
  chargeSchedules: Array<GraphQLChargeScheduleInput>;
  liabilityId?: Maybe<Scalars["AiloRN"]>;
  managingEntities?: Maybe<Array<Scalars["AiloRN"]>>;
  owedBy: Scalars["AiloRN"];
  owedTo: Scalars["AiloRN"];
  owingType: GraphQLRecurringOwingType;
  ratePeriods: Array<GraphQLRecurringOwingRatePeriodInput>;
  reference: Scalars["AiloRN"];
  relatedToManagement?: Maybe<Scalars["AiloRN"]>;
  taxCategory: Scalars["String"];
  timezone: Scalars["String"];
};

export type GraphQLRecurringOwingRatePeriod = {
  amount: GraphQLMoney;
  endDate?: Maybe<Scalars["Date"]>;
  frequency: GraphQLRecurringFrequency;
  startDate: Scalars["Date"];
  taxAmount: GraphQLMoney;
};

export type GraphQLRecurringOwingRatePeriodInput = {
  amount: GraphQLMoneyInput;
  endDate?: Maybe<Scalars["Date"]>;
  frequency: GraphQLRecurringFrequency;
  startDate: Scalars["Date"];
  taxAmount?: Maybe<GraphQLMoneyInput>;
};

export enum GraphQLRecurringOwingType {
  Fee = "FEE",
  Rent = "RENT",
}

export type GraphQLRefundOutput = {
  businessTransaction: GraphQLBusinessTransaction;
  businessTransactionStatus: GraphQLBusinessTransactionStatus;
};

export type GraphQLReiForm = GraphQLForm & {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  organisation: GraphQLOrganisation;
  supportedState: GraphQLAustralianState;
  reiFormInfo: GraphQLReiFormInfo;
  viewUrl: Scalars["String"];
  downloadUrl: Scalars["String"];
  remoteSigningPDF: Scalars["Binary"];
  ailorn: Scalars["AiloRN"];
  remoteSigningStatus: GraphQLReiFormRemoteSigningStatus;
};

export enum GraphQLReiFormErrorCode {
  /** The form is not found in REI system, perhaps it has been deleted */
  ReiFormNotFound = "REI_FORM_NOT_FOUND",
  /** REI doesn't allow to get the form with that ID */
  ReiUnauthorised = "REI_UNAUTHORISED",
  /** The linked account and the form state don't match */
  ReiTokenFormStatesMismatch = "REI_TOKEN_FORM_STATES_MISMATCH",
}

export type GraphQLReiFormInfo = {
  name: Scalars["String"];
  finalised: Scalars["Boolean"];
};

export type GraphQLReiFormRemoteSigner = {
  name: Scalars["String"];
  /** Sign status */
  status: GraphQLReiFormRemoteSignerStatus;
  /** Date if signed */
  signed?: Maybe<Scalars["DateTime"]>;
};

export enum GraphQLReiFormRemoteSignerStatus {
  /** The form is waiting for the signer to sign */
  Pending = "PENDING",
  /** The signer has opened the form in Docusign */
  Delivered = "DELIVERED",
  /** The signer has declined to sign a form */
  Declined = "DECLINED",
  /** The signer has completed signing a form */
  Completed = "COMPLETED",
}

export type GraphQLReiFormRemoteSigningStatus = {
  status: GraphQLSigningStatus;
  /** Date if sent */
  sent?: Maybe<Scalars["DateTime"]>;
  /** List of signers with names and signed dates if any */
  recipients: Array<GraphQLReiFormRemoteSigner>;
};

export type GraphQLReiTemplate = {
  id: Scalars["Int"];
  name: Scalars["String"];
  code: Scalars["String"];
};

export type GraphQLReiToken = {
  id: Scalars["ID"];
  token: Scalars["String"];
  email: Scalars["String"];
  supportedState: GraphQLAustralianState;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  person: GraphQLPerson;
  organisation: GraphQLOrganisation;
};

export type GraphQLRelayPageInfo = {
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars["Boolean"]>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars["Boolean"]>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars["ConnectionCursor"]>;
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars["ConnectionCursor"]>;
};

/** Sort Directions */
export enum GraphQLRelaySortDirection {
  Asc = "ASC",
  Desc = "DESC",
}

export type GraphQLRemoveInspectionAreaFileResult = {
  inspectionAreaFile: GraphQLInspectionAreaFile;
};

export type GraphQLRemoveInspectionAreaResult = {
  inspectionArea: GraphQLInspectionArea;
};

export type GraphQLRemoveInspectionFeatureFileResult = {
  inspectionFeatureFile: GraphQLInspectionFeatureFile;
};

export type GraphQLRemoveInspectionFeatureResult = {
  inspectionFeature: GraphQLInspectionFeature;
};

export type GraphQLRemoveInspectionResult = {
  inspection: GraphQLInspection;
};

export type GraphQLRemoveMemberFromLegalEntityInput = {
  memberPersonId: Scalars["String"];
  legalEntityId: Scalars["String"];
  roleId: Scalars["String"];
};

export type GraphQLRemoveMemberFromOrganisationInput = {
  personId: Scalars["String"];
  organisationId: Scalars["String"];
  roleId: Scalars["String"];
};

export type GraphQLRemoveReiTokenInput = {
  /** ID of the REI Token to be deleted */
  id: Scalars["String"];
  /** AiloRN of person the token is associated with */
  personAilorn: Scalars["AiloRN"];
  /** AiloRN of agency organisation */
  organisationAilorn: Scalars["AiloRN"];
};

export type GraphQLRemoveTenancyFromMigratingManagementInput = {
  id: Scalars["ID"];
};

export type GraphQLRemoveTenantshipInput = {
  tenancyId: Scalars["ID"];
  tenantId: Scalars["ID"];
};

export type GraphQLRemoveTenantshipPayload = {
  tenantship: GraphQLTenantship;
};

export type GraphQLRent = {
  /** @deprecated Use rent.ailorn instead. This field will eventually be changed to type ID */
  id: Scalars["AiloRN"];
  ailorn: Scalars["AiloRN"];
  amountInCents: Scalars["String"];
  /** In cents with double-precision */
  dailyRate: Scalars["Float"];
  period: GraphQLRentFrequency;
  effectiveDate: Scalars["Date"];
  rentIncreaseInCents: Scalars["String"];
  setsChargeDate: Scalars["Boolean"];
  category: GraphQLRentCategory;
  previousRent?: Maybe<GraphQLRent>;
  tenancy?: Maybe<GraphQLTenancy>;
  rentSchedules: Array<GraphQLRentSchedule>;
  proRataSchedulesForRentUpdate: Array<GraphQLPreviewedRentSchedule>;
};

export type GraphQLRentProRataSchedulesForRentUpdateArgs = {
  proposedRent: GraphQLProposedRent;
};

export enum GraphQLRentCategory {
  Legacy = "Legacy",
  Support = "Support",
  Inherited = "Inherited",
  RentReview = "RentReview",
  LeaseRenewal = "LeaseRenewal",
  NewTenancy = "NewTenancy",
}

export type GraphQLRentCreditDetailsInput = {
  amount: GraphQLMoneyInput;
  description: Scalars["String"];
  tenancyId: Scalars["ID"];
  effectiveDate: Scalars["Date"];
  idempotencyKey: Scalars["String"];
  notifyTenants?: Scalars["Boolean"];
  notifyInvestors?: Scalars["Boolean"];
};

export type GraphQLRentCreditDetailsPayload = {
  rentCredit?: Maybe<GraphQLAdjustmentLiabilityEntry>;
  tenancy?: Maybe<GraphQLTenancy>;
  query: GraphQLQuery;
};

export enum GraphQLRentFrequency {
  Daily = "daily",
  Weekly = "weekly",
  Fortnightly = "fortnightly",
  Monthly = "monthly",
}

export type GraphQLRentPageCursor = {
  pageSize?: Scalars["Int"];
  cursor?: Maybe<Scalars["String"]>;
  paginateBackward?: Scalars["Boolean"];
};

export type GraphQLRentReviewDetails = {
  effectiveDate: Scalars["Date"];
  amountInCents: Scalars["String"];
  scheduledRentReviewDate: Scalars["Date"];
  period: GraphQLRentFrequency;
};

export type GraphQLRentReviewInput = {
  amount: GraphQLMoneyInput;
  effectiveDate: Scalars["Date"];
};

export type GraphQLRentReviewPlan = {
  amount: GraphQLMoney;
  description?: Maybe<Scalars["String"]>;
  effectiveFrom: Scalars["Date"];
  proRata: Scalars["Boolean"];
};

export type GraphQLRentReviewProposedPlanInput = {
  amount: GraphQLMoneyInput;
  desiredStartFrom: Scalars["Date"];
  liabilityRef: Scalars["AiloRN"];
};

export type GraphQLRentSchedule = {
  id: Scalars["AiloRN"];
  amountInCents: Scalars["String"];
  period: GraphQLRentFrequency;
  startDate: Scalars["Date"];
  proRata: Scalars["Boolean"];
};

export type GraphQLRentSetupInput = {
  effectiveDate: Scalars["Date"];
  amountInCents: Scalars["String"];
  period: GraphQLRentFrequency;
  category: GraphQLRentCategory;
};

export enum GraphQLRentSort {
  EffectiveDateAsc = "EFFECTIVE_DATE_ASC",
  EffectiveDateDesc = "EFFECTIVE_DATE_DESC",
}

export type GraphQLReportGenerationState = {
  /** Returns true if an ongoing report progress does not exist */
  canGenerateReport: Scalars["Boolean"];
};

export type GraphQLReportPeriodLockChangeResult = {
  status: GraphQLReportPeriodLockChangeResultStatus;
  failureReason?: Maybe<Scalars["String"]>;
  report?: Maybe<GraphQLReconciliationReportPeriod>;
};

export enum GraphQLReportPeriodLockChangeResultStatus {
  Success = "SUCCESS",
  Failure = "FAILURE",
}

export type GraphQLRequestSignatureActionMeta = {
  form?: Maybe<GraphQLForm>;
};

export type GraphQLResponseStatus = {
  businessTransaction?: Maybe<GraphQLBusinessTransaction>;
  businessTransactionId?: Maybe<Scalars["AiloRN"]>;
  error?: Maybe<Scalars["String"]>;
  status: Scalars["String"];
};

export type GraphQLReverseAdjustmentInput = {
  adjustmentId: Scalars["ID"];
  description: Scalars["String"];
};

export type GraphQLRole = {
  id: Scalars["String"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  domain: Scalars["String"];
  permissions: Array<GraphQLPermission>;
};

export enum GraphQLRoleType {
  OrganisationRole = "OrganisationRole",
  LegalEntityRole = "LegalEntityRole",
}

export type GraphQLRolesQueryConditions = {
  type?: Maybe<GraphQLRoleType>;
};

export type GraphQLSagaStatusResponse = {
  error?: Maybe<Scalars["String"]>;
  idempotencyKey: Scalars["String"];
  sagaId?: Maybe<Scalars["ID"]>;
  status: Scalars["String"];
};

export type GraphQLSearchAgencyPropertiesQueryInput = {
  managingEntityOrgAilorn?: Maybe<Scalars["AiloRN"]>;
  query: Scalars["String"];
  /**
   * Cursor-based pagination in Elasticsearch can only support forward way based on "scroll_id" or "search_after", details: https://www.elastic.co/guide/en/elasticsearch/reference/current/paginate-search-results.html#scroll-search-results
   * Current cursor-based implementation is based on "scroll_id".
   * If page param (must be positive, i.e., >=1) is provided, then it will process query by using "from" (similar like offset based query in postgres), details:  https://www.elastic.co/guide/en/elasticsearch/reference/current/paginate-search-results.html#paginate-search-results
   * Note: By default, you cannot use from and size to page through more than 10,000 hits. This limit is a safeguard set by the index.max_result_window index setting. If you need to page through more than 10,000 hits, use the search_after parameter instead.
   */
  paginationParams?: Maybe<GraphQLPaginationParamsWithPageNumber>;
};

export type GraphQLSearchFilter = {
  key?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export enum GraphQLSendEmailVerificationErrorCode {
  EmailAlreadyVerified = "EMAIL_ALREADY_VERIFIED",
  EmailUsedByAnotherPerson = "EMAIL_USED_BY_ANOTHER_PERSON",
}

export type GraphQLSendEmailVerificationErrorResponse = {
  errorCode: GraphQLSendEmailVerificationErrorCode;
};

export type GraphQLSendEmailVerificationResponse =
  | GraphQLSendEmailVerificationSuccessResponse
  | GraphQLSendEmailVerificationErrorResponse;

export type GraphQLSendEmailVerificationSuccessResponse = {
  ok: Scalars["Boolean"];
};

export type GraphQLSendMessageInputV2 = {
  message: GraphQLMessageInputV2;
  threadAilorn: Scalars["AiloRN"];
};

export type GraphQLSender = GraphQLUser | GraphQLEmailContact;

export type GraphQLSenderV0 = GraphQLUser | GraphQLEmailContactV0;

export type GraphQLSetupResult = {
  management?: Maybe<GraphQLManagement>;
  tenancy?: Maybe<GraphQLTenancy>;
};

export enum GraphQLSigningStatus {
  /** The REI account is not linked with DocuSign yet */
  NotAvailable = "NOT_AVAILABLE",
  /** The form is waiting to be sent */
  Pending = "PENDING",
  /** The form has been sent to its signers */
  Sent = "SENT",
  /** All the signers have signed the form */
  Completed = "COMPLETED",
  /** One of the form signers has declined to sign */
  Declined = "DECLINED",
  /** REI returned an unknown status */
  Unknown = "UNKNOWN",
}

export enum GraphQLSortDirection {
  Asc = "Asc",
  Desc = "Desc",
}

/** Sort Nulls Options */
export enum GraphQLSortNulls {
  NullsFirst = "NULLS_FIRST",
  NullsLast = "NULLS_LAST",
}

export enum GraphQLSourceType {
  Adjustment = "ADJUSTMENT",
  Payment = "PAYMENT",
  Planbased = "PLANBASED",
}

export type GraphQLStatement = {
  id: Scalars["ID"];
  ailoRN: Scalars["AiloRN"];
  file?: Maybe<GraphQLFile>;
  billsZipFile?: Maybe<GraphQLFile>;
  statementSubject: Scalars["AiloRN"];
  subject?: Maybe<GraphQLStatementSubject>;
  type: GraphQLStatementType;
  rangeStartDate: Scalars["Date"];
  rangeEndDate: Scalars["Date"];
  createdFor: GraphQLStatementCreatedFor;
  statementValues?: Maybe<Scalars["String"]>;
  statementProgress?: Maybe<GraphQLStatementProgress>;
};

export type GraphQLStatementAdjustmentLineItem = GraphQLStatementLineItem2 & {
  adjustmentAmount: GraphQLMoney;
  clearedDate?: Maybe<Scalars["Date"]>;
  description?: Maybe<Scalars["String"]>;
  effectivePaidTo?: Maybe<Scalars["Date"]>;
  knowledgedDate: Scalars["Date"];
  liability?: Maybe<GraphQLLiability>;
  liabilityCategory?: Maybe<Scalars["String"]>;
  management?: Maybe<GraphQLManagement>;
  sourceId: Scalars["ID"];
  sourceType: GraphQLStatementLineItemSourceType;
  statementTransactionDate?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `statementTransactionDate` */
  statementTransactionDateTime?: Maybe<Scalars["DateTime"]>;
  walletId: Scalars["ID"];
};

export type GraphQLStatementByAccountInput = {
  account: Scalars["AiloRN"];
  from: Scalars["Date"];
  to: Scalars["Date"];
  zoneId: Scalars["ZoneId"];
};

export enum GraphQLStatementCreatedFor {
  ScheduledJob = "ScheduledJob",
  ManualRequest = "ManualRequest",
  Disbursement = "Disbursement",
}

export type GraphQLStatementCursor = {
  pageSize?: Maybe<Scalars["Int"]>;
  paginateBackward?: Maybe<Scalars["Boolean"]>;
  cursor?: Maybe<Scalars["String"]>;
};

export type GraphQLStatementFilter = {
  statementTypes?: Maybe<Array<GraphQLStatementType>>;
  createdFor?: Maybe<Array<GraphQLStatementCreatedFor>>;
};

export type GraphQLStatementLineItem = {
  account: Scalars["AiloRN"];
  amount: GraphQLMoney;
  businessTransactionType?: Maybe<Scalars["String"]>;
  category: GraphQLStatementLineItemCategoryType;
  description?: Maybe<Scalars["String"]>;
  effectivePaidTo?: Maybe<Scalars["Date"]>;
  gst: GraphQLMoney;
  knowledgedDate: Scalars["Date"];
  liability: GraphQLLiability;
  sourceType: GraphQLStatementLineItemSourceType;
};

export type GraphQLStatementLineItem2 = {
  clearedDate?: Maybe<Scalars["Date"]>;
  knowledgedDate: Scalars["Date"];
  liability?: Maybe<GraphQLLiability>;
  liabilityCategory?: Maybe<Scalars["String"]>;
  management?: Maybe<GraphQLManagement>;
  sourceId: Scalars["ID"];
  sourceType: GraphQLStatementLineItemSourceType;
  statementTransactionDate?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `statementTransactionDate` */
  statementTransactionDateTime?: Maybe<Scalars["DateTime"]>;
  walletId: Scalars["ID"];
};

export enum GraphQLStatementLineItemCategoryType {
  Expense = "EXPENSE",
  Income = "INCOME",
}

export enum GraphQLStatementLineItemSourceType {
  AdjustmentEntry = "AdjustmentEntry",
  StatementEntry = "StatementEntry",
}

export type GraphQLStatementProgress = {
  id: Scalars["ID"];
  ailoRN: Scalars["AiloRN"];
  statement?: Maybe<GraphQLStatement>;
  statementSubject?: Maybe<Scalars["AiloRN"]>;
  type?: Maybe<GraphQLStatementType>;
  rangeStartDate?: Maybe<Scalars["Date"]>;
  rangeEndDate?: Maybe<Scalars["Date"]>;
  createdFor?: Maybe<GraphQLStatementCreatedFor>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  isSuccessful?: Maybe<Scalars["Boolean"]>;
  skipValidation?: Maybe<Scalars["Boolean"]>;
  skipManagementHasPaymentsCheck?: Maybe<Scalars["Boolean"]>;
  allowUnrecognisedTransactionLineItems?: Maybe<Scalars["Boolean"]>;
  linkFileToSubject?: Maybe<Scalars["Boolean"]>;
  dryRunEmail?: Maybe<Scalars["String"]>;
  sendEmail?: Maybe<Scalars["Boolean"]>;
  overrideStatementValues?: Maybe<Scalars["String"]>;
  note?: Maybe<Scalars["String"]>;
  attemptNo?: Maybe<Scalars["Int"]>;
  rangeStartBusinessTxId?: Maybe<Scalars["String"]>;
  rangeEndBusinessTxId?: Maybe<Scalars["String"]>;
  subject?: Maybe<GraphQLStatementSubject>;
};

export type GraphQLStatementProgressCursor = {
  pageSize?: Scalars["Int"];
  paginateBackward?: Scalars["Boolean"];
  cursor?: Maybe<Scalars["String"]>;
};

export type GraphQLStatementProgressFilter = {
  sendEmail?: Maybe<Scalars["Boolean"]>;
  statementSubject?: Maybe<Scalars["AiloRN"]>;
  type?: Maybe<GraphQLStatementType>;
  types?: Maybe<Array<GraphQLStatementType>>;
};

export enum GraphQLStatementSort {
  CreatedAtAsc = "CREATED_AT_ASC",
  CreatedAtDesc = "CREATED_AT_DESC",
  RangeStartDateAsc = "RANGE_START_DATE_ASC",
  RangeStartDateDesc = "RANGE_START_DATE_DESC",
  RangeEndDateAsc = "RANGE_END_DATE_ASC",
  RangeEndDateDesc = "RANGE_END_DATE_DESC",
}

export type GraphQLStatementSubject =
  | GraphQLLegalEntityCompanion
  | GraphQLManagement
  | GraphQLTenancy;

export type GraphQLStatementTransactionLineItem = GraphQLStatementLineItem2 & {
  btAmount: GraphQLMoney;
  btCreatedAt: Scalars["DateTime"];
  btStatusCreatedAt: Scalars["DateTime"];
  businessTransactionId: Scalars["ID"];
  businessTransactionStatus: Scalars["String"];
  businessTransactionType?: Maybe<Scalars["String"]>;
  clearedDate?: Maybe<Scalars["Date"]>;
  effectivePaidTo?: Maybe<Scalars["Date"]>;
  gst: GraphQLMoney;
  knowledgedDate: Scalars["Date"];
  liability?: Maybe<GraphQLLiability>;
  liabilityCategory?: Maybe<Scalars["String"]>;
  management?: Maybe<GraphQLManagement>;
  parentBusinessTransactionId?: Maybe<Scalars["ID"]>;
  reversalBusinessTransactionType?: Maybe<Scalars["String"]>;
  reversalOfBusinessTransactionId?: Maybe<Scalars["ID"]>;
  serviceFeeAmount: GraphQLMoney;
  sourceId: Scalars["ID"];
  sourcePaymentMethodMaskedDetails?: Maybe<Scalars["String"]>;
  sourcePaymentMethodType?: Maybe<Scalars["String"]>;
  sourceType: GraphQLStatementLineItemSourceType;
  sourceWalletId?: Maybe<Scalars["ID"]>;
  sourceWalletOwner?: Maybe<GraphQLLegalEntityCompanion>;
  sourceWalletOwnerReference?: Maybe<Scalars["AiloRN"]>;
  sourceWalletType?: Maybe<GraphQLStatementWalletType>;
  statementTransactionDate?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `statementTransactionDate` */
  statementTransactionDateTime?: Maybe<Scalars["DateTime"]>;
  targetPaymentMethodMaskedDetails?: Maybe<Scalars["String"]>;
  targetPaymentMethodType?: Maybe<Scalars["String"]>;
  targetWalletId?: Maybe<Scalars["ID"]>;
  targetWalletOwner?: Maybe<GraphQLLegalEntityCompanion>;
  targetWalletOwnerReference?: Maybe<Scalars["AiloRN"]>;
  targetWalletType?: Maybe<GraphQLStatementWalletType>;
  taxCategory?: Maybe<Scalars["String"]>;
  userFacingDescription?: Maybe<Scalars["String"]>;
  walletAvailableBalance: GraphQLMoney;
  walletChangeAmount: GraphQLMoney;
  walletId: Scalars["ID"];
  walletOverdraftAllowance: GraphQLMoney;
  walletStatementRunningBalance?: Maybe<GraphQLMoney>;
  walletTotalBalance: GraphQLMoney;
};

export enum GraphQLStatementType {
  AgencyTransfer = "AgencyTransfer",
  Management = "Management",
  TaxSummary = "TaxSummary",
  TenancyLedger = "TenancyLedger",
  TransferSummary = "TransferSummary",
}

export enum GraphQLStatementWalletType {
  AiloBank = "AILO_BANK",
  AiloTrading = "AILO_TRADING",
  AiloWriteOff = "AILO_WRITE_OFF",
  ManagementFolio = "MANAGEMENT_FOLIO",
  PaymentMethod = "PAYMENT_METHOD",
  Personal = "PERSONAL",
  Tenancy = "TENANCY",
  Unknown = "UNKNOWN",
}

export type GraphQLStatusComparison = {
  eq?: Maybe<GraphQLProjectStatus>;
};

export type GraphQLStringFieldComparison = {
  is?: Maybe<Scalars["Boolean"]>;
  isNot?: Maybe<Scalars["Boolean"]>;
  eq?: Maybe<Scalars["String"]>;
  neq?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  like?: Maybe<Scalars["String"]>;
  notLike?: Maybe<Scalars["String"]>;
  iLike?: Maybe<Scalars["String"]>;
  notILike?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  notIn?: Maybe<Array<Scalars["String"]>>;
};

export type GraphQLSubscriptionEndDateInput = {
  subscriptionId: Scalars["ID"];
  endsOn?: Maybe<Scalars["Date"]>;
};

export type GraphQLSupplier = {
  id: Scalars["ID"];
  ailoRN: Scalars["AiloRN"];
  registeredEntityName?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  abn?: Maybe<Scalars["String"]>;
  /**
   * String containing entire address. Will be removed in the future after migrating
   * this field to the new address fields.
   */
  businessAddress?: Maybe<Scalars["String"]>;
  address?: Maybe<GraphQLSupplierAddress>;
  emailAddress?: Maybe<Scalars["String"]>;
  organisationReference: Scalars["AiloRN"];
  organisation?: Maybe<GraphQLOrganisation>;
  createdAt: Scalars["DateTime"];
  /**
   * If null it means the bill has been created by Ailo system.
   * @deprecated Use `Supplier.createdByV2` instead
   */
  createdBy?: Maybe<GraphQLUser>;
  createdByV2?: Maybe<GraphQLActionInitiator>;
  modifiedAt?: Maybe<Scalars["DateTime"]>;
  modifiedBy?: Maybe<GraphQLActionInitiator>;
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** @deprecated Use `Supplier.archivedByV2` instead */
  archivedBy?: Maybe<Scalars["AiloRN"]>;
  archivedByV2?: Maybe<GraphQLActionInitiator>;
  /** @deprecated Use `Bill.payee` instead */
  internalReference?: Maybe<Scalars["AiloRN"]>;
  /** @deprecated Use `Bill.payee` instead */
  internalLegalEntity?: Maybe<GraphQLLegalEntityCompanion>;
  paymentMethods: Array<Maybe<GraphQLPaymentMethodCompanion>>;
  kycDataComplete: Scalars["Boolean"];
};

export type GraphQLSupplierAddress = {
  streetName?: Maybe<Scalars["String"]>;
  unitStreetNumber?: Maybe<Scalars["String"]>;
  suburb?: Maybe<Scalars["String"]>;
  postcode?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
};

export type GraphQLSupplierAddressInput = {
  streetName?: Maybe<Scalars["String"]>;
  unitStreetNumber?: Maybe<Scalars["String"]>;
  suburb?: Maybe<Scalars["String"]>;
  postcode?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
};

export type GraphQLSupplierBPayInput = {
  description?: Maybe<Scalars["String"]>;
  billerCode: Scalars["String"];
};

export type GraphQLSupplierBankAccountInput = {
  description?: Maybe<Scalars["String"]>;
  bsb: Scalars["String"];
  accountNumber: Scalars["String"];
  accountName: Scalars["String"];
  onceOff?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLSupplierCreditCardInputV2 = {
  description?: Maybe<Scalars["String"]>;
  token: Scalars["String"];
  type: Scalars["String"];
  category: Scalars["String"];
  number: Scalars["String"];
  expiry: Scalars["String"];
};

export type GraphQLSupplierPaymentMethodInput = {
  creditCardInput?: Maybe<GraphQLSupplierCreditCardInputV2>;
  bankAccountInput?: Maybe<GraphQLSupplierBankAccountInput>;
  bpayInput?: Maybe<GraphQLSupplierBPayInput>;
};

export type GraphQLSuppliersQueryInput = {
  registeredEntityName?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  registeredEntityNameLike?: Maybe<Scalars["String"]>;
  nameLike?: Maybe<Scalars["String"]>;
  abnLike?: Maybe<Scalars["String"]>;
  archived?: Maybe<Scalars["Boolean"]>;
  kycDataComplete?: Maybe<Scalars["Boolean"]>;
  organisationReference?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLSyncLegalEntityInput = {
  legalEntityAilorn: Scalars["AiloRN"];
};

export type GraphQLSystem = {
  ailoRN: Scalars["AiloRN"];
};

export type GraphQLTaxCategory = {
  id: Scalars["String"];
  name: Scalars["String"];
  createdAt: Scalars["DateTime"];
};

export type GraphQLTaxSummaryEntry = {
  taxCategory: Scalars["String"];
  totalAiloFees: GraphQLMoney;
  totalAmount: GraphQLMoney;
  totalGST: GraphQLMoney;
};

export type GraphQLTaxSummaryStatementData = {
  expenseTransactions: Array<GraphQLTaxSummaryTransactionEntry>;
  expenses: Array<GraphQLTaxSummaryEntry>;
  income: Array<GraphQLTaxSummaryEntry>;
  incomeTransactions: Array<GraphQLTaxSummaryTransactionEntry>;
};

export type GraphQLTaxSummaryStatementInput = {
  endDate: Scalars["Date"];
  startDate: Scalars["Date"];
  walletOwnerReference: Scalars["AiloRN"];
  zoneId: Scalars["ZoneId"];
};

export type GraphQLTaxSummaryTransactionEntry = {
  amount: GraphQLMoney;
  bill?: Maybe<GraphQLBill>;
  feeAmount: GraphQLMoney;
  gstAmount: GraphQLMoney;
  liabilityReference?: Maybe<Scalars["AiloRN"]>;
  taxCategory: Scalars["String"];
  transactionClearedAt?: Maybe<Scalars["DateTime"]>;
  transactionCreatedAt: Scalars["DateTime"];
};

export enum GraphQLTaxTreatment {
  Inclusive = "inclusive",
  Exclusive = "exclusive",
  NoTax = "noTax",
}

export type GraphQLTaxableAmount = {
  tax: GraphQLMoney;
  total: GraphQLMoney;
};

export type GraphQLTeam = {
  id: Scalars["AiloRN"];
  name: Scalars["String"];
  organisation?: Maybe<GraphQLOrganisation>;
  members: Array<Maybe<GraphQLPerson>>;
  managements: GraphQLPaginatedManagements;
  contacts: Array<GraphQLContact>;
};

export type GraphQLTeamManagementsArgs = {
  pageCursor: GraphQLPmPageCursor;
  filter?: Array<GraphQLManagementFilterParams>;
};

export type GraphQLTenancy = {
  id: Scalars["ID"];
  ailoRN: Scalars["AiloRN"];
  createdAt: Scalars["DateTime"];
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
  voidedAt?: Maybe<Scalars["Date"]>;
  vacatingReason?: Maybe<GraphQLVacatingReason>;
  vacatingNotes?: Maybe<Scalars["String"]>;
  canCancelVacate?: Maybe<GraphQLCancelVacateAbility>;
  isVoidable: GraphQLVoidTenancyAbility;
  /** Date which the another rent review should be performed */
  scheduledRentReviewDate?: Maybe<Scalars["Date"]>;
  validVacateEndDateRange?: Maybe<GraphQLDateRange>;
  /** @deprecated Use `leaseReviewAllowedOperation` instead */
  leaseReviewAllowed?: Maybe<Scalars["Boolean"]>;
  leaseReviewAllowedOperation?: Maybe<GraphQLAllowedOperations>;
  /**
   * returns the first to exist of currentRent, nextRent, mostRecentRent
   * in that order. Represents the rent users are most likely
   * interested in.
   */
  displayRent?: Maybe<GraphQLRent>;
  currentRent?: Maybe<GraphQLRent>;
  nextRent?: Maybe<GraphQLRent>;
  nextRentReview?: Maybe<GraphQLRent>;
  mostRecentRentReview?: Maybe<GraphQLRent>;
  rents: GraphQLPaginatedRents;
  property: GraphQLProperty;
  currentRentSchedule?: Maybe<GraphQLRentSchedule>;
  nextRentSchedule?: Maybe<GraphQLRentSchedule>;
  proRataSchedulesForNewRent: Array<GraphQLPreviewedRentSchedule>;
  tenancyAgreements?: Maybe<GraphQLPaginatedTenancyAgreements>;
  mostRecentTenancyAgreement?: Maybe<GraphQLTenancyAgreement>;
  nextTenancyAgreement?: Maybe<GraphQLTenancyAgreement>;
  latestTenancyAgreement?: Maybe<GraphQLTenancyAgreement>;
  rentReviewAllowed?: Maybe<Scalars["Boolean"]>;
  editableRentReview?: Maybe<GraphQLEditableRentReviewPayload>;
  bond?: Maybe<GraphQLTenancyBond>;
  files?: Maybe<GraphQLPaginatedFiles>;
  /** Null only if the current user isn't authorized to access the management. (e.g. Tenant.) */
  management?: Maybe<GraphQLManagement>;
  tenants?: Maybe<Array<Maybe<GraphQLTenantship>>>;
  liability?: Maybe<GraphQLLiability>;
  liabilityReport?: Maybe<GraphQLLiabilityReport>;
  isDraft?: Maybe<Scalars["Boolean"]>;
  deposit?: Maybe<GraphQLTenancyDeposit>;
  rent?: Maybe<GraphQLRecurringOwing>;
  tenantContacts: Array<GraphQLContact>;
  billsAsPayer?: Maybe<GraphQLPaginatedBills>;
};

export type GraphQLTenancyRentsArgs = {
  cursor?: GraphQLRentPageCursor;
  sort?: Maybe<Array<GraphQLRentSort>>;
};

export type GraphQLTenancyProRataSchedulesForNewRentArgs = {
  proposedRent: GraphQLProposedRent;
};

export type GraphQLTenancyFilesArgs = {
  pageCursor?: GraphQLPaginationParams;
};

export type GraphQLTenancyBillsAsPayerArgs = {
  id?: Maybe<Array<Scalars["AiloRN"]>>;
  organisationId?: Maybe<Array<Scalars["AiloRN"]>>;
  payeeId?: Maybe<Array<Scalars["AiloRN"]>>;
  taxCategoryId?: Maybe<Array<Scalars["String"]>>;
  taxCategoryIdNotIn?: Maybe<Array<Scalars["String"]>>;
  status?: Maybe<Array<GraphQLBillStatus>>;
  paid?: Maybe<Scalars["Boolean"]>;
  payByDate?: Maybe<GraphQLLocalDateRangeCondition>;
  sort?: Maybe<GraphQLBillSortParams>;
  cursor?: Maybe<GraphQLPageCursorWithoutSort>;
  excludeBillsWithEmptyPaymentStatus?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLTenancyAgreement = {
  id: Scalars["ID"];
  ailorn: Scalars["AiloRN"];
  startDate?: Maybe<Scalars["Date"]>;
  fixedTermEndDate?: Maybe<Scalars["Date"]>;
  /**
   * Represents the date when the user made the decision to allow the current lease to lapse.
   * This is NOT the date which the tenancy is allowed to go into periodic from.
   */
  allowedToLapseAt?: Maybe<Scalars["DateTime"]>;
};

export type GraphQLTenancyAgreementDetails = {
  startDate: Scalars["Date"];
  fixedTermEndDate?: Maybe<Scalars["Date"]>;
};

export type GraphQLTenancyAgreementSetupInput = {
  startDate: Scalars["Date"];
  fixedTermEndDate?: Maybe<Scalars["Date"]>;
};

export type GraphQLTenancyBond = {
  id: Scalars["ID"];
  amount: GraphQLMoney;
  /** @deprecated use 'amount' */
  amountInCents?: Maybe<Scalars["String"]>;
  reference?: Maybe<Scalars["String"]>;
  status: GraphQLTenancyBondStatus;
  failureReason?: Maybe<GraphQLBondDisbursalFailureReason>;
  fundsReceived?: Maybe<Array<GraphQLFundReceived>>;
  claims?: Maybe<Array<GraphQLTenancyBondClaim>>;
  createdAt: Scalars["DateTime"];
  modifiedAt?: Maybe<Scalars["DateTime"]>;
};

export type GraphQLTenancyBondAccount = {
  id: Scalars["ID"];
  paymentMethodCompanion?: Maybe<GraphQLPaymentMethodCompanion>;
};

export type GraphQLTenancyBondClaim = {
  id: Scalars["ID"];
  amount: GraphQLMoney;
  liabilityAiloRN: Scalars["AiloRN"];
  claimOrder: Scalars["Int"];
  claimStatus: GraphQLTenancyBondClaimStatus;
};

export enum GraphQLTenancyBondClaimStatus {
  Unpaid = "Unpaid",
  Pending = "Pending",
  Paid = "Paid",
}

export type GraphQLTenancyBondSetupInput = {
  amountInCents: Scalars["String"];
  reference: Scalars["String"];
};

export enum GraphQLTenancyBondStatus {
  Unclaimed = "Unclaimed",
  AwaitingFunds = "AwaitingFunds",
  FundsReceived = "FundsReceived",
  Disbursing = "Disbursing",
  ClaimSuccessful = "ClaimSuccessful",
  DisbursementFailed = "DisbursementFailed",
  BondResolved = "BondResolved",
}

export type GraphQLTenancyCursor = {
  pageSize?: Scalars["Int"];
  paginateBackward?: Scalars["Boolean"];
  cursor?: Maybe<Scalars["String"]>;
};

export type GraphQLTenancyDeposit = {
  id: Scalars["ID"];
  ailoRN: Scalars["AiloRN"];
  amount: GraphQLMoney;
  releasedAt?: Maybe<Scalars["DateTime"]>;
  releasedAmount: GraphQLMoney;
  releasedBy?: Maybe<Scalars["AiloRN"]>;
  paidAt?: Maybe<Scalars["DateTime"]>;
  status: GraphQLTenancyDepositStatus;
  createdAt: Scalars["DateTime"];
  createdBy: Scalars["AiloRN"];
  modifiedBy: Scalars["AiloRN"];
  liability?: Maybe<GraphQLLiability>;
};

export type GraphQLTenancyDepositSetupInput = {
  amount: GraphQLMoneyInput;
};

export enum GraphQLTenancyDepositStatus {
  Void = "VOID",
  New = "NEW",
  Due = "DUE",
  Pending = "PENDING",
  Paid = "PAID",
  Released = "RELEASED",
  Failed = "FAILED",
}

export type GraphQLTenancyLedgerLineItem = {
  amount: GraphQLMoney;
  businessTransaction?: Maybe<GraphQLBusinessTransaction>;
  displayDateTime: Scalars["DateTime"];
  isFailOrVoid: Scalars["Boolean"];
  liability: GraphQLLiability;
  liabilityEntryDateTime: Scalars["DateTime"];
  paidToDateDetails?: Maybe<GraphQLPaidToDateDetails>;
  type: GraphQLTenancyLedgerLineItemType;
  userFacingDescription?: Maybe<Scalars["String"]>;
};

export enum GraphQLTenancyLedgerLineItemType {
  Adjustment = "ADJUSTMENT",
  Bill = "BILL",
  Rent = "RENT",
}

export type GraphQLTenancyLedgerLineItemsInput = {
  tenancy: Scalars["AiloRN"];
};

export type GraphQLTenancyPropertyAddress = GraphQLContactPropertyAddress & {
  managementAilorn: Scalars["AiloRN"];
  managementEndDate?: Maybe<Scalars["Date"]>;
  tenancyAilorn: Scalars["AiloRN"];
  unitStreetNumber: Scalars["String"];
  streetName: Scalars["String"];
  suburb?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  postcode?: Maybe<Scalars["String"]>;
  country: Scalars["String"];
  /** <unitStreetNumber> <streetName> */
  shortAddress: Scalars["String"];
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
  voidedAt?: Maybe<Scalars["Date"]>;
};

export type GraphQLTenancySetupInput = {
  startDate: Scalars["Date"];
  endDate?: Maybe<Scalars["Date"]>;
  scheduledRentReviewDate?: Maybe<Scalars["Date"]>;
  tenants: Array<GraphQLTenantshipSetupInput>;
  tenancyAgreement: GraphQLTenancyAgreementSetupInput;
  rents?: Maybe<Array<GraphQLRentSetupInput>>;
  bond?: Maybe<GraphQLTenancyBondSetupInput>;
  deposit?: Maybe<GraphQLTenancyDepositSetupInput>;
  fileAilorns?: Maybe<Array<Scalars["AiloRN"]>>;
};

export type GraphQLTenantship = {
  tenancyId: Scalars["ID"];
  tenantId: Scalars["ID"];
  tenant?: Maybe<GraphQLLegalEntity>;
  startDate: Scalars["String"];
  endDate?: Maybe<Scalars["String"]>;
  consumerInvite?: Maybe<GraphQLConsumerInvite>;
};

export type GraphQLTenantshipSetupInput = {
  tenantId?: Maybe<Scalars["ID"]>;
  consumer?: Maybe<GraphQLConsumerSetupInput>;
};

export type GraphQLThreadInputV2 = {
  message: GraphQLMessageInputV2;
  subject: Scalars["String"];
};

export type GraphQLThreadV2 = {
  ailorn: Scalars["AiloRN"];
  subject: Scalars["String"];
  participants: Array<GraphQLContact>;
  firstMessage: GraphQLMessageV2;
  mostRecentMessage: GraphQLMessageV2;
  oldestUnreadMessage?: Maybe<GraphQLMessageV2>;
  /** This does not include the first message in the thread. */
  replies: GraphQLPaginatedMessagesV2;
  /** This does not count the first message in the thread. */
  numberOfReplies: Scalars["Int"];
  chat: GraphQLChatV2;
  unreadMessagesCount: Scalars["Int"];
};

export type GraphQLThreadV2RepliesArgs = {
  pagination: GraphQLPaginationInputV2;
};

export enum GraphQLThumbnailStatus {
  Generating = "Generating",
  Generated = "Generated",
  None = "None",
}

export type GraphQLTotalClearedRentReceived = {
  count: Scalars["Int"];
};

export type GraphQLTrackDocusignActionMeta = {
  form?: Maybe<GraphQLForm>;
};

export type GraphQLTrackInspectionCompletedActionMeta = {
  inspectionAppointment?: Maybe<GraphQLInspectionAppointment>;
};

export type GraphQLTransactionDetail = {
  paymentId?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  bankingSettlementDate?: Maybe<Scalars["DateTime"]>;
  paymentMethod?: Maybe<Scalars["String"]>;
  transactionType?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  totalAmount?: Maybe<GraphQLMoney>;
};

export type GraphQLTransactionDetails = {
  createdAt: Scalars["DateTime"];
  feeAmount: GraphQLMoney;
  idempotentKey?: Maybe<Scalars["String"]>;
  liability?: Maybe<GraphQLLiability>;
  message?: Maybe<Scalars["String"]>;
  payer?: Maybe<Scalars["AiloRN"]>;
  paymentChannel?: Maybe<Scalars["String"]>;
  paymentMethod?: Maybe<GraphQLPaymentMethod>;
  paymentReferenceId?: Maybe<Scalars["String"]>;
  paymentRequestDescription?: Maybe<Scalars["String"]>;
  requestedAmount: GraphQLMoney;
  transactionAmount: GraphQLMoney;
  transactionRef: Scalars["AiloRN"];
  transactionStatus: GraphQLTransactionStatus;
  type?: Maybe<Scalars["String"]>;
};

export type GraphQLTransactionFee = {
  feeBps: Scalars["Int"];
  feeFlatCents: Scalars["Int"];
  waived?: Maybe<Scalars["Boolean"]>;
  waivedTo?: Maybe<Scalars["Date"]>;
};

export type GraphQLTransactionReportItem = {
  ailoFeeAmount?: Maybe<GraphQLMoney>;
  bankSettlementDate?: Maybe<Scalars["DateTime"]>;
  bankingChannel?: Maybe<Scalars["String"]>;
  billType?: Maybe<Scalars["String"]>;
  businessTransactionId: Scalars["AiloRN"];
  channel?: Maybe<Scalars["String"]>;
  clearedAt?: Maybe<Scalars["DateTime"]>;
  createdAt: Scalars["DateTime"];
  gatewayPaymentId?: Maybe<Scalars["String"]>;
  /** @deprecated Use `businessTransactionId` or `paymentTransactionId` instead */
  id?: Maybe<Scalars["AiloRN"]>;
  methodType?: Maybe<Scalars["String"]>;
  originalPaymentAmount?: Maybe<GraphQLMoney>;
  payeeId?: Maybe<Scalars["AiloRN"]>;
  payerId?: Maybe<Scalars["AiloRN"]>;
  paymentTransactionId?: Maybe<Scalars["AiloRN"]>;
  paymentTransactionType?: Maybe<Scalars["String"]>;
  paymentType?: Maybe<Scalars["String"]>;
  processOrSettlementDate?: Maybe<Scalars["DateTime"]>;
  product?: Maybe<Scalars["String"]>;
  responseCode?: Maybe<Scalars["String"]>;
  reversalType?: Maybe<Scalars["String"]>;
  reversedBusinessTransactionId?: Maybe<Scalars["AiloRN"]>;
  reversedPaymentTransaction?: Maybe<Scalars["AiloRN"]>;
  status?: Maybe<Scalars["String"]>;
  taxCategory?: Maybe<Scalars["String"]>;
  totalPaymentAmount?: Maybe<GraphQLMoney>;
  transactionType?: Maybe<Scalars["String"]>;
};

export type GraphQLTransferSummaryStatementInput = {
  /** Transfer business tx id the statement data starts from exclusive */
  from?: Maybe<Scalars["ID"]>;
  /** Transfer business tx id the statement data is up to inclusive */
  to: Scalars["ID"];
  walletOwnerReference: Scalars["AiloRN"];
};

export type GraphQLTransferSummaryStatementRange = {
  fromBusinessTxId?: Maybe<Scalars["ID"]>;
  fromDateTime: Scalars["DateTime"];
  toBusinessTxId: Scalars["ID"];
  toDateTime: Scalars["DateTime"];
};

export type GraphQLTransferSummaryStatementRangeInput = {
  /** Business transaction id of the disbursement. */
  businessTxId: Scalars["ID"];
  /** Wallet owner of wallet being disbursed from. */
  walletOwnerReference: Scalars["AiloRN"];
};

export type GraphQLTransferToWalletInput = {
  amount: GraphQLMoneyInput;
  description: Scalars["String"];
  fromWalletId: Scalars["ID"];
  toWalletId: Scalars["ID"];
  userFacingDescription?: Maybe<Scalars["String"]>;
};

export type GraphQLTrustAccount = {
  id: Scalars["ID"];
  ailorn: Scalars["AiloRN"];
  ownerLegalEntityAilorn: Scalars["AiloRN"];
  ownerLegalEntity: GraphQLCompany;
};

export type GraphQLTrustAccountAggregateGroupBy = {
  id?: Maybe<Scalars["ID"]>;
  ownerLegalEntityAilorn?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLTrustAccountConnection = {
  /** Paging information */
  pageInfo: GraphQLRelayPageInfo;
  /** Array of edges. */
  edges: Array<GraphQLTrustAccountEdge>;
};

export type GraphQLTrustAccountCountAggregate = {
  id?: Maybe<Scalars["Int"]>;
  ownerLegalEntityAilorn?: Maybe<Scalars["Int"]>;
};

export type GraphQLTrustAccountEdge = {
  /** The node containing the TrustAccount */
  node: GraphQLTrustAccount;
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
};

export type GraphQLTrustAccountFilter = {
  and?: Maybe<Array<GraphQLTrustAccountFilter>>;
  or?: Maybe<Array<GraphQLTrustAccountFilter>>;
  id?: Maybe<GraphQLIdFilterComparison>;
  ownerLegalEntityAilorn?: Maybe<GraphQLAiloRnFilterComparison>;
};

export type GraphQLTrustAccountLock = {
  lockedUpTo: Scalars["DateTime"];
  status: GraphQLTrustAccountLockStatus;
  trustAccountAilorn: Scalars["AiloRN"];
};

export enum GraphQLTrustAccountLockStatus {
  Confirmed = "CONFIRMED",
  Unconfirmed = "UNCONFIRMED",
}

export type GraphQLTrustAccountMaxAggregate = {
  id?: Maybe<Scalars["ID"]>;
  ownerLegalEntityAilorn?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLTrustAccountMinAggregate = {
  id?: Maybe<Scalars["ID"]>;
  ownerLegalEntityAilorn?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLTrustAccountSort = {
  field: GraphQLTrustAccountSortFields;
  direction: GraphQLRelaySortDirection;
  nulls?: Maybe<GraphQLSortNulls>;
};

export enum GraphQLTrustAccountSortFields {
  Id = "id",
  OwnerLegalEntityAilorn = "ownerLegalEntityAilorn",
}

export type GraphQLTrustAccountStatementBalance = {
  id: Scalars["ID"];
  ailorn: Scalars["AiloRN"];
  amountInCents: Scalars["Long"];
  date: Scalars["LocalDate"];
  trustAccountAilorn: Scalars["ID"];
  relatedReportPeriods: Array<GraphQLReconciliationReportPeriod>;
};

export type GraphQLTrustAccountStatementBalanceRelatedReportPeriodsArgs = {
  filter?: Maybe<GraphQLReconciliationReportPeriodFilter>;
  sorting?: Maybe<Array<GraphQLReconciliationReportPeriodSort>>;
};

export type GraphQLTrustAccountWallet = {
  id: Scalars["ID"];
  ailorn: Scalars["AiloRN"];
  trustAccount: GraphQLTrustAccount;
  trustAccountId: Scalars["ID"];
  entityReference: Scalars["AiloRN"];
  type: Scalars["String"];
  code: Scalars["String"];
  entity: GraphQLTrustAccountWalletEntity;
};

export type GraphQLTrustAccountWalletAggregateGroupBy = {
  id?: Maybe<Scalars["ID"]>;
  trustAccountId?: Maybe<Scalars["ID"]>;
  entityReference?: Maybe<Scalars["AiloRN"]>;
  type?: Maybe<Scalars["String"]>;
};

export type GraphQLTrustAccountWalletConnection = {
  /** Paging information */
  pageInfo: GraphQLRelayPageInfo;
  /** Array of edges. */
  edges: Array<GraphQLTrustAccountWalletEdge>;
};

export type GraphQLTrustAccountWalletCountAggregate = {
  id?: Maybe<Scalars["Int"]>;
  trustAccountId?: Maybe<Scalars["Int"]>;
  entityReference?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["Int"]>;
};

export type GraphQLTrustAccountWalletEdge = {
  /** The node containing the TrustAccountWallet */
  node: GraphQLTrustAccountWallet;
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
};

export type GraphQLTrustAccountWalletEntity =
  | GraphQLLegalEntityCompanion
  | GraphQLManagementFolio
  | GraphQLTenancy
  | GraphQLSupplier
  | GraphQLBondAuthority;

export type GraphQLTrustAccountWalletFilter = {
  and?: Maybe<Array<GraphQLTrustAccountWalletFilter>>;
  or?: Maybe<Array<GraphQLTrustAccountWalletFilter>>;
  id?: Maybe<GraphQLIdFilterComparison>;
  trustAccountId?: Maybe<GraphQLIdFilterComparison>;
  entityReference?: Maybe<GraphQLAiloRnFilterComparison>;
  type?: Maybe<GraphQLStringFieldComparison>;
};

export type GraphQLTrustAccountWalletMaxAggregate = {
  id?: Maybe<Scalars["ID"]>;
  trustAccountId?: Maybe<Scalars["ID"]>;
  entityReference?: Maybe<Scalars["AiloRN"]>;
  type?: Maybe<Scalars["String"]>;
};

export type GraphQLTrustAccountWalletMinAggregate = {
  id?: Maybe<Scalars["ID"]>;
  trustAccountId?: Maybe<Scalars["ID"]>;
  entityReference?: Maybe<Scalars["AiloRN"]>;
  type?: Maybe<Scalars["String"]>;
};

export type GraphQLTrustAccountWalletSort = {
  field: GraphQLTrustAccountWalletSortFields;
  direction: GraphQLRelaySortDirection;
  nulls?: Maybe<GraphQLSortNulls>;
};

export enum GraphQLTrustAccountWalletSortFields {
  Id = "id",
  TrustAccountId = "trustAccountId",
  EntityReference = "entityReference",
  Type = "type",
}

export type GraphQLTrustBankAccount = {
  agency: Scalars["AiloRN"];
  paymentMethod: GraphQLPaymentMethodCompanion;
  createdBy: Scalars["AiloRN"];
  createdAt: Scalars["DateTime"];
};

export type GraphQLTrustReceipt = {
  id: Scalars["ID"];
};

export type GraphQLTrustReceiptAggregateGroupBy = {
  id?: Maybe<Scalars["ID"]>;
};

export type GraphQLTrustReceiptCountAggregate = {
  id?: Maybe<Scalars["Int"]>;
};

export type GraphQLTrustReceiptEdge = {
  /** The node containing the TrustReceipt */
  node: GraphQLTrustReceipt;
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
};

export type GraphQLTrustReceiptMaxAggregate = {
  id?: Maybe<Scalars["ID"]>;
};

export type GraphQLTrustReceiptMinAggregate = {
  id?: Maybe<Scalars["ID"]>;
};

export type GraphQLUnacknowledgeThreadFromMessageInput = {
  messageAilorn: Scalars["AiloRN"];
};

export type GraphQLUnlockReportPeriodInput = {
  month: Scalars["Int"];
  year: Scalars["Int"];
  trustAccountAilorn: Scalars["AiloRN"];
};

export type GraphQLUnpersistedChargeCycle = {
  amount: GraphQLMoney;
  endDate?: Maybe<Scalars["Date"]>;
  startDate: Scalars["Date"];
  taxAmount: GraphQLMoney;
};

export type GraphQLUnreadMessagesCountInput = {
  organisationAilorn: Scalars["AiloRN"];
};

export enum GraphQLUnvoidableTenancyReason {
  TenancyIsNotIngoing = "TenancyIsNotIngoing",
  DepositHasBeenPaid = "DepositHasBeenPaid",
}

export type GraphQLUpdateActionInput = {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  assigneeAilorn?: Maybe<Scalars["AiloRN"]>;
  type?: Maybe<GraphQLActionType>;
  dueDate?: Maybe<Scalars["DateTime"]>;
  meta?: Maybe<Scalars["JSONObject"]>;
};

export type GraphQLUpdateAiloFormInput = {
  name?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  updateResponses?: Maybe<Array<GraphQLUpdateAiloFormResponseInput>>;
  /** creates or overwrites responses for specific fields */
  createResponses?: Maybe<
    Array<GraphQLCreateAiloFormCreateAiloFormResponseInput>
  >;
  deleteResponseForFields?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLUpdateAiloFormResponseInput = {
  payload: GraphQLAiloFormResponsePayloadInput;
  id: Scalars["ID"];
};

export type GraphQLUpdateAiloFormResult = {
  form: GraphQLAiloForm;
};

export type GraphQLUpdateAutoWithdrawPlanInputV2 = {
  autoWithdrawPlanId: Scalars["ID"];
  paymentMethodDestinations: Array<GraphQLPaymentMethodDestinationInput>;
  setAsideAmount?: Maybe<GraphQLMoneyInput>;
};

export type GraphQLUpdateBondInput = {
  tenancyAilorn: Scalars["AiloRN"];
  reference?: Maybe<Scalars["String"]>;
  amount?: Maybe<GraphQLMoneyInput>;
  bondAccountAilorn?: Maybe<Scalars["AiloRN"]>;
  claimedOn?: Maybe<Scalars["Date"]>;
};

export type GraphQLUpdateCompanyProfileDetailsInput = {
  id: Scalars["AiloRN"];
  registeredEntityId?: Maybe<Scalars["String"]>;
  registeredEntityName?: Maybe<Scalars["String"]>;
  emailAddress?: Maybe<Scalars["String"]>;
  address1?: Maybe<Scalars["String"]>;
  address2?: Maybe<Scalars["String"]>;
  suburb?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  postcode?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  timezone?: Maybe<Scalars["TimeZone"]>;
};

export type GraphQLUpdateFeeBlueprintInput = {
  id: Scalars["ID"];
  archived?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  taxCategoryId?: Maybe<Scalars["ID"]>;
  description?: Maybe<Scalars["String"]>;
  event?: Maybe<GraphQLFeeEventType>;
  fixedAmount?: Maybe<GraphQLMoneyInput>;
  oneWeekRentPercentage?: Maybe<Scalars["Float"]>;
  taxTreatment?: Maybe<GraphQLTaxTreatment>;
  anniversaryDay?: Maybe<Scalars["Int"]>;
  anniversaryMonth?: Maybe<Scalars["Int"]>;
  archiveReason?: Maybe<Scalars["String"]>;
};

export type GraphQLUpdateFeeInput = {
  id: Scalars["String"];
  amount?: Maybe<GraphQLMoneyInput>;
  taxAmount?: Maybe<GraphQLMoneyInput>;
  percentage?: Maybe<Scalars["Float"]>;
  baseAmount?: Maybe<GraphQLMoneyInput>;
  description?: Maybe<Scalars["String"]>;
  /** Must be either `true` or `null` */
  archived?: Maybe<Scalars["Boolean"]>;
  archiveReason?: Maybe<Scalars["String"]>;
};

export type GraphQLUpdateInspectionAppointmentInput = {
  type?: Maybe<GraphQLInspectionType>;
  inspectingAgentAilorn?: Maybe<Scalars["AiloRN"]>;
  startTime?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
};

export type GraphQLUpdateInspectionAppointmentResult = {
  inspectionAppointment: GraphQLInspectionAppointment;
};

export type GraphQLUpdateInspectionAreaInput = {
  index?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  inspected?: Maybe<Scalars["Boolean"]>;
  notes?: Maybe<Scalars["String"]>;
  condition?: Maybe<GraphQLInspectionAreaCondition>;
  id: Scalars["ID"];
  createFiles?: Maybe<Array<GraphQLCreateInspectionAreaInputFileInput>>;
  removeFiles?: Maybe<Array<Scalars["ID"]>>;
  updateFeatures?: Maybe<Array<GraphQLUpdateInspectionFeatureInput>>;
  createFeatures?: Maybe<Array<GraphQLCreateInspectionAreaInputFeatureInput>>;
  removeFeatures?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLUpdateInspectionAreaResult = {
  inspectionArea: GraphQLInspectionArea;
};

export type GraphQLUpdateInspectionFeatureInput = {
  name?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  isClean?: Maybe<Scalars["Boolean"]>;
  isUndamaged?: Maybe<Scalars["Boolean"]>;
  isWorking?: Maybe<Scalars["Boolean"]>;
  id: Scalars["ID"];
  createFiles?: Maybe<Array<GraphQLCreateInspectionFeatureInputFileInput>>;
  removeFiles?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLUpdateInspectionFeatureResult = {
  inspectionFeature: GraphQLInspectionFeature;
};

export type GraphQLUpdateInspectionInput = {
  type?: Maybe<GraphQLInspectionType>;
  inspectingAgentAilorn?: Maybe<Scalars["AiloRN"]>;
  startedAt?: Maybe<Scalars["DateTime"]>;
  completedAt?: Maybe<Scalars["DateTime"]>;
  ailoFormAilorn?: Maybe<Scalars["AiloRN"]>;
  id: Scalars["ID"];
  updateAreas?: Maybe<Array<GraphQLUpdateInspectionAreaInput>>;
  createAreas?: Maybe<Array<GraphQLCreateInspectionInputAreaInput>>;
  removeAreas?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLUpdateInspectionResult = {
  inspection: GraphQLInspection;
};

export type GraphQLUpdateKeyInput = {
  code: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type GraphQLUpdateLiabilityPaymentPlanInput = {
  liabilityPaymentPlanId: Scalars["ID"];
  payerLegalEntityId: Scalars["AiloRN"];
  paymentMethodId: Scalars["ID"];
};

export type GraphQLUpdateManagementFeeBlueprintInput = {
  id: Scalars["ID"];
  archived?: Maybe<Scalars["Boolean"]>;
  fixedAmount?: Maybe<GraphQLMoneyInput>;
  oneWeekRentPercentage?: Maybe<Scalars["Float"]>;
  taxTreatment?: Maybe<GraphQLTaxTreatment>;
};

export type GraphQLUpdateManagementFeeInput = {
  managementAgreementAiloRN: Scalars["AiloRN"];
  percent: Scalars["Float"];
};

export type GraphQLUpdateMigratingManagementInput = {
  id: Scalars["ID"];
  body: Scalars["String"];
};

export type GraphQLUpdateOneKeyInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: GraphQLUpdateKeyInput;
};

export type GraphQLUpdatePersonProfileDetailsInput = {
  id: Scalars["AiloRN"];
  legalFirstName?: Maybe<Scalars["String"]>;
  legalMiddleName?: Maybe<Scalars["String"]>;
  preferredName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  photoFileId?: Maybe<Scalars["AiloRN"]>;
  birthDate?: Maybe<Scalars["Date"]>;
  unitStreetNumber?: Maybe<Scalars["String"]>;
  streetName?: Maybe<Scalars["String"]>;
  suburb?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  postcode?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
};

export type GraphQLUpdateProjectInput = {
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  assigneeAilorn: Scalars["AiloRN"];
  type: GraphQLProjectType;
  dueDate: Scalars["Date"];
  fileAilorns?: Maybe<Array<Scalars["AiloRN"]>>;
};

export type GraphQLUpdatePropertyInput = {
  id: Scalars["ID"];
  address: GraphQLPropertyInput;
};

export type GraphQLUpdateRecurringFeeBlueprintInput = {
  id: Scalars["AiloRN"];
  archived?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  taxCategoryId?: Maybe<Scalars["ID"]>;
  description?: Maybe<Scalars["String"]>;
  fixedAmount?: Maybe<GraphQLMoneyInput>;
  taxTreatment?: Maybe<GraphQLTaxTreatment>;
  anniversaryDay?: Maybe<Scalars["Int"]>;
  anniversaryMonth?: Maybe<Scalars["Int"]>;
  archiveReason?: Maybe<Scalars["String"]>;
};

export type GraphQLUpdateRecurringFeeInput = {
  id: Scalars["AiloRN"];
  /**
   * If provided, must contain at least one schedule.
   * Replaces any existing future schedules with the provided list.
   */
  futureSchedules?: Maybe<Array<GraphQLRecurringFeeScheduleInput>>;
  description?: Maybe<Scalars["String"]>;
};

export type GraphQLUpdateReiTokenInput = {
  /** REI Token */
  token?: Maybe<Scalars["String"]>;
  /** State the REI account was linked to */
  supportedAustralianState?: Maybe<GraphQLAustralianState>;
  /** AiloRN of person the token is associated with */
  personAilorn?: Maybe<Scalars["AiloRN"]>;
  /** AiloRN of agency organisation */
  organisationAilorn?: Maybe<Scalars["AiloRN"]>;
  id: Scalars["ID"];
};

export type GraphQLUpdateSupplierInput = {
  id: Scalars["ID"];
  abn?: Maybe<Scalars["String"]>;
  registeredEntityName?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  address?: Maybe<GraphQLSupplierAddressInput>;
  emailAddress?: Maybe<Scalars["String"]>;
  paymentMethod?: Maybe<GraphQLSupplierPaymentMethodInput>;
  replaceExistingDueBillsPaymentMethod?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLUpdateTenancyAgreementInput = {
  id: Scalars["ID"];
  startDate: Scalars["LocalDate"];
  /** If not provided, the mutation will remove the existing `fixedTermEndDate` */
  fixedTermEndDate?: Maybe<Scalars["LocalDate"]>;
};

export type GraphQLUpdateTenancyAgreementPayload = {
  tenancyAgreement?: Maybe<GraphQLTenancyAgreement>;
};

export type GraphQLUploadMigrationCsvInput = {
  legalEntityId: Scalars["AiloRN"];
  data: Scalars["String"];
  batchRef: Scalars["String"];
};

export type GraphQLUpsertAutoPayLiabilityStatusInput = {
  /** Maximum payable amount that auto pay will cover, default to be 40k and configurable via env var: ledger.auto-pay-liability.maximum-payment-amount */
  maximumPaymentAmount?: Maybe<GraphQLMoneyInput>;
  /**
   * Legal Entity ARN (Person/Company) if it is meant to pay liabilities using their "personal" wallet,
   * or Management folio ARN, if it's meant to pay liabilities using management folio wallet.
   */
  payerId?: Maybe<Scalars["AiloRN"]>;
  /** Current user legal entity ID. Will get deprecated soon, once we are able to get user person ARN from new authz token. */
  payerLegalEntity: Scalars["AiloRN"];
  paymentMethodId?: Maybe<Scalars["ID"]>;
};

export type GraphQLUpsertCrnInput = {
  legalEntity: Scalars["AiloRN"];
  managingEntity: Scalars["AiloRN"];
  crn: Scalars["String"];
};

export type GraphQLUpsertCrnOutput = {
  legalEntity: Scalars["AiloRN"];
  managingEntity: Scalars["AiloRN"];
  crn: Scalars["String"];
};

export type GraphQLUpsertTenancyBondClaim = {
  id?: Maybe<Scalars["ID"]>;
  amount: GraphQLMoneyInput;
  liabilityAiloRN: Scalars["AiloRN"];
  claimOrder: Scalars["Int"];
  claimStatus?: Maybe<GraphQLTenancyBondClaimStatus>;
};

export type GraphQLUpsertTenancyBondClaims = {
  bondId: Scalars["ID"];
  claims: Array<GraphQLUpsertTenancyBondClaim>;
};

export type GraphQLUser = {
  id: Scalars["Int"];
  ailoRN: Scalars["AiloRN"];
  auth0Id?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  modifiedAt?: Maybe<Scalars["DateTime"]>;
  onboardedAt?: Maybe<Scalars["DateTime"]>;
  onboardingCompletedAt?: Maybe<Scalars["DateTime"]>;
  person: GraphQLPerson;
  organisations: Array<GraphQLOrganisation>;
  onboardingTasks: Array<GraphQLUserOnboardingTask>;
  /** Returns true if the user has a role (via person) in any org with type "Agency". */
  isAgent?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLUserOrganisationsArgs = {
  filter?: Maybe<GraphQLOrganisationsFilter>;
};

export type GraphQLUserEmailVerification = {
  id: Scalars["AiloRN"];
  user: GraphQLUser;
  emailAddress: Scalars["String"];
  verificationCode: Scalars["String"];
  createdAt: Scalars["DateTime"];
};

export type GraphQLUserOnboardingTask = {
  /** @deprecated Use `onboardingTask.id` */
  onboardingTaskId: GraphQLOnboardingTaskId;
  onboardingTask: GraphQLOnboardingTask;
  completedAt: Scalars["DateTime"];
};

export type GraphQLUserPreference = {
  userId: Scalars["AiloRN"];
  enabled: Scalars["Boolean"];
  channel?: Maybe<GraphQLChannel>;
  communicationType?: Maybe<GraphQLCommunicationType>;
};

export type GraphQLUserServiceInput = {
  metadata: Scalars["String"];
};

export enum GraphQLVacatingReason {
  WithinTermsOfAgreement = "WithinTermsOfAgreement",
  LeaseBreak = "LeaseBreak",
  Termination = "Termination",
  LostManagement = "LostManagement",
  OffBoarded = "OffBoarded",
}

export type GraphQLVacatingTenancyProjectMeta = {
  management: GraphQLManagement;
  tenancy: GraphQLTenancy;
  inspectionAppointment?: Maybe<GraphQLInspectionAppointment>;
};

export enum GraphQLValidateFileErrorCode {
  FileNotFound = "FileNotFound",
  FileNotUploaded = "FileNotUploaded",
  InvalidFileType = "InvalidFileType",
}

export type GraphQLValidateFileResponse = {
  ok: Scalars["Boolean"];
  /** Present if `ok === true`. */
  file?: Maybe<GraphQLFile>;
  /** Present if `ok === false`. */
  errorCode?: Maybe<GraphQLValidateFileErrorCode>;
};

export enum GraphQLVerifyEmailErrorCode {
  VerificationCodeNotFound = "VERIFICATION_CODE_NOT_FOUND",
  VerificationCodeExpired = "VERIFICATION_CODE_EXPIRED",
  EmailUsedByAnotherPerson = "EMAIL_USED_BY_ANOTHER_PERSON",
}

export type GraphQLVerifyEmailErrorResponse = {
  errorCode: GraphQLVerifyEmailErrorCode;
};

export type GraphQLVerifyEmailResponse =
  | GraphQLVerifyEmailSuccessResponse
  | GraphQLVerifyEmailErrorResponse;

export type GraphQLVerifyEmailSuccessResponse = {
  user: GraphQLUser;
};

export type GraphQLVirtualAccount = GraphQLPaymentMethod & {
  accountNumber?: Maybe<Scalars["String"]>;
  ailoRN: Scalars["AiloRN"];
  bsb?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  externalId?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isAutoPay: Scalars["Boolean"];
  isAutoWithdraw: Scalars["Boolean"];
  isDefaultIn: Scalars["Boolean"];
  isDefaultOut: Scalars["Boolean"];
  isHidden: Scalars["Boolean"];
  isOnceOff?: Maybe<Scalars["Boolean"]>;
  reference?: Maybe<Scalars["String"]>;
  topUpFee?: Maybe<GraphQLTransactionFee>;
  virtualAccountId?: Maybe<Scalars["String"]>;
  wallet: GraphQLWallet;
};

export type GraphQLVoidTenancyAbility = {
  voidable: Scalars["Boolean"];
  unvoidableReason?: Maybe<GraphQLUnvoidableTenancyReason>;
};

export type GraphQLVoidTenancyPayload = {
  tenancy: GraphQLTenancy;
};

export type GraphQLWallet = {
  autoPayLiabilityStatus?: Maybe<GraphQLAutoPayLiabilityStatus>;
  autoWithdrawPlans?: Maybe<GraphQLPaginatedAutoWithdrawPlans>;
  availableBalance: GraphQLMoney;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  idempotencyKey: Scalars["GeneratedKey"];
  name: Scalars["String"];
  owner: GraphQLWalletOwner;
  totalBalance: GraphQLMoney;
};

export type GraphQLWalletAutoWithdrawPlansArgs = {
  disableOwnerFilter?: Maybe<Scalars["Boolean"]>;
  enabled: Scalars["Boolean"];
  payerLegalEntityId?: Maybe<Scalars["AiloRN"]>;
};

export type GraphQLWalletBalance = {
  availableBalance: GraphQLMoney;
  clearedBalance: GraphQLMoney;
  overdraftAllowance: GraphQLMoney;
  totalBalance: GraphQLMoney;
};

export type GraphQLWalletBalanceItem = {
  balance: GraphQLMoney;
  id: Scalars["AiloRN"];
  name: Scalars["String"];
  reference: Scalars["AiloRN"];
};

export type GraphQLWalletBalanceReport = {
  items: Array<Maybe<GraphQLWalletBalanceItem>>;
};

export type GraphQLWalletEntry = {
  amount: GraphQLMoney;
  businessTransaction: Scalars["AiloRN"];
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  isReversal: Scalars["Boolean"];
  isTopUpFee: Scalars["Boolean"];
  liability?: Maybe<GraphQLLiability>;
  paymentMethod?: Maybe<GraphQLPaymentMethod>;
  status: GraphQLBusinessTxStatusEnum;
};

export type GraphQLWalletOwner = {
  /** How much money the wallet owner currently owes due to fees */
  dueFeeAmount: GraphQLMoney;
  id: Scalars["ID"];
  reference: Scalars["AiloRN"];
};

export type GraphQLWalletOwnerBalanceItem = {
  reference: Scalars["AiloRN"];
  category: Scalars["String"];
  totalBalance: GraphQLMoney;
};

export type GraphQLWalletOwnerBalanceReport = {
  items?: Maybe<Array<Maybe<GraphQLWalletOwnerBalanceItem>>>;
};

export type GraphQLWalletOwnerLiabilityReport = {
  items: Array<Maybe<GraphQLWalletOwnerLiabilityReportItem>>;
};

export type GraphQLWalletOwnerLiabilityReportItem = {
  reference: Scalars["AiloRN"];
  totalBalance: GraphQLMoney;
};

export type GraphQLWalletStatementData = {
  closingBalance: GraphQLWalletBalance;
  lineItemsByStatementTransactionDate: Array<GraphQLStatementLineItem2>;
  openingBalance: GraphQLWalletBalance;
  taxSummary: GraphQLTaxSummaryStatementData;
  transactionLineItemsByStatementTransactionDate?: Maybe<GraphQLPaginatedStatementTransactionLineItem>;
};

export type GraphQLWalletStatementDataTransactionLineItemsByStatementTransactionDateArgs =
  {
    paginationParams?: Maybe<GraphQLPaginationParams>;
  };

export type GraphQLWalletStatementInput = {
  from: Scalars["Date"];
  to: Scalars["Date"];
  walletOwnerReference: Scalars["AiloRN"];
  zoneId: Scalars["ZoneId"];
};

export type GraphQLWalletTransferInput = {
  amount: GraphQLMoneyInput;
  description: Scalars["String"];
  destinationWalletOwner: Scalars["AiloRN"];
  idempotencyKey: Scalars["String"];
  sourceWalletOwner: Scalars["AiloRN"];
};

export type GraphQLWeight = {
  kgs: Scalars["Long"];
};

export type GraphQLWithdrawInput = {
  amount: GraphQLMoneyInput;
  fromWalletId: Scalars["ID"];
  idempotencyKey: Scalars["GeneratedKey"];
  toPaymentMethodId: Scalars["ID"];
  userFacingDescription?: Maybe<Scalars["String"]>;
};

export type GraphQLAddTrustAccountInput = {
  agency: Scalars["AiloRN"];
  accountName: Scalars["String"];
  accountNumber: Scalars["String"];
  bsb: Scalars["String"];
};

export type GraphQLDisburseToTrustAccountInput = {
  amount: GraphQLMoneyInput;
  agency: Scalars["AiloRN"];
  escrowAccount: Scalars["AiloRN"];
  idempotencyKey: Scalars["String"];
  description: Scalars["String"];
};

export type GraphQLGetTrustAccountInput = {
  agency: Scalars["AiloRN"];
};

export type GraphQLTransactionStatus = {
  clearedAt?: Maybe<Scalars["DateTime"]>;
  createdAt: Scalars["DateTime"];
  status: GraphQLBusinessTxStatusEnum;
};

export type GraphQLUserNotificationPreferenceInput = {
  userId: Scalars["AiloRN"];
  enabled: Scalars["Boolean"];
};

export type GraphQLUserNotificationPreferenceInputV2 = {
  userId: Scalars["AiloRN"];
  enabled: Scalars["Boolean"];
  channel?: Maybe<GraphQLChannel>;
  communicationType: GraphQLCommunicationType;
};

export type GraphQLGetAllAgencyOrganisationsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GraphQLGetAllAgencyOrganisationsQuery = {
  organisations?: Maybe<{
    pageInfo: { total: number; hasMore: boolean; nextCursor?: Maybe<string> };
    items: Array<Maybe<GraphQLMigrationOrganisationFragment>>;
  }>;
};

export type GraphQLGetMigrationContactsFromUserAilornsQueryVariables = Exact<{
  organisationAilorn: Scalars["AiloRN"];
  userAilorns: Array<Scalars["AiloRN"]> | Scalars["AiloRN"];
}>;

export type GraphQLGetMigrationContactsFromUserAilornsQuery = {
  contactsByUserAilorns: Array<GraphQLMigrationContactFragment>;
};

export type GraphQLGetMigrationOrganisationFromOrganisationIdQueryVariables =
  Exact<{
    organisationId: Scalars["ID"];
  }>;

export type GraphQLGetMigrationOrganisationFromOrganisationIdQuery = {
  organisation?: Maybe<{
    id: string;
    ailoRN: string;
    orgType: GraphQLOrganisationType;
  }>;
};

export type GraphQLMigrationContactFragment = {
  ailorn: string;
  types: Array<GraphQLContactType>;
  user?: Maybe<{ ailoRN: string }>;
};

export type GraphQLMigrationOrganisationFragment = {
  ailoRN: string;
  orgType: GraphQLOrganisationType;
};

export const MigrationContact = gql`
  fragment migrationContact on Contact {
    ailorn
    types
    user {
      ailoRN
    }
  }
`;
export const MigrationOrganisation = gql`
  fragment migrationOrganisation on Organisation {
    ailoRN
    orgType
  }
`;
export const GetAllAgencyOrganisations = gql`
  query getAllAgencyOrganisations {
    organisations(pageCursor: { pageSize: 3000 }, orgType: Agency) {
      pageInfo {
        total
        hasMore
        nextCursor
      }
      items {
        ...migrationOrganisation
      }
    }
  }
  ${MigrationOrganisation}
`;
export const GetMigrationContactsFromUserAilorns = gql`
  query getMigrationContactsFromUserAilorns(
    $organisationAilorn: AiloRN!
    $userAilorns: [AiloRN!]!
  ) {
    contactsByUserAilorns(
      organisationAilorn: $organisationAilorn
      userAilorns: $userAilorns
    ) {
      ...migrationContact
    }
  }
  ${MigrationContact}
`;
export const GetMigrationOrganisationFromOrganisationId = gql`
  query getMigrationOrganisationFromOrganisationId($organisationId: ID!) {
    organisation(id: $organisationId) {
      id
      ailoRN
      orgType
    }
  }
`;
