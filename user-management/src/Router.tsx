import {
    BrowserRouter,
    Routes,
    Route, useLocation,
} from "react-router-dom";
import App from "./App";
import {Layout} from "./components/Layout";
import {Dashboard} from "./pages/Dashboard";
import {Permissions} from "./pages/Permissions";

export const Router = () => {
    return (
        <BrowserRouter basename={"/user-management"} >
            <Routes>
                <Route element={<Layout />}>
                    <Route path={"/"} element={<Dashboard />}/>
                    <Route path={"/configuration"} element={<Permissions />}/>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}