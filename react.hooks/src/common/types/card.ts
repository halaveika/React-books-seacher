type CardType = {
  id: string;
  title: string;
  authors: string[];
  averageRating: number;
  imageLinks: { smallThumbnail: string; thumbnail: string };
  description: string;
  categories: string[];
  language: string;
  pageCount: number;
  printType: string;
  publishedDate: string;
  publisher: string;
  ratingsCount: number;
  subtitle: string;
};

export default CardType;
