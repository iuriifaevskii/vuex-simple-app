<template>
    <div class='flex-container'>
        <div class='flex-row'>
            <h1>Single article page</h1>
            <hr>
            <single-article
                :post='post'
            />
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
            <article-comments
                :commentsList='getCommentsByPost'
            />
        </div>{{post}}
        <router-view
            class='flex-row'
            :post='post'
            :selectedId='post.userId'
            :allUsers='getUsers'
        />
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Article from './Article';
import ArticleComments from './ArticleComments';

export default {
    mounted() {
        this.$store.dispatch('showSinglePost', this.id)
            .then(() => this.$store.dispatch('showUsers'));
    },
    computed: {
        ...mapGetters([
            'post',
            'getUsers',
            'getCommentsByPost'
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
    components: {
        'single-article': Article,
        'article-comments': ArticleComments
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
