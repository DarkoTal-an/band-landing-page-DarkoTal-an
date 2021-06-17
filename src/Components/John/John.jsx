import React from 'react'

import { motion } from "framer-motion"
import "../MemberCard/Member.css"

export default function John() {
    return (
        <motion.div initial={{opacity:0, x:100, y:-100}}
        animate={{opacity:1, x:0, y:0}}
        transition={{duration: 1}}
        className="band-members">
            <h1>JOHN DENSMORE  </h1>
            <h3>Drummer for The Doors</h3>
            <div className="text">
                <img src="https://thedoors.com/wp-content/uploads/2016/02/bio-john-densmore.png" alt="" />
                <p>Drummer John Densmore was far more than merely the rhythmic engine of The Doors. Strongly influenced by jazz skinsmen like Elvin Jones and the supple grooves of the Brazilian wave, he brought a highly evolved sense of dynamics, structure and musicality to his beats.</p>
                <p>Inexorably drawn to music from childhood, Los Angeles-born Densmore honed his sense of dynamics playing with his high school marching band. In the mid-’60s he joined guitarist Robby Krieger in a band called Psychedelic Rangers; shortly thereafter they hooked up with keyboardist Ray Manzarek and Morrison, and an explosive chapter in the development of rock ‘n’ roll began. A raft of paradigm-shifting recordings and epochal live performances would follow.</p>
                <p>Morrison’s death in 1971 marked the end of an era, though the surviving trio recorded two more albums of songs and an instrumental backdrop for the late singer’s recorded poetry.</p>
                <p>The versatile musician explored reggae and jazz in subsequent projects, wrote books and articles and became active in L.A.’s adventurous theater community. He earned an L.A. Weekly Theatre Award for the music he created for the Tim Robbins-directed stage production Methusalem. He also co-produced the play Rounds, which was given the NAACP award for theatre in 1987.</p>
                <p>Densmore’s autobiography, Riders on the Storm: My Life With Jim Morrison and The Doors, was published in 1991 and was a New York Times bestseller. He’s written articles and essays for Rolling Stone, London Guardian, The Nation, and many nationally syndicated newspapers.</p>
                <p>Birth: December 1, 1944</p>
            </div>
        </motion.div>
    )
}
