import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SuccessComponent } from './Success/Success.component';


const routes: Routes = [
  { path: '', redirectTo: 'subscribe', pathMatch: 'full' },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'success', component: SuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
