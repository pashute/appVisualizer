var IsGeneralSettings = true;

// See list of classes in vysCtrl.css

var cnfg = { 
    clrThemeCustom: "", 
    clrThemeList: "",
    clrAppBg: "", 
    clrAppHdr: "",
    clrAppHdrTxt: "",
    clrList: ""
};

function setTheme(themeNumber){
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

/// jq ready
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
    $("#logoRange").change(function(){
        var logoWidth = $("#logoRange").val();
        $("#logoWidth").val(logoWidth);
    });
    $("#logoWidth").change(function(){
        var logoWidth = $("#logoWidth").val();
        $("#logoRange").val(logoWidth);
    });

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
    console.log("dbg.jqColor: ", jqColor); 
    var mybox = jqColor.getAttribute("mybox");
    var clr = jqColor.value;
    $("#"+mybox).css("color", "#"+clr);
    var inputid = jqColor.getAttribute("id");
    $("#"+inputid)[0].jscolor.hide();

    // now decide action
    switch(inputid) {
        case "":
            break;
        default:
        
    }
  }  

  // e.preventDefault();  // ignore events

// ----  control functions -----
function setThemeCustom(clr){
    console.log("dbg.setThemeCustom tbd");
    // controls
    // -- theme controls --
    //  color in box and inp clrThemeCustom
    //  color in box and inp clrThemeBg
    //  color in box and inp clrAppBg
    // -- details --
    //  color in box and inp appHdr

    // simulation
    setHeaderColor(clr);
    setListColor(clr);
    //  clr
}

function setThemeCustomBg(clr){
    setJsColor("inpClr...", "tbd", clr); // header ctrl
    setJsColor("inpClr...", "tbd", clr); // button ctrl

    setBgColor(clr); // sets app background and list background
}

function setBgColor(clr){
    cnfg.clrAppBg = clr;
    $("tbd...").css("color", "#"+clr); // simulator header

    cnfg.clrList = clr;
    $("tbd...").css("color", "#"+clr); // simulator list background
}

function setJsColor(jsid, boxid, clr){
    $("#"+jsid).attr("value", clr);
    $("#"+boxid).css("color", "#"+clr);
}
