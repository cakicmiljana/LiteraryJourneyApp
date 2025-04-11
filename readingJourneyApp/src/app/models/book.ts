import { BookData } from "./book-data";

export interface Book {
    id: string;
    title: string;
    author: string;
    details: BookData;
    coverPath: string;
}