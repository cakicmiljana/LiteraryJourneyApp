import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { environment } from 'src/environments/environment';
import { Theme } from '../models/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  constructor(private httpClient: HttpClient) { 

  }

  getAllThemes() {
    return this.httpClient.get<Theme[]>("http://localhost:3000/themes")
    
  }
}
