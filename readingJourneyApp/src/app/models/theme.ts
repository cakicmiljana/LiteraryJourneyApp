import { Book } from "./book";

export interface LiteraryTheme {
    id: number;
    title: string;
    featuredBooks: Book[];
}