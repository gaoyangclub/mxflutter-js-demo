/* eslint-disable */
import { MXJSStatelessWidget } from '@mxflutter/mxflutter';
import {
  Scaffold,
  ListTile,
  Color,
  AppBar,
  Text,
  EdgeInsets,
  Colors,
  TextStyle,
  TextDecoration,
  RichText,
  TextSpan,
  FontWeight,
  ListView,
  TextDecorationStyle,
  TextOverflow,
  Padding,
} from '@mxflutter/mxflutter-widgets/material';
import { SectionTitle } from '../../component/section_title';

class ExampleWidget extends MXJSStatelessWidget {
  constructor() {
    super('ExampleWidget');
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Text'),
      }),
      body: new ListView({
        children: [
          // new SectionTitle("普通文本"),
          new ListTile({
            title: new Text('设置文本颜色', {
              style: new TextStyle({
                color: Colors.orange,
              }),
            }),
          }),
          new SectionTitle('富文本'),
          new Padding({
            padding: EdgeInsets.all(10),
            child: new RichText({
              text: new TextSpan({
                style: new TextStyle({
                  color: new Color(0xffff8c00),
                  fontSize: 18.0,
                  decoration: TextDecoration.underline,
                  decorationColor: Colors.orange,
                  decorationStyle: TextDecorationStyle.dashed,
                }),
                text:
                  '超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text',
                children: [
                  new TextSpan({
                    text: ' style  ',
                    style: new TextStyle({
                      color: Colors.red,
                      fontWeight: FontWeight.bold,
                      decoration: TextDecoration.none,
                    }),
                  }),
                  new TextSpan({
                    text: 'your text',
                    style: new TextStyle({
                      color: Colors.blue,
                      fontWeight: FontWeight.bold,
                      decoration: TextDecoration.none,
                    }),
                  }),
                ],
              }),
              overflow: TextOverflow.ellipsis,
              maxLines: 99,
            }),
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
