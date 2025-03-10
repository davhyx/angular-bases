import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Subscription, switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit, OnDestroy {

  public myCountry?: Country;
  private myCountrySubscription?: Subscription;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
   ) {}


  ngOnInit(): void {
    this.myCountrySubscription = this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.countriesService.searchAlphaCode(id) )
    )
    .subscribe ( country => {
      if ( !country ) {
        return this.router.navigateByUrl('');
      }
      return this.myCountry = country;
    });
  }

  ngOnDestroy(): void {
    this.myCountrySubscription?.unsubscribe();
  }
}
