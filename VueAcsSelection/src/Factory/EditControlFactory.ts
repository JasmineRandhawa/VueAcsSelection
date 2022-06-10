import { EditControlType } from "../Enumeration/Enumeration";

export class EditControlFactory {

    static Create(controlType: EditControlType, cssClass: string[]) {
        var htmlElement;
        switch (controlType) {
            case EditControlType.SingleLineTextbox:
                htmlElement = document.createElement('input');
                htmlElement.setAttribute("type", "text");
                htmlElement.setAttribute("class", cssClass[0]);
                break;
            case EditControlType.List:
                htmlElement = document.createElement('textarea');
                htmlElement.setAttribute("cols", "100");
                htmlElement.setAttribute("rows", "10");
                htmlElement.setAttribute("class", cssClass[0]);
                break;
            case EditControlType.List:
                htmlElement = document.createElement('select');
                htmlElement.setAttribute("class", cssClass[0]);
                break;
            case EditControlType.Link:
                htmlElement = document.createElement('div');
                var linkInputLabel = document.createElement('label');
                var linkNameLabel = document.createElement('label');

                var linkInput = document.createElement('input');
                var linkNameInput = document.createElement('input');
            
                linkInputLabel.setAttribute("class", cssClass[0]);
                linkNameLabel.setAttribute("class", cssClass[0]);

                linkInput.setAttribute("type", "text");
                linkInput.setAttribute("class", cssClass[1]);

                linkNameInput.setAttribute("type", "text");
                linkNameInput.setAttribute("class", cssClass[1]);

                htmlElement.appendChild(linkInputLabel);
                htmlElement.appendChild(linkInput);
                htmlElement.appendChild(linkNameLabel);
                htmlElement.appendChild(linkNameInput);

                htmlElement.setAttribute("class", cssClass[2]);
                break;
            case EditControlType.Button:
                htmlElement = document.createElement('div');
                var label = document.createElement('label');
                var textbox = document.createElement('input');

                label.setAttribute("class", cssClass[0]);
                label.setAttribute("value", "Button Text");

                textbox.setAttribute("type", "text");
                textbox.setAttribute("class", cssClass[1]);

                htmlElement.appendChild(label);
                htmlElement.appendChild(textbox);

                htmlElement.setAttribute("class", cssClass[2]);
                break;
            default :
                htmlElement = document.createElement('div');
                htmlElement.setAttribute("class", cssClass[0]);
                break;
        }
        return htmlElement;
    }
}