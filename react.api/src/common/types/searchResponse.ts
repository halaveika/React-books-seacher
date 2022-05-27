export type itemsType = {
  accessInfo: AccessInfoType;
  etag: string;
  id: string;
  kind: string;
  saleInfo: SaleInfoType;
  searchInfo: { textSnippet: string };
  selfLink: string;
  volumeInfo: VolumeInfoType;
};

export type SaleInfoType = {
  buyLink: string;
  country: string;
  isEbook: boolean;
  listPrice: { amount: number; currencyCode: string };
  offers: Array<{
    finskyOfferType: number;
    listPrice: { amountInMicros: number; currencyCode: string };
  }>;
  retailPrice: { amount: number; currencyCode: string };
  saleability: string;
};

export type AccessInfoType = {
  accessViewStatus: string;
  country: string;
  embeddable: boolean;
  epub: { isAvailable: boolean; acsTokenLink: string };
  pdf: { isAvailable: boolean; acsTokenLink: string };
  publicDomain: boolean;
  quoteSharingAllowed: boolean;
  textToSpeechPermission: string;
  viewability: string;
  webReaderLink: string;
};

export type VolumeInfoType = {
  allowAnonLogging: boolean;
  authors: string[];
  averageRating: number;
  canonicalVolumeLink: string;
  categories: string[];
  contentVersion: string;
  description: string;
  imageLinks: { smallThumbnail: string; thumbnail: string };
  industryIdentifiers: Array<{ type: string; identifier: string }>;
  infoLink: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  panelizationSummary: { containsEpubBubbles: boolean; containsImageBubbles: boolean };
  previewLink: string;
  printType: string;
  publishedDate: string;
  publisher: string;
  readingModes: { text: boolean; image: boolean };
  ratingsCount: number;
  subtitle: string;
  title: string;
};

export type searchResponseType = {
  items: Array<itemsType>;
  kind: string;
  totalItems: number;
};
