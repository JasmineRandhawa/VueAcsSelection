<script lang="ts" src="./banner.ts"></script>

<style>    @import "./banner.css";</style>

<template>
    <div class="bannerDiv">
        <div id="componentDiv">
            <div v-for="component in BannerComponents" :key="component.ComponentId" :value="component">
                <Block :Parent="Parent + 'Banner'" />
            </div>
        </div>
    </div>
</template>
