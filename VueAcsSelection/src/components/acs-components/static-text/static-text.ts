import { Vue, Component } from 'vue-property-decorator';
import { ComponentType, EditControlType, DisplayControlType } from '../../../enumeration/Enumeration';
import { AcsComponent } from '../../../models/AcsComponent';

@Component
export default class StaticContent extends Vue {
    AcsComponent: AcsComponent;
    constructor() {
        super();
        this.AcsComponent =  new AcsComponent(
            "StaticContent" , //Component Id
            ComponentType.StaticContent, // ComponentType 
            EditControlType.SingleLineTextbox,// EditControlType  ,
            DisplayControlType.Label, //DisplayControlType  ,
            "Print and download documents.", // Display Text
            true, // isEditable
        );
        var blockDiv = document.getElementById("blockDiv");
        blockDiv?.setAttribute("class", "blockDiv");
    }
};

