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
Vue.component('my-product',{
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



