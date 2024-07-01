
<script lang="ts" setup>
    import type { IPost } from '~/types/post'

    interface Props {  item: IPost }

    const props = defineProps<Props>()
</script>
<template lang="">
    <div class="post__list-item">
        <div class="post__list-item__img">
            {{  item.title }}
            <p>Ссылка на картинку не рабочая</p>
        </div>
        
        <p class="post__list-item__description">
            {{ item.description }}
        </p>

        <NuxtLink
            class="post__list-item__link"
            :to="`/post/${item.id}`"
            target="_blank"
        >
            Read more
        </NuxtLink>
    </div>
</template>

<style lang="scss">
    @import './style.scss';
</style>