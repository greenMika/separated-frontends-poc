import {
    BrowserRouter,
    Routes,
    Route, useLocation,
} from "react-router-dom";
import App from "./App";
import {Layout} from "./components/Layout";
import {Dashboard} from "./pages/Dashboard";
import {Assets} from "./pages/Assets";
import {Tags} from "./pages/Tags";

export const Router = () => {
    return (
        <BrowserRouter basename={"/reporting"} >
            <Routes>
                <Route element={<Layout />}>
                    <Route path={"/"} element={<Dashboard />}/>
                    <Route path={"/assets"} element={<Assets />}/>
                    <Route path={"/tags"} element={<Tags />}/>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}