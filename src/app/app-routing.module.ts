import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponentComponent } from './error-page-component/error-page-component.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RootChildComponent } from './root-child/root-child.component';
import { RootParentComponent } from './root-parent/root-parent.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'parent',
    component: RootParentComponent
  },
  {
    path: 'parent',
    component: RootParentComponent,
    children: [
      {path:'child', component: RootChildComponent },
    ]
  },
  {path:'**', component: ErrorPageComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
