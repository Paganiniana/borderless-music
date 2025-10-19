<style scoped>
.world-map {
    width: 100%;
    height: 100%;
}
</style>

<template>
<div class="world-map" ref="worldMapContainer"></div>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef } from "vue";
import { Map } from "maplibre-gl";
import mapStyle from "./style.json";

const worldMapContainer = useTemplateRef("worldMapContainer");

onMounted(() => {
  const container = worldMapContainer.value;
  if (container) {
    const map = new Map({
      container: container,
      style: mapStyle,
      center: [0, 0], // starting position [lng, lat]
      zoom: 1 // starting zoom
    })
  }
})

</script>
