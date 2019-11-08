import Vue from 'vue';
import Component from 'vue-class-component';
import template from './Header.html';

@Component({ template })
export default class Header extends Vue {
    public created(): void {
        console.log('Header');
    }
}
