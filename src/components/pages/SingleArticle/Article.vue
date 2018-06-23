<template>
    <div>
        <h6>post info:</h6>
        <p>category: {{post.name}}</p>
        <br />
        <h4>{{post.title}}</h4>
        <p>{{post.body}}</p>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object
        }
    }
}
</script>

<style>
</style>
