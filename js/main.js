import KanbanAPI from "./api/KanbanAPI.js";
import Kanban from "./view/Kanban.js";

// console.log(KanbanAPI.insertItem(1, "new item"));

// KanbanAPI.deleteItem(6505);

new Kanban(
    document.querySelector(".kanban")
)
