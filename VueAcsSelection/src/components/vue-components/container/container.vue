<script lang="ts" src="./container.ts"></script>

<style>
    @import "./container.css";
</style>

<template>
    <div  v-bind:class="{'containerDiv':true, 'bannerContainerDiv':(IsBanner)}">
        <div class="blockDiv">
            <button class="blockButton" @click="AddBlock"> + Block</button>
        </div>
        <div v-if="ContainerBlocks"   >
            <div v-for="block in ContainerBlocks" :key="block.ComponentId" :value="block">
                <Block :Parent="block.ComponentId" />
            </div>
        </div>
    </div>
</template>
