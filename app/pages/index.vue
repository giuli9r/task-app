<template>
    <p>Hello World</p>
    <h1> Create something!</h1>
    <div>
        <article aria-busy="true" v-if="status === 'pending'" />
        <article v-else-if="error" class="error">
            {{ error.statusMessage }}
        </article>
        <article v-for="task in tasks" :key="task.id">
            <h2>{{ task.title }}</h2>
            <p>{{ task.done ? 'Done' : 'Not Done' }}</p>
        </article>
    </div>
</template>

<script lang="ts" setup>
// const { data: tasks, error, status } = await useFetch('/api/tasks');
const { data: tasks, error, status } = await useFetch('/api/tasks', {
    lazy: true
});

</script>