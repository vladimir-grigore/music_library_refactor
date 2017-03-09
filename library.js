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
             },
  //create helper function that prints a single playlist
  printSinglePlaylist: function (playlistId) {
    var playlist = this.playlists[playlistId];
    console.log(playlist.id + ":", playlist.name, "-", playlist.tracks.length, "tracks");
  },

  //create helper function that prints a single track
  printSingleTrack: function(trackId) {
    var track = this.tracks[trackId];
    console.log(track.id + ":", track.name, "by", track.artist + "(" + track.album + ")");
  },

  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  printPlaylists: function () {
    //loop through all the playlists
    for(item in this.playlists){
      this.printSinglePlaylist(item);
    }
  },

  // prints a list of all tracks, in the form:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks: function () {
    //loop through the library.tracks object
    for(item in this.tracks){
      this.printSingleTrack(item);
    }
  },

  // prints a list of tracks for a given playlist, in the form:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  printPlaylist: function (playlistId) {
    //print the single playlist
    this.printSinglePlaylist(playlistId);

    //loop through the tracks of a specific playlist and print them
    for (track of this.playlists[playlistId].tracks) {
      this.printSingleTrack(track);
    }
  },

  // adds an existing track to an existing playlist
  addTrackToPlaylist: function (trackId, playlistId) {
    //get an instance of the tracks array of a specific playlist
    var tracks = this.playlists[playlistId].tracks;

    //do not add the track if it is already there
    if (!tracks.includes(trackId)) {
      tracks.push(trackId);
    }

    console.log("Added track", trackId, "to playlist", playlistId);
    console.log("Tracks in playlist %s:", playlistId, tracks);
  },

  // generates a unique id
  // (use this for addTrack and addPlaylist)
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  // adds a track to the library
  addTrack: function (name, artist, album) {
    //Get a random number for id and initialize an empty object
    var newId = this.uid();
    var newTrack = {};

    //add required fields to the object
    newTrack.id = newId;
    newTrack.name = name;
    newTrack.artist = artist;
    newTrack.album = album;

    //add the new track object to the existing tracks list
    this.tracks[newId] = newTrack;
    console.log(this.tracks)
  },

  // adds a playlist to the library
  addPlaylist: function (name) {
    //Get a random number for id and initialize an empty object
    var newId = this.uid();
    var newPlaylist = {};

    //add required fields to the object
    newPlaylist.id = newId;
    newPlaylist.name = name;
    newPlaylist.tracks = [];

    //add the new playlist object to the existing playlists
    this.playlists[newId] = newPlaylist;
    console.log(this.playlists);
  }

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
