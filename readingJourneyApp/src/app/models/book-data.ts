export interface BookData {
    bookId: string;
    pages: number;
    description: string;
    externalLink: string;
    genres: string[];
    quotes: string[];
    themes: string[];
    originalLanguage: string;
    country: string;
    publicationYear: string;
    // editions?
}