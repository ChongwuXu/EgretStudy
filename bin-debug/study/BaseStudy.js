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
    var BaseStudy = (function (_super) {
        __extends(BaseStudy, _super);
        function BaseStudy() {
            var _this = _super.call(this) || this;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        BaseStudy.prototype.onAddToStage = function () {
        };
        return BaseStudy;
    }(egret.DisplayObjectContainer));
    Study.BaseStudy = BaseStudy;
    __reflect(BaseStudy.prototype, "Study.BaseStudy");
})(Study || (Study = {}));
//# sourceMappingURL=BaseStudy.js.map