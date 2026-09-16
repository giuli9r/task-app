export default defineEventHandler((event) => {
    return [{
        id: 1,
        title: "Hello World! Init all.",
        done: false,
    },
    {
        id: 2,
        title: "Learn Vue!",
        done: false,
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