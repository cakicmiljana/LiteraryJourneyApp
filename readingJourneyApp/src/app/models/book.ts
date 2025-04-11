import { SafeUrl } from "@angular/platform-browser";
import { Theme } from "./theme";
import { BookData } from "./book-data";

export interface Book {
    id: string;
    title: string;
    author: string;
    datails: BookData;
    coverPath: string;
    // pages: number;
    // description: string;
    // externalLink: string;
    // genres: string[];
    // language: string;
}