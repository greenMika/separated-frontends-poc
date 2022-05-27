import {
    BrowserRouter,
    Routes,
    Route, useLocation,
} from "react-router-dom";
import App from "./App";

export const Router = () => {
    return (
        <BrowserRouter basename={"/user-management"} >
            <Routes>
                <Route path={"/test"} element={<span>TEST</span>}/>
                <Route path={"/app"} element={<App />}/>
            </Routes>
        </BrowserRouter>
    )
}