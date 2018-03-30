import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

declare const Zalo;

@Injectable()
export class NgxZaloService {

  private readonly _zaloScriptUrl = 'https://zjs.zdn.vn/zalo/sdk.js';
  private _isInit = false;

  init(configs: { version: string, appId: string, redirectUrl: string }): void {
    const script = document.createElement('script');
    script.src = this._zaloScriptUrl;
    script.addEventListener('load', () => {
      Zalo.init(configs);
      this._isInit = true;
    }, false);

    document.head.appendChild(script);
  }

  login(): void {
    if (this._isInit) {
      Zalo.login();
    }
  }

  checkLoginStatus(): Observable<boolean> {
    return new Observable(observer => {
      if (!this._isInit) {
        observer.next(false);
        observer.complete();
        return;
      }

      Zalo.getLoginStatus((response: { status }) => {
        observer.next(response.status === 'connected');
        observer.complete();
      });
    });
  }

  getMyProfile(fields = 'id, name, birthday, picture, gender'): Observable<{}> {
    return new Observable(observer => {
      if (!this._isInit) {
        observer.next(null);
        observer.complete();
        return;
      }

      Zalo.getLoginStatus((response: { status }) => {
        if (response.status === 'connected') {
          Zalo.api('/me', 'GET', {fields: fields}, (myProfile) => {
            observer.next(myProfile);
            observer.complete();
          });
        } else {
          observer.next(null);
          observer.complete();
        }
      });
    });
  }

}
