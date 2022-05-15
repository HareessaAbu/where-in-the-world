<template>
    <div>
<!--        <v-container>-->
            <v-row class="mb-0">
                <v-col class="mx-auto" cols="12" sm="6">
                    <v-text-field background-color="secondary" solo label="Search for a country.." type="text" prepend-inner-icon="fa-solid fa-magnifying-glass" v-model="search"/>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="pl-sm-6" cols="8" lg="2" md="4" sm="2">
                    <v-select :items="regions" label="Filter By Region" solo v-model="region" background-color="secondary"></v-select>
                </v-col>
            </v-row>
<!--        </v-container>-->

<!--        <v-container >-->
            <v-row class="justify-sm-space-between">
                <v-col v-for="(country, i) in filteredList" :key="i" class="text-decoration-none mx-sm-1">
                    <router-link class="text-decoration-none" :to="'/country/'+country.alpha2Code">
                        <v-card class="my-4 secondary" max-width="350">
                            <v-img
                                    :src="country.flags.png"
                                    height="200px"

                            ></v-img>

                            <v-card-title class="text-left font-weight-bold">
                                {{ country.name }}
                            </v-card-title>

                            <v-card-subtitle class="text-left mt-1">
                                <b>Population: </b>{{ country.population }}
                                <br>
                                <b>Region: </b>{{ country.region }}
                                <br>
                                <b>Capital: </b>{{ country.capital }}
                            </v-card-subtitle>
                        </v-card>
                    </router-link>
                </v-col>
            </v-row>
<!--        </v-container>-->
    </div>

</template>

<script>
    import axios from "axios";
    export default {
        name: "Countries",
        data: () => ({
            search: null,
            countries: null,
            region: 'all',
            regions: [
                'Africa',
                'America',
                'Asia',
                'Europe',
                'Oceania'
            ]
        }),
        methods:{
            filteredRegion(){
                if (this.region !== 'all')
                {
                    return this.countries.filter(item => {
                        return this.region
                            .toLowerCase()
                            .split(" ")
                            .every(v => item.region.toLowerCase().includes(v));
                    });
                }
                else {
                    return this.countries
                }
            }
        },
        computed: {
            filteredList() {
                if (this.search){
                    return this.filteredRegion().filter(item => {
                        return this.search
                            .toLowerCase()
                            .split(" ")
                            .every(v => item.name.toLowerCase().includes(v));
                    });
                }
                else {
                    return this.filteredRegion()
                }
            }
        },
        async mounted () {
            axios.get('https://restcountries.com/v2/all')
                .then(response => (
                    // console.log(response.data[0])
                    this.countries = response.data
                ))
        }
    }
</script>

<style scoped>

</style>