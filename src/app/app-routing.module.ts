import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { ParentComponent } from './component-data-sharing/parent/parent.component';
import { HttpClientComponent } from './HttpClient/httpClient.component';
import { FormssidebysideComponent } from './forms/formssidebyside/formssidebyside.component';

const routes: Routes = [
  { path: 'syntax', component: TemplateSyntaxComponent },
  { path: 'sharing-data', component: ParentComponent },
  { path: 'http-client', component: HttpClientComponent },
  { path: 'forms', component: FormssidebysideComponent },
  { path: '**', component: TemplateSyntaxComponent }
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: [
   ]
})
export class AppRoutingModule {}
