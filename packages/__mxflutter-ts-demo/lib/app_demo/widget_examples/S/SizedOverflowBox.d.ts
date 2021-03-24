import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleSizedOverflowBox;
}
declare class PageExampleSizedOverflowBox extends MXJSWidgetState {
    constructor();
    build(): Scaffold;
}
export { ExampleWidget };