import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgxZaloModule } from './shared/ngx-zalo.module';
import { ZaloCallbackComponent } from './components/zalo-callback/zalo-callback.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ZaloCallbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxZaloModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
