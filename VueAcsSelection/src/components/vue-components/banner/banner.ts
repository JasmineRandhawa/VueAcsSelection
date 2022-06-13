import { Vue, Prop, Component } from 'vue-property-decorator';

import Container from '../../vue-components/container/container.vue';

@Component({
    components: {
        Container
    }
})
export default class Banner extends Vue {
    constructor() {
        super();
    }
};

