import { DisplayControlType } from "../Enumeration/Enumeration";

export class DisplayControlFactory {

    static Create(controlType: DisplayControlType, cssClass: string[]) {
        var htmlElement;
        switch (controlType) {
            case DisplayControlType.Div:
                htmlElement = document.createElement('div');
                break;
            case DisplayControlType.Heading:
                htmlElement = document.createElement('h1');
                break;
            case DisplayControlType.Label:
                htmlElement = document.createElement('label');
                break;
            case DisplayControlType.Paragraph:
                htmlElement = document.createElement('p');
                break;
            case DisplayControlType.Link:
                htmlElement = document.createElement('a');
                break;
            default:
                htmlElement = document.createElement('span');
                break;
        }
        htmlElement.setAttribute("class", cssClass[0]);
        return htmlElement;
    }
}