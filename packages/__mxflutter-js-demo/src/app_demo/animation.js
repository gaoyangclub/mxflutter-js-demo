//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import {
  MXJSStatefulWidget,
  MXJSWidgetState,
  MXJSLog,
  MXJSLog,
  MXSingleTickerMixinWidget,
  MXSingleTickerMixinWidgetState
} from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  FloatingActionButton
} from '@mxflutter/mxflutter-widgets/material';
import {
  Container,
  Text,
  Icon,
  IconData,
  Center,
  Image,
  AnimatedBuilder
} from '@mxflutter/mxflutter-widgets/widgets';
import {
  Duration
} from '@mxflutter/mxflutter-widgets/mx-dart-sdk';
import {
  Animation,
  Tween,
  AnimationController,
  AnimationStatus
} from '@mxflutter/mxflutter-widgets/animation';

//业务代码

class JSAnimationPage extends MXJSStatefulWidget {
  constructor() {
    super('JSAnimationPage');
  }

  createState() {
    return new JSAnimationPageState(this);
  }
}

class JSAnimationPageState extends MXJSWidgetState {
  constructor() {
    super();

    this.tween = new Tween({
      begin: 50.0,
      end: 300.0
    });
    this.animationController = new AnimationController({
      duration: new Duration({
        seconds: 3
      })
    });
    this.animation = new Animation({
      tween: this.tween,
      controller: this.animationController
    });

    this.animation.addStatusListener(this.animationLoopFunc.bind(this));

    this.count = 0;
  }

  animationLoopFunc(status) {
    MXJSLog.log('callback from flutter ....  ' + status);
    if (status == AnimationStatus.completed) {
      this.animationController.reverse();
      this.count++;
    } else if (status == AnimationStatus.dismissed) {
      this.animationController.forward();
    }
    if (this.count > 5) {
      this.animation.removeStatusListener(this.animationLoopFunc);
    }
  }

  beginAnimation() {
    this.animationController.forward();
  }

  build(context) {
    var imageRatio = 1.455;

    let w = new Scaffold({
      appBar: new AppBar({
        title: new Text("Animation Demo")
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(new IconData(0xe145, {
          fontFamily: 'MaterialIcons',
          semanticLabel: 'Action'
        })),
        onPressed: function () {
          this.beginAnimation();
        }.bind(this)
      }),
      body: new ScaleAnimation({
        child: Image.network('https://pic2.zhimg.com/50/v2-6416ef6d3181117a0177275286fac8f3_hd.jpg'),
        animation: this.animation
      })
    });

    return w;
  }
}


class ScaleAnimation extends MXSingleTickerMixinWidget {

  constructor({
    child,
    animation
  } = {}) {
    super('ScaleAnimation');
    this.child = child;
    this.animation = animation;
  }

  createState() {
    return new ScaleAnimationState(this);
  }
}

class ScaleAnimationState extends MXSingleTickerMixinWidgetState {

  build(context) {
    var imageRatio = 1.455;
    let widget = new Center({
      child: new AnimatedBuilder({
        animation: this.widget.animation,
        widget: new Container({
          // height: this.animation.value() * imageRatio + 2 - 5,
          width: "$value",
          child: this.widget.child
        })
        // child: this.child,
      })
    })
    return widget;
  }
}

export { JSAnimationPage };