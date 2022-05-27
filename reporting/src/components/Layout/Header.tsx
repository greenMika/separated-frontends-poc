import React from 'react'
import {ActionIcon, Container, createStyles, Header, useMantineColorScheme} from '@mantine/core'
import gbLogo from "../../assets/gbLogo.png"


const useStyles = createStyles((theme) => ({
    header: {
        backgroundColor: "#171717",
        borderBottom: "1px solid #3E3E3E",
    },

    inner: {
        color: theme.colors["gray"][theme.colorScheme === 'dark' ? 9 : 1],
        height: 37,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.white,
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5],
        },
    },

    linkLabel: {
        marginRight: 5,
    },

    actionButton: {
        color: theme.colors["gray"][theme.colorScheme === 'dark' ? 1 : 1],
        border: "none"
    }
}))

const ToggleColorScheme = () => {
    const {colorScheme, toggleColorScheme} = useMantineColorScheme()
    const dark = colorScheme === 'dark'
    const {classes} = useStyles()

    return (
        <ActionIcon
            className={classes.actionButton}
            variant="outline"
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
        >
        </ActionIcon>
    )
}

export function HeaderMenuColored() {
    const {classes} = useStyles()

    return (
        <Header height={37} className={classes.header}>
            <Container fluid className={classes.inner}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
                    <img style={{height: "26px", margin: 0, marginTop: "-4px"}}
                         src={gbLogo}
                         alt=""/>
                    <ToggleColorScheme/>
                </div>
            </Container>
        </Header>
    )
}