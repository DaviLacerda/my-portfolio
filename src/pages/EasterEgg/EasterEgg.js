import { EasterEggContainer, Player } from "./styles"
import StarWarsTheme from '../../assets/starwarstheme.mp3'

export function EasterEgg(){
    const shouldIPlayAudio = () => {
        document.getElementById('audio').play();
        document.getElementById('starwars').classList.add('animation')
        document.getElementById('player').style.display = 'none'
    } 

    return (
        <>
            <audio id="audio">
                <source src={StarWarsTheme} type="audio/mp3"/>
            </audio>
            <Player onClick={shouldIPlayAudio} id="player"/>
            <EasterEggContainer>
                <div className="easter">
                    <div className="easter__content" id='starwars'>
                        <h1>Episode IV - A New Hope</h1>
                        <p>A long time ago, a child what called Davi born. The stars are saying he'll be a person can change the entire world and outer rim. This because he learned more about the front-end knowledges, in the jedi's books. With this ancestral knowledge, his is ready to development the biggest things in the unknown world World Wide Web, famous about your giant population with spaceships in and out in the world everyday. They're saying we'll have a revolution in the world in few years..</p>
                    </div>
                </div>
            </EasterEggContainer>
        </>
    )
}