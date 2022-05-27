import {createStyles} from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => {
    return {
        flexContainer: {
            display: "flex",
            justifyContent: "space-between"
        },
        content: {
            flex: 1,
            margin: "1em",
            border: "2px solid gray",
            borderRadius: "2px",
            height: "200px",
            textAlign: "center"
        }
    }
})

export const Dashboard = () => {
    const {classes} = useStyles()
    return <div>
        <div className={classes.flexContainer}>
            <div className={classes.content}>
                Specific User Metrics
            </div>
            <div className={classes.content}>
                User Data
            </div>
        </div>
        <div className={classes.content}>
            User List
        </div>
    </div>
}