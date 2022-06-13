import { Component,Prop, Vue, Watch } from 'vue-property-decorator';
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
    @Prop() private Parent!: string;
    Containers: AcsComponent[];

    Count: number;
    constructor() {
        super();
        this.Containers = [];
        this.Count = 0;

    }

    mounted() {
        this.Count = this.ContainersCount;
        for (var i = 0; i < this.Count; i++) {
            this.AddComponent();
        }
    }

    @Watch('ContainersCount')
    watchHandler() {
        if (this.Containers.length > this.ContainersCount) {
            this.Count = this.Containers.length - this.ContainersCount;
        }
        for (var i = 0; i < this.Count; i++) {
            this.AddComponent();
        }
    }


    AddComponent() {
        var container = null;
        if (this.Containers) { 
            console.log("hey2", this.Count, this.ContainersCount);
            container = new AcsComponent(
                this.Parent + "_Container" + (this.Containers.length + 1) + "", //Component Id
                ComponentType.Container, // ComponentType 
                EditControlType.List,// EditControlType  ,
                DisplayControlType.List, //DisplayControlType  ,
                "", // Display Text
                true, // isEditable
        );
            this.Containers.push(container);
       }
    }
    
} 