var $container = $('#container');
// init
$container.packery({
  itemSelector: '.item',
  gutter: 10
});

$container.on( 'click', '.item', function( event ) {
  var $target = $( event.target )
  var isFullScreen = $target.hasClass('full-screen');
  $target.toggleClass('full-screen');

  if ( isFullScreen ) {
    // if shrinking, just layout
    $container.packery();
  } else {
    $container.packery( 'fit', event.target );
  }
});