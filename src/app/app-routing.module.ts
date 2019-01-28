import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganisationComponent } from './organisation/organisation.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [

  {
    path: 'organisation', component: OrganisationComponent,
  },
  { path: 'list', component: ListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
