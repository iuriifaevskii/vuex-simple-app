<template>
    <div>
        <div v-for='comment in commentsList' :key='comment.id'>
            <div class="alert alert-warning" role="alert">
                <h5>{{comment.email}}</h5>
                <p>{{comment.body}}</p>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        commentsList: {
            type: Array
        }
    }
}
</script>

<style>
</style>
