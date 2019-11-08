import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import Nav from '../../components/Nav';
import Header from '../../components/Header';
import template from './index.html';

@Component({ template, components: { Nav, Header } })
export default class Blog extends Vue {
    private name: string = 'pingyuan';

    public created(): void {
        console.log('Blog');
        setTimeout(() => {
            this.name = 'yuan.ping';
        }, 1000);
    }

    @Watch('name')
    private onNameUpdate(newVal: string, oldVal: string): void {
        console.log(newVal, oldVal);
    }
}
