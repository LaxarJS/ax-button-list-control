
/**
 * Copyright 2015-2017 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
import * as ng from 'angular';
import 'angular-mocks';
import { name } from '../laxar-button-list-control';

describe( 'The laxar-button-list-control', () => {

   beforeEach( ng.mock.module( name ) );

   let scope;
   beforeEach( ng.mock.inject( ( $compile, $rootScope ) => {
      scope = $rootScope.$new();
      scope.buttons = [
         { htmlLabel: 'Clicke me!', classes: { 'btn': true, 'btn-primary': true } },
         { htmlLabel: 'Clicke me not!', classes: { 'btn': true, 'btn-info': true, 'ax-disabled': true } }
      ];
      $compile( '<div ax-button-list="buttons"></div>' )( scope );
   } ) );

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   it( 'passes a smoke test', () => {
      expect( true ).toBe( true );
   } );

} );
