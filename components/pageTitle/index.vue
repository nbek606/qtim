<script lang="ts" setup>
    interface Props {  title: string }

    const props = defineProps<Props>()
</script>
<template lang="">
    <div class="page__title">
        <h1>
            {{ title }}
        </h1>
    </div>
</template>
<style lang="scss">
    @import './style.scss';
</style>