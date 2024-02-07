//-----------------------Header slide------------------------//

ScrollTrigger.create({
    start: 'top -180',
    end: 99,
    toggleClass: {className: 'main-tool-bar--scrolled', targets: '.main-tool-bar'}
  });
  
  const showAnim = gsap.from('.main-tool-bar', { 
    yPercent: -110,
    paused: true,
    duration: 0.7
  }).progress(1);
  
  ScrollTrigger.create({
    start: "top top",
    end: 9,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
  });

  ScrollTrigger.create({
    start: 'bottom 80',
    end: 160,
    toggleClass: { className: 'container', targets: '.header'}
  })

  // gsap.fromTo( ".circle",{ x: -180, fill: 'white', }, { x: 180, fill: 'yellow' });

