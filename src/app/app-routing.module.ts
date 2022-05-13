import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FirstComponent } from './first/first.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {path :'pierwszy' ,
  component: FirstComponent,
  children:[
    {path:'dzieckiA',component:ChildAComponent},
    {path:'dzieckiB',component:ChildBComponent}
  ]
},
  {path:'drugi', component: SecondComponent},
  {path:'',redirectTo:'/pierwszy',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
