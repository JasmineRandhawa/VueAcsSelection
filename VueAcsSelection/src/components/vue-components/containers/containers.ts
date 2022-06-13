import { Component,Prop, Vue } from 'vue-property-decorator';
import { AcsComponent } from '../../../models/AcsComponent';
import Block from '../../acs-components/block/block.vue';

@Component({
    components: {
        Block
    }
})

export default class Containers extends Vue {

    @Prop() ContainersJsonString!: AcsComponent[];

    Containers: AcsComponent[] =[];

    constructor() {
        super();
        if (this.ContainersJsonString)
        this.Containers = this.ContainersJsonString ;
    }

} 