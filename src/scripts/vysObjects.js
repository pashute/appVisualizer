'use strict';
export const atest = "testing";

export class ImgDisplay {
    const Stretch = "stretch"; // css cover
    const Tile = "tile";       // css tile
    const Crop = "crop";       // css none
}

export class VysDefaults {
    const LightPurple = "#9d86c9";
    const BarelyGray = "#9D9D9D";
    const OffWhite = "#F9F9F9";
    const ThemeDefaultColor = VysDefaults.LightPurple;
}

export const DefaultHdrText = new TextSettings({
    color: "#050505", size: 23, italic: false, weight: 700, 
    shadow: "rgb(25,25,25) 0px 2px 1px"
    });

export class Theme {
    constructor(
        id = 1, 
        themeColor = VysDefaults.LightPurple, // #rgb
        bgImage = "",                         // url
        bgImageDisplay = ImgDisplay.Crop,     // ImgDisplay 
        bgColor = "#F9F9F9",                  // #rgb

        hdrColor = VysDefaults.ThemeDefaultColor,  // #rgb
        hdrLogo = "../images/auraLogo.png",   // url
        hdrLogoPercentage = 40,  // number
        hdrText = DefaultHdrText,            // TextSettings
        
        listColor,          // #rgb
        listCaptionText,    // TextSettings
        listItemText,       // TextSettings
        
        btnColor,           // #rgb
        btnText             // TextSettings
        ) {
        this.id = 1;
        this.themeColorIdx = 2; // button and header

        // app
        this.bgImage = "";
        this.bgImageDisplay = ImgDisplay.ImgDisplayStretch;
        this.bgColor = "#D9D9D9";

        // header
        this.hdrLogo = "../images/auraLogo.jpg"
        this.hdrLogoPercent = 42;
        this.hdrText = 

        this.listColor = "#D9D9D9";
        this.listCaptionText = new TextSettings({
            color: "#050505", size:16, italic: false, weight: 700, 
            shadow: none });
        this.listItemText = new TextSettings({
            color: "#050505", size:12, italic: false, weight: 400, 
            shadow: none });

        this.btnColor = "#D9D9D9";
        this.btnText = new TextSettings({
            color: "#050505", size:14, italic: false, weight: 700, 
            shadow: none }); // todo: check text size in button 
    }
}

export class TextSettings {
    constructor(color, size, italic, weight, shadow ){
        this.name = 'TextSettings';
        this.color = "";
        this.size = size;
        this.italic = italic; // boolean
        this.weight = weight;
        this.shadow = shadow;
    }
}

