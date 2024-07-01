<script lang="ts" setup>
  import { usePostStore } from '~/store/post'
  
  const { post, changeCurrentPage, perPage } = usePostStore()
  const { postListLength, currentPage, getPostListByPagination, numberOfPage} = toRefs(usePostStore())
  
  await post()
</script>
<template lang="">
    <div class="post container">
        <PageTitle 
          title="Articles"
        />  
        <PostList 
          :list="getPostListByPagination"
        />

        <Pagination 
          :current-page="currentPage"
          :total-items="postListLength "
          :number-of-page="numberOfPage"
          :per-page="perPage"
          @changeCurrentPage="changeCurrentPage"
        />
    </div>
</template>
<style lang="scss">
    @import './style.scss';
</style>