<script lang="ts" src="./block.ts"></script>

<style>@import "./block.css";</style>


<template>
    <div id="blockDiv">
        <div class="blockDiv">
            <button class="btn btn-primary floatRight" @mouseover="IsComponentListShow = true" @click="AddComponent">+</button>
            <div>
                <select v-model="SelectedComponent" id="ComponentsList" class="btn btn-primary floatRight"
                        v-if="IsComponentListShow">
                    <option value="Select">--Select--</option>
                    <option v-for="listItem in ComponentTypeList" :key="listItem.ComponentTypeId" :value="listItem">
                        {{listItem.ComponentTypeName}}
                    </option>
                </select>
            </div>
        </div>
        <div id="componentDiv">
            <div v-for="component in BlockComponents" :key="component.ComponentId" :value="component">
                <StaticText />
            </div>
        </div>
    </div>
</template>
