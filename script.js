function loco(){
    gsap.registerPlugin(ScrollTrigger);

    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".containers"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy(".containers", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector(".containers").style.transform ? "transform" : "fixed"
    });
    
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
    
}
// loco()

function  loader(){
  var  tl =  gsap.timeline()
  tl.to(".loader",{
    transform:"skewZ(-40deg)",
    y:"-100%",
    opacity:0,
    delay:0.2,
    duration:1,
    ease:"power3.inOut",

  })
  tl.from(".heading",{
    opacity:0,
     scale:0,
    transform:"skewX(-40deg)",
    duration:.9,
    ease:"power3.inOut",


  })
  tl.from(".peratext p ,.icons ,.get , .work, .video ",{
  y:100,
  opacity:0,

  stagger:{
    amount:0.3
  },
  duration:1,
  ease:"power3.inOut",
 })

}
loader()




function cursore(){
  Shery.mouseFollower({
    skew: false,
    ease: "Power5",
    duration: 0.6,

  });
  Shery.makeMagnet(".work , .get , .mode , #sound, .hamburgerbox,.view ,.about,#project, .let  ,.uparrow  ,.arrow", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.6,
    scale:1.2
  });
}
cursore()

var bihindcusore =  document.querySelector("#behindmouse");
var cusore =  document.querySelector(".behindmouse");
var card =  document.querySelectorAll(".viewmore")
card.forEach( e =>{
  e.addEventListener("mouseenter", ()=>{
    gsap.to(bihindcusore, {
      scale:5,
      filter: "blur(1px)",
      duration:0.3,
    })
  
  })
  e.addEventListener("mouseleave", ()=>{
    gsap.to(bihindcusore,{
      scale:1,
      filter: "blur(0px)",
      duration:0.3,

      })
  })
})


gsap.to(".video",{
  y:"20%",
  height:"100vh",
  width:"90%",
  borderRadius:"28px",
  duration:1,
  ease:"linear",
  scrollTrigger:{
    trigger:".video",
    scroller:"body",
    start:"0% 70% ",
    end:"0% 30%",
    // markers:true,
    scrub:2
  }
})
gsap.from(".logosvg", {
  x:"100vh",
  scrollTrigger: {
    trigger: ".second",
    scroller: "body",
    start: "70% center",
    end: "70% center",
    scrub: 1,
    pin: true,
    scrub: 3,
  }
});
gsap.from(".logosvg", {
  y: "-100%",
  scrollTrigger: {
    trigger: ".logosvg",
    scroller: "body",
    start: "top center",
    end: "top -1210%",
    scrub: 1,
    pin: true,
    scrub: 3,
  }
});

var tl  =  gsap.timeline()
tl.from(".headings #heading1",{
  x: "10%",
  stagger:{
    amount:0.1,
  },
  duration:1,
  ease:"Power5",
  scrollTrigger:{
    trigger:".headings",
    scroller:"body",
    start:"top 80%",
    end:"top 20%",
    scrub:1,
  }
})
tl.from(".headings #heading2",{
  x: "40%",
  stagger:{
    amount:0.1,
  },
  duration:1,
  ease:"Power5",
  scrollTrigger:{
    trigger:".headings",
    scroller:"body",
    start:"top 80%",
    end:"top 20%",
    scrub:1,
  }
})
tl.to(".heading .slide",{
  x: "100%",
  stagger:{
    amount:0.1,
  },
  duration:1,
  ease:"Power5",
  scrollTrigger:{
    trigger:".headings",
    scroller:"body",
    start:"top 70%",
    end:"top 20%",
    scrub:1,
  }
})
tl.from(".pera div p , .pera .right .work",{
   y:"10vh",
   stagger:{
    amount:0.1,
  },
  duration:0.5,
  ease:"Power5",
  scrollTrigger:{
    trigger:".headings",
    scroller:"body",
    start:"top 40%",
    end:"top 0%",
    scrub:1,
  }

})

document.querySelectorAll('.wraper, .wraper1').forEach((element, index) => {
  var timeline = gsap.timeline({
      scrollTrigger: {
          trigger: element,
          scroller: "body",
          start: "top 70%",
          end: "top 0%",
          scrub: 1,
      }
  });
  timeline.from(element.querySelector('.left'), {
      y: "100%",
      duration: 1,
      ease: "Power5",
  }, "same");

 
  gsap.fromTo(".viewmore1", 
    {
      x: "100%" ,
      rotation: 30 ,
    },
    {
      x: "0%",
      rotation:0, 
      duration: 1,
      ease: "power5",
      scrollTrigger: {
        trigger: "#wraper1", 
        scroller: "body", 
        start: "top 50%", 
        end: "30% 50%", 
        scrub: 3, 
      }
    }
  );
  gsap.fromTo(".viewmore2", 
    {
      x: "-100%" ,
      rotation: -30 ,
    },
    {
      x: "0%",
      rotation:0, 
      duration: 1,
      ease: "power5",
      scrollTrigger: {
        trigger: "#wraper2", 
        scroller: "body", 
        start: "top 50%", 
        end: "30% 50%", 
        scrub: 3, 
      }
    }
  );


  gsap.fromTo(".viewmore3", 
    {
      x: "100%" ,
      rotation: 30 ,
    },
    {
      x: "0%",
      rotation:0, 
      duration: 1,
      ease: "power5",
      scrollTrigger: {
        trigger: "#wraper3", 
        scroller: "body", 
        start: "top 50%", 
        end: "30% 50%", 
        scrub: 3, 
        // markers: true 
      }
    }
  );


});





function five (){

  var tl  = gsap.timeline()
  tl.from(".fiveheading #heading1",{
    x: "-90%",
    duration:1,
    ease:"Power5",
    scrollTrigger:{
      trigger:".fiveheading",
      scroller:"body",
      start:"top 80%",
      end:"top 20%",
      scrub:1,
    }
  })
  tl.from(".fiveheading #heading2",{
    x: "-30%", 
    duration:1,
    ease:"Power5",
    scrollTrigger:{
      trigger:".fiveheading",
      scroller:"body",
      start:"top 80%",
      end:"top 20%",
      scrub:1,
    }
  })
  tl.to(".fiveheading .heading .slide2",{
    x: "100%",
    stagger:{
      amount:0.1,
    },
    duration:1,
    ease:"Power5",
    scrollTrigger:{
      trigger:".fiveheading",
      scroller:"body",
      start:"top 70%",
      end:"top 20%",
      scrub:1,
    }
  })
  tl.from(".fivepera div p ",{
    y:"10vh",
    stagger:{
     amount:0.1,
   },
   duration:0.5,
   ease:"Power5",
   scrollTrigger:{
     trigger:".fiveheading",
     scroller:"body",
     start:"top 30%",
     end:"top 0%",
     scrub:1,
    //  markers:true,
   }
 
 })
   tl.from(".fivesecondpera p  , .about",{
    y:"100%",
    opacity:0,
    duration:2,
    stagger:{
     each:2,
   },
   duration:0.5,
   ease:"Power5",
   scrollTrigger:{
     trigger:".fivesecondpera",
     scroller:"body",
     start:"top 80%",
     end:"top 50%",
     scrub:1,
   }
 
 })
}
five()
 function  six(){
  document.querySelectorAll(".up h1").forEach((h1Element) => {
    let text = h1Element.textContent.trim(); 
    let clutter = ""; 
  
    for (let char of text) {
        clutter += `<span class="clutter inline-block">${char}</span>`; 
    }
    h1Element.innerHTML = clutter; 
  });
  
  document.querySelectorAll(".card").forEach((cardElement) => {
    cardElement.addEventListener("mouseenter", () => {
        let upElement = cardElement.querySelector(".up");
        let clutterSpans = upElement.querySelectorAll(".clutter");
        
        gsap.to(clutterSpans, {
            y: "-110%",
            stagger: {
                amount: 0.4
            },
            duration: 0.8,
            ease: "Power5"
        });
    });
  
    cardElement.addEventListener("mouseleave", () => {
        let upElement = cardElement.querySelector(".up");
        let clutterSpans = upElement.querySelectorAll(".clutter");
        
        gsap.to(clutterSpans, {
            y: "0%",
            stagger: {
                amount: 0.4
            },
            duration: 0.8,
            ease: "Power5"
        });
    });
  });


  

gsap.fromTo(".card1", 
  {
    x: "-100%" ,
    rotation: -30 ,
  },
  {
    x: "0%",
    rotation:0, 
    duration: .4,
    ease: "none",
    scrollTrigger: {
      trigger: ".cardpair", 
      scroller: "body", 
      start: "top 70%", 
      end: "top 60%", 
      scrub: 0.5,
    }
  }
);
gsap.fromTo(".card2", 
  {
    x: "100%" ,
    rotation: 30 ,
  },
  {
    x: "0%",
    rotation:0, 
    duration: .6,
    ease: "none",
    scrollTrigger: {
      trigger: ".cardpair", 
      scroller: "body", 
      start: "top 70%", 
      end: "top 60%", 
      scrub: 1,
    }
  }
);
gsap.fromTo(".card3", 
  {
    x: "-100%" ,
    rotation: -30 ,
  },
  {
    x: "0%",
    rotation:0, 
    duration: .6,
    ease: "Power5",
    scrollTrigger: {
      trigger: ".cardpair", 
      scroller: "body", 
      start: "top 50%", 
      end: "20% 40%", 
      scrub: 1,
    }
  }
);
gsap.fromTo(".card4", 
  {
    x: "100%" ,
    rotation: 30 ,
  },
  {
    x: "0%",
    rotation:0, 
    duration: .6,
    ease: "Power5",
    scrollTrigger: {
      trigger: ".cardpair", 
      scroller: "body", 
      start: "80% 70%", 
      end: "80% 60%", 
      scrub: 1,
    }
  }
);

  
 }

 six()

 function seven(){
 
    const slides = document.querySelectorAll('.slides');
    const slides1 = document.querySelectorAll('.slides1');

    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
         
            slides.forEach(slide => {
                slide.style.animation = 'slide 25s infinite linear';
            });
            slides1.forEach(slide => {
                slide.style.animation = 'slide 25s infinite linear reverse';
            });
        } else {
           
            slides.forEach(slide => {
                slide.style.animation = 'slideReverse 25s infinite linear';
            });
            slides1.forEach(slide => {
                slide.style.animation = 'slideReverse 25s infinite linear reverse';
            });
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    });

 




  let tlSlides = gsap.timeline({ repeat: -1, defaults: { ease: "linear" } });
  let tlSlides1 = gsap.timeline({ repeat: -1, defaults: { ease: "linear" } });

  slides.forEach(slide => {
      tlSlides.to(slide, { x: '-100%', duration: 25 }, 0);
  });

  slides1.forEach(slide => {
      tlSlides1.to(slide, { x: '100%', duration: 25 }, 0);
  });

  window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop) {
          tlSlides.timeScale(1).play();
          tlSlides1.timeScale(1).play();
      } else {
          tlSlides.timeScale(1).reverse();
          tlSlides1.timeScale(1).reverse();
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
  });



const cursor = document.getElementById('cursore');

cursor.style.opacity = 0;

document.addEventListener('mousemove', (event) => {
    const rect = cursor.getBoundingClientRect();
    const offsetX = rect.width / 2 + 300;
    const offsetY = rect.height / 2;

    gsap.to(cursor, {
        duration: 0.2,
        x: event.clientX - offsetX,
        y: event.clientY - offsetY,
        ease: 'power3.out'
    });
});
document.querySelectorAll(".wraper").forEach((wraper) =>{
  wraper.addEventListener("mouseenter", (event) => {
    gsap.to(cursor, {
        scale:1,
        opacity:1,
        duration: 0.2,
        ease: 'power3.out'
    });
  });
  wraper.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
        scale:0,
        opacity:0,
        duration: 0.2,
        ease: 'power3.out'
    });
  });
})
}
seven()



function nine(){
  var tl  = gsap.timeline()
  tl.from(".nineheadings #heading1",{
    x: "-30%",
    duration:1,
    ease:"Power5",
    scrollTrigger:{
      trigger:".nineheadings",
      scroller:"body",
      start:"top 80%",
      end:"top 20%",
      scrub:1,
    }
  })
  tl.from(".nineheadings #heading2",{
    x: "-30%", 
    duration:1,
    ease:"Power5",
    scrollTrigger:{
      trigger:".nineheadings",
      scroller:"body",
      start:"top 80%",
      end:"top 20%",
      scrub:1,
    }
  })
  tl.from(".nineheadings #heading3",{
    x: "50%", 
    duration:1,
    ease:"Power5",
    scrollTrigger:{
      trigger:".nineheadings",
      scroller:"body",
      start:"top 80%",
      end:"top 10%",
      scrub:1,
    }
  })
  tl.to(".nineheadings .heading .slide3",{
    x: "100%",
    stagger:{
      amount:0.1,
    },
    duration:1,
    ease:"Power5",
    scrollTrigger:{
      trigger:".nineheadings",
      scroller:"body",
      start:"top 60%",
      end:"top 20%",
      scrub:1,
    }
  })
}

nine()
function fotter(){
  var tl  = gsap.timeline()
  tl.from(".fotterheadings #heading1",{
    x: "-50%",
    duration:1,
    ease:"Power5",
    scrollTrigger:{
      trigger:".fotterheadings",
      scroller:"body",
      start:"top 80%",
      end:"top 20%",
      scrub:1,
    }
  })
  tl.from(".fotterheadings #heading2",{
    x: "-100%", 
    duration:1,
    ease:"Power5",
    scrollTrigger:{
      trigger:".fotterheadings",
      scroller:"body",
      start:"top 75%",
      end:"top 20%",
      scrub:1,
    }
  })

  tl.to(".fotterheadings .heading .slide",{
    x: "100%",
    stagger:{
      amount:0.2,
    },
    duration:1,
    ease:"Power5",
    scrollTrigger:{
      trigger:".fotterheadings",
      scroller:"body",
      start:"top 50%",
      end:"top 10%",
      scrub:1,
    }
  })
}

fotter()



document.addEventListener("DOMContentLoaded", () => {
  var fotterimg = document.querySelector('.fotterimg');
  var pos = document.documentElement;

  function moveOverlay(e) {
    var rect = fotterimg.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top; 

    pos.style.setProperty('--x', x + 'px');
    pos.style.setProperty('--y', y + 'px');
  }

  fotterimg.addEventListener("mouseenter", () => {
    fotterimg.addEventListener("mousemove", moveOverlay);
  });

  fotterimg.addEventListener("mouseleave", () => {
    fotterimg.removeEventListener("mousemove", moveOverlay);
  });
 
});

var fotterimg = document.querySelector('.overlay');
var torch = document.querySelector('.thouch');

fotterimg.addEventListener("mousemove", (e) => {
  var rect = fotterimg.getBoundingClientRect();
  var x = e.clientX - rect.left - 750; 
  var y = e.clientY - rect.top - 200; 
  
  gsap.to(torch,
     { x: x,
       y: y,
      duration: 0.1, 
      ease: "power2.out"
     });
});
fotterimg.addEventListener("mouseenter", () => {
  gsap.to(torch, 
    {
      duration: 0.5,
      ease: "power2.out" ,
      opacity:1,
    });
    gsap.to("#behindmouse",{
      opacity:0,
      duration: 0.1,

    })
});

fotterimg.addEventListener("mouseleave", () => {
  gsap.to(torch, 
    {
      duration: 0.5,
      ease: "power2.out" ,
      opacity:0,
    });
    gsap.to("#behindmouse",{
      opacity:1,
      duration: 0.1,

    })
});



function  darkandlightmode(){
  var light = document.querySelector(".light");
  var dark = document.querySelector(".dark");
  const modeToggle = document.getElementById("modeToggle");
  const containers = document.querySelector(".containers");
  const headings = document.querySelectorAll(".heading");
  const line = document.querySelectorAll(".line");
  let pera = document.querySelectorAll(".peratext p");  


  let isDarkMode = true; 

  modeToggle.addEventListener("click", () => {
    isDarkMode = !isDarkMode; 
    
    if (isDarkMode) {
      containers.style.backgroundColor = 'var(--darkmode)';
      headings.forEach(mode => {
        mode.style.color = 'var(--lightmode)';
      });  
      
      gsap.to(".logotext",{
        color: 'var(--lightmode)', 
      })
      gsap.to("#behindmouse",{
        backgroundColor: 'var(--darkcursur)', 
        duration: 0.3,
       
      })
      gsap.to(".navbar .right .menu",{
        color: 'var(--lightmode)', 
        duration: 0.3,
       
      })
      gsap.to(".right .hamburgerline",{
        backgroundColor: 'var(--lightmode)', 
        duration: 0.3,
       
      })
      
      line.forEach( mode => {
        mode.style.backgroundColor = 'var(--lightmode)';
      });

      pera.forEach(mode => {
        mode.style.color = 'var(--lightmode)';
      });  
      gsap.to(".icons .arrow, .icons .h-fit", {
        color: 'var(--lightmode)', 
        duration: 0.3,
        borderColor: 'var(--lightmode)', 
        stagger: {
          amount: 0.3
        }
      });
      gsap.to(".links .get a ,.links .work a",{
        color: 'var(--lightmode)', 
        duration: 0.3,
        borderColor: 'var(--lightmode)', 
        stagger: {
          amount: 0.3
        }
      })
      gsap.to("#shadow", {
        backgroundColor: 'var(--darkshadow)',
        duration: 0.3
      });
      gsap.to(".pera p , .pera .right .work a", {
        borderColor: 'var(--lightmode)', 

        color: 'var(--lightmode)',  
        
      })
      gsap.to(".four .wraper .left h1 , .four .wraper .left .btn a" ,{
        color:"var(--lightmode)",
        borderColor: 'var(--lightmode)', 
      })
      gsap.to(".four .wraper1 .left h1 , .four .wraper1 .left .btn a" ,{
        color:"var(--lightmode)",
        borderColor: 'var(--lightmode)', 
      })
      gsap.to(".fivepera p",{
        color: 'var(--lightmode)',  
      })
      gsap.to(".fivepera p ,.fivesecondpera p , .fivesecondpera .about  a",{
        color: 'var(--lightmode)', 
        borderColor: 'var(--lightmode)', 
      })
  
      gsap.to(".seven .wraper .slides h1  ",{
        color:"var(--lightmode)",
      })
      gsap.to(".seven #cursore", {
        backgroundColor: "var(--darkcursur)",
        duration: 0.3 
      });
      gsap.to(".eight .dribbale .pera p , .eight .dribbale .view a ", {
        color:"var(--lightmode)",
        borderColor:"var(--lightmode)",

    });
    gsap.to(".socials .social , .socials .social   h1  ",{
      color:"var(--lightmode)",
      borderColor:"var(--lightmode)",
    })
    gsap.to(".let a  ",{
      color:"var(--darkmode)",
      backgroundColor:"var(--darkcursur)",
      borderColor:"var(--lightmode)"
      
     })
     gsap.to(".fotter .coantact #fotterborder",{
      borderColor:"var(--lightmode)"

     })
     gsap.to(" .fotter .coantact h1 , p",{
       
      color:"var(--lightmode)",
     })
     gsap.to(".liftblur",{
      backgroundColor:"var(--darkcursur)",

    })
    gsap.to(" .fotterimg .overlay",{    
      backgroundColor:"var(--darkmodeovelay)",
    })
    gsap.to("path",{    
      stroke:"var(--darkstrok)",
    })
   
  
  
  
     
  
    
      light.style.display = 'initial'; 
      dark.style.display = 'none'; 
     
    }
    
    
    
    
    else {
      containers.style.backgroundColor = 'var(--lightmode)';
      headings.forEach(mode => {
        mode.style.color = 'var(--darkmode)';
      });
      gsap.to("#behindmouse",{
        backgroundColor: 'var(--lightcursur)', 
        duration: 0.3,
       
      })
          
      gsap.to(".logotext",{
        color: 'var(--darkmode)', 
      })
      gsap.to(".navbar .right .menu",{
        color: 'var(--darkmode)', 
        duration: 0.3,
       
      })
      gsap.to(".right .hamburgerline",{
        backgroundColor: 'var(--darkmode)', 
        duration: 0.3,
       
      })
      line.forEach( mode => {
        mode.style.backgroundColor = 'var(--darkmode)';
      }); 
      pera.forEach(mode => {
        mode.style.color = 'var(--darkmode)';
      });   
      gsap.to(".icons .arrow, .icons .h-fit", {
        color: 'var(--darkmode)', 
        duration: 0.3,
        borderColor: 'var(--darkmode)', 
        stagger: {
          amount: 0.3
        }
      });
      gsap.to(".links .get a ,.links .work a",{
        color: 'var(--darkmode)', 
        duration: 0.3,
        borderColor: 'var(--darkmode)', 
        stagger: {
          amount: 0.3
        }
      })
      gsap.to("#shadow", {
        backgroundColor: 'var(--lightshadow)',
        duration: 0.3
      });
      gsap.to("* .pera p , .pera .right .work a", {
        borderColor: 'var(--darkmode)', 

        color: 'var(--darkmode)', 
        
      })
      gsap.to(".four .wraper .left h1 , .four .wraper .left .view a" ,{
        color:"var(--darkmode)",
        borderColor: 'var(--darkmode)', 
      })
      gsap.to(".four .wraper1 .left h1 , .four .wraper1 .left .view a" ,{
        color:"var(--darkmode)",
        borderColor: 'var(--darkmode)', 
      })
      gsap.to(".fivepera p ,.fivesecondpera p , .fivesecondpera .about  a",{
        color: 'var(--darkmode)', 
        borderColor: 'var(--darkmode)', 
 
      })
    
      gsap.to(".seven #cursore", {
        backgroundColor: "var(--lightcursur)",
        duration: 0.3 
      });
      gsap.to(".eight .dribbale .pera  p , .eight .dribbale .view a", {
          color: 'var(--darkmode)', 
          borderColor:"var(--darkmode)",
      });
      gsap.to(".socials .social,.socials .social   h1  ",{
          color:"var(--darkmode)",
          borderColor:"var(--darkmode)"
          
      })
      gsap.to(".let a ",{
        color:"var(--lightmode)",
        backgroundColor:"var(--darkmode)",
        borderColor:"var(--darkmode)"
      })
     gsap.to(".fotter .coantact #fotterborder",{
      borderColor:"var(--darkmode)"
     })
    gsap.to(" .fotter .coantact h1 , p",{ 
      color:"var(--darkmode)",
     }) 
    gsap.to(".liftblur",{
      backgroundColor:"var(--lightcursur)",

    })
     gsap.to(" .fotterimg .overlay",{
      backgroundColor:"var(--lightmodeovelay)",
     })
     gsap.to("path", {    
      stroke: "var(--lightstrok)",
      duration: 1 // Add a duration for the animation
    });
   
  
  
  
        
  
    
    
      


      light.style.display = 'none'; 
      dark.style.display = 'initial'; 

   
    }
  });
}
darkandlightmode()



function  eight(){
  gsap.to(".projects1",{
    x:"-80%",
    y:"30%",
    rotation:"-30deg",
    duration: 1,
    ease: "power5",
   scrollTrigger:{
    trigger: ".eight",
    start: "10% 50%",
    end: "100% 40%r",
    scrub: 1,
 
   }
  })
  gsap.to(".projects2",{
    x:"80%",
    y:"30%",
    rotation:"30deg",
    duration: 1,
    ease: "power5",
   scrollTrigger:{
    trigger: ".eight",
    start: "10% 50%",
    end: "100% 40%r",
    scrub: 1,

   }
  })
  gsap.to(".projects3",{
    x:"-60%",
    y:"-5%",
    rotation:"-30deg",
    duration: 1,
    ease: "power5",
   scrollTrigger:{
    trigger: ".eight",
    start: "10% 50%",
    end: "100% 40%r",
    scrub: 1,

   }
  })
  gsap.to(".projects4",{
    x:"60%",
    y:"-5%",
    rotation:"30deg",
    duration: 1,
    ease: "power5",
   scrollTrigger:{
    trigger: ".eight",
    start: "10% 50%",
    end: "100% 40%r",
    scrub: 1,
    
   }
  })
  gsap.to(".projects5",{
    x:"-20%",
    y:"-30%",
    rotation:"-10deg",
    duration: 1,
    ease: "power5",
   scrollTrigger:{
    trigger: ".eight",
    start: "10% 80%",
    end: "100% 50%r",
    scrub: 1,

   }
  })
  gsap.to(".projects6",{
    x:"20%",
    y:"-30%",
    rotation:"10deg",
    duration: 1,
    ease: "power5",
   scrollTrigger:{
    trigger: ".eight",
    start: "10% 80%",
    end: "100% 50%r",
    scrub: 1,
   }
  })
}
eight()

