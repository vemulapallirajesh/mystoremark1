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
      context: {
        urlParameters: ['baseSite', 'language', 'currency'],
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
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
