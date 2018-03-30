import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { NgxZaloService } from '../services/ngx-zalo.service';

@Directive({
  selector: '[ngxLogoutZalo]'
})
export class LogoutZaloDirective {

  @Output() successEvent: EventEmitter<null> = new EventEmitter<null>();

  constructor(private _ngxZaloService: NgxZaloService) {
  }

  @HostListener('click') onClick() {
    this._ngxZaloService.logout().subscribe(() => {
      this.successEvent.emit();
    });
  }

}
