var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  //loop through all the playlists
  for(item in library.playlists){
    printSinglePlaylist(item);
  }
}

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  //loop through the library.tracks object
  for(item in library.tracks){
    printSingleTrack(item);
  }
}

//create helper function that prints a single playlist
var printSinglePlaylist = function (playlistId) {
  var playlist = library.playlists[playlistId];
  console.log(playlist.id + ":", playlist.name, "-", playlist.tracks.length, "tracks");
}

//create helper function that prints a single track
var printSingleTrack = function(trackId) {
  var track = library.tracks[trackId];
  console.log(track.id + ":", track.name, "by", track.artist + "(" + track.album + ")");
}

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  //print the single playlist
  printSinglePlaylist(playlistId);

  //loop through the tracks of a specific playlist and print them
  for (track of library.playlists[playlistId].tracks) {
    printSingleTrack(track);
  }
}


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  //get an instance of the tracks array of a specific playlist
  var tracks = library.playlists[playlistId].tracks;

  //do not add the track if it is already there
  if (!tracks.includes(trackId)) {
    tracks.push(trackId);
  }

  console.log("Added track", trackId, "to playlist", playlistId);
  console.log("Tracks in playlist %s:", playlistId, tracks);
}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  //Get a random number for id and initialize an empty object
  var newId = uid();
  var newTrack = {};

  //add required fields to the object
  newTrack.id = newId;
  newTrack.name = name;
  newTrack.artist = artist;
  newTrack.album = album;

  //add the new track object to the existing tracks list
  library.tracks[newId] = newTrack;
}


// adds a playlist to the library

var addPlaylist = function (name) {
  //Get a random number for id and initialize an empty object
  var newId = uid();
  var newPlaylist = {};

  //add required fields to the object
  newPlaylist.id = newId;
  newPlaylist.name = name;
  newPlaylist.tracks = [];

  //add the new playlist object to the existing playlists
  library.playlists[newId] = newPlaylist;
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}

