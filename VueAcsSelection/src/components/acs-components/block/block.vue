<script lang="ts" src="./block.ts"></script>

<style>@import "./block.css";</style>


<template>
    <div id="blockDiv">
        <div>
            <button class="btn btn-primary floatRight" @mouseover="IsComponentListShow = true" @click="addComponent">+</button>
            <div>
                <select v-model="SelectedComponent" id="ComponentsList" class="btn btn-primary floatRight"
                        v-if="IsComponentListShow">
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
            <div v-for="component in BlockComponents" :key="component.ComponentId" :value="component">
                <block parent ="{this.parent + 'Block'}" />
                <br />
                <staticText />
                {{JSON.stringify(component)}} {{this.parent}}
            </div>
        </div>
    </div>
</template>
