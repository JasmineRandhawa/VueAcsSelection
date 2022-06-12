<script lang="ts" src="./app.ts"></script>

<style>
    @import "./app.css";
</style>

<template>
    <div class="center appDiv" id="app">

        <!--Layer Button-->
        <div>
            <button :disabled="IsLayerAdded" class="layerButton" @click="IsLayerAdded=true"> + Layer</button>
        </div>

        <!--Layer Section-->
        <div v-if="IsLayerAdded" id="layerSection">
            <br />
            <br />

            <!--Experiment Variation Section-->
            <div class="menuVariationDiv">
                <div class="menuDiv" id="varitionSection">
                    <span class="variationListSpan">Select Variation</span>
                    <ul class="variationList">
                        <li id="menuList" v-for="variation in VariationList" :key="variation.Name" :value="variation"
                            v-bind:class="{'listButtons listItem':true, 'listItemSelection':(variation.Name === SelectionVariation.Name)}"
                            @click="changeVariation(variation)">
                            {{variation.DisplayText}}
                        </li>
                    </ul>
                </div>

                <!--Action Buttons Menu Section-->
                <div class="menuDiv" id="menuSection">
                    <span class="variationListSpan">Actions</span>
                    <ul class="variationList">
                        <li id="menuList" v-for="menuListItem in MenuButtonList" :key="menuListItem.Name" :value="menuListItem"
                            v-bind:class="{'listButtons listItem menuListButtons':true, '   ':(menuListItem.Disabled)}"
                            @click="changeMenu(menuListItem)">
                            {{menuListItem.DisplayText}}
                        </li>
                    </ul>
                </div>
            </div>
            <br />
            <br />

            <!--Banner Section-->
            <div class="bannerDiv" v-if="IsBannerAdded" id="bannerSection">
                <banner />
            </div>

            <!--Container Section-->
            <div class="containerDiv" v-if="IsContainerAdded" id="containerSection">
                <home />
            </div>
        </div>
    </div>
</template>
