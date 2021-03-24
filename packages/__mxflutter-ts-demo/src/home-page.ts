//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

/* eslint-disable */
import { StatelessWidget, StatefulWidget, State, MXJSLog } from '@mxflutter/mxflutter';

import {
  Scaffold,
  Container,
  Color,
  Colors,
  AppBar,
  Text,
  ListView,
  ListTile,
  Icon,
  IconData,
  EdgeInsets,
  TextAlign,
  TextStyle,
  Row,
  Padding,
  Theme,
  Navigator,
  MaterialPageRoute,
} from '@mxflutter/mxflutter-widgets/material';

import { ExamplesPage } from './app_demo/examples/index';
import { WidgetExamplesPage } from './app_demo/widget_examples/index';
import { JSMaterialPage } from './app_demo/material';
import { JSZhiHuPage } from './app_demo/zhihu/zhihu';

// 业务代码
class MXJSWidgetHomePage extends StatefulWidget {
  public data: any;
  public count: any;
  constructor() {
    super('MXJSWidgetHomePage');

    this.data = 'biz data';
    this.count = 0;
  }

  createState() {
    return new MXJSWidgetHomePageState();
  }
}

class MXJSWidgetHomePageState extends State {
  build(context) {
    const demoList = new ListView({
      children: [
        this.sectionTitle(context, 'App Demo'),
        new ListTile({
          leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' }), {
            color: Theme.of(context).primaryColor,
          }),
          trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
          title: new Text('Examples'),
          subtitle: new Text('Common Examples'),
          onTap() {
            Navigator.push(
              context,
              new MaterialPageRoute({
                builder(context) {
                  return new ExamplesPage();
                },
              }),
            );
          },
        }),
        new ListTile({
          leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' }), {
            color: Theme.of(context).primaryColor,
          }),
          trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
          title: new Text('Widget Examples'),
          subtitle: new Text('All Widget Examples'),
          onTap() {
            Navigator.push(
              context,
              new MaterialPageRoute({
                builder(context) {
                  return new WidgetExamplesPage();
                },
              }),
            );
          },
        }),
        new ListTile({
          leading: new Icon(new IconData(0xe06d, { fontFamily: 'MaterialIcons' }), {
            color: Theme.of(context).primaryColor,
          }),
          trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
          title: new Text('Material'),
          subtitle: new Text('Material UI Demo'),
          onTap() {
            Navigator.push(
              context,
              new MaterialPageRoute({
                builder(context) {
                  return new JSMaterialPage();
                },
              }),
            );
          },
        }),
        new ListTile({
          leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' }), {
            color: Theme.of(context).primaryColor,
          }),
          trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
          title: new Text('ZhiHu'),
          subtitle: new Text('ZhiHu high copy'),
          onTap() {
            Navigator.push(
              context,
              new MaterialPageRoute({
                builder(context) {
                  return new JSZhiHuPage();
                },
              }),
            );
          },
        }),

        // new ListTile({
        //   leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' }), { color: Theme.of(context).primaryColor }),
        //   trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
        //   title: new Text('网易新闻 ListViewDemo'),
        //   subtitle: new Text('ListView ,Message Channel, Pull to refresh'),

        //   onTap() {
        //     const list_view = require('./app_demo/listview_example.ts');

        //     Navigator.push(context, new MaterialPageRoute({
        //       builder(context) {
        //         return new list_view.ListViewDemo;
        //       },
        //     }));
        //   },
        // }),

        // new ListTile({
        //   leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' }), { color: Theme.of(context).primaryColor }),
        //   trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
        //   title: new Text('PlatformAPIExamples'),
        //   subtitle: new Text('Network/Dio/MessageChannel'),

        //   onTap() {
        //     const { PlatformExamplesPage } = require('./app_demo/platform/index.ts');

        //     Navigator.push(context, new MaterialPageRoute({
        //       builder(context) {
        //         return new PlatformExamplesPage;
        //       },
        //     }));
        //   },
        // }),

        // new ListTile({
        //   leading: new Icon(new IconData(0xe06d, { fontFamily: 'MaterialIcons' }), { color: Theme.of(context).primaryColor }),
        //   trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
        //   title: new Text('Pesto'),
        //   subtitle: new Text('Simple recipe browser'),

        //   onTap() {
        //     const pesto = require('./app_demo/pesto.ts');

        //     Navigator.push(context, new MaterialPageRoute({
        //       builder(context) {
        //         return new pesto.JSPestoPage;
        //       },
        //     }));
        //   },
        // }),
        // new ListTile({
        //   leading: new Icon(new IconData(0xe0d0, { fontFamily: 'MaterialIcons' }), { color: Theme.of(context).primaryColor }),
        //   trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
        //   title: new Text('Contact profile'),
        //   subtitle: new Text('Address book entry with a flexible appbar'),

        //   onTap() {
        //     const { JSContactPage } = require('./app_demo/contact.ts');
        //     Navigator.push(context, new MaterialPageRoute({
        //       builder(context) {
        //         return new JSContactPage;
        //       },
        //     }));
        //   },
        // }),
        // new ListTile({
        //   leading: new Icon(new IconData(0xe06d, { fontFamily: 'MaterialIcons' }), { color: Theme.of(context).primaryColor }),
        //   trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
        //   title: new Text('Animation'),
        //   subtitle: new Text('Section organizer'),
        //   onTap() {
        //     const { JSAnimationPage } = require('./app_demo/animation.ts');
        //     Navigator.push(context, new MaterialPageRoute({
        //       builder(context) {
        //         return new JSAnimationPage;
        //       },
        //     }));
        //   },
        // }),
        // this.sectionTitle(context, '性能测试'),
        // new ListTile({
        //   leading: new Icon(new IconData(0xe06d, { fontFamily: 'MaterialIcons' })),
        //   trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
        //   title: new Text('Profile'),
        //   subtitle: new Text('性能测试 performance profiling'),
        //   onTap() {
        //     const { ProfileExamplesPage } = require('./app_demo/profile/index.ts');

        //     Navigator.push(context, new MaterialPageRoute({
        //       builder(context) {
        //         return new ProfileExamplesPage;
        //       },
        //     }));
        //   },
        // }),

        // this.sectionTitle(context, "mxjsbuilder build app"),
        // new ListTile({
        //     leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' })),
        //     trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
        //     title: new Text('FlutterDemo'),
        //     subtitle: new Text('简单样例'),
        //     onTap: function () {

        //         let flutter_demo_ddc = require("./mxjsbuilder_demo/flutter_demo.dart.lib.js");

        //         Navigator.push(context, new MaterialPageRoute({
        //             builder: function (context) {
        //                 return new flutter_demo_ddc.main.MyHomePage.new({ title: "Flutter Demo Home Page" });
        //             }
        //         }))
        //     }
        // }),
        // new ListTile({
        //     leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' })),
        //     trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
        //     title: new Text('ContactDemo'),
        //     subtitle: new Text('联系人'),

        //     onTap: function () {

        //         let contact_demo_ddc = require("./mxjsbuilder_demo/contacts_demo.dart.lib.js");

        //         Navigator.push(context, new MaterialPageRoute({
        //             builder: function (context) {
        //                 return new contact_demo_ddc.contacts_demo.ContactsDemo.new;
        //             }
        //         }))
        //     }
        // }),
        // new ListTile({
        //     leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' })),
        //     trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
        //     title: new Text('PestoDemo'),
        //     subtitle: new Text('菜谱'),
        //     onTap: function () {

        //         let pesto_demo_ddc = require("./mxjsbuilder_demo/pesto_demo.dart.lib.js");

        //         Navigator.push(context, new MaterialPageRoute({
        //             builder: function (context) {
        //                 return new pesto_demo_ddc.pesto_demo.PestoDemo.new;
        //             }
        //         }))
        //     }
        // }),
        // new ListTile({
        //     leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' })),
        //     trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
        //     title: new Text('ZhiHu'),
        //     subtitle: new Text('知乎-高仿版'),

        //     onTap: function () {

        //         const packages__zhihu__index = require('./mxjsbuilder_demo/packages/zhihu/index/index.dart.lib.js');
        //         const index_page = packages__zhihu__index.index__index;

        //         Navigator.push(context, new MaterialPageRoute({
        //             builder: function (context) {
        //                 return new index_page.Index.new;
        //             }
        //         }))
        //     }
        // }),
        // this.sectionTitle(context, 'Dart JS Api'),
        // new ListTile({
        //   leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' })),
        //   trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
        //   title: new Text('Dart JS Api'),
        //   subtitle: new Text('JS Call Dart Function'),
        //   onTap() {
        //     const { PageExampleJSApi } = require('./app_demo/custom_js_api.ts');
        //     Navigator.push(context, new MaterialPageRoute({
        //       builder(context) {
        //         return new PageExampleJSApi;
        //       },
        //     }));
        //   },
        // }),
      ],
    });

    const w = new Scaffold({
      appBar: new AppBar({
        title: new Text('MXFlutter Examples'),
      }),
      body: demoList,
    });

    return w;
  }

  sectionTitle(context, title) {
    return new HomeSectionTitle(title);
  }
}

class HomeSectionTitle extends StatelessWidget {
  private title: any;
  // constructor(title, { key } = {}) {
  //   super('HomeSectionTitle', { key });
  //   this.title = title;
  // }
  constructor(title) {
    super('HomeSectionTitle');
    this.title = title;
  }

  build(context) {
    return new Container({
      padding: EdgeInsets.all(10.0),
      color: Theme.of(context).primaryColor,
      child: new Row({
        children: [
          new Icon(new IconData(0xe80e, { fontFamily: 'MaterialIcons' }), { size: 20, color: new Color(0xffffffff) }),
          new Padding({ padding: EdgeInsets.fromLTRB(10.0, 0.0, 0.0, 0.0) }),
          new Text(this.title, {
            textAlign: TextAlign.start,
            style: new TextStyle({
              fontSize: 16,
              fontWeight: Theme.of(context).textTheme.subtitle1.fontWeight,
              color: Colors.white,
            }),
          }),
        ],
      }),
    });
  }
}

export { MXJSWidgetHomePage };
