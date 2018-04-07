module Study {
	export class DrawStudy extends BaseStudy {
		public onAddToStage() {
			this.depth();
		}

		public click(){
			//创建一个空的 DisplayObjectContainer，把它的 x 和 y 坐标都改为
			var container: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
			container.x = 200;
			container.y = 200;
			this.addChild(container);
			//画一个红色的圆，添加到 container 中
			var circle: egret.Shape = new egret.Shape();
			circle.graphics.beginFill(0xff0000);
			circle.graphics.drawCircle(25,25,25);
			circle.graphics.endFill();
			container.addChild(circle);
			//给圆增加点击事件
			circle.touchEnabled = true;
			circle.addEventListener(egret.TouchEvent.TOUCH_TAP,onClick,this);
			function onClick():void{
				//把舞台左上角的坐标(0,0)转换为 container 内部的坐标
				var targetPoint: egret.Point = container.globalToLocal(0,0);
				//重新定位圆，可以看到圆形移到了屏幕的左上角
				circle.x = targetPoint.x;
				circle.y = targetPoint.y;
			}
		}

		public drag() {
			//设定2个偏移量
			var offsetX:number;
			var offsetY:number;
			//画一个红色的圆
			var circle: egret.Shape = new egret.Shape();
			circle.graphics.beginFill(0xff0000);
			circle.graphics.drawCircle(25,25,25);
			circle.graphics.endFill();
			this.addChild(circle);
			//手指按到屏幕，触发 startMove 方法
			circle.touchEnabled = true;
			circle.addEventListener(egret.TouchEvent.TOUCH_BEGIN,startMove,this);
			//手指离开屏幕，触发 stopMove 方法
			circle.addEventListener(egret.TouchEvent.TOUCH_END,stopMove,this);
			function startMove(e:egret.TouchEvent):void{
				//计算手指和圆形的距离
				offsetX = e.stageX - circle.x;
				offsetY = e.stageY - circle.y;
				//手指在屏幕上移动，会触发 onMove 方法
				this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,onMove,this);
			}
			function stopMove(e:egret.TouchEvent) {
				//手指离开屏幕，移除手指移动的监听
				this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,onMove,this);
			}
			function onMove(e:egret.TouchEvent):void{
				//通过计算手指在屏幕上的位置，计算当前对象的坐标，达到跟随手指移动的效果
				circle.x = e.stageX - offsetX;
				circle.y = e.stageY - offsetY;
			}
		}

		public depth() {
			var sprcon:egret.Sprite = new egret.Sprite();
			this.addChild( sprcon );
			sprcon.x = 10;
			for(var i:number = 0; i<4; i++)
			{
				var spr:egret.Sprite = new egret.Sprite();
				spr.graphics.beginFill( 0xffffff * Math.random() );
				spr.graphics.drawRect( 0, 0, 100, 100);
				spr.graphics.endFill();
				spr.x = i*20;
				sprcon.addChild( spr );
			}
			var sprNew:egret.Sprite = new egret.Sprite();
			sprNew.graphics.beginFill( 0xff0000 );
			sprNew.graphics.drawRect( 0, 0, 300, 150 );
			sprNew.graphics.endFill();
			sprNew.x = 10;
			sprNew.y = 50;
			sprcon.addChildAt( sprNew, 1 );
		}
	}
}