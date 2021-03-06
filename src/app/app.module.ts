import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio';
import { IonicApp, IonicErrorHandler, IonicModule, Config} from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GoodsPage } from '../pages/goods/goods'
import { ModalContentPage } from '../pages/modal/modal'
import { TestPage } from '../pages/test/test'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { CartService } from './CartService';
import { ModalLeaveTransition } from './modal-leave.transition'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GoodsPage,
    TestPage,
    ModalContentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GoodsPage,
    TestPage,
    ModalContentPage
  ],
  providers: [
    StatusBar,
    NativeAudio,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    CartService
  ]
})
export class AppModule {

  constructor(public config: Config) {
    this.config.setTransition('modal-leave', ModalLeaveTransition);
    if (!("path" in Event.prototype)){
      Object.defineProperty(Event.prototype, "path", {
        get: function() {
          var path = [];
          var currentElem = this.target;
          while (currentElem) {
            path.push(currentElem);
            currentElem = currentElem.parentElement;
          }
          if (path.indexOf(window) === -1 && path.indexOf(document) === -1)
            path.push(document);
          if (path.indexOf(window) === -1)
            path.push(window);
          return path;
        }
      });
    }
  }
}
