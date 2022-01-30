Webcam.set({
    witdth:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_url+'"/>';
    })
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/J37uEXYrZ/model.json',modelLoaded);