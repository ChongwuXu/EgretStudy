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
    var MaskAndHitStudy = (function (_super) {
        __extends(MaskAndHitStudy, _super);
        function MaskAndHitStudy() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MaskAndHitStudy.prototype.onAddToStage = function () {
            this.hitPixelTest();
        };
        MaskAndHitStudy.prototype.doMask = function () {
            var shp = new egret.Shape();
            shp.graphics.beginFill(0xff0000);
            shp.graphics.drawRect(0, 0, 100, 100);
            shp.graphics.endFill();
            this.addChild(shp);
            var shp2 = new egret.Shape();
            shp2.graphics.beginFill(0x00ff00);
            shp2.graphics.drawCircle(0, 0, 20);
            shp2.graphics.endFill();
            this.addChild(shp2);
            shp2.x = 20;
            shp2.y = 20;
            var rect = new egret.Rectangle(20, 20, 30, 50);
            shp.mask = rect;
        };
        MaskAndHitStudy.prototype.hitRectTest = function () {
            this.drawText();
            var shp = new egret.Shape();
            shp.graphics.beginFill(0xff0000);
            shp.graphics.drawRect(0, 0, 100, 100);
            shp.graphics.endFill();
            shp.width = 100;
            shp.height = 100;
            this.addChild(shp);
            var isHit = shp.hitTestPoint(10, 10);
            this.infoText.text = "isHit: " + isHit;
        };
        MaskAndHitStudy.prototype.hitPixelTest = function () {
            this.drawText();
            var shp = new egret.Shape();
            shp.graphics.beginFill(0xff0000);
            shp.graphics.drawCircle(0, 0, 20);
            shp.graphics.endFill();
            shp.width = 100;
            shp.height = 100;
            this.addChild(shp);
            var isHit = shp.hitTestPoint(25, 25, true);
            this.infoText.text = "isHit: " + isHit;
        };
        MaskAndHitStudy.prototype.drawText = function () {
            this.infoText = new egret.TextField();
            this.infoText.y = 200;
            this.infoText.text = "isHit";
            this.addChild(this.infoText);
        };
        return MaskAndHitStudy;
    }(Study.BaseStudy));
    Study.MaskAndHitStudy = MaskAndHitStudy;
    __reflect(MaskAndHitStudy.prototype, "Study.MaskAndHitStudy");
})(Study || (Study = {}));
//# sourceMappingURL=MaskAndHitStudy.js.map