// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  
  $('#collections').on('change', '', function (event) {
      var filename = $("#collections option").filter(":selected").val();
      var collectionName = $("#collections option").filter(":selected").attr("name");
    
      if (filename !== "") {
        $("#colors").html('<div class="loading mx-auto"">Loading...</div>');
        $("#browse").html('<a href="https://www.loc.gov/collection/' + collectionName +'" target="_blank">Browse this collection</a>');      
        $.getJSON(filename, function(data) {
            var htmlString = "";      
            $.each(data.images, function(key, val) {
               var rowString = '<a href="' + val.url + '" target="_blank">';
               rowString += '<svg class="img-fluid" height="20" width="130">';
               $.each(val.colors, function(index, value) {
                 var x = index * 20;
                 var y = 0;
                 rowString += '<rect x="' + x + '" y="' + y + '" width="20" height="20" fill="' + value + '"></rect>';
               });
               rowString += '</svg></a>';
               htmlString += rowString;
            });
            $("#colors").html(htmlString);  
        });
        } else {
            $("#colors").html('');      
        }
  });
});
