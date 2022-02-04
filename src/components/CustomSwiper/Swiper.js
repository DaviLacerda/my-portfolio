// import swiper.js and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip     } from "swiper";
import { SwiperContainer } from "./styles";
import "swiper/css";
import "swiper/css/effect-flip";

// import axios and react hooks
import axios from "axios";
import { useState, useEffect } from "react";

export function CustomSwiper() {
    const [repos, setRepos] = useState([]);
    const [colors, setColors] = useState([]);

    const getRepos = async () => {
        const res = await axios.get(
            "https://api.github.com/users/DaviLacerda/repos"
        );
        setRepos(res.data);
    };

    const getCardColors = () => {
        const currentTheme = localStorage.theme;
        currentTheme === 'lightMode' ? setColors(['e5b657','0E0E10']) : setColors(['8257E5','efeff4'])
    }

    useEffect(() => {
        getRepos();
    }, []);

    useEffect(() => {
        getCardColors();
    }, [localStorage.theme]);
    

    return (
        <SwiperContainer>
            <Swiper
                effect={"flip"}
                grabCursor={true}
                modules={[EffectFlip]}
            >
                {repos.map((repository) => {
                    return (
                        <SwiperSlide key={repository.id}>
                            <a href={repository.html_url} target='_blank'>
                                <img src={`https://github-readme-stats.vercel.app/api/pin/?username=davilacerda&repo=${repository.name}&bg_color=${colors[0]}&border_color=${colors[0]}&title_color=${colors[1]}&text_color=${colors[1]}`} alt={`GitHub ${repository.name} Stats Card`}/>
                            </a>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </SwiperContainer>
    );
}
