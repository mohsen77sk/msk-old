import { ModuleWithProviders, NgModule } from '@angular/core';
import { MskConfigService } from './config.service';
import { MSK_APP_CONFIG } from './config.constants';

@NgModule()
export class MskConfigModule {
  /**
   * Constructor
   */
  constructor(private _mskConfigService: MskConfigService) {}

  /**
   * forRoot method for setting user configuration
   *
   * @param config
   */
  static forRoot(config: any): ModuleWithProviders<MskConfigModule> {
    return {
      ngModule: MskConfigModule,
      providers: [
        {
          provide: MSK_APP_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
