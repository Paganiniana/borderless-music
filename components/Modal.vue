<style scoped>
.modal-background {
    width: 100dvw;
    height: 100dvh;
    position: fixed;
    background-color: rgba(0,0,0,0.3);
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    pointer-events: all;
}

.modal-container {
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    .modal-contents {
        flex-grow: 1;
    }
}

@media screen and (max-width: 500px) {
    .modal-container {
        max-width: 90%;
        max-height: 80%;
    }
}

@media screen and (max-width: 850px) {
    .modal-container {
        max-width: 80%;
        max-height: 75%;
    }
}

@media screen and (max-width: 1500px) {
    .modal-container {
        max-width: 70%;
        max-height: 70%;
    }
}

@media screen and (min-width: 1500px) {
    .modal-container {
        max-width: 50%;
        max-height: 65%;
    }
}

/* ---------------- actions ------------- */

.modal-controls {
    width: auto;
    padding: 0px var(--glass-border-radius);
    height: 50px;
    display: flex;
    .spacer {
        flex-grow: 1;
    }
    align-items:center;
}

.modal-controls:first-of-type {
    border-bottom: 0.5px solid var(--off-white);
}

.modal-controls:last-of-type {
    border-top: 0.5px solid var(--off-white);
    justify-content: center;
}

.modal-controls .title {
    color: var(--off-white);
    font-size: 18px;
}

/* ---------------- contents ------------- */

.modal-contents {
    padding: var(--glass-border-radius);
    overflow-y: scroll;
}

</style>


<template>
<div class="modal-background">
    <div class="modal-container glass">
        <div class="modal-controls">
            <span v-if="title" class="title">{{title}}</span>
            <div class ="spacer"/>
            <div class="actions">
                <IconButton :size="28" @click="$emit('close')"><Icon><X/></Icon></IconButton>
            </div>
        </div>
        <div class="modal-contents">
            <slot></slot>
        </div>
        <div class="modal-controls">
            <div class="actions" v-if="bottomActions">
              <IconButton :size="28" v-for="action in bottomActions" @click="action.action"><component :is="action.icon"/></IconButton>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import type { Component } from "nuxt/schema";
import { Icon } from "@vicons/utils";
import { X } from "@vicons/tabler";

export type Action = { icon: Component; action: () => void };

defineEmits(["close"]);

const { title, bottomActions } = defineProps<{
	title?: string;
	bottomActions?: Array<Action>;
}>();
</script>
