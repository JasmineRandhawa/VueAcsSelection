<script lang="ts" src="./banner.ts"></script>

<style>    @import "./banner.css";</style>

<template>
    <div id="bannerDiv">
        <div id="componentDiv">
            <div v-for="component in BannerComponents" :key="component.ComponentId" :value="component">
                <block acsComponent="component" parent="banner" />
            </div>
        </div>
    </div>
</template>
