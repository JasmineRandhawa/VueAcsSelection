import { Component, Vue } from 'vue-property-decorator';
import { ListItem } from '../../../models/ListItem';
import Containers from '../containers/containers.vue';
import Banner from '../banner/banner.vue';
import Menu from '../menu/menu.vue';
import { ListType } from '../../../enumeration/Enumeration';

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

    UpdateSelectedMenuItem(item: ListItem) {
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
        else if (item.ListType == ListType.ExperimentVariation) {
            this.SelectedVariation = item;
        }
    }
}    