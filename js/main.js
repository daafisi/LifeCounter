// Make sure sw are supported
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('https://daafisi.github.io/LifeCounter/sw_cached_site.js')
      .then(reg => console.log('Service Worker: Registered (Pages)'))
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}


var app = new Vue({ 
  el: '#app',
  data: {
      playerLifeTotal: 20,
      name: 'John',
      oppLifeTotal: 20
  },
  methods: {
      plusOne : function() {
          this.playerLifeTotal +=1
          //console.log(this.playerLifeTotal)
      },
      minusOne : function() {
          this.playerLifeTotal -=1
      },
      oppplusOne : function() {
          this.oppLifeTotal +=1
          //console.log(this.playerLifeTotal)
      },
      oppminusOne : function() {
          this.oppLifeTotal -=1
      },
      resetLife : function() {
          this.oppLifeTotal = 20
          this.playerLifeTotal = 20
      }
  }
});
