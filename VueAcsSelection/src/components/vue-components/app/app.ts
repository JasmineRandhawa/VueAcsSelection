import { Component, Vue } from 'vue-property-decorator';
import Containers from '../containers/containers.vue';
import Banner from  '../banner/banner.vue';
import { ListItem } from '../../../models/ListItem';
import { AcsComponent } from '../../../models/AcsComponent';


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
    ContainersCount: number;

    constructor() {
        super();
        this.IsLayerAdded = false;
        this.IsBannerAdded = false;
        this.VariationList = [{ Name: "C", Description: "Control", DisplayText: "C", Disabled: false }, { Name: "N", Description: "New", DisplayText: "N", Disabled: false }];
        this.SelectionVariation = { Name: "C", Description: "Control", DisplayText: "C", Disabled: false };

        this.MenuButtonList = [{ Name: "Banner", Description: "Add Banner Section", DisplayText: "+ Banner", Disabled: false },
            { Name: "Container", Description: "Add Container Section", DisplayText: "+ Container", Disabled: false }];
        this.ContainersCount = 0;
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
                ++this.ContainersCount;
                break;
        }
    }
}    