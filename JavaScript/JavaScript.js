/* 
java script for the image slider.
*/

function Slides() {
            var images = [];
            var x = document.getElementById("slider");
            images[0] = "image/tech1.jpg";
            images[1] = "image/tech5.jpg";
            images[2] = "image/tech2.jpg";
            images[3] = "image/tech3.jpg";
            images[4] = "image/tech4.jpg";
            var i = 0;

            function reload() {
                if (i < images.length) {
                    x.src = images[i];
                    i++;
                }
                else {
                    i = 0;
                }
            }
            setInterval(reload, 1000);
        }
        Slides();