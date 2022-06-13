import { Component, Vue } from 'vue-property-decorator';

import { ListItem } from '../../../models/ListItem';
import { ListType } from '../../../enumeration/Enumeration';
import Containers from '../containers/containers.vue';
import Banner from '../banner/banner.vue';
import Menu from '../menu/menu.vue';


@Component({
    components: {
        Menu,
        Banner,
        Containers,
    }
})

export default class App extends Vue {
    IsBannerAdded: Boolean;
    IsLayerAdded: Boolean;
    ContainersCount: number;
    SelectedVariation: ListItem | null;
    MenuListTypes: ListType[];

    constructor() {
        super();
        this.IsLayerAdded = false;
        this.IsBannerAdded = false;
        this.SelectedVariation = null;
        this.MenuListTypes = [ ListType.ExperimentVariation, ListType.SelectionPageActions];   
        this.ContainersCount = 0;
    } 

    //receive updates from menu component on menu change 
    UpdateSelectedMenuItem(item: ListItem) {

        //if ListType is ExperimentVarationList
        if (item.ListType == ListType.SelectionPageActions) {
            switch (item.Name) {
                case "Banner":
                    this.IsBannerAdded = true;
                    break;
                case "Container":
                    ++this.ContainersCount;
                    break;
                default:
                    break;
            }
        }

        //if ListType is SelectionPageActions
        else if (item.ListType == ListType.ExperimentVariation) 
            this.SelectedVariation = item;
        
    }
}    