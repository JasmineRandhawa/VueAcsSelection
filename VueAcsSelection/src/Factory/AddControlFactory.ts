import { ComponentType } from "../Enumeration/Enumeration";
import { AcsComponent } from "../Models/AcsComponent";

export class AddControlFactory {

    static Create(component: AcsComponent, cssClass: string[]) {
        var htmlElement;
        switch (component.ComponentType) {
            case ComponentType.Block:
                htmlElement = document.createElement('div');
                break;
            case ComponentType.StaticContent:
                htmlElement = document.createElement('span');
                htmlElement.textContent = component.DisplayText;
                break;
            case ComponentType.ActionButton:
                htmlElement = document.createElement('label');
                break;
            case ComponentType.ProductLicense:
                htmlElement = document.createElement('select');
                break;
            case ComponentType.Price:
                htmlElement = document.createElement('select');
                break;
            default:
                htmlElement = document.createElement('span');
                break;
        }
        htmlElement.setAttribute("class", cssClass[0]);
        return htmlElement;
    }
}