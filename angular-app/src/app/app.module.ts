import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PocetnaStranaComponent } from './components/pocetna-strana/pocetna-strana.component';
import { StudentStranaComponent } from './components/student-strana/student-strana.component';
import { ProfesorStranaComponent } from './components/profesor-strana/profesor-strana.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaStranaComponent,
    StudentStranaComponent,
    ProfesorStranaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
