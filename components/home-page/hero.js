import Image from 'next/image'

import classes from './hero.module.css'

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                    src="/images/site/garfield01.png" 
                    alt="an image of me" 
                    width={300} 
                    height={300} 
                /> 
            </div>
            <h1>Hi, I'm Joy</h1>
            <p>I am studying web development - especially frontend frameworks like Vue and React.</p>
        </section>
    ) 
}

export default Hero;