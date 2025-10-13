<style scoped>
.map-container {
    height: 100dvh;
    width: 100dvw;
}
</style>

<template>
<div class="map-container">
    <VMap
        :zoom="3"
        :max-bounds="[[90, 180], [-90, -180]]"
        :max-bounds-viscosity="1.0">
        <VMapOsmTileLayer />
        <VMapZoomControl />
    </VMap>
</div>
</template>

<script setup lang="ts">
console.log("TODO")
</script>
