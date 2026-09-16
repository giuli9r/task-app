<script setup>
const title = ref("")
</script>

<template>
    <form>
        <label for="title-input">Task Title</label>
        <input id="title-input" v-model="title" type="text" placeholder="Task Title">
        <button type="submit">Create Task</button>
    </form>
</template>