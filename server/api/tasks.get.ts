export default defineEventHandler(async (event) => {

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return sendError(event, createError({
        statusCode: 500,
        statusMessage: "Oh no! Internal Server Error"
    }))

    return [{
        id: 1,
        title: "Hello World! Init all.",
        done: false,
    },
    {
        id: 2,
        title: "Learn Vue!",
        done: true,
    },
    {
        id: 3,
        title: "Learn Nuxt!",
        done: false,
    },
    {
        id: 4,
        title: "Build a task app!",
        done: false,
    },
    ]
})

// nitro docs to know event context