import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginZaloDirective } from './directives/login-zalo.directive';
import { NgxZaloService } from './services/ngx-zalo.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    NgxZaloService,
  ],
  declarations: [
    LoginZaloDirective
  ],
  exports: [
    LoginZaloDirective
  ]
})
export class NgxZaloModule {
}
