import './src/css/app.scss';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

//gsap animation
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.spacer--animated-element',
    start: '-50% 80%',
    end: '200% 80%',
    scrub: true,
    markers: true,
  },
});

tl.to('.spacer--animated-element', {
  x: 800,
});

//smooth scroll
const lenis = new Lenis();

lenis.on('scroll', (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
