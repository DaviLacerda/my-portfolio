// import swiper.js and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCards } from "swiper";
import { SwiperContainer } from "./styles";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

// import axios and react hooks
import axios from "axios";
import { useState, useEffect } from "react";

export function CustomSwiper() {
    const [repos, setRepos] = useState([]);
    const [colors, setColors] = useState([]);

    const cardLightMode = ['8257E5','efeff4'];
    const cardDarkMode = ['e5b657','0E0E10'];

    const getRepos = async () => {
        const res = await axios.get(
            "https://api.github.com/users/DaviLacerda/repos"
        );
        setRepos(res.data);
    };

    const getCardColors = () => {
        const currentTheme = localStorage.theme;
        currentTheme === 'lightMode' ? setColors(cardDarkMode) : setColors(cardLightMode)
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
                effect={"cards"}
                grabCursor={true}
                modules={[Pagination, EffectCards]}
                pagination={true}
                centeredSlides={true}
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
