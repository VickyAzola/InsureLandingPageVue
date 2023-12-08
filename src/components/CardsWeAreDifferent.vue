<script setup>
    defineProps({
        img : String,
        title: String,
        content: String
    })
</script>

<template>
    <div class="flex flex-col items-center lg:items-start gap-y-4 my-14">
        <img :src=img alt=""/>
        <h2 class="mt-2 text-3xl text-Titles&Hover">{{ title }}</h2>
        <p class="text-Paragraph&Social">{{ content }}</p>
    </div>
</template>