<script setup>
const title = ref("");
const loading = ref(false);
const errorMessage = ref("");

async function onSubmit() {
    try {
        loading.value = true;
        errorMessage.value = "";
        // $fetch dispatches POST /api/tasks
        await $fetch("/api/tasks", {
            method: "POST",
            body: {
                title: title.value,
            },
        });
        // Successfully created: navigate back to list
        await navigateTo("/");
    }
    catch (error) {
        // Extract Zod field error, or fallback to statusMessage
        errorMessage.value =
            error.data?.data?.errors?.title?.[0]
            || error.data?.message
            || "Failed to create task";
    }
    finally {
        loading.value = false;
    }
}

</script>


<template>
    <form @submit.prevent="onSubmit">
        <label for="title-input">Task Title</label>
        <input id="title-input" v-model="title" type="text" placeholder="Task Title"
            :aria-invalid="errorMessage ? 'true' : undefined">
        <small v-if="errorMessage" style="color: var(--pico-del-color)">
            {{ errorMessage }}
        </small>
        <div class="button-container">
            <button :aria-busy="loading" :disabled="loading">
                Create Task
            </button>
        </div>
    </form>
</template>