<template>
    <div>
        <h1>Article Page</h1>
        <hr>
        article list
        <div class="flex-container">
            <div class='single-item' :key='post.id' v-for='post in posts'>
                <div>title: {{post.title}}</div>
                <div>body: {{post.body}}</div>
                <div>Name: {{post.name}}</div>
                <router-link :to="{ name: 'singleArticle', params: { id: post.id }}" tag='button' class='btn btn-primary'>read more</router-link>
                <hr>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    mounted() {
        this.$store.dispatch('showPosts');
    },
    computed: {
        ...mapGetters([
            'posts'
        ])
    },
}
</script>

<style>
    .flex-container {
        display: flex;
        flex-flow: row wrap;
    }
</style>
