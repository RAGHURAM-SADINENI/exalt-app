import { Component } from '@angular/core';
import { MSAdal, AuthenticationContext, AuthenticationResult } from '@ionic-native/ms-adal/ngx';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'NEWS',
      url: '/news',
      icon: 'document'
    },
    {
      title: 'TOOLS',
      url: '/tools',
      icon: 'briefcase'
    },
    {
      title: 'SEARCH',
      url: '/search',
      icon: 'search'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private msAdal: MSAdal
  ) {
    this.initializeApp();
    var authContext:AuthenticationContext = this.msAdal.createAuthenticationContext('https://login.windows.net/common/oauth2/authorize');
    authContext.acquireTokenAsync("https://datacatalog.azure.com", "6877b814-f75e-4e8e-95ee-c25e72838e36", "http://localhost:8200/home",'','')
    .then((authResponse: AuthenticationResult) => {
      alert('Token is' + authResponse.accessToken);
      alert('Token will expire on'+ authResponse.expiresOn);
    })
    .catch((e: any) => alert('Authentication failed'+ e));
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
