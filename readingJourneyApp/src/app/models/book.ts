import { SafeUrl } from "@angular/platform-browser";
import { Theme } from "./theme";

export interface Book {
    id: number;
    title: string;
    author: string;
    externalLink: string;
    coverPath: string;
    literaryTheme?: Theme;
}