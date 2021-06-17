import React from 'react'
import "../MemberCard/Member.css"
import { motion } from "framer-motion"

export default function Jim() {
    return (
        <motion.div 
        initial={{opacity:0, x:100, y:100}}
        animate={{opacity:1, x:0, y:0}}
        transition={{duration: 1}}
        className="band-members">
            <h1>JIM MORRISON</h1>
            <h3>Singer for The Doors</h3>
            
            <div      
            className="text">
                <img src="https://thedoors.com/wp-content/uploads/2016/02/bio-jim-morrison.png" alt="" />
                <p>At the center of The Doors’ mystique is the magnetic presence of singer-poet Jim Morrison, the leather-clad “Lizard King” who brought the riveting power of a shaman to the microphone.</p>
                <p>Morrison was a film student at UCLA when he met keyboardist Ray Manzarek on Venice Beach in 1965. Upon hearing Morrison’s poetry, Manzarek immediately suggested they form a band; the singer took the group’s name from Aldous Huxley’s infamous psychedelic memoir, “The Doors of Perception.”</p>
                <p>Constantly challenging censorship and conventional wisdom, Morrison’s lyrics delved into primal issues of sex, violence, freedom and the spirit. He outraged authority figures, braved intimidation and arrest, and followed the road of excess (as one of his muses, the poet William Blake, famously put it) toward the palace of wisdom.</p>
                <p>Over the course of six extraordinary albums and countless boundary-smashing live performances, he inexorably changed the course of rock music – and died in 1971 at the age of 27. He was buried in Paris, and fans from around the world regularly make pilgrimages to his grave.</p>
                <p>In 1978, the surviving members of the band – keyboardist Ray Manzarek, guitarist Robby Krieger and drummer John Densmore – reunited to record the accompanying music for An American Prayer, a compilation of Morrison’s poetry readings. He remains the very template of the rock frontman, and his singing, poetry and Dionysian demeanor continue to inspire artists and audiences around the world.</p>
                <p>Birth: December 8th, 1943</p>
                <p>Death: July 3, 1971</p>
            </div>

        </motion.div>
    )
}
