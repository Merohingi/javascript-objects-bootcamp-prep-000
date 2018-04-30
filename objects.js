var playlist = {
  Sam: 'Lay Me Down',
}

function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj = Object.assign({[key]: value}, obj);
  return newObj;
}

