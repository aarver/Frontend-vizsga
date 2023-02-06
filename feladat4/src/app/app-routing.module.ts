import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KonyvajanloComponent } from './konyvajanlo/konyvajanlo.component';


const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'konyvajanlo', component: KonyvajanloComponent},
  {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
