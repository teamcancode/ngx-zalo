import { Component } from '@angular/core';
import { NgxZaloService } from '../../shared/services/ngx-zalo.service';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private _ngxZaloService: NgxZaloService) {
  }

  checkLoginStatus() {
    console.log('Login status:', this._ngxZaloService.isLogin);
  }

  getMyProfile() {
    this._ngxZaloService.getMyProfile().subscribe(result => {
      console.log('My profile:', result);
    });
  }

  getAccessToken() {
    console.log(this._ngxZaloService.accessToken);
  }

  logout() {
    this._ngxZaloService.logout().subscribe(() => {
      console.log('Logout successfully');
    });
  }

}
