console.log('starting...');
var a = document.getElementsByClassName('wp');
console.log(a);

var b = document.getElementsByClassName('square-12');
console.log(b);

var style = document.createElement('style');
  style.innerHTML = `
#board-vs-personalities .piece.wp, #board-vs-personalities .promotion-piece.wp { background-image: url('https://images2.imgbox.com/71/78/kFKrY0yN_o.png'); }
#board-vs-personalities .piece.wn, #board-vs-personalities .promotion-piece.wn { background-image: url('https://images2.imgbox.com/90/7c/QVg44AO0_o.png'); }
#board-vs-personalities .piece.wb, #board-vs-personalities .promotion-piece.wb { background-image: url('https://images2.imgbox.com/5b/1e/Bx94F1kr_o.png'); }
#board-vs-personalities .piece.wr, #board-vs-personalities .promotion-piece.wr { background-image: url('https://images2.imgbox.com/9c/86/6qPnBy45_o.png'); }
#board-vs-personalities .piece.wq, #board-vs-personalities .promotion-piece.wq { background-image: url('https://images2.imgbox.com/1b/84/FAGf8MAP_o.png'); }
#board-vs-personalities .piece.wk, #board-vs-personalities .promotion-piece.wk { background-image: url('https://images2.imgbox.com/3d/c5/38VplOud_o.png'); }

#board-vs-personalities .piece.bp, #board-vs-personalities .promotion-piece.bp { background-image: url('https://images2.imgbox.com/68/8b/xKToDUub_o.png'); }
#board-vs-personalities .piece.bn, #board-vs-personalities .promotion-piece.bn { background-image: url('https://images2.imgbox.com/d8/b4/ce87dX2Q_o.png'); }
#board-vs-personalities .piece.bb, #board-vs-personalities .promotion-piece.bb { background-image: url('https://images2.imgbox.com/ff/ff/ImPb9CUs_o.png'); }
#board-vs-personalities .piece.br, #board-vs-personalities .promotion-piece.br { background-image: url('https://images2.imgbox.com/ba/34/hC45sxI9_o.png'); }
#board-vs-personalities .piece.bq, #board-vs-personalities .promotion-piece.bq { background-image: url('https://images2.imgbox.com/3d/b7/MIaAHkYE_o.png'); }
#board-vs-personalities .piece.bk, #board-vs-personalities .promotion-piece.bk { background-image: url('https://images2.imgbox.com/bb/e0/dXbrgBs0_o.png'); }

  `;
  document.head.appendChild(style);