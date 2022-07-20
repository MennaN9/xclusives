import { NgModule } from '@angular/core';

import { FeatherIconDirective } from '../directives/core-feather-icons/core-feather-icons';
import { RippleEffectDirective } from '../directives/core-ripple-effect/core-ripple-effect.directive';

@NgModule({
  declarations: [RippleEffectDirective, FeatherIconDirective],
  exports: [RippleEffectDirective, FeatherIconDirective]
})
export class CoreDirectivesModule { }
