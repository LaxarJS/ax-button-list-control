/**
 * Copyright 2015-2017 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */

import * as ng from 'angular';
import htmlButtonTemplate from 'html-loader!./laxar-button-list-control.html';

const DEBOUNCE_TIME_MS = 300;
const directiveName = 'axButtonList';
const directive = [ '$compile', $compile => {
   return {
      restrict: 'A',
      scope: true,
      link( scope, element, attrs ) {
         const $off = scope.$watch( attrs[ directiveName ], handleList );
         function handleList( buttonList ) {
            if( !buttonList || !buttonList.length ) { return; }
            buttonList.forEach( button => {
               // prevent double action on double click
               const buttonScope = scope.$new();
               buttonScope.button = button;
               let locked = false;
               buttonScope.buttonClicked = () => {
                  if( locked ) { return; }
                  locked = true;
                  setTimeout( () => { locked = false; }, DEBOUNCE_TIME_MS );
                  buttonScope.$eval( attrs.axButtonListClick );
               };
               element.append( $compile( htmlButtonTemplate )( buttonScope ) );
            } );
            $off();
         }
      }
   };
} ];

export const name = ng.module( `${directiveName}Control`, [] )
   .directive( directiveName, directive )
   .name;
