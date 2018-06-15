<template>
    <div>
        <h1>Single article page</h1>
        <hr>
        <p>post id: {{post.id}}</p>
        <p>userId: {{post.userId}}</p>
        <p>title: {{post.title}}</p>
        <p>body: {{post.body}}</p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'post'
        ])
    },
    data() {
        return {
            id: this.$route.params.id
        }
    },
    mounted() {
        this.$store.dispatch('showSinglePost', this.id)
    }
}
</script>

<style lang="sass">

</style>
