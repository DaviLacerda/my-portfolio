// Import Components and Styled-Components
import {
    Presentation,
    PresentationLeft,
    PresentationRight,
    Circle,
    ReboundCircle,
    Technologies,
    TechPart,
    TechLanguages,
    SliderContainer,
} from "./styles";
import RoundedImage from "../../components/RoundedImage/RoundedImage";
import { TypingEffect } from "../../components/TypingEffect/TypingEffect";
import { CustomSwiper } from "../../components/CustomSwiper/Swiper";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { CurveText } from "../../components/CurveText/CurveText";
import ScrollReveal from "scrollreveal";

// Import Images
import DaviLacerda from "../../assets/DaviLacerda.jpeg";

export function Home() {
    ScrollReveal().reveal("#presentation", {
        origin: "bottom",
        delay: 600,
        distance: "50px",
    });

    ScrollReveal().reveal("#techContent", {
        origin: "bottom",
        delay: 600,
        distance: "50px",
    });

    ScrollReveal().reveal("#techLanguages", {
        origin: "bottom",
        delay: 600,
        distance: "50px",
    });

    ScrollReveal().reveal("#projects", {
        origin: "bottom",
        delay: 600,
        distance: "50px",
    });

    return (
        <>
            <Presentation id="presentation">
                <PresentationLeft>
                    <TypingEffect>Davi Lacerda</TypingEffect>
                    <h2>Front End Developer</h2>
                </PresentationLeft>

                <PresentationRight>
                    <RoundedImage
                        src={
                            `https://github.com/DaviLacerda.png` || DaviLacerda
                        }
                        alt="Davi Lacerda"
                        zIndex="1"
                    />
                    <Circle />
                </PresentationRight>
                <a href="#tech" className="arrowDown">
                    <ArrowDownwardIcon />
                </a>
                <CurveText />
            </Presentation>

            <Technologies id="tech">
                <ReboundCircle />
                <TechPart id="techContent">
                    <div className="content border">
                        <h2>About Me</h2>
                        <p>
                            I started studying programming in March 2020 when I
                            joined the faculty of computer science at the
                            Federal University of Uberlândia (UFU). In may I had
                            my first contact with front end development, and
                            since then I have decided that this is the area that
                            I want to be able to contribute in technology.
                        </p>
                    </div>

                    <div className="content">
                        <h2>Why i love Front End?</h2>
                        <p>
                            Since I was a child, I've always lived on the
                            internet, I stayed up playing video games and
                            watching videos on youtube. This passion for visual
                            things made me love the front end, I really enjoy
                            watching animations made with Css and Javascript
                            (JS), drawings made entirely with Css and I try
                            every day to add this to my personal projects, they
                            are small details that I think they make a total
                            difference when browsing the web
                        </p>
                    </div>
                </TechPart>

                <TechLanguages id="techLanguages">
                    <h2>Languages and Tools</h2>
                    <div className="icons">
                        {/* html5 */}
                        <abbr title="HTML5">
                            <img
                                src="https://media2.giphy.com/media/XAxylRMCdpbEWUAvr8/giphy.gif?cid=790b7611f5b78cee6d0974fcfc7c0c723b1c600346853961&rid=giphy.gif&ct=s"
                                alt="HyperText Markup Language (HTML)"
                            />
                        </abbr>

                        {/* css3 */}
                        <abbr title="CSS3">
                            <img
                                src="https://media4.giphy.com/media/fsEaZldNC8A1PJ3mwp/giphy.gif"
                                alt="Cascading Style Sheet (CSS)"
                            />
                        </abbr>

                        {/* javascript */}
                        <abbr title="JavaScript">
                            <img
                                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1622432919395/OStnZ-nKh.gif?auto=format,compress&gif-q=60&format=webm"
                                alt="JavaScript (JS)"
                            />
                        </abbr>

                        {/* react */}
                        <abbr title="ReactJS">
                            <img
                                src="https://i.giphy.com/media/eNAsjO55tPbgaor7ma/200w.webp"
                                alt="React JavaScript (ReactJS)"
                            />
                        </abbr>

                        {/* bootstrap */}
                        <abbr title="Bootstrap">
                            <img
                                src="https://media4.giphy.com/media/Sr8xDpMwVKOHUWDVRD/giphy.gif?cid=790b761179b71102898d646d04e8de917c7cee968266ce9a&rid=giphy.gif&ct=s"
                                alt="Bootstrap"
                            />
                        </abbr>

                        {/* material ui */}
                        <abbr title="MaterialUI">
                            <img
                                src="https://v4.material-ui.com/static/logo.png"
                                alt="Material UI (MUI)"
                            />
                        </abbr>

                        {/* tailwind css */}
                        <abbr title="Tailwind CSS">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                                alt="Tailwind CSS"
                            />
                        </abbr>
                    </div>
                </TechLanguages>
            </Technologies>

            <SliderContainer id="projects">
                <h2>My projects</h2>
                <CustomSwiper></CustomSwiper>
            </SliderContainer>
        </>
    );
}
