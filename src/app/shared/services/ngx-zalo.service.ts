import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

declare const Zalo;

@Injectable()
export class NgxZaloService {

  private readonly SCRIPT_URL = 'https://zjs.zdn.vn/zalo/sdk.js';
  private readonly STATUS_NOT_INIT = 0;
  private readonly STATUS_INITIALIZING = 1;
  private readonly STATUS_INIT_FAILURE = 2;
  private readonly STATUS_INIT_SUCCESSFULLY = 3;

  private _initStatus = this.STATUS_NOT_INIT;
  private _isLogin = false;

  get isLogin(): boolean {
    return this._isLogin;
  }

  get accessToken(): string {
    return this.isInitSuccessfully ? Zalo.getAccessToken() : null;
  }

  init(configs: { version: string, appId: string, redirectUrl: string }): void {
    this._initStatus = this.STATUS_INITIALIZING;
    this.initZaloScript(() => {
      Zalo.init(configs);

      this.getLoginStatus(() => {
        this._initStatus = this.STATUS_INIT_SUCCESSFULLY;
      });
    }, () => {
      this._initStatus = this.STATUS_INIT_FAILURE;
    });
  }

  login(): void {
    if (this.isInitSuccessfully) {
      Zalo.login();
    }
  }

  logout(): Observable<null> {
    return new Observable(observer => {
      if (this.isInitSuccessfully) {
        Zalo.logout();
      }

      this._isLogin = false;
      this.breakObservable(observer);
    });
  }

  updateLoginInfo(): Observable<boolean> {
    return new Observable(observer => {
      if (this.isNotInit) {
        this._isLogin = false;
        this.breakObservable(observer, false);
        return;
      }

      this.pendingInit().subscribe(() => {
        Zalo.getLoginStatus((response: { status }) => {
          this._isLogin = response.status === 'connected';
          this.breakObservable(observer, this._isLogin);
        });
      });
    });
  }

  getMyProfile(fields = 'id, name, birthday, picture, gender'): Observable<{}> {
    return new Observable(observer => {
      if (!this._initStatus) {
        this.breakObservable(observer);
        return;
      }

      this.pendingInit().subscribe(() => {
        Zalo.api('/me', 'GET', {fields: fields}, (myProfile) => {
          this.breakObservable(observer, myProfile);
        });
      });
    });
  }

  private get isNotInit() {
    return this.STATUS_NOT_INIT === this._initStatus;
  }

  private get isInitializing() {
    return this.STATUS_INITIALIZING === this._initStatus;
  }

  private get isInitSuccessfully() {
    return this.STATUS_INIT_SUCCESSFULLY === this._initStatus;
  }

  private pendingInit(): Observable<null> {
    return new Observable(observer => {
      if (!this.isInitializing) {
        this.breakObservable(observer);
        return;
      }

      const timeInterval = setInterval(() => {
        if (!this.isInitializing) {
          clearInterval(timeInterval);
          this.breakObservable(observer);
        }
      }, 500);
    });
  }

  private initZaloScript(successCallback, errorCallback) {
    if ('undefined' === typeof window) {
      return;
    }

    const script = document.createElement('script');

    script.src = this.SCRIPT_URL;

    script.onload = () => {
      if (successCallback) {
        successCallback();
      }
    };

    script.onerror = () => {
      if (errorCallback) {
        errorCallback();
      }
    };

    document.head.appendChild(script);
  }

  private getLoginStatus(callback) {
    Zalo.getLoginStatus((response: { status }) => {
      if (response.status === 'connected') {
        this._isLogin = true;
      }

      if (callback) {
        callback(response);
      }
    });
  }

  // noinspection JSMethodCanBeStatic
  private breakObservable(observer: Subscriber<any>, data = null) {
    observer.next(data);
    observer.complete();
  }

}
