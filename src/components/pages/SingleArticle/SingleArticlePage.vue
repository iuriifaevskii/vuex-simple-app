<template>
    <div class='flex-container'>
        <div class='flex-row'>
            <h1>Single article page</h1>
            <hr>
            <p>post id: {{post.id}}</p>
            <p>userId: {{post.userId}}</p>
            <p>title: {{post.title}}</p>
            <p>body: {{post.body}}</p>
            <template v-if='isEdit'>
                <router-link
                    :to="{ name: 'editArticle', params: { id: post.id }}"
                    tag='button'
                    class='btn btn-primary'>
                    edit post
                </router-link>
            </template>
            <template v-else>
                <router-link
                    :to="{ name: 'singleArticle', params: { id: post.id }}"
                    tag='button'
                    class='btn btn-danger'>
                    close edit
                </router-link>
            </template>
        </div>
        <router-view
            class='flex-row'
            :post='post'
        />
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
    watch: {
        '$route'(to, from) {
            this.isEdit = to.name !== 'editArticle';
        }
    },
    data() {
        return {
            id: this.$route.params.id,
            isEdit: this.$route.name !== 'editArticle'
        }
    },
    mounted() {
        this.$store.dispatch('showSinglePost', this.id)
    }
}
</script>

<style>
    .flex-container {
        display: flex;
    }
    .flex-row:first-child {
        flex: 3;
    }
    .flex-row:nth-child(2) {
        flex: 1;
    }
</style>
