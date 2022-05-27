import {createStyles, Table } from "@mantine/core";

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

const elements = [
    { assetCount: 143, criticalVulnerabilities: 20, date: Date.now(), id: "scan-1" },
    { assetCount: 658, criticalVulnerabilities: 12, date: Date.now(), id: "scan-2" },
    { assetCount: 345, criticalVulnerabilities: 1, date: Date.now(), id: "scan-3" },
    { assetCount: 26, criticalVulnerabilities: 124, date: Date.now(), id: "scan-4" },
    { assetCount: 151, criticalVulnerabilities: 83, date: Date.now(), id: "scan-5" },
];

function List() {
    const rows = elements.map((element) => (
        <tr key={element.id}>
            <td>{element.id}</td>
            <td>{element.assetCount}</td>
            <td>{element.criticalVulnerabilities}</td>
            <td>{new Date(element.date).toISOString()}</td>
            <td><a href={'/reporting/report/'+element.id}>Click</a></td>
        </tr>
    ));

    return (
        <Table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Assets scanned</th>
                <th>Critical Vulnerabilities</th>
                <th>Date</th>
                <th>Report</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );
}

const AllScans = () => {
    const {classes} = useStyles()
    return <div>
        <div className={classes.tabRow}>
            <span className={classes.tabItem}>
                All Scans
            </span>
            <span className={classes.tabItem}>
                Failed Scans
            </span>
        </div>
            <List />
    </div>
}

export default AllScans