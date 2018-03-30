import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-zalo-callback',
  templateUrl: './zalo-callback.component.html',
  styleUrls: ['./zalo-callback.component.scss']
})
export class ZaloCallbackComponent {

  constructor(private _router: Router) {
    // this._router.navigate(['/']);
  }

}
