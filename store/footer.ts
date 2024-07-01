import { defineStore } from 'pinia'

export const useFooterStore = defineStore('footer', () => {
    
    interface Contacts {
        key: number,
        name: string,
        phone?: string,
        email?: string,
        address?: string
    }

    interface SocialNetwork {
        key: number,
        name: string,
        link: string
    }

    const socialNetwork: SocialNetwork[] = [
        {
            key: 99,
            name: 'Facebook',
            link: '#'
        },
        {
            key: 15,
            name: 'Instagram',
            link: '#'
        },
        {
            key: 12,
            name: 'Telegram',
            link: '#'
        },
        {
            key: 32,
            name: 'Behance',
            link: '#'
        },
        {
            key: 54,
            name: 'Linkedn',
            link: '#'
        },
        {
            key:  77,
            name: 'Privacy Policy',
            link: '#'
        }
    ]

    const contacts: Contacts[] = [
        {
            key: 22,
            name: 'For all questions',
            phone: '+7 (920) 278—00—68',
            email: 'qtim@agency.com'
        },
        {
            key: 33,
            name: 'Office in Russia',
            address: '139 Ruben Station Lake Drew, NM 52678'     
        },
        {
            key: 44,
            name: 'Office in Dubai',
            address: '139 Ruben Station Lake Drew, NM 52678'     
        }
    ]

    return {
        contacts,
        socialNetwork
    }
})