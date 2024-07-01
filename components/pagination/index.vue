<script lang="ts" setup>
    import NextIcon from '~/assets/svg/next.svg'

    interface Props {
        totalItems: number,
        currentPage: number,
        perPage: number,
        numberOfPage: number
    }
    
    const props = defineProps<Props>()
    const emit = defineEmits<{
        changeCurrentPage: [page: number]
    }>()

    const changePage = (page: number) => {
        emit('changeCurrentPage', page)
    }
</script>
<template lang="">
   <vue-awesome-paginate
        :total-items="totalItems"
        :max-pages-shown="numberOfPage"
        :items-per-page="perPage"
        :show-breakpoint-buttons="false"
        :hide-prev-next-when-ends="true"
        :modelValue="currentPage"
        @update:modelValue="changePage"
   >
        <template 
            #prev-button
        >
            <div class="icon"> 
                <NextIcon />
            </div>
        </template>

        <template 
            #next-button
        >
            <div class="icon"> 
                <NextIcon />
            </div>
        </template>
   </vue-awesome-paginate>
</template>
<style lang="scss">
   @import './style.scss';
</style>