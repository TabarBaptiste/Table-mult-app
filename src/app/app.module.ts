import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { PageTableMultComponent } from './page-table-mult/page-table-mult.component';
import { FooterComponent } from './component/footer/footer.component';
import { TableMultiplicationComponent } from './component/table-multiplication/table-multiplication.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageTableMultComponent,
    FooterComponent,
    TableMultiplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
