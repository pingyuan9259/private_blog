import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import template from './Nav.html';

@Component({ template })
export default class Nav extends Vue {
    public created(): void {
        console.log('Nav');
    }
}
