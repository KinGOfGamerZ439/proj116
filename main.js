nosex=0;
nosey=0;
function preload()
{
   clown=loadImage('https://media.istockphoto.com/photos/curly-moustache-isolated-on-white-picture-id160350753?k=6&m=160350753&s=612x612&w=0&h=mT437lJIMQYO-o6GXdp5Iie5OX_gmmvFHoONCX_iaV0=');
}

function setup()
{
    canvas=createCanvas(300, 300);
    canvas.center();
    Video=createCapture(VIDEO);
    Video.size(300, 300);
    Video.hide();qf

    posenet=ml5.poseNet(Video,modelLoaded);
    posenet.on('pose', gotposes);
}
function modelLoaded()
{
    console.log('Model Is Loaded')
}

function take_snapshot()
{
    save('Bengali.png');
}
function draw()
{
    image(Video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(nosex, nosey, 20);
    image(clown, nosex, nosey, 30, 30)

}
function gotposes(results)
{
   if(results.length > 0)
   {
       console.log(results);
       nosex=results[0].pose.nose.x-10;
       nosey=results[0].pose.nose.y-10;
       console.log("nose x =" +nosex);
       console.log("nose y =" +nosey);
   }
}