import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { ParentComponent } from './component-data-sharing/parent/parent.component';
import { ChildOneComponent } from './component-data-sharing/child-one/child-one.component';
import { ChildTwoComponent } from './component-data-sharing/child-two/child-two.component';
import { ChildThreeComponent } from './component-data-sharing/child-three/child-three.component';
import { SiblingComponent } from './services/sibling/sibling.component';
import { HttpClientComponent } from './HttpClient/httpClient.component';
import { FormssidebysideComponent } from './forms/formssidebyside/formssidebyside.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { TemplateComponent } from './forms/template/template.component';
import { FileUploadComponent } from './forms/file-upload/file-upload.component';
import { LazyLoadingComponent } from './lazyLoading/lazy-loading.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';

import { TruncatePipe } from './template-syntax/Truncate.pipe';

@NgModule({
   declarations: [
      AppComponent,
      MenuComponent,
      NavbarComponent,
      PageNotFoundComponent,
      TemplateSyntaxComponent,
      TruncatePipe,
      ParentComponent,
      ChildOneComponent,
      ChildTwoComponent,
      ChildThreeComponent,
      SiblingComponent,
      HttpClientComponent,
      FormssidebysideComponent,
      ReactiveComponent,
      TemplateComponent,
      LazyLoadingComponent,
      FileUploadComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
