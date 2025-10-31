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

.modal-contents {
    width: 100%;
    height: 100%;
    padding: var(--glass-border-radius);
    overflow-y: scroll;
}

@media screen and (max-width: 500px) {
    .modal-contents {
        max-width: 90%;
        max-height: 80%;
    }
}

@media screen and (max-width: 850px) {
    .modal-contents {
        max-width: 80%;
        max-height: 75%;
    }
}

@media screen and (max-width: 1500px) {
    .modal-contents {
        max-width: 70%;
        max-height: 70%;
    }
}

@media screen and (min-width: 1500px) {
    .modal-contents {
        max-width: 50%;
        max-height: 65%;
    }
}

</style>


<template>
<div class="modal-background">
    <div class="modal-contents glass">
        <h1>Hello, world!</h1>
        <p>Lorem ipsum y'all ...</p>
        <h1>Hello, world!</h1>
        <p>Lorem ipsum y'all ...</p>
        <h1>Hello, world!</h1>
        <p>Lorem ipsum y'all ...</p>
        <h1>Hello, world!</h1>
        <p>Lorem ipsum y'all ...</p>
        <h1>Hello, world!</h1>
        <p>Lorem ipsum y'all ...</p>
    </div>
</div>
</template>

<script setup lang="ts">

</script>
