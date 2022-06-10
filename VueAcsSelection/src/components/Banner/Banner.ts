import {  Vue } from 'vue-property-decorator';
import { ComponentType, EditControlType, DisplayControlType } from '../../../src/Enumeration/Enumeration'; }
import { AcsComponent } from '../../../src/Models/AcsComponent';
import {EditControlFactory}  from '../../../src/Factory/EditControlFactory';
import { DisplayControlFactory } from '../../Factory/DisplayControlFactory';

export default class Banner extends Vue {

    AcsBanner: AcsComponent = new AcsComponent("", ComponentType.None, EditControlType.None,
        DisplayControlType.None, "", false);

    BannerComponent: HTMLElement = new HTMLElement();

    constructor(AcsBanner: AcsComponent) {
        super();
        AcsBanner = new AcsComponent(
            "AcsBanner", //Component Id
            ComponentType.StaticContent, // ComponentType 
            EditControlType.SingleLineTextbox,// EditControlType  ,
            DisplayControlType.Heading, //DisplayControlType  ,
            "Print and download documents.", // Display Text
            true, // isEditable
        );
        this.CreateBannerControl(false);
    }

    methods: {
        CreateBannerControl(isEditMode: Boolean): void {
            //add html control dynamically
            var bannerDiv = document.getElementById("bannerDiv");
            if (bannerDiv) {
                                        
                if (!isEditMode) {
                    this.BannerComponent = DisplayControlFactory.Create(this.AcsBanner?.DisplayControlType, ["bannerDisplayControl"]);
                    if (this.BannerComponent)
                        this.BannerComponent.id = this.AcsBanner?.ComponentId + "_Display";
                }
                else {
                    this.BannerComponent = EditControlFactory.Create(this.AcsBanner?.EditControlType, ["bannerEditControl"]);
                    if (this.BannerComponent)
                        this.BannerComponent.id = this.AcsBanner?.ComponentId + "_Edit";
                }
                if (this.BannerComponent) { }
                bannerDiv.appendChild(this.BannerComponent);
            }

        }

        HideControl(elementId: string) {
            var bannerDiv = document.getElementById("bannerDiv");
            var element = bannerDiv?.querySelector("id=" + elementId);
            if (element)
                element.setAttribute("style", "display:none;");
        }

        Select() {
            //get display control type dropdown and add it as a edit control type
            this.AcsBanner.EditControlType = EditControlType.SingleLineTextbox;
        }

        Edit() {
            //display control type dropdown
            this.HideControl(this.AcsBanner?.ComponentId + "_Display")
            this.CreateBannerControl(true);
        }

        Save() {
            this.HideControl(this.AcsBanner?.ComponentId + "_Edit")
            this.CreateBannerControl(true);
            //update AcsBanner and emit its value to main save button on the layer
            // set the display control type suitable for the edit control type selected.
        }
    }
}