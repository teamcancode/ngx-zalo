import { Component } from '@angular/core';
import { NgxZaloService } from './shared/services/ngx-zalo.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _ngxZaloService: NgxZaloService) {
    this._ngxZaloService.init({
      version: environment.zaloConfigs.version,
      appId: environment.zaloConfigs.appId,
      redirectUrl: environment.zaloConfigs.redirectUrl,
    });
  }

  checkLoginStatus() {
    this._ngxZaloService.checkLoginStatus().subscribe(result => {
      console.log('Login status:', result);
    });
  }

  getMyProfile() {
    this._ngxZaloService.getMyProfile().subscribe(result => {
      console.log('My profile:', result);
    });
  }

}
