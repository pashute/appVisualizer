var IsGeneralSettings = true;

// See list of classes in vysCtrl.css


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
      console.log("hi");
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

  // ==== archived. still in jq function  ============

  // btnClr click
   // $( "#clr2" ).click(function() {
    // console.log(this.id);
    // if ( $(this).hasClass("w3-topbar") )
    //     $(this).removeClass(["w3-topbar", "w3-bottombar", "w3-leftbar", "w3-rightbar"]);
    // else
    //     $(this).addClass(["w3-topbar", "w3-bottombar", "w3-leftbar", "w3-rightbar"]);

  //}); // btnClr click
  
});

  // ---- jq color picker  ---------------------
  function onJqColor(jqColor){
      console.log(jqColor);
      var mybox = jqColor.getAttribute("mybox");
      var clr = jqColor.value;
    $("#"+mybox).css("color", "#"+clr);
  }  


