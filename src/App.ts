import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({ template: '<div id="App"><router-view/></div>' })
export default class App extends Vue {
  public created(): void {
    console.log('App');
  }
}

// <style lang="scss">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
// </style>
