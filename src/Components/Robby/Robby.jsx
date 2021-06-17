import React from 'react'
import "../MemberCard/Member.css"
import { motion } from "framer-motion"


export default function Robby() {
    return (
        <motion.div initial={{opacity:0, x:-100, y:100}}
        animate={{opacity:1, x:0, y:0}}
        transition={{duration: 1}}
        className="band-members">
            <h1>ROBBY KRIEGER</h1>
            <h3>Guitarist for The Doors</h3>
            <div className="text">
                <img src="https://thedoors.com/wp-content/uploads/2016/02/bio-robbie-krieger.png" alt="" />
                <p>With a flair for wicked bottleneck slide, exploratory solos and gutbucket grooves, guitarist Robby Krieger brought a stinging, sinuous intensity to the sound of The Doors. But he was also a key songwriter in the band and penned some of their biggest hits – notably their mesmerizing #1 hit, “Light My Fire.”</p>
                <p>Before picking up the guitar at age 17, the L.A. native studied trumpet and piano. The inspiration for switching to guitar came not from rock ‘n’ roll, but Spanish flamenco music. His first guitar hero, however, was jazz legend Wes Montgomery.</p>
                <p>After Morrison’s death in 1971, Krieger, Manzarek and Densmore carried on as a trio. They released two more albums as the Doors before calling it quits in 1973, though they did reconvene a few years later to create music for poetry Morrison had recorded shortly before his death, released as the 1978 album An American Prayer.</p>
                <p>Krieger went on to enjoy success as a jazz guitarist, recording a handful of records with the Robby Krieger Band in the 1970s and ’80s. Versions (1983) and No Habla(1986) amply demonstrate his versatility. “I think playing guitar is probably the one thing that gets better with age,” he says.Robby Krieger is listed among Rolling Stone’s “100 Greatest Guitarists of All Time.”</p>
                <p>Birth: January 8, 1946</p>
                
            </div>
            
        </motion.div>
    )
}
