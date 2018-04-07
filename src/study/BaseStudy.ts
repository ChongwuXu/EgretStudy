module Study {
	export class BaseStudy extends egret.DisplayObjectContainer {
		public constructor() {
			super();
        	this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
		}

		public onAddToStage() {
		}
	}
}