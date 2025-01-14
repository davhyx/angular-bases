import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Giphy, SearchGiphyResponse } from '../interfaces/gifs.interfaces';

const GIPHY_API_KEY = '44WbJCWsUsr7uRYBMcncD82YnSk5KjS7';

@Injectable({ providedIn: 'root' })
export class GifsService {

  public gifList:Giphy[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = GIPHY_API_KEY;
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient ) {
    this.loadLocalStorage();
   }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeTagsHistory (tag: string) {
    if ( tag.length === 0) return;
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }
    this._tagsHistory.unshift( tag ); //unshift - agrega elemento al inicio del array
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage():void {
    localStorage.setItem('localHistory', JSON.stringify( this._tagsHistory ));
  }

  private loadLocalStorage():void {
    if ( !localStorage.getItem('localHistory') ) return;
    
    this._tagsHistory = JSON.parse( localStorage.getItem('localHistory')! ); // ! = not null operator
  }

  /* Using fetch 
  async searchTag (tag: string):Promise<void> { 
  */
  searchTag (tag: string):void {
    this.organizeTagsHistory(tag);
    /* Using fetch
    fetch('http://api.giphy.com/v1/gifs/search?api_key=44WbJCWsUsr7uRYBMcncD82YnSk5KjS7&q=csgo&limit=9')
      .then( resp => resp.json() )
      .then( data => console.log(data) );
    */
   /* Using HttpClient*/
   const params = new HttpParams()
    .set( 'api_key', this.apiKey )
    .set( 'limit', '9' )
    .set( 'q', tag )
   this.http.get<SearchGiphyResponse>(`${this.serviceUrl}/search`, {params})
    .subscribe( resp => {      
      this.gifList = resp.data;
    })
  }
}
