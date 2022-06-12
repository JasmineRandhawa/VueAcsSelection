import { ComponentType, EditControlType, DisplayControlType } from '../../../Enumeration/Enumeration';
import { Vue, Component } from 'vue-property-decorator';
import { AcsComponent } from '../../../Models/AcsComponent';

@Component
export default class ProductLicense extends Vue {
    AcsComponent: AcsComponent;
    constructor() {
        super();
        this.AcsComponent = new AcsComponent(
            "AcsBanner", //Component Id
            ComponentType.Block, // ComponentType 
            EditControlType.Div,// EditControlType  ,
            DisplayControlType.Div, //DisplayControlType  ,
            "", // Display Text
            true, // isEditable
        );
    }

    mounted() {
        var blockDiv = document.getElementById("blockDiv");
        blockDiv?.setAttribute("class", "blockDiv");
    }
};

