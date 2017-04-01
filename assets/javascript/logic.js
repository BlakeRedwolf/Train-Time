var config = {
  apiKey: "AIzaSyBscCCHwrlcTMoMWK13hrjj6QyNjmc8V9M",
  authDomain: "trains-e9e54.firebaseapp.com",
  databaseURL: "https://trains-e9e54.firebaseio.com",
  storageBucket: "trains-e9e54.appspot.com",
  messagingSenderId: "367854193615"
};
  firebase.initializeApp(config);
  var database = firebase.database();

function SetTrain(){
  var trainName = $('#nameinput').val();
  var destination = $('#destinationinput').val();
  var firstTrainTime = $('#traintimeinput').val();
  var frequency = $('#frequencyinput').val();

  /*
  console.log(trainName);
  console.log(destination);
  console.log(firstTrainTime);
  console.log(frequency);
*/

// This is the magic that updates or adds to the DB:
firebase.database().ref(trainName).set({
  TrainName: trainName,
  Dest: destination,
  TrainTime : firstTrainTime,
  Freq : frequency
  });
}

// References the correct database:
var ref = firebase.database().ref();


// This runs on load or value change:
ref.on("value", function(snapshot) {
  
  // This Empties the Table to Populate or Re-Populate:
  $('#display').empty();

  // Assign the snapshot to the variable "db":
  var db = snapshot.val();

  // Loops through each record in the db and grabs the information for the rows:
  $.each(db, function(index, value) {

    // Populates each cell the current row:
    var TrainRow = '<tr>'; // Start a row
    TrainRow += '<td>'+value.TrainName+'</td>'; // Add the Train Name
    TrainRow += '<td>'+value.Dest+'</td>'; // Add teh Destination
    TrainRow += '<td>'+value.Freq+' (Mins)</td>'; // Add the Frequency
    TrainRow += '<td>'+value.TrainTime+'</td>'; // Add the Train Time
    TrainRow += '<td>Until Arrival</td>'; // Need to finish this with Moment
    TrainRow += '<td><a class="btn btn-default" onclick="EditTrain('+'\''+value.TrainName+'\')">Edit</a></td>';// Edit Train Function
    TrainRow += '</tr>'; // Close the Row
    $('#display').append(TrainRow); // Apppend the Row onto the #display div
});

    // These empty the Add Train Form:
    $('#nameinput').val('');
    $('#destinationinput').val('');
    $('#traintimeinput').val('');
    $('#frequencyinput').val('');
    $('#currentTime').text(moment().format('LT'));
}, function (error) {
   console.log("Error: " + error.code);
});

// The only thing that this funciton does is grab the train from the db & displays it:
function EditTrain(TheTrain){

  var editTarget = firebase.database().ref('/'+TheTrain);

editTarget.on("value", function(snapshot) {
  var targ = snapshot.val();

  TrainArr = [];
  $.each(targ, function(index, value) {
    //console.log(value);
 			$('#nameinput').val(targ.TrainName);
      $('#destinationinput').val(targ.Dest);
      $('#traintimeinput').val(targ.TrainTime);
      $('#frequencyinput').val(targ.Freq);
  });
});

}
// This is the only thing that was lifted
/*
function nextTr(){
  var TrainFreq = value.Freq;
  var firstTrain = value.TrainTime;
  var curTime = moment();
  var subtractYear = moment(firstTrainTime, 'hh:mm').subtract(1, 'years');
  var timeDiff = currentTime.diff(moment(subtractYear), 'minutes');
  var remainder = timeDiff % tFrequency;
  var minutesUntilTrain = tFrequency - remainder;
  var nextTrain = currentTime.add(minutesUntilTrain, 'minutes').format('hh:mm');
}
*/