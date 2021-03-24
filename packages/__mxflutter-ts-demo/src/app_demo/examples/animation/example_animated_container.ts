/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
  AnimatedContainer,
} from '@mxflutter/mxflutter-widgets/material';
import { Duration } from '@mxflutter/mxflutter-widgets/mx-dart-sdk';

import { SectionTitle } from '../../component/section_title';


class PageExampleAnimatedContainer extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedContainer');
  }

  createState() {
    return new PageExampleAnimatedContainerState();
  }
}

class PageExampleAnimatedContainerState extends MXJSWidgetState {
  public selected: any;
  constructor(){
    super();
    this.selected = false;
  }

  build(context){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedContainer',),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {

          this.setState(function() {
            this.selected = !this.selected;
          }.bind(this))
        }.bind(this)
      }),
      body: new ListView({
        children:[
          new SectionTitle("PageExampleAnimatedContainer"),
          new AnimatedContainer({
            height:this.selected ? 300.0 : 100,
            color:this.selected ? Colors.blue:Colors.orange,
            duration:new Duration({milliseconds:200}),
            child:new Center({
              child:new Text("动画容器",{
                style:new TextStyle({
                  color:Colors.white,
                  fontSize:20,
                })
              }),
            })
          }),
        ],
      })
    });
    return widget;
  }
}

export {
  PageExampleAnimatedContainer,
};
