import { Component, Vue } from 'vue-property-decorator';
import home from '../components/vue-components/home/home.vue';
import banner from '../components/vue-components/banner/banner.vue';

@Component({
    components: {
        home,
        banner,
    }
})

export default class App extends Vue {
    isBannerAdded: Boolean;

    constructor() {
        super();
        this.isBannerAdded = false;
    } 
}    