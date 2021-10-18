Webcam.set({
    width: 350,
    height:300,
    image_format:'png',
    png_quaity:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');
function photo(){
    Webcam.snap(function(data_URL){
        document.getElementById("result").innerHTML='<img id="capture_image"src="'+data_URL+'">'
    });
}
console.log('ml5 version',ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XBUjxgdXB/model.json",modelloaded);

function modelloaded(){
    console.log('Model Loaded');
}

function object(){
    img = document.getElementById('capture_image');
    classifier.classify(img, gotResult);
}

function gotResult(error,result){
    if(error){
        console.error(error);
    }else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML = result[0].label;
        document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(4);
    }
}




