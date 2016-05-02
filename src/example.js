"use strict";

var tnt = require( './TntDomElement.js' );

var body = new tnt( document.body );

body.addClass( 'body-class' );
body.append( new tnt( 'button' ) );

var li = new tnt( '.test' );

li.addClass( 'nice' );

li.click( function( e ) {

	console.log( e );
} );

var nice = new tnt( '.nice' );
nice.addClass( 'worknicely' );

var test = new tnt( '<div>It is a html string<button>nice</button><button>nice</button><button>okitworks</button></div>' );
test.appendTo( body );
test.addClass( 'nice' );

var btn = new tnt( 'div>button' );

btn.addClass( 'my-button-class' ).html( 'nice' );