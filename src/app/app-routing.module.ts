import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components :
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { ParentComponent } from './component-data-sharing/parent/parent.component';
import { HttpClientComponent } from './HttpClient/httpClient.component';
import { FormssidebysideComponent } from './forms/formssidebyside/formssidebyside.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { MenuComponent } from './layout/menu/menu.component';
import { LazyLoadingComponent } from './lazyLoading/lazy-loading.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'syntax', component: TemplateSyntaxComponent },
  { path: 'sharing-data', component: ParentComponent },
  { path: 'http-client', component: HttpClientComponent },
  { path: 'forms', component: FormssidebysideComponent },
  { path: 'lazyContainer', component: LazyLoadingComponent },
  {
    path: 'lazyContainer/lazyLoading',
    loadChildren: () =>
      import('./lazyLoading/lazy.module').then(mod => mod.LazyModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
