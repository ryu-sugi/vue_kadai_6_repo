// リスト1
var app = new Vue ({
  el: '#app0'
});

// 親コンポーネント
var app = new Vue  ({
  el: '#app',
  components: {
        // ↓ 子コンポーネントを定義
    'my-component' : myComponent
  }
});

//  親コンポーネント リスト13
var app3 = new Vue({
  el: '#app3',
  data: {
    name: 'スマホケース',
    price: 980
  }
});

// 親コンポーネント リスト18
var app4 = new Vue({
  el: '#app4',
  data: {
    price: 980
  },
  methods: {
    // (5)子から呼び出されるメソッド
    priceDown: function() {
      this.price -= 100;
    }
  }
});

// 親コンポーネント リスト20
var app5 = new Vue ({
  el: '#app5',
  data: {
    price: 980
  },
  methods: {
    // (5)子から呼び出されるメソッド
    priceDown: function(discount) {
      // 値下げ幅が指定されていない場合は100円とする
      if(discount == undefined) discount = 100;
      // 値下げする
      this.price -= discount;
    }
  }
});

// リスト24
var app6 = new Vue ({
  el: '#app6',
  data: {
    price: 980
  },
  methods: {
    // (2)子をクリックすると呼び出されるメソッド
    priceDown: function() {
      var discount = 0;
      if (this.price - 50 < 500) {
        // 例) 現在の価格が530円の場合、値下げ幅は30円
        discount = this.price - 50;
      }
      // 値下げする
      this.price -= discount;
    }
  }
});

// 親コンポーネント リスト24
var app7 = new Vue ({
  el: '#app7',
  data: {
    // 商品データの配列
    products: [
      {id: 1, name: '商品A', price: 1280},
      {id: 2, name: '商品B', price: 1580},
      {id: 3, name: '商品C', price: 1980},
    ]
  }
});

// 親コンポーネント リスト24復習
var app7 = new Vue ({
  el: '#app8',
  data: {
    // 商品データの配列
    products: [
      {id: 1, name: '商品A', price: 1280},
      {id: 2, name: '商品B', price: 1580},
      {id: 3, name: '商品C', price: 1980},
    ]
  }
});