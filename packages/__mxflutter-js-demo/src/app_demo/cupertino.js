//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import {
    MXJSStatefulWidget,
    MXJSWidgetState,
} from '@mxflutter/mxflutter';
import {
    Scaffold,
    AppBar,
    ListTile,
} from '@mxflutter/mxflutter-widgets/material';
import {
    Text,
    ListView,
    Icon,
    IconData,
    Padding,
} from '@mxflutter/mxflutter-widgets/widgets';
import {
    Color,
} from '@mxflutter/mxflutter-widgets/mx-dart-sdk';
import {
    EdgeInsets,
} from '@mxflutter/mxflutter-widgets/painting';

import { JSBottomAPPBarDemo } from './material/bottom_app_bar_demo';



class JSCupertinoPage extends MXJSStatefulWidget {
    constructor() {
        super("JSCupertinoPage");

    }

    createState() {
        return new JSCupertinoPageState(this);
    }
}

class JSCupertinoPageState extends MXJSWidgetState {

    build(context) {
        let w = new Scaffold({
            appBar: new AppBar({
                title: new Text("Cupertino Demo")
            }),
            // floatingActionButton: new FloatingActionButton({
            //     child: new Icon(new IconData(0xe3c9)),
            //     onPressed: function () {

            //     },
            // }),
            body: new ListView({
                children: [
                    new Padding({
                        padding: EdgeInsets.all(1.0)
                    }),
                    new ListTile({
                        leading: new Icon(new IconData(0xe39d, {
                            fontFamily: 'MaterialIcons'
                        }), {
                            color: new Color(0xFFFF9800)
                        }),
                        trailing: new Icon(new IconData(0xe5df, {
                            fontFamily: 'MaterialIcons',
                            matchTextDirection: true
                        })),
                        title: new Text('Backdrop'),
                        subtitle: new Text('Select a front layer from back layer'),
                        onTap: function () {
                            this.navigatorPush(new JSPestoPage);
                        }
                    }),

                    new ListTile({
                        leading: new Icon(new IconData(0xe39d, {
                            fontFamily: 'MaterialIcons'
                        }), {
                            color: new Color(0xFFFF9800)
                        }),
                        trailing: new Icon(new IconData(0xe5df, {
                            fontFamily: 'MaterialIcons',
                            matchTextDirection: true
                        })),
                        title: new Text('Bottom app bar'),
                        subtitle: new Text('Optional floating action button notch'),
                        onTap: function () {
                            this.navigatorPush(new JSBottomAPPBarDemo);
                        }
                    })
                ]
            })
        });

        return w;
    }
}

export { JSCupertinoPage };