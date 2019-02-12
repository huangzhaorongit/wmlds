import { NgModule } from '@angular/core';

import { WmldsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [WmldsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [WmldsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class WmldsSharedCommonModule {}
