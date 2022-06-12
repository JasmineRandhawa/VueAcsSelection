import { Vue, Component } from 'vue-property-decorator';
import { ComponentType, DisplayControlType, EditControlType } from '../../../Enumeration/Enumeration';
import { AcsComponent } from '../../../models/AcsComponent';
import block from '../../acs-components/block/block.vue';

@Component({
    components: {
        block
    }
})
export default class Banner extends Vue {

    BannerComponents: AcsComponent[] = [];
    constructor() {
        super();
        this.BannerComponents = [];
    }
 
   mounted() {
       var bannerDiv = document.getElementById("bannerDiv");
       bannerDiv?.setAttribute("class", "bannerDiv");
       this.addComponent();
    }

    addComponent()
    {
        var acsComponent = new AcsComponent(
            "BannerComp" + this.BannerComponents.length + 1 + "", //Component Id
            ComponentType.Block, // ComponentType 
            EditControlType.List,// EditControlType  ,
            DisplayControlType.List, //DisplayControlType  ,
            "", // Display Text
            true, // isEditable
        );
        this.BannerComponents.push(acsComponent);
    }
};

