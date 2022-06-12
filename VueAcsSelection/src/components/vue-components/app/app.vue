<script lang="ts" src="./app.ts"></script>

<style>@import "./app.css";</style>

<template>
    <div class="center menuDiv" id="menu">
        <button :disabled="isBannerAdded" class="btn btn-primary" @click="isBannerAdded=true">Add Banner</button>
    </div>
    <div class="center" id="app">
        <Banner v-if="isBannerAdded" msg="Hello world!" />
        <Home msg="Hello world!" />
    </div>
</template>
