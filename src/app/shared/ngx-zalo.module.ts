import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginZaloDirective } from './directives/login-zalo.directive';
import { NgxZaloService } from './services/ngx-zalo.service';
import { LogoutZaloDirective } from './directives/logout-zalo.directive';

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

  static forRoot(zaloConfigs: { version: string, appId: string, redirectUrl: string }): ModuleWithProviders {
    return {
      ngModule: NgxZaloModule,
      providers: [
        {provide: 'zaloConfigs', useValue: zaloConfigs}
      ]
    };
  }

}
