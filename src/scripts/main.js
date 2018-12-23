var IsGeneralSettings = true;

// See list of classes in vysCtrl.css

var cnfg = { 
    themeId: 0, // 0 for custome theme
    themeColor: "", 
    themeBgColor: "",
    themeTxtColor: "",
    
    appBgColor: "", 
    appBgImg: {url: "", local: "", stretch: false},

    headerColor: "",     
    headerTxt: {color:"", font:"", size: 12.5, bold: false, italic: false},

    listBgColor: "",
    listCaptionTxt: {color:"", font:"", size: 12.5, bold: false, italic: false},
    listInputTxt: {color:"", font:"", size: 12.5, bold: false, italic: false},

    buttonColor: "",
    buttonTxt: {color:"", font:"", size: 12.5, bold: false, italic: false}
};

var themes = [{
    id: 13, // 0 for custome theme
    color: "d9d9d9", 
    bgColor: "ffffff",
    txtColor: "050505"
}, {
    id: 14, // 0 for custome theme
    color: "393939", 
    bgColor: "1a1a1a",
    txtColor: "fdfdfd"
}];

/// === jq ready ===
$(function() {
    console.log("jquery ready");
    //$("detailControls").css("display","none");

    /// btnToggleSettings click
    $("#tabSetDetails").click(function(){
        IsGeneralSettings = false;
        setTab(isGeneral=false); // isGeneral
    });
    $("#tabSetGeneral").click(function(){
        IsGeneralSettings = true;
        setTab(isGeneral=true); // isGeneral
    });
    $(".btn-togglesettings").click(function(){
        setTab(isGeneral=!IsGeneralSettings)
    });
    $("#slctFont").change(function() {
        var newfont = $(this).val();
        if (newfont == "Default")
            newfont = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
        setSimFont(newfont);
    });
    $("#logoRange").change(function(){
        var logoWidth = $("#logoRange").val();
        $("#logoWidth").val(logoWidth);
    });
    $("#logoWidth").change(function(){
        var logoWidth = $("#logoWidth").val();
        $("#logoRange").val(logoWidth);
    });
    $(".area15Default").click(function(){
        setThemeCustom(themes[0].color);
        setThemeCustomBg(themes[0].bgColor);
        // tbd set theme text color 
    })


    function setTab(isGeneral){
        var ctrlToDisplay = (isGeneral ? "#generalControls" : "#detailControls");
        var ctrlToHide = (isGeneral ?  "#detailControls" : "#generalControls");
        var textBtnSettings = (isGeneral ? "Set details..." : "General settings...");
        var tabActive = (isGeneral ? "#tabSetGeneral" : "#tabSetDetails");
        var tabInactive = (isGeneral ? "#tabSetDetails" : "#tabSetGeneral");
        $(ctrlToDisplay).css("display", "block");
        $(ctrlToHide).css("display", "none");
        $(".txt-togglesettings").html(textBtnSettings);
        if ( $(tabInactive).hasClass("active") ) {
            $(tabInactive).removeClass("active");
            $(tabActive).addClass("active");
        }
        IsGeneralSettings = isGeneral;
    }

    $("#toglDirection").change(function() {
      console.log("dbg.toglDirection change");
      appState.curDirectionRTL = !appState.curDirectionRTL;
      let rtlTxt = appState.curDirectionRTL ? ' RTL' : ' LTR';
      console.log(rtlTxt);
      $("#txtCurDirection").html(rtlTxt);
    });
 
  // ==== inside jquery: vendor stuff ========
  /// https://bootsnipp.com/snippets/featured/jquery-checkbox-buttons
  $('.button-checkbox').each(function () {

    // Settings jq chk button
    var $widget = $(this),
        $button = $widget.find('button'),
        $checkbox = $widget.find('input:checkbox'),
        color = $button.data('color'),
        settings = {
            on: {
                icon: 'glyphicon glyphicon-check'
            },
            off: {
                icon: 'glyphicon glyphicon-unchecked'
            }
        };

    // Event Handlers jq chk button
    $button.on('click', function () {
        $checkbox.prop('checked', !$checkbox.is(':checked'));
        $checkbox.triggerHandler('change');
        updateDisplay();
    });
    $checkbox.on('change', function () {
        updateDisplay();
    });

    // Actions jq chkbutton
    function updateDisplay() {
        var isChecked = $checkbox.is(':checked');

        // Set the button's state
        $button.data('state', (isChecked) ? "on" : "off");

        // Set the button's icon
        $button.find('.state-icon')
            .removeClass()
            .addClass('state-icon ' + settings[$button.data('state')].icon);

        // Update the button's color
        if (isChecked) {
            $button
                .removeClass('btn-default')
                .addClass('btn-' + color + ' active');
        }
        else {
            $button
                .removeClass('btn-' + color + ' active')
                .addClass('btn-default');
        }
    }

    // Initialization of jquery chkbox button
    function initJqChk() {

        updateDisplay();

        // Inject the icon if applicable
        if ($button.find('.state-icon').length == 0) {
            $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
        }
    }
    initJqChk();
  });

  
});

  // ---- jq color picker  ---------------------
  function onJqColor(jqColor){
    // console.log("dbg.jqColor: ", jqColor); 
    var mybox = jqColor.getAttribute("mybox");
    var clr = jqColor.value;
    $("#"+mybox).css("color", "#"+clr);
    var inputid = jqColor.getAttribute("id");
    $("#"+inputid)[0].jscolor.hide();

    // now decide action
    switch(inputid) {
        case "inpClrThemeCustom":
            setThemeCustom(clr);
            break;
        case "inpClrButton": 
            setSimButtonColor(clr);
            break;
        case "inpClrThemeBg":
            setThemeCustomBg(clr);
            break;
        default:
        
    }
  }  

  // e.preventDefault();  // ignore events

  // ===================================================
  // ----  Visualizer actions -----
  // ====================================================
function setTheme(themeId){
    console.log("dbg.setTheme tbd");
    // controls
    // -- theme controls --
    //  clrThemeCustom inp color
    //  clrAppHdr inp jscolor
    //  clrBtn  inp jscolor
    
    //   clrThemeBg
    //  color in box and inp clrAppBg
    
    // -- details --

}


function setThemeCustom(clr){
    console.log("dbg.setThemeCustom tbd");
    // controls
    setJsColor("inpClrAppHdr", "clrAppHdr", clr); // header color control
    setJsColor("inpClrButton", "clrButton", clr); // button color control 

    // simulation
    $(".vys-header").css("background-color", "#"+clr); // setHeaderColor(clr);
    setSimButtonColor(clr);
}

function setSimButtonColor(clr){
    
    $("button.vys-button").each(function(idx, btn){
        btn.style.setProperty('background-color', '#'+clr, 'important');  
    });
}

function setThemeCustomBg(clr){
    setJsColor("inpClrAppBg", "clrAppBg", clr); // header ctrl
    setJsColor("inpClrList", "clrList", clr); // button ctrl

    setSimBgColor(clr); // sets app background and list background
}

function setSimBgColor(clr){
    cnfg.appBgColor = clr;
    $("#appsim").css("background-color", "#"+clr); // simulator background

    cnfg.listBgColor = clr;
    $("vys-fld-container").css("background-color", "#"+clr); // simulator list background
}

function setSimFont(newfont){
    // console.log("dbg.setSimFont", newfont)
    $("#appsim").css('font-family', newfont);

    cnfg.headerTxt.font = newfont;
    $(".vys-header-text").css('font-family', newfont);
    
    cnfg.buttonTxt.font = newfont;
    cnfg.listCaptionTxt.font = newfont;
    //$("#appsim").css('font-family', newfont);

    // input font doesn't work. opened issue: #7 fix/txtboxFont
    //   https://github.com/pashute/appVisualizer/issues/7 
    cnfg.listInputTxt.font = newfont;
    // $(".vys-input").each(function(idx, elem){
    //     elem.style.setProperty('font-family', newfont);
    // });
}

function setJsColor(jsid, boxid, clr){
    $("#"+jsid).val(clr);
    $("#"+jsid).css("background-color", "#"+clr);
    $("#"+boxid).css("color", "#"+clr);
}
