function  startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js", modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error, results)
{

}