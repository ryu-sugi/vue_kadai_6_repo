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
})

