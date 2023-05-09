<script setup>
import { onMounted } from 'vue'
import { initDropdowns } from 'flowbite'

onMounted(() => {
	initDropdowns();
})

const { app } = useMyRealmApp()

const logout = () => {
    app.currentUser.logOut();
    navigateTo("/");
};
</script>

<template>
    <Header></Header>
    <section class="w-11/12 mx-auto mt-5">
        <h1>I am User</h1>
    </section>
</template>