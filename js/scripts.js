//business logic
function Journal (location, year, buddyFirst, buddyLast, notes) {
  this.location = location;
  this.yearVisited = year;
  this.travelBuddyFirst = buddyFirst;
  this.travelBuddyLast = buddyLast;
  this.notes = notes;
}

Journal.prototype.fullname = function() {
  return this.travelBuddyFirst + " " + this.travelBuddyLast;
}

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedYear = $("input#new-year").val();
    var inputtedBuddyFirst = $("input#new-buddy-first").val();
    var inputtedBuddyLast = $("input#new-buddy-last").val();
    var inputtedNotes = $("input#new-notes").val();

    var newJournalEntry = new Journal(inputtedLocation, inputtedYear, inputtedBuddyFirst, inputtedBuddyLast, inputtedNotes);

    $("ul#entries").append("<li><span class='entry'>" + newJournalEntry.location + "</span></li>");

    $("#entries").last().click(function() {
      $("#show-journal").show();
      $("#show-journal h2").text(newJournalEntry.location);
      $(".location").text(newJournalEntry.location);
      $(".year-visited").text(newJournalEntry.yearVisited);
      $(".travel-buddy").text(newJournalEntry.fullname());
      // $(".travel-buddy-last").text(newJournalEntry.travelBuddyLast);
      $(".notes").text(newJournalEntry.notes);
    });

    $("input#new-location").val("");
    $("input#new-year").val("");
    $("input#new-buddy-first").val("");
    $("input#new-buddy-last").val("");
    $("input#new-notes").val("");

  });
});
