import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  B2cStorefrontModule,
  JsonLdBuilderModule,
  StorefrontComponent,
} from '@spartacus/storefront';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorefrontModule } from '@spartacus/storefront';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { translations, translationChunksConfig } from '@spartacus/assets';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'spartacus-app' }),
    AppRoutingModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://storefront.c39j2-walkersde1-d4-public.model-t.cc.commerce.ondemand.com',
          legacy: false,
        },
      },
      pwa: {
        enabled: true,
        addToHomeScreen: true,
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      context: {
        urlParameters: ['baseSite', 'language', 'currency'],
        // baseSite: ['electronics']
        baseSite: [
          'electronics-spa',
          'electronics',
          'apparel-de',
          'apparel-uk',
        ],
       },

      // // custom routing configuration for e2e testing
      // routing: {
      //   routes: {
      //     product: {
      //       paths: ['product/:productCode/:name', 'product/:productCode'],
      //     },
      //   },
      // },
      // features: {
      //   level: '1.2',
      // },
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
