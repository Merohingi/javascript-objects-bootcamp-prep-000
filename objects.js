var playlist = {
  Sam: 'Lay Me Down',
}

function updatePLaylist(playlist, artistName, songTitle) {
  var newObj = Playlist.assign({[artistName]: songTitle}, playlist);
  return newObj;
}

