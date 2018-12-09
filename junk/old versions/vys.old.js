import * from 'vysObjects';

// state
var appState = {
    selectedThemeId: 0, // x is custom
    selectedBgColor: "ffffff",
    
    curDirectionRTL: false
}

var textSettings = {

}

var themeSettings = {
    themeId: 0,
    bgColor : "",
    headerColor: "",
    listColor: "",
    captionTextColor: "",
    captionTextWeight: 400,
    captionTextShadow: 0,
    captionTextItalic: false,
    captionText

}

/// jq ready
$(function() {
    console.log('dbg.jqready');
  
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


// -----------------------------------------------------  




var themeDefaults = { 
    themeIdx: 1, colorClass: "w3-green", 
    fontFamIdx: 1, fontFam: "Arial",
    fontSize: 14
};


var btnids = [
  '#clr1', '#clr2', '#clr3', '#clr4', '#clr5', '#clr6',
  '#clr21', '#clr22', '#clr23', '#clr24', '#clr25', '#clr26',
  '#clr31', '#clr32', '#clr33', '#clr34', '#clr35', '#clr36',
  '#clr41', '#clr42', '#clr43', '#clr44', '#clr45', '#clr46'
];
var colors = [
    'w3-blue', 'w3-blue', 'w3-blue', 'w3-blue', 'w3-blue', 'w3-blue',
    'w3-blue', 'w3-blue', 'w3-blue', 'w3-blue', 'w3-blue', 'w3-blue',
    'w3-blue', 'w3-blue', 'w3-blue', 'w3-blue', 'w3-blue', 'w3-blue',
    'w3-blue', 'w3-blue', 'w3-blue', 'w3-blue', 'w3-blue', 'w3-blue'
];


// testing...
// btnids.forEach(function(btnid) {
//   $(btnid).html("hi");
// });