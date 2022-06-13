<script lang="ts" src="./banner.ts"></script>

<style>
    @import "./banner.css";
</style>

<template>
    <div class="bannerContainerDiv">
        {{"Parent : " + Parent + "_Banner"}}
        <Container :Parent="Parent + '_Banner_Container'" :IsBanner="true"/>
    </div>
</template>
