# Ngx Zalo

This module is used for [Angular 5](https://angular.io/).  
This module help you to use [Zalo SDK](https://developers.zalo.me/docs/sdk/javascript-sdk/tai-lieu) as service.  

[Demo Ngx Zalo](https://github.com/teamcancode/demo-ngx-zalo).

How to use:
-------------
### Installation:
```html
npm install ngx-zalo
```
    
### Import service:
Edit in `src/app/app.module.ts`:
```typescript
//...
import { NgxZaloModule } from 'ngx-zalo';

@NgModule({
  //...
  imports: [
    //...
    NgxZaloModule.forRoot({
      version: '2.0',
	  appId: <appId>,
	  redirectUrl: <redirectUrl>,
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Login
```html
<!-- Using directive -->
<p ngxLoginZalo>Login Zalo</p>
```

```typescript
//Using controller
constructor(private _ngxZaloService: NgxZaloService) {
}

login() {
  this._ngxZaloService.login();
}
```

### Logout
```html
<!-- Using directive -->
<p ngxLogoutZalo (successEvent)="logoutSuccessfullyAction()">Logout Zalo</p>
```

```typescript
//Using controller
constructor(private _ngxZaloService: NgxZaloService) {
}

logout() {
  this._ngxZaloService.logout().subscribe();
}
```

### Update login info - Call this function in redirect page to store zalo info
```typescript
constructor(private _router: Router, private _ngxZaloService: NgxZaloService) {
  this._ngxZaloService.updateLoginInfo().subscribe(() => {
    this._router.navigate(['/']);
  });
}
```

### Check login status
```typescript
constructor(private _ngxZaloService: NgxZaloService) {
}

checkLoginStatus() {
  console.log('Login status:', this._ngxZaloService.isLogin);
}
```

### Get my profile
```typescript
constructor(private _ngxZaloService: NgxZaloService) {
}

getMyProfile() {
  this._ngxZaloService.getMyProfile().subscribe(result => {
    console.log('My profile:', result);
  });
}
```

### Get access token
```typescript
constructor(private _ngxZaloService: NgxZaloService) {
}

getAccessToken() {
  console.log(this._ngxZaloService.accessToken);
}
```
