import { Vue, Prop,Component } from 'vue-property-decorator';
import { ComponentType, DisplayControlType, EditControlType } from '../../../enumeration/Enumeration';
import { AcsComponent } from '../../../models/AcsComponent';
import Container from '../../vue-components/container/container.vue';

@Component({
    components: {
        Container
    }
})
export default class Banner extends Vue {
    @Prop() private Parent!: string;

    constructor() {
        super();
    }
};

