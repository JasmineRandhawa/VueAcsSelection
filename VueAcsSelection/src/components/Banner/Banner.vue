<script lang="ts" src="./Banner.ts"></script>

<style>@import "./Banner.css";</style>


<template>
    <div id="bannerDiv">
        <div>
            <button class="btn btn-primary floatRight" @mouseover="IsComponentListShow = true" @click="addComponent">+</button>
            <div>
                <select v-model="SelectedComponent" id="ComponentsList" class="btn btn-primary floatRight"
                        v-if="IsComponentListShow" @change="ChangeComponentType(SelectedComponent)">
                    <option value="Select">--Select--</option>
                    <option v-for="listItem in ComponentTypeList" :key="listItem.ComponentTypeId" :value="listItem.ComponentTypeId">
                        {{listItem.ComponentTypeName}}
                    </option>
                </select>
            </div>

        </div>
        <br />
        <br />
        <br />
        <div id="componentDiv">
            <div v-for="component in AcsBannerComponents" :key="component.ComponentId" :value="component">
                <Block  acsComponent="component" />
                <br />
                <StaticContent acsComponent="component" />
            </div>
        </div>
    </div>
</template>
