<template>
    <div>
        <app-nav-bar />
        <main class="container">
            <slot />
        </main>
    </div>
</template>

<style>
/* En un layout scoped, ponemos el estilo global aqui */
.error {
    color: red;
}
</style>