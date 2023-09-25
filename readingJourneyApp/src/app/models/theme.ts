import { Book } from "./book";

export interface Theme {
    id: number;
    title: string;
    description: string;
    featuredBooks: Book[];
}