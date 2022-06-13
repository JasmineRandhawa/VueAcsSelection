<script lang="ts" src="./app.ts"></script>

<style>
    @import "./app.css";
</style>

<template>
    <div class="center appDiv" id="app">

        <!--Layer Button-->
        <div>
            <button :disabled="IsLayerAdded" @click="IsLayerAdded=true"
                    v-bind:class="{'layerButton':true, 'disabledMenuButton':(IsLayerAdded)}">
                + Layer
            </button>
        </div>

        <!--Layer Section-->
        <div v-if="IsLayerAdded" id="layerSection">
            <br />
            <br />

            <!--Menu Section-->
            <div class="menuSection">
                <Menu  v-for="listType in MenuListTypes" :ListType="listType" @UpdateSelectedMenuItem="UpdateSelectedMenuItem" />
            </div>

            <!--Banner Section-->
            <div id="bannerSection" v-if="IsBannerAdded">
                <br />
                <br />
                {{"Parent of Banner Section: "+ 'Layer'}}
                <div class="bannerDiv">
                    <Banner :Parent="'Layer'" />
                </div>
            </div>

            <!--Container Section-->
            <div id="containerSection" v-if="ContainersCount>0" >
                <br />
                <br />
                {{"Parent of Containers Section : "+ 'Layer'}}
                <div class="containersDiv" >
                    <Containers :ContainersCount="ContainersCount" :Parent="'Layer'" :IsBanner="false" />
                </div>
            </div>
        </div>
    </div>
</template>
