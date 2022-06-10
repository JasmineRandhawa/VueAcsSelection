import { ComponentType, EditControlType, DisplayControlType } from '../../src/Enumeration/Enumeration';

export class AcsComponent {

    constructor(
        public ComponentId: String,
        public ComponentType: ComponentType,
        public EditControlType: EditControlType,
        public  DisplayControlType: DisplayControlType,
        public  DisplayText: String,
        public IsEditable: Boolean) {

    }
}