var $container = $('#container');
// init
$container.packery({
  itemSelector: '.item',
  gutter: 10
});

var hiddenItems = [];
var detailedItem;

$( ".item" ).click(function(event) {
  var $target = $( event.target )
  var isFullScreen = $target.hasClass('full-screen');
  $target.toggleClass('full-screen');
  var id = event.target.id;

  $('.item').each(function(i, obj) {

    var truthy = $(this).hasClass('full-screen');
    if (!truthy) {
      $(this).toggleClass('scale-down');
      $(this).fadeOut("slow");
      hiddenItems.push($(this));
    } else {
      detailedItem = $(this);
    }

  });

  // console.log('checking', allItems[0].hasClass('full-screen'));
  // for (x = 0; x < allItems.length; x++) {
  //   console.log('x', x);
  //   // if (allItems[x].attr('class') !== 'full-screen') {
  //     // allItems[x].addClass("scale-down");
  //   // }
  //
  // }

  if ( isFullScreen ) {
    // if shrinking, just layout
    // $container.packery();
    $.getJSON('./assets/js/projects.json', function(data) {
      var currentProjectData = data[id];
    });
  } else {
    // $container.packery( 'fit', event.target );
  }
});
