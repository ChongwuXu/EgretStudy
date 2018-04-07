module Study {
	export class EventStudy extends BaseStudy {
		public constructor() {
			super();
			this.eventFlow();
		}

		public eventFlow() {			
			//创建一个男朋友
			var boy:Boy = new Boy();
			boy.name = "男朋友";
			//创建一个女朋友
			var girl:Girl = new Girl();
			girl.name = "女朋友";
			//注册侦听器
			boy.addEventListener(DateEvent.DATE,girl.getDate,girl);
			//男朋友发送要求
			boy.order();
			//约会邀请完成后，移除侦听器
			boy.removeEventListener(DateEvent.DATE,girl.getDate,girl);
		}

		public onAddToStage()
		{
			this.scrollEvent();
		}

		public touchEvent() {
			//添加显示文本
			this.drawText();
			//绘制一个透明度为1的绿色矩形，宽高为100*80
			var spr1:egret.Sprite = new egret.Sprite();
			spr1.graphics.beginFill(0x00ff00, 1);
			spr1.graphics.drawRect(0, 0, 100, 80);
			spr1.graphics.endFill();
			spr1.width = 100;
			spr1.height = 80;
			this.addChild( spr1 );
			//设置显示对象可以相应触摸事件
			spr1.touchEnabled = true;
			//注册事件
			spr1.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onTouch, this );
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTaps, this, true);
		}

		private onTouch( evt:egret.TouchEvent )
		{
			this.txt.text += "\n点击了spr1";
		}
		private onTouchTap( evt:egret.TouchEvent )
		{
			this.txt.text += "\n容器冒泡侦听\n---------";
		}

		private onTouchTaps( evt:egret.TouchEvent )
		{
			this.txt.text += "\n容器捕获侦听";
		}
		//绘制文本
		private  txt:egret.TextField;
		private drawText():void
		{
			this.txt = new egret.TextField();
			this.txt.size = 12;
			this.txt.x = 250;
			this.txt.width = 200;
			this.txt.height = 200;
			this.txt.text = "事件文字";
			this.addChild( this.txt );
		}

		public scrollEvent() {
			var scroller = new eui.Scroller();
			var list = new eui.List();  
			list.itemRendererSkinName = `
					<e:Skin states="up,down,disabled" minHeight="50" minWidth="100" xmlns:e="http://ns.egret.com/eui"> <e:Image width="100%" height="100%" scale9Grid="1,3,8,8" alpha.disabled="0.5"
								source="resource/assets/Button/button_up.png"
								source.down="resource/assets/Button/button_down.png"/> 
					<e:Label text="{data}" top="8" bottom="8" left="8" right="8"
								textColor="0xFFFFFF" verticalAlign="middle" textAlign="center"/> </e:Skin>`
			var ac = new eui.ArrayCollection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
			list.dataProvider = ac;
			scroller.viewport = list;
			scroller.height = 200;
			this.addChild(scroller);
			scroller.addEventListener(egret.TouchEvent.TOUCH_BEGIN,()=>{console.log("111 Scroller Begin")},this);
			list.addEventListener(egret.TouchEvent.TOUCH_BEGIN,()=>{console.log("111 List Begin")},this);
			scroller.addEventListener(egret.TouchEvent.TOUCH_END,()=>{console.log("222 Scroller END")},this);
			list.addEventListener(egret.TouchEvent.TOUCH_END,()=>{console.log("222 List END")},this);
			scroller.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{console.log("33 Scroller Tap")},this);
			list.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{console.log("33 List Tap")},this);
			scroller.addEventListener(egret.TouchEvent.TOUCH_CANCEL,()=>{console.log("44 Scroller cancel")},this);
			list.addEventListener(egret.TouchEvent.TOUCH_CANCEL,()=>{console.log("44 List cancel")},this);
		}

	}

	class Boy extends egret.Sprite
	{
		public constructor()
		{
			super();
		}
		public order()
		{
			//生成约会事件对象
			var daterEvent:DateEvent = new DateEvent(DateEvent.DATE);
			//添加对应的约会信息
			daterEvent._year = 2014;
			daterEvent._month = 8;
			daterEvent._date = 2;
			daterEvent._where = "肯德基";
			daterEvent._todo = "共进晚餐";
			//发送要求事件
			this.dispatchEvent(daterEvent);
		}
	}

	class Girl extends egret.Sprite
	{
		public constructor()
		{
			super();
		}
		public getDate(evt:DateEvent)
		{
			console.log("得到了" + evt.target.name + "的邀请！" );
			console.log("会在" + evt._year + "年" + evt._month + "月" + evt._date + "日，在"+ evt._where+ evt._todo);
		}
	}

	class DateEvent extends egret.Event
	{
		public static DATE:string = "约会";
		public _year:number = 0;
		public _month:number = 0;
		public _date:number = 0;
		public _where:string = "";
		public _todo:string = "";
		public constructor(type:string, bubbles:boolean=false, cancelable:boolean=false)
		{
			super(type,bubbles,cancelable);
		}
	}

}