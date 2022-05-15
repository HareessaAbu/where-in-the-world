<template>
    <v-app-bar app color="secondary" class="px-lg-10 px-md-10 px-sm-14">
        <router-link class="text-decoration-none" :to="'/'">
            <v-toolbar-title class="text-no-wrap"><b>Where in the world?</b></v-toolbar-title>
        </router-link>
        <v-spacer></v-spacer>
        <v-btn v-if="!$vuetify.theme.dark" class="transparent text-capitalize font-weight-bold px-0" large @click="toggleTheme()" text>
            <v-icon dark left size="20">fa-solid fa-moon</v-icon>
            Dark Mode
        </v-btn>
        <v-btn v-if="$vuetify.theme.dark" class="transparent text-capitalize font-weight-bold px-0" large @click="toggleTheme()" text>
            <v-icon left size="20">fa-light fa-moon</v-icon>
            Dark Mode
        </v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'Navigation',
        methods: {
            toggleTheme() {
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            }
        }
    }
</script>

<style scoped>

</style>