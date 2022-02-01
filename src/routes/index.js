import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

// Import Pages
import { Home } from "../pages/Home/Home";

function RoutesSite() {
    return(
        <>
            <Router>
                <Routes>
                    <Route path='*' element={<Home/>}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default RoutesSite;