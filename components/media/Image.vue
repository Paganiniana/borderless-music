<style scoped>
picture {
    width: fit-content;
    height: fit-content;
}
</style>

<script setup lang="ts">
const PLACE_HOLDER: ImageSpec = {
  url: "https://placehold.co/600x400",
  width: 600,
  height: 400,
};

type ImageSpec = {
  url: string;
  width: number;
  height: number;
};

const props = defineProps<{
  images: ImageSpec[];
  alt: string;
}>();

const sortedImages = props.images ? [...props.images].sort((a, b) => a.width - b.width) : [];
const largestImage = sortedImages.length > 0 ? sortedImages[sortedImages.length - 1] : PLACE_HOLDER;
</script>

<template>
    <picture>
      <source
        v-for="image in sortedImages"
        :key="image.url"
        :media="`(max-width: ${image.width}px)`"
        :srcset="`${image.url} 1x`"
      />
      <img
        :src="largestImage.url"
        :alt="alt"
      />
    </picture>
</template>
