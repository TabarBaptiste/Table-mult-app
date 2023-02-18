import { PageTableMultComponent } from './page-table-mult/page-table-mult.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableMultListComponent } from './table-mult-list/table-mult-list.component';

const routes: Routes = [
  {path: 'table-multiplication', component: PageTableMultComponent },
  { path: 'tables-multiplication', component: TableMultListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
