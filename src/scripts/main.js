// import * as vys from 'vysObjects';
// babel output
  // var _vysObjects = require('vysObjects');
  // var vys = _interopRequireWildcard(_vysObjects);
  // function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var IsGeneralSettings = true;

/// jq ready
$(function() {
    console.log("jquery ready");

    // getScript fails on CORS and gives not-defined. 
    // $.getScript("//vysObjects.js", function() {
    //     console.log("vysObjects loaded");
    //  });

    /// btnToggleSettings click
    $("#btnToggleSettings").click(function(){
        if (IsGeneralSettings) {
            console.log("change to details");
            $("detailControls").css("display","block");
            $("#generalControls").css("display", "none");
            $("#btnToggleSettings").html("General settings...");
        } else {
            console.log("change to general");
            $("#generalControls").css("display", "block");
            $("detailControls").css("display","none");
            $("#btnToggleSettings").html("Set details...");
        }
        IsGeneralSettings = ! IsGeneralSettings;
    });

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


