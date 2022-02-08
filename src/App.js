import RoutesSite from "./routes";
import { useState, useEffect } from "react";

// import Components
import { ThemeProvider } from "styled-components";
import { nightMode, lightMode, GlobalStyles } from "./GlobalStyles";
import { SwitchCustom } from "./components/SwitchCustom/SwitchCustom";
import ScrollReveal from "scrollreveal";

export function App() {
    if (!localStorage.theme) {
        localStorage.setItem("theme", "lightMode");
    }

    const [theme, setTheme] = useState("lightMode");

    const themeToggler = () => {
        if (theme === "lightMode") {
            window.localStorage.setItem("theme", "nightMode");
            setTheme("nightMode");
        } else {
            window.localStorage.setItem("theme", "lightMode");
            setTheme("lightMode");
        }
        
    };

    useEffect(() => {
        const localTheme = localStorage.theme;
        localTheme && setTheme(localTheme);

        ScrollReveal().reveal("section", {
            origin: "bottom",
            delay: 600,
            distance: "50px",
        });
    }, []);


    return (
        <ThemeProvider theme={theme === "lightMode" ? lightMode : nightMode}>
            <SwitchCustom onClick={themeToggler} />
            <GlobalStyles />
            <RoutesSite />
        </ThemeProvider>
    );
}
