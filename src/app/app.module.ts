import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from "./home/home.module";
import {AboutModule} from "./about/about.module";
import {ProjectsModule} from "./projects/projects.module";
import {TopBarModule} from "./shared/modules/top-bar/top-bar.module";
import {FooterModule} from "./shared/modules/footer/footer.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HIGHLIGHT_OPTIONS, HighlightOptions} from "ngx-highlightjs";
import {ContactsModule} from "./contacts/contacts.module";
import {SelectProjectModule} from "./select-project/select-project.module";
import {AuthInterceptor} from "./admin/services/auth.interceptor";
import {AuthService} from "./admin/services/auth.service";
import {AdminModule} from "./admin/admin.module";
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {GetCurrentUserEffect} from "./shared/store/effect/get-current-user.effect";
import {reducers} from "./shared/store/reducer";

export const AppReducers: ActionReducerMap<any> = {
  'auth': reducers
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    AboutModule,
    ProjectsModule,
    TopBarModule,
    FooterModule,
    ContactsModule,
    SelectProjectModule,
    AdminModule,
    StoreModule.forRoot(AppReducers),
    EffectsModule.forRoot([GetCurrentUserEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: true,
    }),
  ],
  providers: [
    AuthService,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true,
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
      },
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
