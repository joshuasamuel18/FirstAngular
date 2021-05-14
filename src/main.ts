import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { hmrBootstrap } from './hmr';
import 'hammerjs';

/* CCPA Script
 12-27-2019 Change : Charles
 Changed the URL to hardcode to the production version.
*/
const script2 = document.createElement('script');
script2.src = 'https://tags.tiqcdn.com/utag/ups/ups-capital/prod/utag.sync.js';
script2.innerHTML = '';
//document.head.appendChild(script2);
const script = document.createElement('script');
script.innerHTML = ` (function (a, b, c, d) {     a = 'https://tags.tiqcdn.com/utag/ups/ups-capital/prod/utag.js';
     b = document; c = 'script'; d = b.createElement(c); d.src = a; d.type = 'text/java' + c; d.async = true;
     a = b.getElementsByTagName(c)[0]; a.parentNode.insertBefore(d, a);
 })();`;
//document.body.appendChild(script);
/* CCPA Script */

if (environment.production) {
  enableProdMode();
}


const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (environment.hmr) {
  if (module['hot']) {
    hmrBootstrap(module, bootstrap);
  } else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
  }
} else {
  bootstrap();
}
