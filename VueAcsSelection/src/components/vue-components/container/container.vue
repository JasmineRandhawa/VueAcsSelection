<script lang="ts" src="./container.ts"></script>

<style>
    @import "./container.css";
</style>

<template>
    <div v-bind:class="{'containerDiv':true, 'bannerContainerDiv':(IsBanner)}">

        <!--Container Header-->
        <button class="blockButton" @click="AddBlock"> +  Block</button>

        <!--Container Blocks-->
        <div v-if="ContainerBlocks" class="innerContainerDiv">
            <div v-for="block in ContainerBlocks" :key="block.ComponentId" :value="block">
                {{"Parent: "+block.ComponentId}}
                <Block :Parent="block.ComponentId" />
            </div>
        </div>
    </div>
</template>
