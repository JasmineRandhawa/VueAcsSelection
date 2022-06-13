<script lang="ts" src="./containers.ts"></script>

<style>
    @import "./containers.css";
</style>

<template>
    <div id="containersDiv">
        <div class="containerDiv">
            <div v-for="container in Containers" :key="container.ComponentId" :value="container">
                <Block Parent="Parent + ''Container''" />
            </div>
        </div>
    </div>
</template>
