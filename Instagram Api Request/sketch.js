var likes

var api = 'https://api.instagram.com/v1/media/';
var apiKey = '?access_token=40290595.1677ed0.8e890906a6054d7eaf29ebe57bf68e05';

var input;

function setup() {
  createCanvas(windowWidth, windowHeight);

  var button = select('#submit');
  button.mousePressed(likeAsk);
  
  input = select('#mediaid')
}  
  
function likeAsk() {
  var url = api + input.value() + apiKey
  loadJSON(url, gotData, 'jsonp')

}
function gotData(data) {
  print(data.likes.count)
  likes = data;
}

function draw() {
  background(0);


}
