import { useRef, useEffect } from "react"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Test = () => {

    const test = useRef(null);

    useEffect(() => {

        const elem = test.current;

        ScrollTrigger.saveStyles(".mobile, .desktop");

        ScrollTrigger.matchMedia({

            "(min-width: 1024px)": function () {

                gsap.fromTo(elem, { rotation: 0 }, {
                    duration: 80, scrollTrigger: {
                        trigger: elem,
                        start: 'top 80%',
                        end: 'top 30%',
                        scrub: 4,
                        toggleActions: 'restart none none none',
                        pin: true,

                    }
                })
            }
        })


    })

    return (
        <div>
            <h1 ref={test}>Test</h1>
        </div>
    )
}