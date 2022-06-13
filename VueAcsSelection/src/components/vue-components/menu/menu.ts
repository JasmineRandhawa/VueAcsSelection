import { Component, Prop, Watch,Vue } from 'vue-property-decorator';
import { ListType } from '../../../enumeration/Enumeration';
import { ListItem } from '../../../models/ListItem';

@Component
export default class Menu extends Vue {

    @Prop() private ListType !: number;
    MenuList: ListItem[] ;
    SelectedMenuItem: ListItem|null = null;

    constructor() {
        super();
        this.MenuList = [];
    }

    mounted() {
        this.InitializeMenuList();
    }

    @Watch('ListType')
    watchHandler() {
        this.InitializeMenuList();
        console.log(this.ListType);
    }

    InitializeMenuList() {
        //if ListType is ExperimentVarationList
        if (this.ListType == ListType.ExperimentVariation) {
            this.MenuList = [{ ListType: 0, Name: "C", Description: "Control", DisplayText: "C", Disabled: false, CssClass: "listButtons listItem " },
                { ListType: 0, Name: "N", Description: "New", DisplayText: "N", Disabled: false, CssClass: "listButtons listItem " }];
            this.SelectedMenuItem = { ListType: 0, Name: "C", Description: "Control", DisplayText: "C", Disabled: false, CssClass: "listButtons listItem " };
        }
        //if ListType is SelectionPageActions
        else if (this.ListType == ListType.SelectionPageActions) {
            this.MenuList = [{ ListType: 1,Name: "Banner", Description: "Add Banner Section", DisplayText: "+ Banner", Disabled: false, CssClass: "listButtons listItem actionListButtons " },
                { ListType: 1, Name: "Container", Description: "Add Container Section", DisplayText: "+ Container", Disabled: false, CssClass: "listButtons listItem actionListButtons " }];
            this.SelectedMenuItem = null;
        }
    }

    ChangeMenuItem(item: ListItem) {
         //if ListType is ExperimentVarationList
        if (this.ListType == ListType.ExperimentVariation) {
            this.SelectedMenuItem = item;
            this.$emit('UpdateSelectedMenuItem', item);
        }
        //if ListType is SelectionPageActions
        else if (this.ListType == ListType.SelectionPageActions) {
            if (item.Name == "Banner") {
                item.Disabled = true;
                item.CssClass += " disabledActionButton";
            }
            this.$emit('UpdateSelectedMenuItem', item);
        }
    }

    GetCssClass(listItem: ListItem) {
        if (listItem.Name === this.SelectedMenuItem?.Name && listItem.ListType == 0)
            return listItem.CssClass + ' listItemSelection';
        return listItem.CssClass;
    }
} 