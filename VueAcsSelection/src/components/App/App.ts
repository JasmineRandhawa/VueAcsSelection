import { Component, Vue } from 'vue-property-decorator';
import Banner from '../../components/Banner/Banner.vue';
import Home from '../../components/Home/Home.vue';

@Component({
    components: {
        Banner,
        Home,
    }
})

export default class App extends Vue { }    