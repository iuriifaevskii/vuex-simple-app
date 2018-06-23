<template>
    <button class="button" :class="buttonClass">
        <template v-if="icon">
            <i class="fa icon" :class="'fa-' + icon"></i>
        </template>
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        bType: {
            type: String,
            default: 'primary'
        },
        icon: {
            type: String
        },
        size: {
            type: String,
            default: 'medium'
        }
    },
    computed: {
        buttonClass() {
            return {
                ['is-' + this.bType]: this.bType,
                ['is-' + this.size]: true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    button {
        i {
            padding-right: 0.7em;
        }
        &.is-small{
            border-radius: 0.73em;
            font-size: .7rem
        }
        &.is-large{
            border-radius: 1em;
            font-size: 1.2rem
        }
        &.is-medium {
            border-radius: 1em;
            font-size: 1.1rem
        }
        &:hover {
            opacity: .8;
        }
    }
    
</style>
