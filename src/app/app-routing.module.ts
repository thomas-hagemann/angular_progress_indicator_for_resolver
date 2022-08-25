import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './core/pages/a.component';
import { BComponent } from './core/pages/b.component';
import { DataResolverService } from './core/pages/data-resolver.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'a' },
  { path: 'a', component: AComponent, resolve: { data: DataResolverService } },
  { path: 'b', component: BComponent, resolve: { data: DataResolverService } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
