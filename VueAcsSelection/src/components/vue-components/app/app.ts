import { Component, Vue } from 'vue-property-decorator';
import Containers from '../containers/containers.vue';
import Banner from  '../banner/banner.vue';
import { ListItem } from '../../../models/ListItem';
import { AcsComponent } from '../../../models/AcsComponent';
import { ComponentType, DisplayControlType, EditControlType } from '../../../enumeration/Enumeration';

@Component({
    components: {
        Containers,
        Banner,
    }
})

export default class App extends Vue {
    IsBannerAdded: Boolean;
    IsLayerAdded: Boolean;
    SelectionVariation: ListItem;
    VariationList: ListItem[];
    MenuButtonList: ListItem[];
    ContainersArray: AcsComponent[] = [];

    constructor() {
        super();
        this.IsLayerAdded = false;
        this.IsBannerAdded = false;
        this.VariationList = [{ Name: "C", Description: "Control", DisplayText: "C", Disabled: false }, { Name: "N", Description: "New", DisplayText: "N", Disabled: false }];
        this.SelectionVariation = { Name: "C", Description: "Control", DisplayText: "C", Disabled: false };

        this.MenuButtonList = [{ Name: "Banner", Description: "Add Banner Section", DisplayText: "+ Banner", Disabled: false },
            { Name: "Container", Description: "Add Container Section", DisplayText: "+ Container", Disabled: false }];

        this.ContainersArray = [];
    } 

    ChangeVariation(variation: ListItem) {
        this.SelectionVariation = variation;
    }

    ChangeMenu(menuItem: ListItem) {
        switch (menuItem.Name)
        {
            case "Banner":
                this.IsBannerAdded = true;
                menuItem.Disabled = true;
                break;
            case "Container":
                this.AddContainer();
                break;
        }
    }

    AddContainer() {
        var container = new AcsComponent(
            "Layer_Container" + this.ContainersArray.length + 1 + "", //Component Id
            ComponentType.Block, // ComponentType 
            EditControlType.List,// EditControlType  ,
            DisplayControlType.List, //DisplayControlType  ,
            "", // Display Text
            true, // isEditable
        );
        this.ContainersArray.push(container);
    }

     {
        return JSON.stringify(this.ContainersArray)
    }
}    