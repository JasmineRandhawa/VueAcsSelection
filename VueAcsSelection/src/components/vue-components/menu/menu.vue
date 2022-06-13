<script lang="ts" src="./menu.ts"></script>

<style> @import "./menu.css";</style>

<template>
    <div class="menuDiv" id="menuDiv" v-if="MenuList.length > 0">
        <span class="menuListLabel" id="menuListLabel">Select Variation</span>
        <br />
        <br />
        <ul class="menuList" id="menuList">
            <li id="menuListItem" v-for="menuListItem in MenuList" :key="menuListItem.Name" :value="menuListItem"
                :class="GetCssClass(menuListItem)"
                @click="ChangeMenuItem(menuListItem)">
                {{menuListItem.DisplayText}}
            </li>
        </ul>
    </div>
</template>
