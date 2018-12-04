//alert('hi');
// state
var appState = {
    selectedColorBtn: 0
}


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

/// jq ready
$(function() {
  // console.log('dbg.jqready');

  // btnClr click
  $( "#clr2" ).click(function() {
    console.log(this.id);
    // if ( $(this).hasClass("w3-topbar") )
    //     $(this).removeClass(["w3-topbar", "w3-bottombar", "w3-leftbar", "w3-rightbar"]);
    // else
    //     $(this).addClass(["w3-topbar", "w3-bottombar", "w3-leftbar", "w3-rightbar"]);

  }); // btnClr click
  
});


// btnids.forEach(function(btnid) {
//   $(btnid).html("hi");
// });