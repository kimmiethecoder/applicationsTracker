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
                title: "Applications"
            },
            {
                id: 2,
                title: "Submitted"
            },
            {
                id: 3,
                title: "Responses"
            },
            {
                id: 4,
                title: "Interviews"
            },
            {
                id: 5,
                title: "Rejections"
            },
            {
                id: 6,
                title: "Offers"
            },
        ];
    }
}