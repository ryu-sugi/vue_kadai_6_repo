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