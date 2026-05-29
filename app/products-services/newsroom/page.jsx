import NewsHero from "./_sections/NewsHero"
import PressRelease from "./_sections/PressRelease"
import Recognition from "./_sections/Recognition"
import Events from "./_sections/Events"
import NewsLetter from "./_sections/NewsLetter";


export default function NewsRoom(){
    return (
       <div style={{marginTop:"88px"}}>
        <NewsHero/>
        <PressRelease/>
        <Recognition/>
        <Events/>
        <NewsLetter/>
       </div>
    )
}