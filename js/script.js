var image = document.getElementById("image");

var images = ["images/land1.jpeg", "images/land2.jpeg", "images/land3.jpeg", "images/land4.jpeg"];
var counter = 0;

function Slider() {
        for (var i = 0; i < images.length; i++) {
                image.src = images[counter];
                //counter ++;
                if (counter >= images.length) {
                        counter = 0;
                }
        }
        counter++;
}


setInterval(Slider, 1500);
