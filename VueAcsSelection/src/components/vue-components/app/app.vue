<script lang="ts" src="./App.ts"></script>

<style> @import "./App.css"; </style>

<template>
    <div class="center" id="App">
        <button :disabled="isBannerAdded" class="btn btn-primary" @click="isBannerAdded=true" >Add Banner</button>
        <br />
        <br />
        <Banner v-if="isBannerAdded" msg="Hello world!" />
        <Home msg="Hello world!" />
    </div>
</template>
