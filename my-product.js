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

