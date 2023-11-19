import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { interceptorProvider } from './core/interceptors/interceptors.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
