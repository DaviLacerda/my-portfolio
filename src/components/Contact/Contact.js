import { ContactContainer } from "./styles";
import { NeonBar } from "../NeonBar/NeonBar";
import { IconLink } from "../IconLink/IconLink";

// import social icons from mui/icons
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export function Contact() {
    return (
        <ContactContainer>
            <div className="contact__left">
                <h1>Davi Lacerda</h1>
                <h2>Front-End Developer</h2>
                <h3>Uberlândia, Minas Gerais - Brazil</h3>
            </div>
            <div className="contact__neonBar">
                <NeonBar />
            </div>
            <div className="contact__right">
                {/* Instagram */}
                <IconLink
                    link="https://www.instagram.com/davi.frontend/"
                    svg={<InstagramIcon />}
                />

                {/* WhatsApp */}
                <IconLink
                    link="https://api.whatsapp.com/send?phone=5534992750234&text=Ol%C3%A1%20Davi%2C%20tudo%20bem%3F"
                    svg={<WhatsAppIcon />}
                />

                {/* LinkedIn */}
                <IconLink
                    link="https://www.linkedin.com/in/davi16lacerda/"
                    svg={<LinkedInIcon />}
                />

                {/* Email */}
                <IconLink
                    link="mailto:davi16lacerda@gmail.com?subject=Digite%20o%20assunto%20aqui"
                    svg={<EmailIcon />}
                />

                {/* GitHub */}
                <IconLink
                    link="https://github.com/davilacerda"
                    svg={<GitHubIcon />}
                />
            </div>
        </ContactContainer>
    );
}
