import { ComponentType, EditControlType, DisplayControlType } from '../../../../src/Enumeration/Enumeration';
import { Vue, Component } from 'vue-property-decorator';
import { AcsComponent } from '../../../Models/AcsComponent';

@Component
export default class Block extends Vue {
    AcsComponent: AcsComponent;
    constructor() {
       super();
       this.AcsComponent = new AcsComponent(
            "AcsBlock", //Component Id
             ComponentType.Block, // ComponentType 
             EditControlType.List,// EditControlType  ,
             DisplayControlType.List, //DisplayControlType  ,
            "test Block 1", // Display Text
            true, // isEditable
        );
        var blockDiv = document.getElementById("blockDiv");
        blockDiv?.setAttribute("class", "blockDiv");
    }
};

