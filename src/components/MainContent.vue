<script setup>
import IntroImgMobile from '/images/image-intro-mobile.jpg'
import IntroImgDesktop from '/images/image-intro-desktop.jpg'
import BgLargeRight from '/images/bg-pattern-intro-right-desktop.svg'
import BaseButton from './BaseButton.vue';
import CardsWeAreDifferent from './CardsWeAreDifferent.vue';

</script>

<template>
    <main class="relative mt-20">

        <img class="lg:hidden w-full" :src=IntroImgMobile alt="Intro Image: family of 4" />
        <img class="hidden lg:w-[26rem] xl:w-[30rem] lg:block lg:absolute right-12 xl:right-28 top-20 xl:top-24 lg:z-10" :src=IntroImgDesktop alt="Intro Image: family of 4" />
        
        <section class=" bg-Dark-Bg text-Light-Bg text-center lg:text-left px-8 lg:px-28 py-20 xl:py-24 bg-[url('/images/bg-pattern-intro-left-mobile.svg'),_url('/images/bg-pattern-intro-right-mobile.svg')] bg-[position:top_left,_bottom_-180px_right] bg-no-repeat
        lg:bg-[url('/images/bg-pattern-intro-left-desktop.svg')] lg:bg-[position:bottom_-300px_left]">
            <img class="hidden lg:block lg:absolute lg:right-0 lg:top-0 lg:z-10 w-[22rem]" :src=BgLargeRight alt=""/>
            <hr class="hidden lg:block w-40 h-[.1rem] bg-line mb-16">
            <h1 class="text-5xl xl:text-7xl mb-4 lg:mb-8">Humanizing <br class="hidden lg:block"> your insurance.</h1>
            <p class="mb-8 mx-5 lg:mx-0 lg:max-w-sm xl:max-w-lg">Get your life insurance coverage easier and faster. We blend our expertise 
                and technology to help you find the plan that’s right for you. Ensure you 
                and your loved ones are protected.</p>
            <BaseButton
                text="View plans"
                variant="white"
            />
        </section>

        <section class="text-center lg:text-left px-6 lg:px-28 pt-32 xl:pt-60 pb-20 bg-[url('/images/bg-pattern-intro-right-mobile.svg')] bg-[position:top_-150px_right] bg-no-repeat
        lg:bg-[url('/images/bg-pattern-intro-left-desktop.svg')] lg:bg-[position:left_top_-200px]">
            <hr class="w-40 h-[.1rem] lg:h-[.2rem] lg:w-32 mx-auto inset-x-0 lg:mx-0 bg-line">
            <h2 class="text-5xl xl:text-6xl pb-6 pt-12">We’re different</h2>
            <div class="lg:grid lg:grid-cols-3 lg:gap-x-4 xl:gap-x-12">
                <CardsWeAreDifferent 
                    img="/images/icon-snappy-process.svg"
                    title="Snappy Process"
                    content="Our application process can be completed in minutes, not hours. Don’t get 
                            stuck filling in tedious forms."
                />
                <CardsWeAreDifferent
                    img="/images/icon-affordable-prices.svg"
                    title="Affordable Prices"
                    content="We don’t want you worrying about high monthly costs. Our prices may be low, 
                            but we still offer the best coverage possible."
                />
                <CardsWeAreDifferent
                    img="/images/icon-people-first.svg"
                    title="People First"
                    content="Our plans aren’t full of conditions and clauses to prevent payouts. We make 
                            sure you’re covered when you need it."
                />
            </div>
        </section>

        <section class="bg-Dark-Bg text-Light-Bg lg:text-left text-center mx-6 lg:mx-28 lg:flex lg:items-center lg:justify-between px-8 xl:px-20 py-16 mb-32 bg-[url('/images/bg-pattern-how-we-work-mobile.svg')] lg:bg-[url('/images/bg-pattern-how-we-work-desktop.svg')] bg-no-repeat bg-right-top">
            <h3 class="text-4xl lg:text-5xl mb-8 lg:mb-0">Find out more<br class="hidden lg:block"> about how we work</h3>
            <BaseButton
                text="How we work"
                variant="white"
            />
        </section>

    </main>
</template>