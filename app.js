// Slide Nav for mobile
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  

  burger.addEventListener('click',() => {   //Burger container click eventlistener
    nav.classList.toggle('nav-active');     //Toggle to active
    navLinks.forEach((link, index) => {     //for each link in the navBar 
          if(link.style.animation)          //if animation already made
          {
             link.style.animation = '';     //Do nothing
          }
          else{

             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7  + 0.5}s`; // else use NavLinkFade-animation after some time based on the index of the items
          }
    });
    burger.classList.toggle('toggle');      //toggle the burger animation
  });

}

navSlide();


const projectChange = () =>
{

    const projectlist = document.querySelectorAll('.projectlist > li');
    

    projectlist.forEach((link) => {
    link.addEventListener('click',() => {
        
        projectlist.forEach((link2) => {
        if (screen.width <= 768)
        {
              slider();
        }
        if(document.querySelector('.' + String(link2.id)).style.display != null)
        {
            document.querySelector('.' + String(link2.id)).style.display = "none";
        }
        });
        let element = document.querySelector('.' + String(link.id));
        element.style.display = "flex";
	});

    })
}

projectChange();

// Slide function to show my projects for mobile
var active = false;
const slider = () =>
{

    const work = document.querySelector(".work");      //container with clickable titles and my projects
    const headline = document.querySelector(".headline"); // list with gametitles and websites
    const projects = document.querySelector(".projects"); // my project
    const projectlist = document.querySelectorAll(".projectlist > li");
    
    if(active == false)                                //if no project slide is active
    {
        headline.style.animation = 'workSlide 0.5s ease forwards'; // slide to the left side
        projects.style.animation = 'workSlide 0.5s ease forwards'; // slide to the left side
        active = true;                                 // project is active now
    }
    if(active == true)                                 // if project slide is active
    {
        let startx = 0;                                //start of the touch 
        let endx = 0;                                  //point where finger lifts from screen

        work.addEventListener("touchstart", function (eve){
            let touchobj = eve.changedTouches[0];     // One finger touch
            startx = parseInt(touchobj.clientX);      // startx gets the int value of start touch in the x position
		});

        work.addEventListener("touchend", function (eve){
            let touchobj = eve.changedTouches[0];     // One finger touch
            endx = parseInt(touchobj.clientX);        // endx gets the int value of end touch in the x position
            var swipe = (endx - startx);              // variable to determine the difference from start to finish to see if it's a swipe
            
            if ( swipe > 50)                          // if swipe is bigger than 50px
            {
           
                headline.style.animation = 'workSlideBack 0.5s ease forwards';  // slide to the right side
                projects.style.animation = 'workSlideBack 0.5s ease forwards';  // slide to the right side
                setTimeout(function(){
                projectlist.forEach((link) => {
                    document.querySelector('.' + String(link.id)).style.display = "none";
                });
                },250);
                
            
                active = false;                      // project is inactive now
		    }
		});
        
	}
    
}

