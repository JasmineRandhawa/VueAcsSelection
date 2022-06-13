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
    constructor() {
        super();
        this.ContainersList = [];
        for (var i = 0; i < this.ContainersCount; this.ContainersCount++)
            this.AddNewContainer();
    }

    mounted() {
        this.ContainersList = [];
    }

    created() {
        this.ContainersList = [];
    }

    AddNewContainer() {
        var container = new AcsComponent(
            "Layer_Container" + this.ContainersCount + "", //Component Id
            ComponentType.Block, // ComponentType 
            EditControlType.List,// EditControlType  ,
            DisplayControlType.List, //DisplayControlType  ,
            "", // Display Text
            true, // isEditable
        );
        if(this.ContainersList)
             this.ContainersList.push(container);
    }


} 