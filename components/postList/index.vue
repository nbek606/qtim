<script lang="ts" setup>
    import type { IPost } from '~/types/post'

    interface Props {
        list: IPost[]
    }

    const props = defineProps<Props>()
</script>
<template lang="">
    <div class="post__list">
       <PostListItem 
            v-for="item in list"
            :key="item.id"
            :item="item"
       />
    </div>
</template>
<style lang="scss" scoped>
    @import './style.scss';
</style>