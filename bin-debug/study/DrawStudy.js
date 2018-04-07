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
    var DrawStudy = (function (_super) {
        __extends(DrawStudy, _super);
        function DrawStudy() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DrawStudy.prototype.onAddToStage = function () {
            this.depth();
        };
        DrawStudy.prototype.click = function () {
            //创建一个空的 DisplayObjectContainer，把它的 x 和 y 坐标都改为
            var container = new egret.DisplayObjectContainer();
            container.x = 200;
            container.y = 200;
            this.addChild(container);
            //画一个红色的圆，添加到 container 中
            var circle = new egret.Shape();
            circle.graphics.beginFill(0xff0000);
            circle.graphics.drawCircle(25, 25, 25);
            circle.graphics.endFill();
            container.addChild(circle);
            //给圆增加点击事件
            circle.touchEnabled = true;
            circle.addEventListener(egret.TouchEvent.TOUCH_TAP, onClick, this);
            function onClick() {
                //把舞台左上角的坐标(0,0)转换为 container 内部的坐标
                var targetPoint = container.globalToLocal(0, 0);
                //重新定位圆，可以看到圆形移到了屏幕的左上角
                circle.x = targetPoint.x;
                circle.y = targetPoint.y;
            }
        };
        DrawStudy.prototype.drag = function () {
            //设定2个偏移量
            var offsetX;
            var offsetY;
            //画一个红色的圆
            var circle = new egret.Shape();
            circle.graphics.beginFill(0xff0000);
            circle.graphics.drawCircle(25, 25, 25);
            circle.graphics.endFill();
            this.addChild(circle);
            //手指按到屏幕，触发 startMove 方法
            circle.touchEnabled = true;
            circle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, startMove, this);
            //手指离开屏幕，触发 stopMove 方法
            circle.addEventListener(egret.TouchEvent.TOUCH_END, stopMove, this);
            function startMove(e) {
                //计算手指和圆形的距离
                offsetX = e.stageX - circle.x;
                offsetY = e.stageY - circle.y;
                //手指在屏幕上移动，会触发 onMove 方法
                this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
            }
            function stopMove(e) {
                //手指离开屏幕，移除手指移动的监听
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
            }
            function onMove(e) {
                //通过计算手指在屏幕上的位置，计算当前对象的坐标，达到跟随手指移动的效果
                circle.x = e.stageX - offsetX;
                circle.y = e.stageY - offsetY;
            }
        };
        DrawStudy.prototype.depth = function () {
            var sprcon = new egret.Sprite();
            this.addChild(sprcon);
            sprcon.x = 10;
            for (var i = 0; i < 4; i++) {
                var spr = new egret.Sprite();
                spr.graphics.beginFill(0xffffff * Math.random());
                spr.graphics.drawRect(0, 0, 100, 100);
                spr.graphics.endFill();
                spr.x = i * 20;
                sprcon.addChild(spr);
            }
            var sprNew = new egret.Sprite();
            sprNew.graphics.beginFill(0xff0000);
            sprNew.graphics.drawRect(0, 0, 300, 150);
            sprNew.graphics.endFill();
            sprNew.x = 10;
            sprNew.y = 50;
            sprcon.addChildAt(sprNew, 1);
        };
        return DrawStudy;
    }(Study.BaseStudy));
    Study.DrawStudy = DrawStudy;
    __reflect(DrawStudy.prototype, "Study.DrawStudy");
})(Study || (Study = {}));
//# sourceMappingURL=DrawStudy.js.map