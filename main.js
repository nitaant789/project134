img ="";
status ="";
objects = [];
function preload() {
sound = loadSound("alert.mp3");
}
function setup(){
canvas = createCanvas(380,380);
canvas.center();
video = createCapture(VIDEO);
video.hide();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "status : Detecting Objects";
}
function modelLoaded() {
 console.log("model is loaded");
 status = true;
 objectDetector.detect(video, gotResults); 
}
function gotResults(error, results){
if (error) {
    console.error(error);
}
else{
    console.log(results);
    objects = results;
}
}
function draw(){
image(video,0,0, 380, 380);
if (results = person) {
    document.getElementById("status").innerHTML = "status: Baby is detected"; 
sound.play();
} else {
    document.getElementById("status").innerHTML = "status: Baby is not detected"; 
    sound.play(); 
}
if (status != "") {
    for ( i = 0; i < objects.length; i++) 
    {
      
      fill("#0000FF");
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
      noFill();
      stroke("#0000FF");
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}

}