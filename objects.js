var playlist = {
  Sam: 'Lay Me Down',
}

function updatePLaylist(playlist, artistName, songTitle) {
  var newObj = Object.assign({[artistName]: songTitle}, playlist);
  return newObj;
}

