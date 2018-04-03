import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginZaloDirective } from './directives/login-zalo.directive';
import { NgxZaloService } from './services/ngx-zalo.service';
import { LogoutZaloDirective } from './directives/logout-zalo.directive';

let zaloConfigs: { version: string, appId: string, redirectUrl: string };

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    NgxZaloService,
  ],
  declarations: [
    LoginZaloDirective,
    LogoutZaloDirective,
  ],
  exports: [
    LoginZaloDirective,
    LogoutZaloDirective,
  ]
})
export class NgxZaloModule {
}
