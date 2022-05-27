import {createStyles} from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => {
    return {
        flexContainer: {
            display: "flex",
            justifyContent: "space-between"
        },
        tabRow: {
            display: "flex",
            justifyContent: "flex-start",
            border: "2px solid black",
            margin: "1em"
        },
        tabItem: {
            padding: "1em",
            borderRight: "1px solid black"
        },
        content: {
            flex: 1,
            margin: "1em",
            border: "2px solid gray",
            borderRadius: "2px",
            height: "500px",
            textAlign: "center"
        }
    }
})

const Config = () => {
    const {classes} = useStyles()
    return <div>
        <div className={classes.tabRow}>
            <span className={classes.tabItem}>
                Scan Config
            </span>
            <span className={classes.tabItem}>
                Target Config
            </span>
        </div>
        <div className={classes.content}>

        </div>
    </div>
}

export default Config