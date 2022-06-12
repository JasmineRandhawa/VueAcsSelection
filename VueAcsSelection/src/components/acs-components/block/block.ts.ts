import { ComponentType, EditControlType, DisplayControlType } from '../../../Enumeration/Enumeration';
import { Vue, Component } from 'vue-property-decorator';
import { AcsComponent } from '../../../src/Models/AcsComponent';
import { AddControlFactory } from '../../Factory/AddControlFactory';
import { ComponentTypeListItem } from '../../Models/ComponentTypeListItem';
import Block from '../AcsComponent/Block/Block.vue';
import Block from '../AcsComponent/Block/Block.vue';
import Block from '../AcsComponents/StaticContent/StaticContent.vue';
import Block from '../AcsComponent/Block/Block.vue';
import StaticContent from '../AcsComponent/StaticContent/StaticContent.vue';

@Component({
    components: {
        Block,
        StaticContent,
        Price,
        ProductLicense,
        ActionButton

    }
})
export default class Banner extends Vue {
    AcsBlockComponents: AcsComponent[] = [];
    BlockComponent?: Object | null;
    IsComponentListShow: Boolean;
    ComponentTypeList: ComponentTypeListItem[];
    SelectedComponent: string;
    constructor() {
        super();
        this.IsComponentListShow = false;
        this.ComponentTypeList = [{ ComponentTypeId: "BL", ComponentTypeName: "Block" },
        { ComponentTypeId: "PL", ComponentTypeName: "ProductLicense" },
        { ComponentTypeId: "P", ComponentTypeName: "Price" },
        { ComponentTypeId: "SC", ComponentTypeName: "StaticContent" },
        { ComponentTypeId: "AB", ComponentTypeName: "ActionButton" }];
        this.SelectedComponent = "Select";
    }

    mounted() {
        var bannerDiv = document.getElementById("bannerDiv");
        bannerDiv?.setAttribute("class", "bannerDiv");

    }

    ChangeComponentType() {
        console.log(this, this.SelectedComponent);
    }

    showComponent(componentType: string, value: string) {
        console.log(componentType, value);
        if (componentType === value)
            return true;
        else return false;
    }

    addComponent() {
        var acsComponent = null;
        switch (this.SelectedComponent) {
            case "BL":
                acsComponent = new AcsComponent(
                    "AcsBanner" + this.AcsBannerComponents.length + "", //Component Id
                    ComponentType.Block, // ComponentType 
                    EditControlType.List,// EditControlType  ,
                    DisplayControlType.List, //DisplayControlType  ,
                    "", // Display Text
                    true, // isEditable
                );
                break;
            case "SC":
                acsComponent = new AcsComponent(
                    "AcsBanner" + this.AcsBannerComponents.length + "", //Component Id
                    ComponentType.StaticContent, // ComponentType 
                    EditControlType.SingleLineTextbox,// EditControlType  ,
                    DisplayControlType.Label, //DisplayControlType  ,
                    "Print and download documents.", // Display Text
                    true, // isEditable
                );
                break;
            case "PL":
                acsComponent = new AcsComponent(
                    "AcsBanner" + this.AcsBannerComponents.length + "", //Component Id
                    ComponentType.ProductLicense, // ComponentType 
                    EditControlType.List,// EditControlType  ,
                    DisplayControlType.List, //DisplayControlType  ,
                    "", // Display Text
                    true, // isEditable
                );
                break;
            case "AB":
                acsComponent = new AcsComponent(
                    "AcsBanner" + this.AcsBannerComponents.length + "", //Component Id
                    ComponentType.ActionButton, // ComponentType 
                    EditControlType.Button,// EditControlType  ,
                    DisplayControlType.Button, //DisplayControlType  ,
                    "", // Display Text
                    true, // isEditable
                );
                break;
            case "P":
                acsComponent = new AcsComponent(
                    "AcsBanner" + this.AcsBannerComponents.length + "", //Component Id
                    ComponentType.Price, // ComponentType 
                    EditControlType.SingleLineTextbox,// EditControlType  ,
                    DisplayControlType.Label, //DisplayControlType  ,
                    "", // Display Text
                    true, // isEditable
                );
                break;
            default:
                acsComponent = new AcsComponent(
                    "AcsBanner" + this.AcsBannerComponents.length + "", //Component Id
                    ComponentType.Block, // ComponentType 
                    EditControlType.Div,// EditControlType  ,
                    DisplayControlType.Div, //DisplayControlType  ,
                    "", // Display Text
                    true, // isEditable
                );
                break;
        }
        this.AcsBannerComponents.push(acsComponent);
    }
};

