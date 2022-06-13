<script lang="ts" src="./containers.ts"></script>

<style>
    @import "./containers.css";
</style>

<template>
    <div id="containersDiv">
        <div class="containerDiv" v-if="Containers.length>0">
            <div v-for="container in Containers" :key="container.ComponentId">
                <Block :Parent="container.ComponentId"  />
            </div>
        </div> 
    </div>
</template>
