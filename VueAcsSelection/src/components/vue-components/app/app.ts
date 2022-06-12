import { Component, Vue } from 'vue-property-decorator';
import home from '../../vue-components/banner/home.vue';
import banner from '../../vue-components/banner/banner.vue';

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