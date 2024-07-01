<script lang="ts" setup>
    import LocationIcon from '~/assets/svg/location.svg'
    import { useFooterStore } from '~/store/footer'

    const { contacts } = useFooterStore()
</script>
<template lang="">
    <div class="footer__top">
        <div class="footer__top-title">
            <p>Is there a project?</p>
            <h1>Let’s work  <br/> together</h1>    
        </div>
    
        <ul class="footer__top-contacts">
            <li  
                class="footer__top-contacts__item"
                v-for="item in contacts"
                :key="item.key"
            >
                <p class="footer__top-contacts__item-name">
                    {{ item.name }}
                </p>
                <p>
                    {{ item.phone }}
                </p>
                <p>
                    {{ item.email }}
                </p>
                <p>
                    {{ item.address }}
                </p>
                <p 
                    class="footer__top-contacts__item-icon"
                    v-if="item.address"
                >
                    <NuxtLink to="#">
                        <LocationIcon />
                    </ NuxtLink>    
                </p>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
    @import './style.scss';
</style>