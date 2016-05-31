$(document).ready(function(){

  $('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var movie = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('Add a Movie: ' + movie)
    modal.find('.modal-body input').val(movie)
  })



  //
  //
  //   alert("i'm working baby");
  //   var movie = "Jaws";
  //
  //   $.get("https://galvanize-cors-proxy.herokuapp.com/http://www.omdbapi.com/?t=" + movie , function(data) {
  //     console.log(data);
  //
  //     var title = data.Title;
  //     var actors = data.Actors;
  //     var awards = data.Awards;
  //     var poster = data.Poster;
  //     var plot = data.Plot;
  //
  //
  //     $('.input').append("<h1>" + title + "</h1>");
  //
  //     $('.input').append("<br><br>");
  //
  //     $('.input').append("<h2>" + actors + "</h2>");
  //
  //     $('.input').append("<br><br>");
  //
  //     $('.input').append("<h3>" + awards + "</h3>");
  //
  //     $('.input').append("<br><br>");
  //
  //     $('.input').append('<img src="' + poster + '">');
  //
  //     $('.input').append("<br><br>");
  //
  //     $('.input').append("<h4>" + plot + "</h4>");
  //
  //
  // })


  });
