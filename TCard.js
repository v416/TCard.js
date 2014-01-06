/**
 * TCard.js
 *
 * Copyright (c) v416 http://twitter.com/v416
 * This source is The MIT License.
 *
 * @version 1.03 (2014/1/6)
 *
 * @description
 *
 * @example
 */
(function() { "use strict"; })();
var TCard = TCard || {};
// 擬似定数宣言
TCard.SUIT_SIZE =  4; // スートの総数（スペード、ハート、ダイア、クラブ）
TCard.NUME_SIZE = 13; // 番号の総数（Ａ、２、３、４、５、６、７、８、９、１０、Ｊ，Ｑ，Ｋ）
TCard.CARD_SIZE = 52; // ジョーカーを覗いたカードの総数（スペードのＡからクラブのＫ）
// スートの定義
TCard.SPADE   =  1; // スートの定義
TCard.HEART   =  2;
TCard.DIAMOND =  3;
TCard.CLUB    =  4;
// トランプの数定義
TCard.ACE     =  1; // 数札の定義
TCard.JACK    = 11;
TCard.QUEEN   = 12;
TCard.KING    = 13;
// 数札（pipcards/numeralcards）他の定義
TCard.ERROR   = -1; // カードの終端などのエラー値
TCard.JOKER   =  0; // ジョーカー
TCard.S01   =  1; // スペード
TCard.S02   =  2;
TCard.S03   =  3;
TCard.S04   =  4;
TCard.S05   =  5;
TCard.S06   =  6;
TCard.S07   =  7;
TCard.S08   =  8;
TCard.S09   =  9;
TCard.S10   = 10;
TCard.S11   = 11;
TCard.S12   = 12;
TCard.S13   = 13;
TCard.H01   = 14; // ハート
TCard.H02   = 15;
TCard.H03   = 16;
TCard.H04   = 17;
TCard.H05   = 18;
TCard.H06   = 19;
TCard.H07   = 20;
TCard.H08   = 21;
TCard.H09   = 22;
TCard.H10   = 23;
TCard.H11   = 24;
TCard.H12   = 25;
TCard.H13   = 26;
TCard.D01   = 27; // ダイア
TCard.D02   = 28;
TCard.D03   = 29;
TCard.D04   = 30;
TCard.D05   = 31;
TCard.D06   = 32;
TCard.D07   = 33;
TCard.D08   = 34;
TCard.D09   = 35;
TCard.D10   = 36;
TCard.D11   = 37;
TCard.D12   = 38;
TCard.D13   = 39;
TCard.C01   = 40; // クローバー
TCard.C02   = 41;
TCard.C03   = 42;
TCard.C04   = 43;
TCard.C05   = 44;
TCard.C06   = 45;
TCard.C07   = 46;
TCard.C08   = 47;
TCard.C09   = 48;
TCard.C10   = 49;
TCard.C11   = 50;
TCard.C12   = 51;
TCard.C13   = 52;
// 絵札（courTCards）の定義
TCard.SA    = TCard.S01;  // スペード
TCard.SJ    = TCard.S11;
TCard.SQ    = TCard.S12;
TCard.SK    = TCard.S13;
TCard.HA    = TCard.H01;  // ハート
TCard.HJ    = TCard.H11;
TCard.HQ    = TCard.H12;
TCard.HK    = TCard.H13;
TCard.DA    = TCard.D01;  // ダイア
TCard.DJ    = TCard.D11;
TCard.DQ    = TCard.D12;
TCard.DK    = TCard.D13;
TCard.CA    = TCard.C01;  // クローバー
TCard.CJ    = TCard.C11;
TCard.CQ    = TCard.C12;
TCard.CK    = TCard.C13;
/**
 * カードのスート取得
 * @param card  <int> カードの通し番号
 * @return          カードのスート
 */
TCard.getSuit = function(card) {
  // 通し番号がジョーカーならジョーカーとして返す。
  if (card == TCard.JOKER) return TCard.JOKER;
  // 通し番号が範囲外であったときはエラーを返す。
  if (card <= TCard.ERROR || TCard.CARD_SIZE < card) return TCard.ERROR;
  // マークを計算して返す。
  return Math.floor((card + TCard.NUME_SIZE - 1) / TCard.NUME_SIZE);
};
/**
 * カードの番号取得
 * @param card  <int> カードの通し番号
 * @return          カードの番号
 */
TCard.getNumber = function(card) {
  // 通し番号がジョーカーならジョーカーとして返す。
  if (card == TCard.JOKER) return TCard.JOKER;
  // 通し番号が範囲外であったときはエラーを返す。
  if (card <= TCard.ERROR || TCard.CARD_SIZE < card) return TCard.ERROR;
  // 番号を計算して返す。
  return (card - 1) % TCard.NUME_SIZE + 1;
};
/*
 * カードの通し番号取得
 * @param suit  <int> カードのスート
 * @param number  <int> カードの番号
 * @return          カードの番号
 */
TCard.getData = function(suit, number) {
  // スート、または番号がジョーカーのときはジョーカーを返す。
  if (suit == TCard.JOKER || number == TCard.JOKER) return TCard.JOKER;
  // スート、または番号が範囲外であったときはエラーを返す。
  if (suit <= TCard.ERROR || TCard.SUIT_SIZE < suit ||
    number <= TCard.ERROR || TCard.NUME_SIZE < number) return TCard.ERROR;
  // 通し番号を計算して返す。
  return (suit - 1) * TCard.NUME_SIZE + number;
};