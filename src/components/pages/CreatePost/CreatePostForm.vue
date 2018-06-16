<template>
    <form>
        <h1>Create article</h1>
        <hr>
        <div class="form-group">
            <label for="title">Title</label>
            <input 
                id="title"
                type="text"
                class="form-control"
                v-model.lazy="articleData.title">
        </div>
        <div class="form-group">
            <label for="body">Content</label>
            <textarea 
                id="body"
                rows="5"
                class="form-control"
                v-model.lazy="articleData.body">
            </textarea>
        </div>
        <div class="form-group">
            <label for="category">Users</label>
            <select 
                id="category"
                class="form-control"
                v-model="articleData.selectedUserId">
                <option disabled value="">Please select one</option>
                <option
                    v-for='user in users'
                    :value='user.id'
                    :key='user.id'
                    >{{user.name}}
                </option>
            </select>
        </div>
        <div class="form-group">
            <button
                class="btn btn-primary"
                @click.prevent="submit">
                    Create Article
            </button>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        allUsers: {
            type: Array
        }
    },
    data() {
        return {
            articleData: {
                title: '',
                body: '',
                selectedUserId: null,
            },
            users: this.allUsers,
        }
    },
    methods: {
        submit() {
            const post = {
                title: this.articleData.title,
                body: this.articleData.body,
                userId: this.articleData.selectedUserId
            }
            this.$store.dispatch('createPost', post);
            this.$router.push({name: 'allArticles'});
        },
    },
}
</script>

