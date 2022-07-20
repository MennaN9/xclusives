import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';



@NgModule()
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('Import CoreModule in the AppModule only');
    }
  }

  static forRoot(config: any): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,

    };
  }
}
