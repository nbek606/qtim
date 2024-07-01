<script lang="ts" setup>
    import { usePostStore } from '~/store/post'

    const route = useRoute()
    const { postById } = usePostStore()
   
    const { data: post } = await postById(route.params.id)
   
</script>
<template lang="">
    <PostItem 
      :post="post"
    />
</template>