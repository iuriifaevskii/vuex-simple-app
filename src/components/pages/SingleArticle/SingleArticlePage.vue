<template>
    <div class='flex-container'>
        <div class='flex-row'>
            <h1>Single article page</h1>
            <hr>
            <h6>user info:</h6>
            <p>{{ownerPost.name}} {{ownerPost.username}}</p>
            <p>works for {{ownerPost.company.name}}</p>
            <br />
            <h4>{{post.title}}</h4>
            <p>{{post.body}}</p>
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
            :allUsers='getUsers'
        />
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    mounted() {
        this.$store.dispatch('showUsers');
    },
    computed: {
        ...mapGetters([
            'post',
            'getUsers'
        ]),
        ownerPost() {
            const user = this.getUsers.find(el => el.id === this.id);
            return user ? user : {};
        }
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
