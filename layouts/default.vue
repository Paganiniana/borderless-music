<style>
@import url("@components/shared_styles/colors.css");
@import url("@components/shared_styles/hover.css");
@import url("@components/shared_styles/glass.css");
/* ---------- Layout - Foreground ---------- */

.contents, .contents-background {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100dvw;
    height: 100dvh;
}

/* ---------- Layout - Foreground ---------- */

.contents {
    --foreground-content-padding: 24px;
    pointer-events: none;
    z-index: 2;
    padding: var(--foreground-content-padding);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
@media screen and (min-width: 700px) {
    .contents {
     --foreground-content-padding: 32px;
    }
}

@media screen and (min-width: 900px) {
    .contents {
     --foreground-content-padding: 42px;
    }
}
/* ---------- Layout - Foreground, Header ---------- */

.logo-container {
    --height: 24px;
    position: fixed;
    display: flex;
    justify-content: center;
    width: calc(100dvw - 2 * var(--foreground-content-padding));
    height: var(--height);
    top: var(--foreground-content-padding);
    left: var(--foreground-content-padding);
    img, picture {
        height: 100%;
        width: auto;
    }
}

@media screen and (min-width: 700px) {
    .logo-container {
        --height: 32px;
    }
}

@media screen and (min-width: 900px) {
    .logo-container {
        --height: 42px;
    }
}

.nav-menu {
    pointer-events: all;
    position: fixed;
    left: var(--foreground-content-padding);
    bottom: var(--foreground-content-padding);
}

@media screen and (min-width: 850px) {
    .nav-menu {
        left: auto;
        bottom: auto;
        right: var(--foreground-content-padding);
        top: var(--foreground-content-padding);
    }
}


/* ---------- Layout - Background ---------- */

.contents-background {
    z-index: 1;
}


</style>

<template>
<div class="contents">
    <div class="logo-container">
        <Image class="logo" :images="logoImages" alt="Borderless Logo" />
    </div>
    <Nav profilePhoto="/profile_personal.jpeg" class="nav-menu"/>
</div>
<div class="contents-background">
    <slot></slot>
</div>
</template>

<script setup lang="ts">
import Image from "@/components/media/Image.vue";
import Nav from "@/components/Nav.vue";

const logoImages = [
	{ url: "/images/logos/borderless-logo-210x24.png", width: 210, height: 24 },
	{ url: "/images/logos/borderless-logo-280x32.png", width: 280, height: 32 },
	{ url: "/images/logos/borderless-logo-420x48.png", width: 420, height: 48 },
	{ url: "/images/logos/borderless-logo-560x64.png", width: 560, height: 64 },
	{ url: "/images/logos/borderless-logo-840x96.png", width: 840, height: 96 },
	{
		url: "/images/logos/borderless-logo-1120x128.png",
		width: 1120,
		height: 128,
	},
];
</script>
