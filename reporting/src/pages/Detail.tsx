import {createStyles} from "@mantine/core";
import {useParams} from "react-router-dom";

const elements = [
    { assetCount: 143, criticalVulnerabilities: 20, date: Date.now(), id: "scan-1" },
    { assetCount: 658, criticalVulnerabilities: 12, date: Date.now(), id: "scan-2" },
    { assetCount: 345, criticalVulnerabilities: 1, date: Date.now(), id: "scan-3" },
    { assetCount: 26, criticalVulnerabilities: 124, date: Date.now(), id: "scan-4" },
    { assetCount: 151, criticalVulnerabilities: 83, date: Date.now(), id: "scan-5" },
];

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

export const Detail = () => {
    const {classes} = useStyles()
    const params = useParams()
    const report = elements.find(e => e.id === params.id)
    return <div>
        <div className={classes.content}>
            <h1>ID: {report?.id}</h1>
            <ul>
                <li>ASSET COUNT: {report?.assetCount}</li>
                <li>TOTAL VULNERABILITIES: {(report?.criticalVulnerabilities || 0) * 12}</li>
                <li>CRITICAL VULNERABILITIES: {report?.criticalVulnerabilities}</li>
                <li>DATE: {new Date(report?.date || Date.now()).toISOString()}</li>
            </ul>
        </div>
    </div>
}