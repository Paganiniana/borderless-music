<style scoped>
button {
    background: transparent;
    border: none;
    outline:none;
    cursor: pointer;
}
</style>
<template>
<button>
    <Icon :size="size" :color="color? color : 'var(--off-white)'">
        <slot></slot>
    </Icon>
</button>
</template>


<script setup lang="ts">
import { Icon } from "@vicons/utils";

const { size, color } = defineProps<{ size?: number; color?: string }>();
</script>
