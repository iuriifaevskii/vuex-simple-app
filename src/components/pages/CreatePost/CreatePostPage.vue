<template>
    <div>
        <h1>Create Post Page</h1>
        <hr>
        <create-post-form :allUsers='getUsers'/>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import CreatePostForm from './CreatePostForm.vue';
export default {
    mounted() {
        this.$store.dispatch('showUsers');
    },
    computed: {
        ...mapGetters([
            'getUsers'
        ])
    },
    components: {
        'create-post-form': CreatePostForm
    }
}
</script>

<style lang="sass">

</style>
