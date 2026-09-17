import { z } from "zod";
// import { tasksStore, type Task } from "../utils/tasksStore";

const createTaskSchema = z.object({
    title: z
        .string({ error: "Title is required" })
        .trim()
        .min(3, "Title must be at least 3 characters long")
        .max(100, "Title cannot exceed 100 characters"),
});

export default defineEventHandler(async (event) => {
    const result = await readValidatedBody(event, body =>
        createTaskSchema.safeParse(body),
    );

    if (!result.success) {
        return sendError(event, createError({
            statusCode: 400,
            message: "Validation Failed",
            data: {
                errors: result.error.flatten().fieldErrors,
            },
        }));
    }

    const newTask: Task = {
        id: tasksStore.length > 0 ? Math.max(...tasksStore.map(t => t.id)) + 1 : 1,
        title: result.data.title,
        done: false,
        createdAt: new Date().toISOString(),
    };

    tasksStore.push(newTask);

    setResponseStatus(event, 201);
    return newTask;
});
