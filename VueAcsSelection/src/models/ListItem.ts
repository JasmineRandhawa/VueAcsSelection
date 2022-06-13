import { ListType } from "../enumeration/Enumeration";

export class ListItem {

    constructor(
        public ListType: ListType,
        public Name: string,
        public Description: string,
        public DisplayText: string,
        public Disabled: Boolean,
        public CssClass : string = ''
    ) {

    }
}