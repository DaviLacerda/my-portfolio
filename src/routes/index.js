import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

// Import Pages
import { Home } from "../pages/Home/Home";
import { EasterEgg } from "../pages/EasterEgg/EasterEgg";

function RoutesSite() {
    return(
        <>
            <Router>
                <Routes>
                    <Route path='*' element={<Home/>}></Route>
                    <Route path="easteregg" element={<EasterEgg />}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default RoutesSite;