<style scoped>
.user-nav-icon {
    --nav-circle: 64px;
    width: var(--nav-circle);
    height: var(--nav-circle);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<template>
    <nav>
        <button class="user-nav-icon glass">
            <!-- <img src="https://variety.com/wp-content/uploads/2013/06/indiana-jones.jpg"> -->
            <div class="login-icon">
                <Icon :size="24" color="var(--off-white)"><User/></Icon>
            </div>
        </button>
    </nav>
</template>

<script setup lang="ts">
import { Icon } from '@vicons/utils'
import { User } from "@vicons/tabler"

</script>
