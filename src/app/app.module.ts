import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
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

import { TruncatePipe } from './Truncate.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
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
      TemplateComponent
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
