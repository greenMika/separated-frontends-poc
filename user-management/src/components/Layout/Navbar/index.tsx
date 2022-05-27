import React, {useState} from 'react'
import {createStyles, Navbar} from '@mantine/core'
import {LinksGroup} from "./LinkGroup"
import * as VulnerabilityManagerIcon from "../../../assets/smockFolder.svg"
import * as AssetMangerIcon from "../../../assets/smockDeviceLaptop.svg"
import * as SettingsIcon from "../../../assets/smockSettings.svg"
import * as SupportIcon from "../../../assets/smockHelp.svg"


const useStyles = createStyles((theme, _params, getRef) => {
    return {
        navbar: {
            backgroundColor: theme.colorScheme === "dark" ? "#181818" : "#F5F5F5",
            paddingTop: "37px",
            borderRight: theme.colorScheme === "dark" ? "1px solid #3E3E3E" : "1px solid #E0E0E0"
        }
    }
})


const linkGroups = [
    {
        label: "Scan Management", icon: VulnerabilityManagerIcon, links: [
            {to: "/scan-management", label: "Dashboard"},
            {to: "/scan-management/list", label: "All scans"},
            {to: "/scan-management/config", label: "Scan Configuration"},
            {to: "/scan-management/targets", label: "Targets"},
        ]
    },
    {
        label: "Reporting", icon: AssetMangerIcon, links: [
            {to: "/reporting", label: "Dashboard"},
            {to: "/reporting/assets", label: "All Assets"},
            {to: "/reporting/tags", label: "All Tags"},
        ]
    },
    {
        label: "User Management", icon: SettingsIcon, links: [
            {to: "/user-management", label: "All users"},
            {to: "/user-management/configuration", label: "Permissions"},
        ]
    },
]


export function NavbarSimple() {
    const {classes, cx} = useStyles()
    const [active, setActive] = useState('Home')


    return (
        <Navbar className={classes.navbar} width={{sm: 211}}>
            <Navbar.Section grow>
                {linkGroups.map(linkGroup => <LinksGroup label={linkGroup.label} links={linkGroup.links}/>)}
            </Navbar.Section>
        </Navbar>
    )
}