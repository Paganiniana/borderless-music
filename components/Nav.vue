<style scoped>
/* -------------- Layout + Hiding Logic --------------- */
nav {
    --nav-circle: 64px;
    width: var(--nav-circle);
    height: var(--nav-circle);
    overflow: hidden;
    border-radius: var(--nav-circle);
    pointer-events: all;
}

nav.closed {
    ul {
        display:none;
    }
}

nav.open {
    height: fit-content;
    .user-nav-icon {
        display:none;
    }
}

/* -------------- Nav Icon --------------- */

.user-nav-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        aspect-ratio: 1/1;
    }
}

/* -------------- Nav List --------------- */

ul {
    padding: 0px;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    li {
        list-style-type: none;
    }
}
</style>

<template>
    <nav :class="navClasses">
        <button @click="toggleOpen" class="user-nav-icon ">
            <img v-if="props.profilePhoto" :src="props.profilePhoto">
            <div v-else class="login-icon">
                <Icon :size="24" color="var(--off-white)"><User/></Icon>
            </div>
        </button>
        <ul>
            <li><NuxtLink to="/"><Icon :size="24" color="var(--off-white)"><VideoPlus/></Icon></NuxtLink></li>
            <li><NuxtLink to="/"><Icon :size="24" color="var(--off-white)"><Logout/></Icon></NuxtLink></li>
            <li><IconButton @click="toggleOpen"><Icon :size="24" color="var(--off-white)"><X/></Icon></IconButton></li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { ref, type Ref, computed } from "vue";
import { Icon } from "@vicons/utils";
import { User, VideoPlus, Logout, X } from "@vicons/tabler";

const open: Ref<boolean> = ref(false);

const navClasses = computed(
	() => `bubble-hover glass ${open.value ? "open" : "closed"}`,
);

function toggleOpen() {
	open.value = !open.value;
}

const props = defineProps<{
	profilePhoto?: string | undefined;
}>();
</script>
