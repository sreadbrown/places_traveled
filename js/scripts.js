function Journal (location, year, buddy, notes, landmarks) {
  this.location = location;
  this.yearVisited = year;
  this.travelBuddy = buddy;
  this.notes = notes;
  // this.landmarks = [];
}

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();
    var inputtedLocation = $("input#new-location").val();
    var inputtedYear = $("input#new-year").val();
    var inputtedBuddy = $("input#new-buddy").val();
    var inputtedNotes = $("input#new-notes").val();

    var newJournalEntry = new Journal(inputtedLocation, inputtedYear, inputtedBuddy, inputtedNotes);

    $("ul#entries").append("<li><span class='entry'>" + newJournalEntry.location + "</span></li>");

    $(".entries").last().click(function() {
      $("#show-journal").show();
      $("")
    });




  });
});
