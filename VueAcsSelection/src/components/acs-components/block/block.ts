import { Vue, Prop, Component } from 'vue-property-decorator';

import StaticText from '../../../components/acs-components/static-text/static-text.vue';
import Block from '../../../components/acs-components/block/block.vue';
import { AcsComponent } from '../../../models/AcsComponent';
import { ComponentTypeListItem } from '../../../models/ComponentTypeListItem';
import { ComponentType, EditControlType, DisplayControlType } from '../../../enumeration/Enumeration';

@Component({
    components: {
        Block,
        StaticText

    }
})
export default class Banner extends Vue {
    @Prop() private Parent!: string;

    BlockComponents: AcsComponent[];
    IsComponentListShow: Boolean;
    ComponentTypeList: ComponentTypeListItem[];
    SelectedComponent: ComponentTypeListItem;

    constructor() {
        super();
        this.IsComponentListShow = false;
        this.BlockComponents = [];
        this.ComponentTypeList = [{ ComponentTypeId: "BL", ComponentTypeName: "Block" },
        { ComponentTypeId: "PL", ComponentTypeName: "Produc tLicense" },
        { ComponentTypeId: "P", ComponentTypeName: "Price" },
        { ComponentTypeId: "ST", ComponentTypeName: "Static Text" },
            { ComponentTypeId: "AB", ComponentTypeName: "Action Button" },
            { ComponentTypeId: "SL", ComponentTypeName: "Static List" },
            { ComponentTypeId: "PG", ComponentTypeName: "Paragraph" },
            { ComponentTypeId: "RB", ComponentTypeName: "RadioButton" },
            { ComponentTypeId: "IMG", ComponentTypeName: "Image" },
            { ComponentTypeId: "CB", ComponentTypeName: "CheckBox" }];
        this.SelectedComponent = { ComponentTypeId: "Select", ComponentTypeName: "Select" };
    }

    ShowComponent(componentType: string, value: string) {
        console.log(componentType, value);
        if (componentType === value)
            return true;
        else return false;
    }

    AddComponent() {
        var acsComponent = null;
        switch (this.SelectedComponent.ComponentTypeId) {
            case "BL":
                acsComponent = new AcsComponent(
                    this.Parent + "_Block" + this.BlockComponents.length + 1 + "", //Component Id
                    ComponentType.Block, // ComponentType 
                    EditControlType.List,// EditControlType  ,
                    DisplayControlType.List, //DisplayControlType  ,
                    "", // Display Text
                    true, // isEditable
                );
                this.BlockComponents.push(acsComponent);
                break;
            case "ST":
                acsComponent = new AcsComponent(
                    this.Parent + "_Block" + this.BlockComponents.length + 1 + "", //Component Id
                    ComponentType.StaticContent, // ComponentType 
                    EditControlType.SingleLineTextbox,// EditControlType  ,
                    DisplayControlType.Label, //DisplayControlType  ,
                    "Print and download documents.", // Display Text
                    true, // isEditable
                );
                this.BlockComponents.push(acsComponent);
                break;
        }          
    }
};

