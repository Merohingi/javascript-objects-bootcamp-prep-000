var playlist = {
  Sam: 'Lay Me Down',
}

function updatePlaylist(obj, key, value) {
  var newObj = Object.assign({[key]: value}, obj);
  return newObj;
}

