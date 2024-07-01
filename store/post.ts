import { defineStore } from 'pinia'

import type { IPost } from '~/types/posts'
import type { Ref } from 'vue'

export const usePostStore = defineStore('post', () => {
    const config = useRuntimeConfig()
    const baseUrl: string = config.public.baseURL

    let postList: Ref<IPost[] | null> = ref(null)
    let currentPage: Ref<number> = ref(1);

    const perPage: number = 8
    const numberOfPage: number = 5

    const post = async () => {
        const { data } = await useFetch<IPost[]>(`${baseUrl}/qtim-test-work/posts/`)
        postList.value = data.value
    }

    const postById = async (id: string | string []) => {
        return useFetch<IPost>(`${baseUrl}/qtim-test-work/posts/${id}`)
    }

    const postListLength = computed((): number => {
        if (!postList || postList.value == null) return 0

        return postList.value.length
    })

    const getPostListByPagination = computed((): IPost[] | null => {
        if (!postList || postList.value == null) return null

        const from: number = (currentPage.value - 1) * perPage
        const before: number =  currentPage.value * perPage

        return postList.value.slice(from, before)
    })

    const changeCurrentPage  = (page: number) => {
        currentPage.value = page
    }

    return {
        post,
        postById,
        changeCurrentPage,
        postList,
        postListLength,
        getPostListByPagination,
        currentPage,
        perPage,
        numberOfPage,
    }
});