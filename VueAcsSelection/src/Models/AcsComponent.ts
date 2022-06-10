import { ComponentType, EditControlType, DisplayControlType } from '../../src/Enumeration/Enumeration';

export class AcsComponent {

    constructor(
        public ComponentId: string,
        public ComponentType: ComponentType,
        public EditControlType: EditControlType,
        public  DisplayControlType: DisplayControlType,
        public DisplayText: string,
        public IsEditable: Boolean) {

    }
}