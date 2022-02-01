import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { SwiperContainer } from "./styles";

import GitHubIcon from '@mui/icons-material/GitHub';
import CallMadeIcon from '@mui/icons-material/CallMade';

import "swiper/css";
import "swiper/css/effect-cards";

// import axios and react hooks
import axios from "axios";
import { useState, useEffect } from "react";

export function CustomSwiper() {
    const [repos, setRepos] = useState([]);

    const getRepos = async () => {
        const res = await axios.get(
            "https://api.github.com/users/DaviLacerda/repos"
        );
        setRepos(res.data);
    };

    useEffect(() => {
        getRepos();
    }, []);

    return (
        <SwiperContainer>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {repos.map((repository, index) => {
                    return (
                        <SwiperSlide key={repository.id}>
                            <div className="slider__left">
                                <h3>{repository.name}</h3>
                                {repository.description && (
                                    <p>{repository.description}</p>
                                )}
                                {repository.topics.length ? (
                                    <div className="topics">
                                        <h3>Topics:</h3>
                                        {repository.topics.map(
                                            (topic, index) => {
                                                return (
                                                    <span key={index}>
                                                        {topic}
                                                    </span>
                                                );
                                            }
                                        )}
                                        {console.log(repository.topics)}
                                    </div>
                                ) : null}
                            </div>
                            <div className="slider__right">
                                {repository.language && (
                                    <span>
                                        Most language used:{" "}
                                        {repository.language}
                                    </span>
                                )}
                                {repository.homepage && (
                                    <a
                                        href={repository.homepage}
                                        target="_blank"
                                    >
                                        <p>Site</p>
                                        <CallMadeIcon className="animationIcon"/>
                                    </a>
                                )}
                                <a href={repository.html_url} target="_blank">
                                    <p>Repository</p>
                                    <GitHubIcon className="animationIcon"/>
                                </a>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </SwiperContainer>
    );
}
