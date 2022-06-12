<script lang="ts" src="./app.ts"></script>

<style>@import "./app.css";</style>

<template>
    <div class="center" id="app">
        <div class="center menuDiv" id="menu">
            <button :disabled="isBannerAdded" class="btn btn-primary" @click="isBannerAdded=true">Add Banner</button>
        </div>
        <div>
            <banner v-if="isBannerAdded" />
            <home />
        </div>
    </div>
</template>
