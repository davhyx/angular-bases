import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    public cacheStore: CacheStore = {
        byCapital: { term: '', countries: [] },
        byCountry: { term: '', countries: [] },
        byRegion:  { region: '', countries: [] }
    }

    constructor( private httpClient: HttpClient ) { 
        this.readLocalStorage();
     }

    private saveLocalStorage() {
        localStorage.setItem( 'cacheStore', JSON.stringify( this.cacheStore ) );
    }

    private readLocalStorage() {
        if ( !localStorage.getItem('cacheStore') ) return;

        this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')! )
    }

    private getCountriesRequest( url: string ): Observable<Country[]> {
        return this.httpClient
            .request<Country[]>('GET', url, {responseType:'json'})
            .pipe(
                catchError( error => of([]) )
            );
    }

    searchCapital ( term: string): Observable<Country[]> {
        const url = `${ this.apiUrl }/capital/${ term }`;
        return  this.getCountriesRequest( url )
                .pipe( 
                    tap( countries => this.cacheStore.byCapital = { term: term, countries: countries} ),
                    tap( () => this.saveLocalStorage() )
                 );
    }

    searchCountry ( term: string ): Observable<Country[]> {
        const url = `${ this.apiUrl }/name/${ term }`;
        return this.getCountriesRequest( url );
    }

    searchRegion ( term: string ): Observable<Country[]> {
        const url = `${ this.apiUrl }/region/${ term }`;
        return this.getCountriesRequest( url );
    }

    searchAlphaCode ( code: string ): Observable<Country | null> {
        const url = `${ this.apiUrl }/alpha/${ code }`;
        return this.httpClient
        .request<Country[]>('GET', url, {responseType:'json'})
        .pipe(
            map( countries => countries.length > 0 ? countries[0] : null),
            catchError( () => of(null) )
        );
    }
    
}