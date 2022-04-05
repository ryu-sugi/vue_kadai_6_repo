// コンポーネント
Vue.component('show-hello',{
  // テンプレート部分
  template: '<p>{{message}}</p>',
  // dataオプション
  data: function() {
    return {
      message: 'Hello Vue'
    }
  },
  // メソッド
  methods: {
  },
  // 算出プロパティ
  computed: {
  },
  // ウォッチャ
  watch: {
  },
  // フィルター
  filters: {
  },
  // ライフサイクルハック
  created: function() {
  }
});