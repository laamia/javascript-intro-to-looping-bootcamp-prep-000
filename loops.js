function forLoop(array) {
  var arrayLength = array.length
  for(var i = 0; i<25; i++){
        array[arrayLength + i] = `I am ${i} strange loops.`
  }
  return array
}

function whileLoop(countdown){
  while (countdown > 0) {
    console.log(--countdown)
  }
return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do{
    array.pop()
  }
  while(array.length > 0 && maybeTrue());
  return array
}
