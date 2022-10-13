var hiddenArr = ['.pp_slide_1 .pp_element_1','.pp_slide_1 .pp_element_2','.pp_slide_1 .pp_element_3','.pp_slide_1 .pp_element_4','.pp_slide_1 .pp_element_5','.pp_slide_2 .pp_element_1','.pp_slide_2 .pp_element_2','.pp_slide_2 .pp_element_3'];

gsap.timeline({ defaults: { ease: "power1.inOut" },repeat:-1, delay:.8 })
    .fromTo('.pp_slide_1 .pp_element_1',{x:250}, {x:0, opacity: 1, display: "block", duration: 1 })
    .fromTo('.pp_slide_1 .pp_element_2',{x:180,y:40,scaleX:.25,scaleY:.25}, {x:0,y:0,scaleX:1,scaleY:1,rotate:-310, display: "block", duration: 1 },">-.4")
    .fromTo('.pp_slide_1 .pp_element_3',{display:'none'}, {display: "block", duration: .5 },">-.3")
    .fromTo('.pp_slide_1 .pp_element_4',{display:'none',rotate:50,x:20,scaleX:.95,scaleY:.95}, {x:0,scaleX:1,scaleY:1,display: "block",rotate:0, duration: .5,ease:Linear.easeNone },"<")
    .to('.pp_slide_1 .pp_element_2',{opacity:0, duration: .5 },"<")
    .fromTo('.pp_slide_1 .pp_element_5',{display:'none'}, {display: "block", duration: .5 },"<.3")
    .to('.pp_slide_1 .pp_element_5',{height:1200,width:1500,top:-350,left:-400, duration: .5 },">.1")
    .to('.pp_slide_1 .pp_element_4',{opacity:0, duration: .5 },"<-.1")
    .fromTo('.pp_slide_2 .pp_element_1',{display:'none',y:100}, {y:0,display: "block", duration: .5,ease: "elastic.out(1, 0.3)" },">")
    .fromTo('.pp_slide_2 .pp_element_2',{display:'none',y:-100}, {y:0,display: "block", duration: .7 },"<.2")
    .to('.pp_slide_2 .pp_element_2',{opacity:0, duration: .7 },">.8")
    .fromTo('.pp_slide_2 .pp_element_3',{display:'none',y:-100}, {y:0,display: "block", duration: .7 },">-.2")
    .to(hiddenArr, {display: "none", duration: .5 },">1.5")




