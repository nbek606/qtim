<script lang="ts" setup>
    import LogoIcon from '~/assets/svg/logo.svg'

    import { useHeaderStore } from '~/store/header'

    const { menuList } = useHeaderStore()
</script>
<template lang="">
    <header class="header">
        <div  class="header__wrap">
            <div class="header__logo">
               <NuxtLink
                 to="/"
               >
                    <LogoIcon />
               </NuxtLink>
            </div>
            <div  class="header__nav">
                <ul class="header__nav-list">
                    <li 
                        class="header__nav-item"
                        v-for="item in menuList"
                        :key="item.key"
                    >
                        <NuxtLink
                            :to="item.link"
                        >
                            {{ item.name }}
                        </NuxtLink>
                    </li>
                </ul>

                <div class="header__nav-buttons">
                    <button class="header__nav-locale">
                        <img src="~/assets/icons/uk.png" />
                    </button>   
                    <button class="header__nav-button">
                        Let’s work
                    </button>
                </div>
            </div>
           
        </div>
    </header>
</template>
<style lang="scss" scoped>
    @import './style.scss';
</style>