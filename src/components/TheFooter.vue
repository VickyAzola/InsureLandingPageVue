<script setup>
import Social from './Social.vue'
import TheCredits from './TheCredits.vue'

let FooterNavLinks_OurCompany = [
    {name: "How we work", link: "#"},
    {name: "Why Insure?", link: "#"},
    {name: "View plans", link: "#"},
    {name: "Reviews", link: "#"}
]

let FooterNavLinks_HelpMe = [
    {name: "FAQ", link: "#"},
    {name: "Terms of use", link: "#"},
    {name: "Privacy policy", link: "#"},
    {name: "Cookies", link: "#"}
]

let FooterNavLinks_Contact = [
    {name: "Sales", link: "#"},
    {name: "Support", link: "#"},
    {name: "Live chat", link: "#"}
]

let FooterNavLinks_Others = [
    {name: "Careers", link: "#"},
    {name: "Press", link: "#"},
    {name: "Licenses", link: "#"}
]

</script>

<template>
    <footer class="bg-Light-Bg lg:bg-[url('/images/bg-pattern-footer-desktop.svg')] lg:bg-no-repeat lg:bg-[size:40rem]">
        
    <Social />

    <hr class="bg-gray-200 h-[.12rem] mx-4 lg:mx-28">
        
        <nav class="lg:grid lg:grid-cols-4 lg:text-left lg:items-start uppercase  mx-4 lg:mx-0 lg:px-28 flex flex-col items-center text-center py-8" aria-label="Footer Navigation">
            <div>
                <p class="mb-7 text-Paragraph&Social font-semibold">Our company</p>
                <ul class="space-y-1.5 text-Titles&Hover font-bold">
                    <li 
                        v-for="link in FooterNavLinks_OurCompany"
                    >
                        <a class="hover:underline" :href="link.link"> {{ link.name }} </a>
                    </li>
                </ul>
            </div>
            <div>
                <p class="lg:mt-0 my-7 text-Paragraph&Social font-semibold">Help me</p>
                <ul class="space-y-1.5 text-Titles&Hover font-bold">
                    <li 
                        v-for="link in FooterNavLinks_HelpMe"
                    >
                        <a class="hover:underline" :href="link.link"> {{ link.name }} </a>
                    </li>
                </ul>
            </div>
            <div>
                <p class="lg:mt-0 my-7 text-Paragraph&Social font-semibold">Contact</p>
                <ul class="space-y-1.5 text-Titles&Hover font-bold">
                    <li 
                        v-for="link in FooterNavLinks_Contact"
                    >
                        <a class="hover:underline" :href="link.link"> {{ link.name }} </a>
                    </li>
                </ul>
            </div>
            <div>
                <p class="lg:mt-0 my-7 text-Paragraph&Social font-semibold">Others</p>
                <ul class="space-y-1.5 text-Titles&Hover font-bold">
                    <li 
                        v-for="link in FooterNavLinks_Others"
                    >
                        <a class="hover:underline" :href="link.link"> {{ link.name }} </a>
                    </li>
                </ul>
            </div>
        </nav>
        
        <TheCredits 
            linkFrontendMentor="https://www.frontendmentor.io?ref=challenge"
            linkGithub="https://github.com/VickyAzola/InsureLandingPageVue"
        />

    </footer>
</template>