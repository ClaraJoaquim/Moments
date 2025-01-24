import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { IndividualPageComponent } from './components/pages/individual-page/individual-page.component';
import { EditMomentComponent } from './components/pages/edit-moment/edit-moment.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about',  component: AboutComponent},
  {path: 'moments/new', component: NewMomentComponent},
  {path: 'moments/edit/:id', component: EditMomentComponent},
  {path: 'moments/:id', component: IndividualPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
