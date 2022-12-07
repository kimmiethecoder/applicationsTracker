import Column from "./Column.js";

export default class Kanban {
    constructor(root) {
        this.root = root;

        Kanban.columns().forEach(column => {
            const columnView = new Column(column.id, column.title);

            this.root.appendChild(columnView.elements.root);
        });
    }

    static columns() {
        return [
            {
                id: 1,
                title: "Company Name"
            },
            {
                id: 2,
                title: "Date Applied"
            },
            {
                id: 3,
                title: "Date Ended"
            },
            {
                id: 4,
                title: " Current Status"
            },
            {
                id: 5,
                title: "Date Rejected"
            },
            {
                id: 6,
                title: "Interview Date"
            },
            {
                id: 7,
                title: "Interview Status"
            },
            {
                id: 8,
                title: "Listing Link"
            },
            {
                id: 9,
                title: "Position / Title / Description"
            },
            {
                id: 10,
                title: "Contact Information"
            },
            {
                id: 11,
                title: "Additional Notes"
            },
        ];
    }
}