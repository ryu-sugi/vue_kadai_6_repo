  // ↓間違っている構文
// Vue.component('my-product', {
//   template: '<span>{{name}}</span>:<span>{{price}}円</span>',
//   data: function() {
//     return {
//       name: 'スマホケース', // 商品名
//       price: 980          // 価格
//     }
//   }
// });
  // ↑間違っている構文

  // ↓正しい構文(要素を単一のタグで囲む)
Vue.component('my-product', {
  template: `
    <div>
      <span>{{name}}</span>:<span>{{price}}円</span>
    </div>`,
  data: function() {
    return {
      name: 'スマホケース', // 商品名
      price: 980          // 価格
    }
  }
});
  // ↑正しい構文

  // 子コンポーネント リスト7 ↓
var myComponent = {
  template: '<p>{{message}}</p>',
  data: function() {
    return {
      message: 'コンポーネントです。'
    }
  }
};
  // 子コンポーネント リスト7 ↑

  // 子コンポーネントにpropsオプションを追加 リスト10 ↓
Vue.component('my-product3',{
  template: `
  <div>
    <span>{{name}}</span> : <span>{{price}}(円)</span>
  </div>`,
  props: ['name', 'price']
});
  // 子コンポーネントにpropsオプションを追加 リスト10 ↑

  // 子コンポーネント リスト16
Vue.component('my-product4',{
  // (1)ボタンがクリックされたら子コンポーネントの「clickHandler」を呼び出す
  template: `
  <div>
    <button v-on:click="clickHandler">値下げする</button>{{price}}(円)
  </div>`,
  props: ['price'],
  methods: {
    // (2)ボタンのクリックイベントハンドラ
    clickHandler: function() {
      // (3)子コンポーネントに「child-click」イベントを発生させる
      this.$emit('child-click');
    }
  }
});

  // 子コンポーネントに決定権を与える リスト19
Vue.component('my-product5',{
  // (1)ボタンがクリックされたら子コンポーネントの「clickHandler」を呼び出す
  template:  `
  <div>
    <button v-on:click="clickHandler">値下げする</button>{{price}}(円)
  </div>`,
  props: [price],
  methods: {
    // (2)ボタンのクリックイベントハンドラ
    clickHandler: function() {
      // (3)子コンポーネントに「child-click」イベントを発生させる
      var discount = 0;
      if (this.price - 50 < 500) {
        // 例）現在の価格が530円の場合、値下げ幅は30円
        discount = this.price - 500;
      }else{
        // 例) 現在の価格が550円以上の場合、値下げ幅は50円
        discount = 50;
      }
      this.$emit('child-click', discount);
    }
  }
});

// リスト22
Vue.component('my-product6',{
  // カスタムイベントや$emit()を実装する必要がない
  template: '<button>現在の価格{{price}}(円)</button>',
  props: ['price']
});

// 子コンポーネント リスト26
Vue.component('my-product7',{
  template: '<li>{{id}} {{name}} {{price}}(円)</li>',
  props: ['id', 'name', 'price']
});

// 子コンポーネント リスト26復習
Vue.component('my-product8',{
  template: '<li>{{id}} {{name}} {{price}}(円)</li>',
  props: ['id', 'name', 'price']
});