import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

// import { AngularMaterialModule } from './angular-material.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule,NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
// import {MatInputModule,MatAutocompleteModule} from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    NgbModule,
    NgbTypeaheadModule


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
