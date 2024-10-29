import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResultsComponent } from './results/results.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'details', component: DetailsComponent },
  { path: '**', redirectTo: '' } // Redirige toutes les routes non définies vers la page de connexion
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
