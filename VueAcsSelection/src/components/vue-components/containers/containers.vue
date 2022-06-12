<script lang="ts" src="./containers.ts"></script>

<style>
    @import "./containers.css";
</style>

<template>
    <div id="containersDiv">
        <div v-for="container in Containers" :key="component.ComponentId" :value="component">
            <block acsComponent="component" parent="container" />
        </div>
    </div>
</template>
