import { Vue, Prop,Component } from 'vue-property-decorator';
import { ComponentType, DisplayControlType, EditControlType } from '../../../enumeration/Enumeration';
import { AcsComponent } from '../../../models/AcsComponent';
import Block from '../../acs-components/block/block.vue';

@Component({
    components: {
        Block
    }
})
export default class Banner extends Vue {
    @Prop() private Parent!: string;

    BannerComponents: AcsComponent[] = [];
    constructor() {
        super();
        this.BannerComponents = [];
    }
 
   mounted() {
       this.addComponent();
    }

    addComponent()
    {
        var bannerComponent = new AcsComponent(
            this.Parent + "_Banner" + this.BannerComponents.length + 1 + "", //Component Id
            ComponentType.Block, // ComponentType 
            EditControlType.List,// EditControlType  ,
            DisplayControlType.List, //DisplayControlType  ,
            "", // Display Text
            true, // isEditable
        );
        this.BannerComponents.push(bannerComponent);
    }
};

