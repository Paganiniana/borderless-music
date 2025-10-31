<style scoped>
.user-nav-icon {
    --nav-circle: 64px;
    width: var(--nav-circle);
    height: var(--nav-circle);
    overflow: hidden;
    position: relative;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        aspect-ratio: 1/1;
    }
}
</style>

<template>
    <nav>
        <button class="user-nav-icon bubble-hover glass">
            <img v-if="props.profilePhoto" :src="props.profilePhoto">
            <div v-else class="login-icon">
                <Icon :size="24" color="var(--off-white)"><User/></Icon>
            </div>
        </button>
    </nav>
</template>

<script setup lang="ts">
import { Icon } from "@vicons/utils";
import { User } from "@vicons/tabler";

const props = defineProps<{
	profilePhoto?: string | undefined;
}>();
</script>
