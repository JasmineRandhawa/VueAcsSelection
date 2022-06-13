<script lang="ts" src="./containers.ts"></script>

<style>
    @import "./containers.css";
</style>

<template>
    <!--Containers List-->
    <div v-if="Containers.length>0">
        <div v-for="container in Containers" :key="container.ComponentId"
             class="containerDiv">
            {{"Parent :" + container.ComponentId}}
            <Container :Parent="container.ComponentId" />
        </div>
    </div>
</template>
