<template>
    <div>
        <h1>Create Post Page</h1>
        <hr>
        <create-post-form />
    </div>
</template>

<script>
import CreatePostForm from './CreatePostForm.vue';
export default {
    components: {
        'create-post-form': CreatePostForm
    }
}
</script>

<style lang="sass">

</style>
