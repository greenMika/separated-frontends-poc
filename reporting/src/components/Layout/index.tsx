import {Outlet} from "react-router-dom"
import {AppShell} from "@mantine/core"
import {HeaderMenuColored} from "./Header"
import {NavbarSimple} from "./Navbar"


export const Layout = () => {
    return (
        <AppShell
            style={{height: "100vh"}}
            styles={(theme) => ({
                main: {backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]},
            })}
            header={<HeaderMenuColored/>}
            navbar={<NavbarSimple/>}
        >
            <div style={{overflowY: "auto", height: "calc(100vh - 37px - 32px)"}}>
                <Outlet/>
            </div>
        </AppShell>
    )
}