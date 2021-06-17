import React from 'react'
import "../MemberCard/Member.css"
import { motion } from "framer-motion"


export default function Ray() {
    return (
        <motion.div initial={{opacity:0, x:-100, y:-100}}
        animate={{opacity:1, x:0, y:0}}
        transition={{duration: 1}}
        className="band-members">
            <h1>RAY MANZAREK</h1>
            <h3>Keyboardist for The Doors</h3>
            <div className="text">
                <img src="https://thedoors.com/wp-content/uploads/2016/02/bio-ray-manzarek.png" alt="" />
                <p>Ray Manzarek was the architect of The Doors’ intoxicating keyboard sound. Manzarek’s evocative playing fused rock, jazz, blues, bossa nova and an array of other styles into something utterly, dazzlingly new.</p>
                <p>The group was born in 1965, when Jim Morrison and Chicago native Manzarek — both UCLA film students — met on Venice Beach. The singer’s poetry was a perfect fit for the classically trained keyboardist’s musical ideas, and eventually they decided to form a band. Though several bassists auditioned for the group, none could match the bass lines provided by Manzarek’s left hand. Signed to Elektra Records, The Doors released six studio albums, a live album and a compilation before Morrison’s untimely demise in 1971.</p>
                <p>Manzarek, Krieger and Densmore released two albums as a trio under the Doors moniker, with Manzarek and Krieger handling vocals. Manzarek next formed the group Nite City, which invited comparisons to Mott the Hoople and Aerosmith; the quintet released its one album in 1977.</p>
                <p>The surviving Doors reunited to create a musical backdrop for Morrison’s recorded poetry on the 1978 release An American Prayer. Manzarek produced and performed on five of the L.A. band X’s albums, including Los Angeles, which remains one of the high-water marks of the punk movement. The keyboardist authored several books, and recorded numerous solo albums. Ray lived with his wife of 45 years, Dorothy, in Napa, CA until his passing in May of 2013 following his ultimately fatal bout with bile duct cancer.</p>
                <p>Birth: February 12, 1939</p>
                <p>Death: May 20, 2013</p>
            </div>
            
        </motion.div>
    )
}
