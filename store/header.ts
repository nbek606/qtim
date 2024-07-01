import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', () => {
    interface Menu {
        key: number,
        name: string,
        link: string
    }

    const menuList: Menu[] = [
        {
            key: 1,
            name: 'Works',
            link: '#'
        },
        {
            key: 1,
            name: 'About',
            link: '#'
        }
    ]

    return {
        menuList
    }
})