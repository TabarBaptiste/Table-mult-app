import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTableMultComponent } from './page-table-mult/page-table-mult.component';

const routes: Routes = [
  {path: 'table-multiplication', component: PageTableMultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
