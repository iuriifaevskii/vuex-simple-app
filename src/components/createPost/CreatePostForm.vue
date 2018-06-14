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
                v-model="articleData.selectedUser">
                <option
                    v-for='user in users'
                    :key='user'
                    >{{user}}
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
    data() {
        return {
            articleData: {
                title: '',
                body: '',
                selectedUser: 'test user 1',
            },
            users: [
                'test user 1',
                'test user 2',
                'test user 3',
                'test user 4',
            ],
        }
    },
    methods: {
        submit() {
            const post = {
                title: this.articleData.title,
                body: this.articleData.body,
                userId: 1
            }
            this.$store.dispatch('createPost', post);
        },
    },
}
</script>

