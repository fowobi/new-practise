// 1. Find and store the element we want to listen to events on.
    // var face = document.getElementById("face");
    // // 2. Define the function that will respond to the event.
    // var onMouseMove = function(event) {
    //     console.log(event);
    //     document.getElementById("message").textContent += "mooove ";         
    //     var beard = document.createElement("div");
    //     beard.className = "beard";
    //     document.body.appendChild(beard);
    //     beard.style.top = e.clientY + "px";
    //     beard.style.left = e.clientX + "px";
        
    // };
    // // 3. Add the event listener for the element and function
    // face.addEventListener("mousemove", onMouseMove);




    //Avatar exercise
                     var avatarEls = document.getElementsByTagName("img");
                    for (var i = 0; i < avatarEls.length; i++) {
                        avatarEls[i].height = "50";avatarEls[i].title = avatarEls[i].alt;
                    }

              //form exercise
               // Step 1: Find the element we want the event on
  var button = document.getElementById("button");
  // Step 2: Define the event listener function
     
  var onButtonClick = function() {
    var name = document.getElementById("name").value;
    var lang = document.getElementById("lang").value;
    var greeting;
    if (lang === "es") {
        greeting = "Hola, " + name;
    } else if (lang === "plt") {
        greeting = "Ello-hay, " + name;
    } else {
        greeting = "Heyaz, " + name;
    }
    document.getElementById("message").textContent += greeting;  
  };
  // Step 3: Attach event listener to element
  button.addEventListener("click", onButtonClick);



  //audio exercise
  // Step 1: Find the element we want the event on
        var ohnoesEl = document.getElementById("ohnoes");
        // Step 2: Define the event listener function
        var onOhNoesClick = function(event) {
            e.preventDefault();
            var audioEl = document.createElement("audio");
            audioEl.src = "https://www.kasandbox.org/programming-sounds/rpg/giant-no.mp3";
            audioEl.autoplay = "true";
            document.body.appendChild(audioEl);
        };
        // Step 3: Attach event listener to element
        ohnoesEl.addEventListener("click", onOhNoesClick);
