window.WebFontConfig = {
    google: {
        families: []
    }
}

app = angular.module('fdApp', [])

app.controller('FontDropdownCtrl', ($scope) ->
    WEBFONTAPI = "//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js"
    @FONTSLIST = [
        {
            name: "Source Sans Pro"
            face: "Source+Sans+Pro:900italic"
            style:
                fontFamily: "Source Sans Pro"
                fontWeight: 900
                fontStyle: 'italic'
        }
        {
            name: "Quattrocento Sans"
            face: "Quattrocento+Sans"
            style:
                fontFamily: 'Quattrocento Sans'
        }
        {
            name: "Ubuntu"
            face: "Ubuntu:700"
            style:
                fontFamily: 'Ubuntu'
        }
        {
            name: "Arizonia"
            face: "Arizonia"
            style:
                fontFamily: 'Arizonia'
        } 
        {
            name: "Lora"
            face: "Lora:700"
            style:
                fontFamily: "Lora"
                fontWeight: 700
        }
        {
            name: "Sansita One"
            face: "Sansita+One"
            style:
                fontFamily: "Sansita One"
        }
        {
            name: "Armata"
            face: "Armata"
            style:
                fontFamily: "Armata"
        }
        {
            name: "Black Ops One"
            face: "Black+Ops+One"
            style:
                fontFamily: "Black Ops One"
        }
        {
            name: "Russo One"
            face: "Russo+One"
            style:
                fontFamily: "Russo One"
        }
    ]

    @loadFonts = ->
        for font in @FONTSLIST
            WebFontConfig.google.families.push(font.face)

        wf = document.createElement('script')
        wf.src = (if 'https:' is document.location.protocol then 'https:' else 'http:') + WEBFONTAPI
        wf.type = 'text/javascript'
        wf.async = 'true'
        s = document.getElementsByTagName('script')[0]
        s.parentNode.insertBefore(wf, s)
)

app.directive('fdFontDropdown', ->
    return {
        restrict: 'A'
        controller: 'FontDropdownCtrl'
        link: (scope, element, attr, Ctrl) ->
            Ctrl.loadFonts()
            scope.fontslist = Ctrl.FONTSLIST
            scope.selectedIdx = Math.floor(Math.random() * scope.fontslist.length)

            scope.changeFont = (idx) ->
                scope.selectedIdx = idx
                console.log idx

            element.bind('click', ->
                element.toggleClass("active")
            )
    }
)
