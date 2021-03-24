/* eslint-disable */
import { MXJSStatelessWidget } from '@mxflutter/mxflutter';
import { Scaffold, ListTile, AppBar, Text, Colors, ListView, Placeholder } from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatelessWidget {
  constructor() {
    super('PageExamplePlaceholder');
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Placeholder'),
      }),
      body: new ListView({
        children: [
          new ListTile({
            title: new Text('默认占位符'),
          }),
          new Placeholder(),
          new ListTile({
            title: new Text('占位符换色'),
          }),
          new Placeholder({
            fallbackHeight: 100,
            color: Colors.orange,
          }),
          new ListTile({
            title: new Text('占位符指定高度'),
          }),
          new Placeholder({
            fallbackHeight: 100,
            fallbackWidth: 100,
            color: Colors.yellow,
          }),
          new ListTile({
            title: new Text('占位符线条粗细'),
          }),
          new Placeholder({
            fallbackHeight: 100,
            fallbackWidth: 100,
            strokeWidth: 4,
            color: Colors.green,
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
