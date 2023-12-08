<script setup>
import { ref } from '@vue/reactivity'
import Logo from '/images/logo.svg'
import BaseButton from './BaseButton.vue';
import Hamburger from '/images/icon-hamburger.svg'
import Close from '/images/icon-close.svg'


let NavLinks = [
    {name: "How we work", link: "#"},
    {name: "Blog", link: "#"},
    {name: "Account", link: "#"}
]

let open = ref(false)

function menuOpen() {
    open.value = !open.value
}

</script>

<template>
    <header class="bg-white h-20 fixed top-0 z-20 w-full lg:flex lg:justify-between lg:items-center lg:px-24 shadow">

        <div class="py-7 px-6 lg:p-0">
            <a href="#"><img :src="Logo" alt="Logo Insure"/></a>
            <button @click="menuOpen()" class="absolute z-20 top-0 right-0 p-5 lg:hidden">
                <img :src="[open ? Close : Hamburger]" alt="" />
            </button>
        </div>

        <nav aria-label="Top Navigation">
            <ul class="lg:flex lg:justify-between lg:items-center lg:gap-x-8 uppercase lg:text-Paragraph&Social font-semibold absolute z-10 
                lg:static bg-Dark-Bg lg:bg-white lg:bg-none text-Light-Bg text-center min-h-screen w-full lg:min-h-min pt-4 lg:pt-0
                bg-[url('/images/bg-pattern-mobile-nav.svg')] bg-no-repeat bg-bottom"
                :class="[open ? 'left-0' : 'left-[100%]']"
            >
                <li class="my-10 lg:my-6"
                    v-for="link in NavLinks" 
                >
                    <a class="hover:text-Titles&Hover" :href="link.link"> {{ link.name }} </a>
                </li>
                <li class="mx-6 lg:mx-0">
                    <BaseButton class="lg:block hidden"
                        text="View plans"
                        variant="black"
                    />
                    <BaseButton class="block lg:hidden mx-auto w-full"
                        text="View plans"
                        variant="white"
                    />
                </li>
            </ul>
        </nav>

    </header>
</template>
