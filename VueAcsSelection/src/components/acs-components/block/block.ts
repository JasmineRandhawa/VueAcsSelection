import { Vue, Prop, Component } from 'vue-property-decorator';

import staticText from '../../../components/acs-components/static-text/static-text.vue';
import block from '../../../components/acs-components/block/block.vue';
import { AcsComponent } from '../../../models/AcsComponent';
import { ComponentTypeListItem } from '../../../models/ComponentTypeListItem';
import { ComponentType, EditControlType, DisplayControlType } from '../../../enumeration/Enumeration';

@Component({
    components: {
        block,
        staticText

    }
})
export default class Banner extends Vue {
    @Prop() private parent!: string;

    BlockComponents: AcsComponent[] = [];
    IsComponentListShow: Boolean;
    ComponentTypeList: ComponentTypeListItem[];
    SelectedComponent: string;

    constructor() {
        super();
        this.IsComponentListShow = false;
        this.ComponentTypeList = [{ ComponentTypeId: "BL", ComponentTypeName: "Block" },
        { ComponentTypeId: "PL", ComponentTypeName: "ProductLicense" },
        { ComponentTypeId: "P", ComponentTypeName: "Price" },
        { ComponentTypeId: "ST", ComponentTypeName: "StaticText" },
        { ComponentTypeId: "AB", ComponentTypeName: "ActionButton" }];
        this.SelectedComponent = "Select";
    }

    mounted() {
        var blockDiv = document.getElementById("blockDiv");
        blockDiv?.setAttribute("class", "blockDiv");

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
                    this.parent + "_Block" + this.BlockComponents.length + 1 + "", //Component Id
                    ComponentType.Block, // ComponentType 
                    EditControlType.List,// EditControlType  ,
                    DisplayControlType.List, //DisplayControlType  ,
                    "", // Display Text
                    true, // isEditable
                );
                break;
            case "ST":
                acsComponent = new AcsComponent(
                    this.parent + "_Block" + this.BlockComponents.length + 1 + "", //Component Id
                    ComponentType.StaticContent, // ComponentType 
                    EditControlType.SingleLineTextbox,// EditControlType  ,
                    DisplayControlType.Label, //DisplayControlType  ,
                    "Print and download documents.", // Display Text
                    true, // isEditable
                );
                break;
            case "PL":
                acsComponent = new AcsComponent(
                    this.parent + "_Block" + this.BlockComponents.length + 1 + "", //Component Id
                    ComponentType.ProductLicense, // ComponentType 
                    EditControlType.List,// EditControlType  ,
                    DisplayControlType.List, //DisplayControlType  ,
                    "", // Display Text
                    true, // isEditable
                );
                break;
            case "AB":
                acsComponent = new AcsComponent(
                    this.parent + "_Block" + this.BlockComponents.length + 1 + "", //Component Id
                    ComponentType.ActionButton, // ComponentType 
                    EditControlType.Button,// EditControlType  ,
                    DisplayControlType.Button, //DisplayControlType  ,
                    "", // Display Text
                    true, // isEditable
                );
                break;
            case "P":
                acsComponent = new AcsComponent(
                    this.parent + "_Block" + this.BlockComponents.length + 1 + "", //Component Id
                    ComponentType.Price, // ComponentType 
                    EditControlType.SingleLineTextbox,// EditControlType  ,
                    DisplayControlType.Label, //DisplayControlType  ,
                    "", // Display Text
                    true, // isEditable
                );
                break;
            default:
                break;
        }
        if (acsComponent)
            this.BlockComponents.push(acsComponent);
    }
};

