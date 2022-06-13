<script lang="ts" src="./containers.ts"></script>

<style>
    @import "./containers.css";
</style>

<template>
    <div id="containersDiv">
        <div class="containerDiv" v-if="ContainersList && ContainersList.length>0">
            <div v-for="container in ContainersList" :key="container.ComponentId" :value="container">
                <Block :Parent="Parent + 'Container'" />
            </div>
        </div> 
    </div>

</template>
