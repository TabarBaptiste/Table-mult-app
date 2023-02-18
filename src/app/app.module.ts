import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { PageTableMultComponent } from './page-table-mult/page-table-mult.component';
import { FooterComponent } from './component/footer/footer.component';
import { TableMultiplicationComponent } from './component/table-multiplication/table-multiplication.component';
import { TableMultListComponent } from './table-mult-list/table-mult-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageTableMultComponent,
    FooterComponent,
    TableMultiplicationComponent,
    TableMultListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
