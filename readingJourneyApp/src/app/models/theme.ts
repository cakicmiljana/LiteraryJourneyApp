import { Book } from "./book";
import { Review } from "./review";

export interface Theme {
    id: number; // ili string
    title: string;
    description?: string;
    imagePath?: string;
    books: Book[];
    genres: string[];
    reviews: Review[];
    rating?: number;
}