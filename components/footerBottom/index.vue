<script lang="ts" setup>
    import { useFooterStore } from '~/store/footer'

    const { socialNetwork } = useFooterStore()
</script>
<template lang="">
    <div class="footer__bottom">
        <div class="footer__bottom-social">
            <div 
                class="footer__bottom-social__item"
                v-for="item in socialNetwork?.slice(0, 3)"
            >
                <NuxtLink
                    to="#"
                >
                    {{ item.name }}
                </NuxtLink>
            </div>
        </div>

        <div class="footer__bottom-ellipse">
            <h3>
                Go
            </h3>
        </div>

        <div class="footer__bottom-social">
            <div 
                class="footer__bottom-social__item"
                v-for="item in socialNetwork?.slice(3)"
            >
                <NuxtLink
                    to="#"
                >
                    {{ item.name }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import './style.scss';
</style>