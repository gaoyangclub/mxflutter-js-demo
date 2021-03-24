/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  Container,
  ListTile,
  AppBar,
  Text,
  Colors,
  ListView,
  Image,
  BoxFit,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleImage();
  }
}
class PageExampleImage extends MXJSWidgetState {
  constructor() {
    super();
  }

  genImageUI(boxFitName) {
    return [
      new ListTile({
        title: new Text('BoxFit.' + boxFitName),
      }),
      new Container({
        height: 150,
        width: 300,
        color: Colors.orange,
        child: Image.asset('people/ali_landscape.png', {
          __mx_package: 'flutter_gallery_assets',
          fit: BoxFit[boxFitName],
          height: 100,
        }),
      }),
    ];
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Image'),
      }),
      body: new ListView({
        children: [
          new ListTile({
            title: new Text('加载网络图片'),
          }),
          Image.network('https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg', {
            fit: BoxFit.cover,
            height: 250,
          }),
          new ListTile({
            title: new Text('加载本地图片'),
          }),
          Image.asset('people/ali_landscape.png', {
            __mx_package: 'flutter_gallery_assets',
            fit: BoxFit.cover,
            height: 250,
          }),
          ...this.genImageUI('contain'),
          ...this.genImageUI('fill'),
          ...this.genImageUI('fitHeight'),
          ...this.genImageUI('fitWidth'),
          ...this.genImageUI('scaleDown'),
          ...this.genImageUI('none'),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
