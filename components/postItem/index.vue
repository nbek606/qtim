<script lang="ts" setup>
    import type { IPost } from '~/types/post'

    interface Props {
        post: IPost
    }
    const props = defineProps<Props>()
</script>
<template lang="">
    <div class="post__item container">
        <PageTitle 
            :title="post.title"
        />

        <div class="post__item-img">
            Ссылка на картинку не не рабочая
        </div>

        <div class="post__item-about">
            <p class="post__item-about__title">
                About
            </p>
            <h4 class="post__item-about__text">
               {{ post.description }} 
            </h4>
        </div>
    </div>
</template>

<style lang="scss">
    @import './style.scss';
</style>