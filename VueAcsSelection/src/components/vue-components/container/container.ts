import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import { AcsComponent } from '../../../models/AcsComponent';
import Block from '../../acs-components/block/block.vue';
import { ComponentType, DisplayControlType, EditControlType } from '../../../enumeration/Enumeration';

@Component({
    components: {
        Block
    }
})

export default class Containers extends Vue {

    @Prop() private Parent!: string;
    @Prop() private IsBanner!: Boolean;
    ContainerBlocks: AcsComponent[];

    constructor() {
        super();
        this.ContainerBlocks = [];
    }

    AddBlock() {
        var block = null;
        if (this.ContainerBlocks) {
            block = new AcsComponent(
                this.Parent + "_Block" + (this.ContainerBlocks.length + 1) + "", //Component Id
                ComponentType.Block, // ComponentType 
                EditControlType.List,// EditControlType  ,
                DisplayControlType.List, //DisplayControlType  ,
                "", // Display Text
                true, // isEditable
            );
            this.ContainerBlocks.push(block);
        }
    }
} 