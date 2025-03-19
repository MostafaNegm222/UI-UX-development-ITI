export default defineNuxtPlugin({
  name: 'initAppPlugin',
  enforce: 'pre',
  async setup() {
    console.log('Init App');
  },
});
