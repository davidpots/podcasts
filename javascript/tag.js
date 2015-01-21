  $(document).ready(function(){

    // Determines list of unique tags...
    var tagList = [];
    $.each( $('.item'), function(i,item) { 
      itemTags = $(item).data('tags');
      itemTags = itemTags.split(' ');
      $.each( itemTags, function(n,tag) { 
        if ($.inArray(tag,tagList) == -1) {
          tagList.push( tag );
        }
      });
    });
    tagList = tagList.sort();
    
    // Writes tag list to the DOM...
    $.each( $(tagList), function(i,obj) { 
      $('.tag-list ul').append('<li><a class="item__tag" data-filter="' + obj + '" href="#">' + obj + '</a></li>').show();
    } );

    // When a tag is clicked...
    $('.tag-list ul .item__tag').click(function(){
      if ( $(this).hasClass('show-all') ) {
        // Show everything
        $('.item').show();
      } else {
        // Determine the tag clicked on
        filterBy = $(this).data('filter');
        // Alternative to isotope, but not sexy!
        $('.item[data-tags~="' + filterBy + '"]').show();
        $('.item').not('[data-tags~="' + filterBy + '"]').hide();
      }
      // Change active state
      $('.tag-list ul li.active').removeClass('active');
      $(this).parent().addClass('active');
      return false;
    });

  });