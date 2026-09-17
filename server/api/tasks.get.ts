import { tasksStore } from "../utils/tasksStore";

export default defineEventHandler((_event) => {
    return tasksStore;
});