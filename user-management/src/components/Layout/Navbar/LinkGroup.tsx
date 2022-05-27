import React from 'react'
import {createStyles} from '@mantine/core'

import {Link as RRLink, useMatch, useResolvedPath} from "react-router-dom"


const useStyles = createStyles((theme) => ({
    header: {
        color: theme.colorScheme === "dark" ? "#E3E3E3" : "#505050",
        fontWeight: "bold",
        fontSize: "14px",
        paddingLeft: "12px",
        height: "32px",
        display: "flex",
        alignItems: "center"
    },
    icon: {
        color: "#505050",
        width: "16px",
        height: "16px",
        paddingRight: "7px"
    },
    link: {
        textDecoration: "none",
        color: theme.colorScheme === "dark" ? "#E3E3E3" : "#505050",

        "&:hover": {

            color: theme.colorScheme === "dark" ? "#E3E3E3" : "#505050",
            textDecoration: "none"
        }
    },
    linkActive: {
        backgroundColor: theme.colorScheme === "dark" ? "#505050" : "#dcdcdc",

    },

    ul: {
        margin: 0,
        padding: 0,
        marginTop: "4px",
        marginBottom: "4px"
    },
    li: {
        fontSize: "14px",
        height: "32px",
        display: "flex",
        alignItems: "center",
        listStyle: "none",
        margin: 0,
        paddingLeft: "45px",
        ">a": {
            textDecoration: "none",
            color: "grey"
        }
    }

}))


type TLinkProps = {
    to: string,
    label: string
}

type TLinkGroupProps = {
    links: Array<TLinkProps>,
    label: string
}

function LinksGroup({links, label}: TLinkGroupProps) {
    const {classes, theme} = useStyles()

    return (
        <div>
            <div className={classes.header}>
                <span>{label}</span>
            </div>
            <ul className={classes.ul}>
                {links.map(link => <div className={classes.li}><a href={link.to}>{link.label}</a></div>)}
            </ul>
        </div>

    )
}


function Link({to, label}: TLinkProps) {
    const {classes, cx} = useStyles()
    let resolved = useResolvedPath(to)
    let match = useMatch({path: resolved.pathname, end: true})


    return <li className={cx(classes.li, {[classes.linkActive]: match})}>
        <RRLink className={classes.link} to={to}>{label}</RRLink>
    </li>
}

export { LinksGroup }