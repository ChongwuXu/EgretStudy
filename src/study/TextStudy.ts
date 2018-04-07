module Study {
	export class TextStudy extends BaseStudy {

		public onAddToStage() {
			this.touch();
		}

		public inputText() {
			var txInput:egret.TextField = new egret.TextField;
			txInput.type = egret.TextFieldType.INPUT;
			txInput.width = 282;
			txInput.height = 43;
			txInput.x = 134;
			txInput.y = 592;
        	txInput.border = true;
			txInput.textColor = 0xff0000;
			/// 注意_container是事先建立好的一个显示容器，即 egret.Sprite，并且已经添加到显示列表中
			this.addChild(txInput);
			
			var button:egret.Shape =  new egret.Shape();
			button.graphics.beginFill(0x00cc00);
			button.graphics.drawRect(0,0,100,40);
			button.graphics.endFill();
			button.y = 50;
			this.addChild(button);
			button.touchEnabled = true;
			button.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e) => {
					txInput.setFocus();
				}, this);
		}

		public inputType() {
			var text:egret.TextField = new egret.TextField();
			text.type = egret.TextFieldType.INPUT;
			//设置输入文本的样式为文本
			text.inputType = egret.TextFieldInputType.TEXT;
			text.text = "Input text:";
			text.width = 300;
        	text.border = true;
			this.addChild(text);
			var pass:egret.TextField = new egret.TextField();
			pass.type = egret.TextFieldType.INPUT;
        	pass.border = true;
			//设置输入文本显示为密码
			pass.inputType = egret.TextFieldInputType.PASSWORD;
			//设置密码显示
			pass.displayAsPassword = true;
			pass.text = "Password";
			pass.y = 100;
			pass.width = 300;
			this.addChild(pass);
			var tel:egret.TextField = new egret.TextField();
			tel.type = egret.TextFieldType.INPUT;
			//设置输入电话号样式
			tel.inputType = egret.TextFieldInputType.TEL;
			tel.text = "Telephone number:"
        	tel.border = true;
			tel.y = 200;
			tel.width = 300;
			this.addChild(tel);
		}

		private loadFont() {
			RES.getResByUrl( "resource/assets/cartoon-font.fnt", this.onLoadComplete, this, RES.ResourceItem.TYPE_FONT );
		}

		private _bitmapText:egret.BitmapText;
		private onLoadComplete( font:egret.BitmapFont ):void {
			this._bitmapText = new egret.BitmapText();
			this._bitmapText.font = font;
			this._bitmapText.x = 50;
			this._bitmapText.y = 300;
			this.addChild( this._bitmapText );
		}

		public fontFamily() {
			egret.TextField.default_size = 30;
			var label:egret.TextField = new egret.TextField();
			this.addChild( label );
			label.width = 590;
			label.height = 70;
			label.fontFamily = "Impact";
			label.size = 50;
			label.textColor = 0xff0000;			
			label.textAlign = egret.HorizontalAlign.CENTER;
			label.verticalAlign = egret.VerticalAlign.MIDDLE;
			//设置描边属性
			label.strokeColor = 0x0000ff;
			label.stroke = 2;
			//设置粗体与斜体
			label.bold = true;
			label.italic = true;
			label.text = "This is a text!";
		}

		public loadTtf() {
			egret.fontMapping["font1"] = "fonts/font1.ttf";
			egret.fontMapping["font2"] = "fonts/font2.otf";
			egret.fontMapping["font3"] = "fonts/font3.TTF";
			let label1 = new egret.TextField();
			label1.text = "默认字体";
			this.addChild(label1);
			let label2 = new egret.TextField();
			label2.text = "font1";
			label2.fontFamily = "font1";
			label2.y = 100;
			this.addChild(label2);
			let label3 = new egret.TextField();
			label3.text = "font2";
			label3.fontFamily = "font2";
			label3.y = 300;
			this.addChild(label3);
			let label4 = new egret.TextField();
			label4.text = "font3";
			label4.fontFamily = "font3";
			label4.y = 400;
			this.addChild(label4);
		}

		public jsonFont() {
			var tx:egret.TextField = new egret.TextField;
			tx.width = 400;
			tx.x = 10;
			tx.y = 10;
			tx.textColor = 0;
			tx.size = 20;
			tx.fontFamily = "微软雅黑";
			tx.textAlign = egret.HorizontalAlign.CENTER;
			tx.textFlow = <Array<egret.ITextElement>>[
				{text: "Text in ", style: {"size": 20}}
				, {text: "Egret", style: {"textColor": 0x336699, "size": 60, "strokeColor": 0x6699cc, "stroke": 2}}
				, {text: " can ", style: {"fontFamily": "Impact"}}
				, {text: "be set ", style: {"fontFamily": "Times New Roman"}}
				, {text: "to a ", style: {"textColor": 0xff0000}}
				, {text: "\n"}
				, {text: "variety ", style: {"textColor": 0x00ff00}}
				, {text: "of ", style: {"textColor": 0xf000f0}}
				, {text: "styles ", style: {"textColor": 0x00ffff}}
				, {text: "with", style: {"size": 56}}
				, {text: "different ", style: {"size": 16}}
				, {text: "colors, ", style: {"size": 26}}
				, {text: "\n"}
				, {text: "fonts ", style: {"italic": true, "textColor": 0x00ff00}}
				, {text: "and ", style: {"size": 26, "textColor": 0xf000f0, "fontfamily":"Quaver"}}
				, {text: "sizes", style: {"italic": true, "textColor": 0xf06f00}}
			];
			this.addChild( tx );
		}

		public htmlFont() {
			var tx:egret.TextField = new egret.TextField;
			// 注意_container是事先建立好的一个显示容器，即 egret.DisplayObjectContainer，并且已经添加到显示列表中
			tx.width = this.stage.stageWidth - 20;
			tx.textFlow = (new egret.HtmlTextParser).parser(
				'<font size=20>Text in </font>'
				+ '<font color=0x336699 size=60 strokecolor=0x6699cc stroke=2>Egret</font>'
				+ '<font fontfamily="Impact"> can </font>' 
				+ '<font fontfamily="Times New Roman "><u>be set </u></font>' 
				+ '<font color=0xff0000>to a </font>' 
				+ '<font> \n </font>'
				+ '<font color=0x00ff00>variety </font>' 
				+ '<font color=0xf000f0>of </font>' 
				+ '<font color=0x00ffff>styles </font>'  
				+ '<font size=56>with </font>' 
				+ '<font size=16>different </font>' 
				+ '<font size=26>colors, </font>' 
				+ '<font> \n </font>'
				+ '<font color=0x00ff00><i>fonts </i></font>' 
				+ '<font size=26 color=0xf000f0 fontfamily="Quaver">and </font>' 
				+ '<font color=0xf06f00><i>sizes</i></font>'
			);
			tx.x = 10;
			tx.y = 90;
			this.addChild( tx );
		}

		public layout() {
			var shape:egret.Shape = new egret.Shape();
			shape.graphics.beginFill(0xff0000);
			shape.graphics.drawRect( 0, 0, 400, 400 );
			shape.graphics.endFill();
			this.addChild( shape );
			var label:egret.TextField = new egret.TextField();
			this.addChild( label );
			label.width = 400;
			label.height = 400;
			label.textAlign = egret.HorizontalAlign.RIGHT;
			label.verticalAlign = egret.VerticalAlign.BOTTOM;
			label.text = "This is a text!";
		}

		public touch() {
        	var tx:egret.TextField = new egret.TextField;
			tx.textFlow = new Array<egret.ITextElement>(
				{ text:"This is a hyperlink", style: { "href" : "event:text event triggered" } },
				{ text:"\n 这段文字有链接", style: { "href" : "http://www.egret.com/" } },
				{ text:"\n This is just a text", style: {} }
			);
			tx.touchEnabled = true;
			tx.addEventListener( egret.TextEvent.LINK, function( evt:egret.TextEvent ){
				console.log( evt.text );
			}, this );
			tx.x = 10;
			tx.y = 90;
			this.addChild( tx );
		}
	}
}