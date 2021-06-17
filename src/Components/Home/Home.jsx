import React from 'react'
import "./Home.css";
import { motion } from "framer-motion";


export default function Home() {
    return (
        <motion.div 
        initial={{opacity:0, x:0, y:0}}
        animate={{opacity:1, x:0, y:0}}
        transition={{duration: 2}} className="home">
            {/* <div><img src="https://thedoors.com/wp-content/uploads/2020/03/The-Doors-Logo-with-drop-shadow.png" alt="doors-name" /></div> */}
            <div>
                <h2>The Doors</h2>
                
                <p><img className="align-right"src="https://thedoors.com/wp-content/uploads/2020/03/bio-full-band4-768x714.png" alt="" />
                With an intoxicating, genre-blending sound, provocative and uncompromising songs, and the mesmerizing power of singer Jim Morrison’s poetry and presence, The Doors had a transformative impact not only on popular music but on popular culture.</p>
                <p>The Doors’ arrival on the rock scene in 1967 marked not only the start of a string of hit singles and albums that would become stone classics, but also of something much bigger – a new and deeper relationship between creators and audience. Refusing to be mere entertainers, the Los Angeles quartet relentlessly challenged, confronted and inspired their fans, leaping headfirst into the heart of darkness while other bands warbled about peace and love. Though they’ve had scores of imitators, there’s never been another band quite like them. And 50 years after their debut album, The Doors’ music and legacy are more influential than ever before.</p>
                <p>Morrison’s mystical command of the frontman role may be the iconic heart of The Doors, but the group’s extraordinary power would hardly have been possible without the virtuosic keyboard tapestries of Ray Manzarek, the gritty, expressive fretwork of guitarist Robby Krieger and the supple, dynamically rich grooves of drummer John Densmore. From baroque art-rock to jazz-infused pop to gutbucket blues, the band’s instrumental triad could navigate any musical territory with aplomb – and all three contributed mightily as songwriters.</p>
                <p>The group was born when Morrison and Manzarek – who’d met at UCLA’s film school – met again, unexpectedly, on the beach in Venice, CA, during the summer of 1965. Though he’d never intended to be a singer, Morrison was invited to join Manzarek’s group Rick and the Ravens on the strength of his poetry. Krieger and Densmore, who’d played together in the band Psychedelic Rangers, were recruited soon thereafter; though several bassists auditioned of the new collective, none could furnish the bottom end as effectively as Manzarek’s left hand. Taking their name from Aldous Huxley’s psychotropic monograph The Doors of Perception, the band signed to Elektra Records following a now-legendary gig at the Whisky-a-Go-Go on the Sunset Strip.</p>
                <p>Their eponymous first album, released in January 1967, kicked off with “Break on Through (to the Other Side)” and also featured the chart smash “Light My Fire”, the scorching “Back Door Man” and the visionary masterpiece “The End”. The Doors arrived fully formed, capable of rocking the pop charts and the avant-garde with one staggering disc. Before ’67 was over, they’d issued the ambitious follow-up Strange Days, with such gems as “Love Me Two Times”, “People Are Strange” and “When the Music’s Over”.</p>
                <p>Next came 1968’s Waiting for the Sun, boasting “Hello, I Love You”, “Love Street” and “Five to One”. Over the next few years they minded over new territory on such albums as 1969’s The Soft Parade (featuring “Touch Me” and “Tell All the People”), 1970’s Morrison Hotel (which includes “Roadhouse Blues”, “Peace Frog” and “Queen of the Highway”) and 1971’s L.A. Woman (boasting “Rider’s on the Storm”, “Love Her Madly” and the title track).</p>
                <p>They released six studio albums in all, as well as a live album and a compilation, before Morrison’s death in 1971. Their electrifying achievements in the studio and onstage were unmatched in the annals of rock; and though Morrison’s death meant the end of an era, Manzarek, Krieger and Densmore collaborated on two more original Doors albums, Other Voices and Full Circle, and a set of tracks they composed to accompany Morrison’s 1969 recording of his poetry, released in 1978 as An American Prayer. They also pursued individual music projects, books, theatrical productions and other enterprises – and remain restlessly creative to this day.</p>
                <p>In the decades since the Doors’ heyday, the foursome has loomed ever larger in the pantheon of rock – and they remain a touchstone of insurrectionary culture for writers, activists, visual artists and other creative communities. Their songs, featured in an ever-increasing number of films, TV shows, video games and remixes, always sound uncannily contemporary. No matter how the musical and cultural tides turn, The Doors will always be ready to help a new wave of listeners break on through to the other side.</p>
                <p className= "hall-of-fame">The Doors were inducted into the Rock & Roll Hall Of Fame in 1993.</p>
            </div>
        </motion.div>
    )
}
