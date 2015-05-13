if (!TCard)throw new Error("tcard.enchant.js must be loaded after TCard.js");
enchant.TCard = {};
(function() {
    enchant.TCard.CARDS = "tcard_cards";
	enchant.TCard.OPEN  = 0;
	enchant.TCard.CLOSE = 1;
	// 画像設定
	enchant.TCard.setPack = function() {
		var assets = enchant.Core.instance.assets;
		// 画像読み込みチェック
		var ICON0 = "icon0.png";
		var FONT1 = "font1.png";
		var LOGO  = "enchant.png";
		
		if (!assets[ICON0])throw new Error("tcard.enchant.js must be loaded after icon0.png");
		if (!assets[FONT1])throw new Error("tcard.enchant.js must be loaded after font1.png");
		if (!assets[LOGO])throw new Error("tcard.enchant.js must be loaded after enchant.png");
		
		var SIDE = 48;
		var CURVE = 8;
		var image = new Surface(SIDE * TCard.NUME_SIZE, SIDE * (TCard.SUIT_SIZE + 1));
        var ctx = image.context;
		var x, y;
		for (var i = 1; i <= TCard.CARD_SIZE; i++) {
			x = TCard.getNumber(i) - 1;
			y = TCard.getSuit(i) - 1;
			
			// 外枠を描画
			ctx.fillStyle = "white";
			ctx.beginPath();
			ctx.moveTo(SIDE * x + CURVE, SIDE * y);
			ctx.lineTo(SIDE * x + SIDE - CURVE, SIDE * y);
			ctx.quadraticCurveTo(SIDE * x + SIDE, SIDE * y, SIDE * x + SIDE, SIDE * y + CURVE);
			ctx.lineTo(SIDE * x + SIDE, SIDE * y + SIDE - CURVE);
			ctx.quadraticCurveTo(SIDE * x + SIDE, SIDE * y + SIDE, SIDE * x + SIDE - CURVE, SIDE * y + SIDE);
			ctx.lineTo(SIDE * x + CURVE, SIDE * y + SIDE);
			ctx.quadraticCurveTo(SIDE * x, SIDE * y + SIDE, SIDE * x, SIDE * y + SIDE - CURVE);
			ctx.lineTo(SIDE * x, SIDE * y + CURVE);
			ctx.quadraticCurveTo(SIDE * x, SIDE * y, SIDE * x + CURVE, SIDE * y);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
			// スートを描画
			image.draw(assets[ICON0]
				, 48 + 16 * y, 64, 16, 16
				,48 * x + 16, 48 * y + 6, 16, 16);
			// 数を描画
			switch (x) {
			case 0:
				image.draw(assets[FONT1]
					, 16, 32, 16, 16
					,48 * x + 18, 48 * y + 28, 16, 16);
				break;
			case 9:
				image.draw(assets[FONT1]
					, 16, 16, 16, 16
					,48 * x + 8, 48 * y + 28, 16, 16);
				image.draw(assets[FONT1]
					,  0, 16, 16, 16
					,48 * x + 8 + 16, 48 * y + 28, 16, 16);
				break;
			case 10:
				image.draw(assets[FONT1]
					, 160, 32, 16, 16
					,48 * x + 18, 48 * y + 28, 16, 16);
				break;
			case 11:
				image.draw(assets[FONT1]
					, 16, 48, 16, 16
					,48 * x + 18, 48 * y + 28, 16, 16);
				break;
			case 12:
				image.draw(assets[FONT1]
					, 176, 32, 16, 16
					,48 * x + 18, 48 * y + 28, 16, 16);
				break;
			default:
				image.draw(assets[FONT1]
					, 16 + 16 * x, 16, 16, 16
					,48 * x + 18, 48 * y + 28, 16, 16);
				break;
			}
		}
		
		y = TCard.SUIT_SIZE;
		for (x = 0; x < 2; x++) {
			// 外枠を描画
			ctx.fillStyle = "white";
			ctx.beginPath();
			ctx.moveTo(SIDE * x + CURVE, SIDE * y);
			ctx.lineTo(SIDE * x + SIDE - CURVE, SIDE * y);
			ctx.quadraticCurveTo(SIDE * x + SIDE, SIDE * y, SIDE * x + SIDE, SIDE * y + CURVE);
			ctx.lineTo(SIDE * x + SIDE, SIDE * y + SIDE - CURVE);
			ctx.quadraticCurveTo(SIDE * x + SIDE, SIDE * y + SIDE, SIDE * x + SIDE - CURVE, SIDE * y + SIDE);
			ctx.lineTo(SIDE * x + CURVE, SIDE * y + SIDE);
			ctx.quadraticCurveTo(SIDE * x, SIDE * y + SIDE, SIDE * x, SIDE * y + SIDE - CURVE);
			ctx.lineTo(SIDE * x, SIDE * y + CURVE);
			ctx.quadraticCurveTo(SIDE * x, SIDE * y, SIDE * x + CURVE, SIDE * y);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();

            if (x === 0) {
				image.draw(assets[FONT1]
					, 160, 32, 16, 16
					,48 * x + 1, 48 * y + 18, 16, 16);
				image.draw(assets[FONT1]
					, 240, 64, 16, 16
					,48 * x + 11, 48 * y + 18, 16, 16);
				image.draw(assets[FONT1]
					, 176, 64, 16, 16
					,48 * x + 19, 48 * y + 18, 16, 16);
				image.draw(assets[FONT1]
					, 80, 64, 16, 16
					,48 * x + 27, 48 * y + 18, 16, 16);
				image.draw(assets[FONT1]
					, 32, 80, 16, 16
					,48 * x + 35, 48 * y + 18, 16, 16);
			} else {
				image.draw(assets[LOGO]
					, 0, 0, 512, 512
					, 48 * x + 1, 48 * y + 1, 46, 46);
				ctx.stroke();
			}
		}
		assets[enchant.TCard.CARDS] = image;
	};
	enchant.TCard.getCard = function(num) {
		var assets = enchant.Core.instance.assets;
		if (!assets[enchant.TCard.CARDS]) throw new Error("enchant.TCard.getCard must be called after enchant.TCard.setPack");
		var asset = enchant.Core.instance.assets[enchant.TCard.CARDS];
		var card = new Sprite(48, 48);
		card.image = new Surface(96, 48);
		if (num === TCard.JOKER) {
			card.image.draw(asset,  0, 192, 48, 48, 0, 0, 48, 48);
            card.image.draw(asset, 48, 192, 48, 48, 48, 0, 48, 48);
		} else if (TCard.JOKER < num || card <= TCard.CARD_SIZE) {
			var x = TCard.getNumber(num) - 1;
			var y = TCard.getSuit(num) - 1;
			card.image.draw(asset, 48 * x, 48 * y, 48, 48, 0, 0, 48, 48);
			card.image.draw(asset, 48, 192, 48, 48, 48, 0, 48, 48);
		} else {
			throw new Error( num + " in undefined number : enchant.TCard.getCard");
		}
		return card;
	};
	enchant.TCard.getDeck = function(jokers) {
		var assets = enchant.Core.instance.assets;
		if (!assets[enchant.TCard.CARDS]) throw new Error("enchant.TCard.getCard must be called after enchant.TCard.setPack");
		var deck = new Group();
		for (var i = 1; i <= TCard.CARD_SIZE; i++) {
			deck.addChild(enchant.TCard.getCard(i));
		}
		for (var j = 0; j < jokers; j++) {
			deck.addChild(enchant.TCard.getCard(TCard.JOKER));
		}
		return deck;
	};
})();
