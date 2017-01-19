
//Accepts a note string (eg. "C#*2", "Bb"), and
//parses into a note object (eg. { pitch: 'C#', beats: 2 } )
function parseNote(noteString) {
  let noteArray = noteString.split('*');
  let noteObject = {};

  //Add a beat length of 1 by default if not specified:
  if(noteArray.length === 1) {
    noteArray.push('1');
  }

  //Construct the note object from the array
  noteObject["pitch"] = noteArray[0];
  noteObject["beats"] = parseInt(noteArray[1]);

  //console.log(noteObject);
  return(noteObject);
}


//Accepts a string list of notes (see parseNote), whic are parsed
//into an array of note objects
// (eg. [{pitch: 'A', beats: 1}, {pitch: 'C#', beats: 2}, {pitch:'D', beats: 4}])
function parseSong(songString) {
  let noteList = songString.split(' ');
  let noteArray = [];

  noteList.forEach(function(element, index, array) {
    noteArray.push(parseNote(element));
  });

  //console.log(noteArray);
  return noteArray;
}

const promptText = "Please enter the list of notes for your song!\n" +
                            "(type 'q' or 'Q' to quit!)";

function musicTime() {
  let songString = window.prompt(promptText);
  let notes = "";

  if(songString === 'Q' || songString === 'q') {
    return;
  } else {
    notes = parseSong(songString);
    playSong(notes, 400, musicTime);
  }
}


// MAIN PROGRAM
//
// A*2 B C#*3 D*3 C#*3
musicTime();
