<template>
    <div>
        <h6>user info:</h6>
        <p>{{ownerPost.name}} {{ownerPost.username}}</p>
        <p>works for {{ownerPost.company ? ownerPost.company.name : ''}}</p>
        <br />
        <h4>{{post.title}}</h4>
        <p>{{post.body}}</p>
    </div>
</template>

<script>
export default {
    props: {
        ownerPost: {
            type: Object
        },
        post: {
            type: Object
        }
    }
}
</script>

<style>
</style>
