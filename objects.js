var playlist = {
  Sam: 'Lay Me Down',
}

function updateObjectWithKeyAndValue(playlist, artistName, songTitle) {
  var newObj = Object.assign({[artistName]: songTitle}, playlist);
  return newObj;
}

