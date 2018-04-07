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
    var SvgStudy = (function (_super) {
        __extends(SvgStudy, _super);
        function SvgStudy() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SvgStudy.prototype.onAddToStage = function () {
            this.borderProgress();
        };
        SvgStudy.prototype.rect = function () {
            var shp = new egret.Shape();
            shp.x = 20;
            shp.y = 20;
            shp.graphics.lineStyle(10, 0x00ff00);
            shp.graphics.beginFill(0xff0000, 1);
            shp.graphics.drawRect(0, 0, 100, 200);
            shp.graphics.endFill();
            this.addChild(shp);
        };
        SvgStudy.prototype.circle = function () {
            var shp = new egret.Shape();
            shp.x = 100;
            shp.y = 100;
            shp.graphics.lineStyle(10, 0x00ff00);
            shp.graphics.beginFill(0xff0000, 1);
            shp.graphics.drawCircle(0, 0, 50);
            shp.graphics.endFill();
            this.addChild(shp);
        };
        SvgStudy.prototype.line = function () {
            var shp = new egret.Shape();
            shp.graphics.lineStyle(2, 0x00ff00);
            shp.graphics.moveTo(68, 84);
            shp.graphics.lineTo(167, 76);
            shp.graphics.moveTo(100, 200);
            shp.graphics.lineTo(221, 118);
            shp.graphics.lineTo(290, 162);
            shp.graphics.lineTo(297, 228);
            shp.graphics.lineTo(412, 250);
            shp.graphics.lineTo(443, 174);
            shp.graphics.endFill();
            this.addChild(shp);
        };
        SvgStudy.prototype.curve = function () {
            var shp = new egret.Shape();
            shp.graphics.lineStyle(2, 0x00ff00);
            shp.graphics.moveTo(50, 50);
            shp.graphics.curveTo(100, 100, 200, 50);
            shp.graphics.endFill();
            this.addChild(shp);
        };
        SvgStudy.prototype.arc = function () {
            var shp = new egret.Shape();
            //填充圆弧
            shp.graphics.beginFill(0x1122cc);
            shp.graphics.drawArc(200, 200, 100, 0, Math.PI, true);
            shp.graphics.endFill();
            //圆弧
            shp.graphics.lineStyle(2, 0xffff00);
            shp.graphics.drawArc(150, 150, 150, 0, Math.PI / 180 * 30, false);
            shp.graphics.endFill();
            //扇形
            var r = 50;
            shp.graphics.beginFill(0xff0000);
            shp.graphics.moveTo(r, r); //绘制点移动(r, r)点
            shp.graphics.lineTo(r * 2, r); //画线到弧的起始点
            shp.graphics.drawArc(50, 50, 50, 0, 260 * Math.PI / 180, false); //从起始点顺时针画弧到终点
            shp.graphics.lineTo(r, r); //从终点画线到圆形。到此扇形的封闭区域形成
            this.addChild(shp);
        };
        //弧形进度条
        SvgStudy.prototype.arcProgress = function () {
            var shape = this.getArcProgress();
            this.addChild(shape);
        };
        SvgStudy.prototype.getArcProgress = function () {
            var shape = new egret.Shape();
            var angle = 0;
            egret.startTick(function (timeStamp) {
                angle += 1;
                changeGraphics(angle);
                angle = angle % 360;
                return true;
            }, this);
            function changeGraphics(angle) {
                shape.graphics.clear();
                shape.graphics.lineStyle(2, 0x0000ff, 1);
                shape.graphics.drawArc(50, 50, 50, 0, angle * Math.PI / 180, false);
                shape.graphics.endFill();
            }
            return shape;
        };
        //扇形进度条
        SvgStudy.prototype.sectorProgress = function () {
            var shape = this.getSectorProgress();
            this.addChild(shape);
        };
        SvgStudy.prototype.getSectorProgress = function () {
            var shape = new egret.Shape();
            var angle = 0;
            egret.startTick(function (timeStamp) {
                angle += 1;
                changeGraphics(angle);
                angle = angle % 360;
                return true;
            }, this);
            return shape;
            function changeGraphics(angle) {
                shape.graphics.clear();
                shape.graphics.beginFill(0xff0000);
                shape.graphics.moveTo(50, 50);
                shape.graphics.lineTo(100, 50);
                shape.graphics.drawArc(50, 50, 50, 0, angle * Math.PI / 180, false);
                shape.graphics.lineTo(50, 50);
                shape.graphics.endFill();
            }
        };
        //扇形进度条
        SvgStudy.prototype.borderProgress = function () {
            var shape = this.drawBorderProgress();
            this.addChild(shape);
        };
        SvgStudy.prototype.drawBorderProgress = function () {
            var container = new egret.DisplayObjectContainer();
            var w = 100;
            var h = 100;
            var r = Math.max(w, h) / 2 * 1.5;
            var bitmap = new egret.Bitmap();
            bitmap.texture = RES.getRes("egret_icon_png");
            container.addChild(bitmap);
            bitmap.width = w;
            bitmap.height = h;
            var shape = new egret.Shape();
            shape.x = bitmap.width / 2;
            shape.y = bitmap.height / 2;
            bitmap.mask = shape;
            container.addChild(shape);
            var angle = 0;
            egret.startTick(function (timeStamp) {
                angle += 1;
                changeGraphics(angle);
                angle = angle % 360;
                return true;
            }, this);
            return container;
            function changeGraphics(angle) {
                shape.graphics.clear();
                shape.graphics.beginFill(0x00ffff, 1);
                shape.graphics.lineTo(r, 0);
                shape.graphics.drawArc(0, 0, r, 0, angle * Math.PI / 180, true);
                shape.graphics.lineTo(0, 0);
                shape.graphics.endFill();
            }
        };
        return SvgStudy;
    }(Study.BaseStudy));
    Study.SvgStudy = SvgStudy;
    __reflect(SvgStudy.prototype, "Study.SvgStudy");
})(Study || (Study = {}));
//# sourceMappingURL=SvgStudy.js.map