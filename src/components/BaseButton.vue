<script setup>
import { computed } from 'vue'

const props = defineProps({
    text : String,
    variant: {
        type: String,
        default: 'white',
        validator(value) {
            return [
                'white',
                'black',
            ].includes(value)
        }
    }
})

const {
    variant
} = props

const baseClasses = [
    'uppercase font-semibold tracking-widest border py-2 px-7'
]

const variantClasses = (variant) => ({
    'border-Light-Bg text-Light-Bg hover:bg-Light-Bg hover:text-Dark-Bg': 
        variant == 'white',
    'border-Dark-Bg text-Dark-Bg hover:bg-Dark-Bg hover:text-Light-Bg': 
        variant == 'black'
})

const classes = computed(() => [
    ...baseClasses, variantClasses(variant)
])
</script>

<template>

    <button type="button"
        :class="classes"
    > 
        {{ text }}
    </button>

</template>
