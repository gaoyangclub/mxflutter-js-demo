//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.
/* eslint-disable */
import {
  Flutter,
  StatelessWidget,
  StatefulWidget,
  State,
  MXJSBaseWidget,
  MXJSFlutterApp,
  MXJSLog,
} from '@mxflutter/mxflutter';

import {
  Scaffold,
  Color,
  AppBar,
  Text,
  ListView,
  ListTile,
  Icon,
  IconData,
  EdgeInsets,
  Padding,
  MaterialPageRoute,
  Navigator,
} from '@mxflutter/mxflutter-widgets/material';

import { JSBottomAPPBarDemo } from './app_demo/material/bottom_app_bar_demo';
import { JSBottomNavigationDemo } from './app_demo/material/bottom_navigation_demo';
import { JSEasyUIDemo } from './app_demo/material/easy_ui_demo';
import { JSTabsDemo } from './app_demo/material/tabs_demo';

class JSMaterialPage extends StatefulWidget {
  constructor() {
    super('JSMaterialPage');
  }

  createState() {
    return new JSMaterialPageState();
  }
}

class JSMaterialPageState extends State {
  build(context) {
    let widgets = new Scaffold({
      appBar: new AppBar({
        title: new Text('Material Demo'),
      }),
      body: new ListView({
        children: [
          new Padding({ padding: EdgeInsets.all(1.0) }),

          new ListTile({
            leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' }), { color: new Color(0xffff9800) }),
            trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
            title: new Text('Bottom app bar'),
            subtitle: new Text('Optional floating action button notch'),
            onTap: function () {
              Navigator.push(
                context,
                new MaterialPageRoute({
                  builder: function (context) {
                    return new JSBottomAPPBarDemo();
                  },
                }),
              );
            },
          }),

          // new ListTile({
          //     leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' }), { color: new Color(0xFFFF9800) }),
          //     trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
          //     title: new Text('Bottom navigation——动画需完善才能出现'),
          //     subtitle: new Text('Bottom navigation with cross-fading views'),
          //     onTap: function () {

          //         Navigator.push(context, new MaterialPageRoute({
          //             builder: function (context) {
          //                 return new JSBottomNavigationDemo;
          //             }
          //         }))

          //     }
          // }),

          new ListTile({
            leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' }), { color: new Color(0xffff9800) }),
            trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
            title: new Text('Easy UI'),
            subtitle: new Text('Easy UI usage'),
            onTap: function () {
              Navigator.push(
                context,
                new MaterialPageRoute({
                  builder: function (context) {
                    return new JSEasyUIDemo();
                  },
                }),
              );
            },
          }),

          new ListTile({
            leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' }), { color: new Color(0xffff9800) }),
            trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
            title: new Text('Tabs'),
            subtitle: new Text('Tabs with independently scrollable views'),
            onTap: function () {
              Navigator.push(
                context,
                new MaterialPageRoute({
                  builder: function (context) {
                    return new JSTabsDemo();
                  },
                }),
              );
            },
          }),
        ],
      }),
    });

    return widgets;
  }

  navigatorPush(jsWidget) {}
}

export { JSMaterialPage };
