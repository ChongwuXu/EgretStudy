var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Study;
(function (Study) {
    var EventStudy = (function (_super) {
        __extends(EventStudy, _super);
        function EventStudy() {
            var _this = _super.call(this) || this;
            _this.eventFlow();
            return _this;
        }
        EventStudy.prototype.eventFlow = function () {
            //创建一个男朋友
            var boy = new Boy();
            boy.name = "男朋友";
            //创建一个女朋友
            var girl = new Girl();
            girl.name = "女朋友";
            //注册侦听器
            boy.addEventListener(DateEvent.DATE, girl.getDate, girl);
            //男朋友发送要求
            boy.order();
            //约会邀请完成后，移除侦听器
            boy.removeEventListener(DateEvent.DATE, girl.getDate, girl);
        };
        EventStudy.prototype.onAddToStage = function () {
            this.scrollEvent();
        };
        EventStudy.prototype.touchEvent = function () {
            //添加显示文本
            this.drawText();
            //绘制一个透明度为1的绿色矩形，宽高为100*80
            var spr1 = new egret.Sprite();
            spr1.graphics.beginFill(0x00ff00, 1);
            spr1.graphics.drawRect(0, 0, 100, 80);
            spr1.graphics.endFill();
            spr1.width = 100;
            spr1.height = 80;
            this.addChild(spr1);
            //设置显示对象可以相应触摸事件
            spr1.touchEnabled = true;
            //注册事件
            spr1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTaps, this, true);
        };
        EventStudy.prototype.onTouch = function (evt) {
            this.txt.text += "\n点击了spr1";
        };
        EventStudy.prototype.onTouchTap = function (evt) {
            this.txt.text += "\n容器冒泡侦听\n---------";
        };
        EventStudy.prototype.onTouchTaps = function (evt) {
            this.txt.text += "\n容器捕获侦听";
        };
        EventStudy.prototype.drawText = function () {
            this.txt = new egret.TextField();
            this.txt.size = 12;
            this.txt.x = 250;
            this.txt.width = 200;
            this.txt.height = 200;
            this.txt.text = "事件文字";
            this.addChild(this.txt);
        };
        EventStudy.prototype.scrollEvent = function () {
            var scroller = new eui.Scroller();
            var list = new eui.List();
            list.itemRendererSkinName = "\n\t\t\t\t\t<e:Skin states=\"up,down,disabled\" minHeight=\"50\" minWidth=\"100\" xmlns:e=\"http://ns.egret.com/eui\"> <e:Image width=\"100%\" height=\"100%\" scale9Grid=\"1,3,8,8\" alpha.disabled=\"0.5\"\n\t\t\t\t\t\t\t\tsource=\"resource/assets/Button/button_up.png\"\n\t\t\t\t\t\t\t\tsource.down=\"resource/assets/Button/button_down.png\"/> <e:Label text=\"{data}\" top=\"8\" bottom=\"8\" left=\"8\" right=\"8\"\n\t\t\t\t\t\t\t\ttextColor=\"0xFFFFFF\" verticalAlign=\"middle\" textAlign=\"center\"/> </e:Skin>";
            var ac = new eui.ArrayCollection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
            list.dataProvider = ac;
            scroller.viewport = list;
            scroller.height = 200;
            this.addChild(scroller);
            scroller.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () { console.log("111 Scroller Begin"); }, this);
            list.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () { console.log("111 List Begin"); }, this);
            scroller.addEventListener(egret.TouchEvent.TOUCH_END, function () { console.log("222 Scroller END"); }, this);
            list.addEventListener(egret.TouchEvent.TOUCH_END, function () { console.log("222 List END"); }, this);
            scroller.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { console.log("33 Scroller Tap"); }, this);
            list.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { console.log("33 List Tap"); }, this);
            scroller.addEventListener(egret.TouchEvent.TOUCH_CANCEL, function () { console.log("44 Scroller cancel"); }, this);
            list.addEventListener(egret.TouchEvent.TOUCH_CANCEL, function () { console.log("44 List cancel"); }, this);
        };
        return EventStudy;
    }(Study.BaseStudy));
    Study.EventStudy = EventStudy;
    __reflect(EventStudy.prototype, "Study.EventStudy");
    var Boy = (function (_super) {
        __extends(Boy, _super);
        function Boy() {
            return _super.call(this) || this;
        }
        Boy.prototype.order = function () {
            //生成约会事件对象
            var daterEvent = new DateEvent(DateEvent.DATE);
            //添加对应的约会信息
            daterEvent._year = 2014;
            daterEvent._month = 8;
            daterEvent._date = 2;
            daterEvent._where = "肯德基";
            daterEvent._todo = "共进晚餐";
            //发送要求事件
            this.dispatchEvent(daterEvent);
        };
        return Boy;
    }(egret.Sprite));
    __reflect(Boy.prototype, "Boy");
    var Girl = (function (_super) {
        __extends(Girl, _super);
        function Girl() {
            return _super.call(this) || this;
        }
        Girl.prototype.getDate = function (evt) {
            console.log("得到了" + evt.target.name + "的邀请！");
            console.log("会在" + evt._year + "年" + evt._month + "月" + evt._date + "日，在" + evt._where + evt._todo);
        };
        return Girl;
    }(egret.Sprite));
    __reflect(Girl.prototype, "Girl");
    var DateEvent = (function (_super) {
        __extends(DateEvent, _super);
        function DateEvent(type, bubbles, cancelable) {
            if (bubbles === void 0) { bubbles = false; }
            if (cancelable === void 0) { cancelable = false; }
            var _this = _super.call(this, type, bubbles, cancelable) || this;
            _this._year = 0;
            _this._month = 0;
            _this._date = 0;
            _this._where = "";
            _this._todo = "";
            return _this;
        }
        DateEvent.DATE = "约会";
        return DateEvent;
    }(egret.Event));
    __reflect(DateEvent.prototype, "DateEvent");
})(Study || (Study = {}));
//# sourceMappingURL=EventStudy.js.map