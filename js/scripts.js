//business logic
function Journal (location, year, buddy, notes) {
  this.location = location;
  this.yearVisited = year;
  // this.travelBuddy = buddy;
  // this.notes = notes;
}

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedYear = $("input#new-year").val();
    // var inputtedBuddy = $("input#new-buddy").val();
    // var inputtedNotes = $("input#new-notes").val();

    // var newJournalEntry = new Journal(inputtedLocation, inputtedYear, inputtedBuddy, inputtedNotes);

    var newJournalEntry = new Journal(inputtedLocation, inputtedYear);

    $("ul#entries").append("<li><span class='entry'>" + newJournalEntry.location + "</span></li>");

    $("#entries").last().click(function() {
      $("#show-journal").show();
      $("#show-journal h2").text(newJournalEntry.location);
      $(".location").text(newJournalEntry.location);
      $(".year-visited").text(newJournalEntry.yearVisited);
      // $(".travel-buddy").text(newJournalEntry.travelBuddy);
      // $(".notes").text(newJournalEntry.notes);
    });

    $("input#new-location").val("");
    $("input#new-year").val("");
    // $("input#new-buddy").val("");
    // $("input#new-notes").val("");

  });
});
