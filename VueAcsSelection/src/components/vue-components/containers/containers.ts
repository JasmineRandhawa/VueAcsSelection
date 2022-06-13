import { Component,Prop, Vue } from 'vue-property-decorator';
import { AcsComponent } from '../../../models/AcsComponent';
import Block from '../../acs-components/block/block.vue';
import { ComponentType, DisplayControlType, EditControlType } from '../../../enumeration/Enumeration';

@Component({
    components: {
        Block
    }
})

export default class Containers extends Vue {

    @Prop() private ContainersCount!: number;

    ContainersList: AcsComponent[] ;
    conCount: number = 0;
    constructor() {
        super();
        this.ContainersList = [];
        for (var i = 0; i < this.ContainersCount; this.ContainersCount++)
            this.AddNewContainer();
    }

    AddNewContainer() {
        var container = new AcsComponent(
            "Layer_Container" + this.conCount + "", //Component Id
            ComponentType.Block, // ComponentType 
            EditControlType.List,// EditControlType  ,
            DisplayControlType.List, //DisplayControlType  ,
            "", // Display Text
            true, // isEditable
        );
       this.ContainersList.push(container);
    }


} 