import { Component,Prop, Vue } from 'vue-property-decorator';
import { ComponentType, DisplayControlType, EditControlType } from '../../../enumeration/Enumeration';
import { AcsComponent } from '../../../models/AcsComponent';
import Block from '../../acs-components/block/block.vue';

@Component({
    components: {
        Block
    }
})

@Component
export default class Containers extends Vue {
    @Prop() private Parent!: string;

    Containers: AcsComponent[] = [];
    constructor() {
        super();
        this.Containers = [];
    }

    mounted() {
        this.addComponent();
    }

    addComponent() {    
        var container = new AcsComponent(
            this.Parent + "_Container" + this.Containers.length + 1 + "", //Component Id
            ComponentType.Block, // ComponentType 
            EditControlType.List,// EditControlType  ,
            DisplayControlType.List, //DisplayControlType  ,
            "", // Display Text
            true, // isEditable
        );
        this.Containers.push(container);
    }
} 