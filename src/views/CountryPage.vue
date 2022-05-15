<template>
<!--    <v-container>-->
    <div>
        <v-row>
            <v-col cols="6"
                   sm="6"
                   md="4">
                <router-link :to="'/'" class="text-decoration-none">
                    <v-btn
                            class="button px-8 ma-2 text-capitalize"
                            elevation="2"
                    >
                        <v-icon left class="p-2">
                            fa-solid fa-arrow-left-long
                        </v-icon>
                        Back
                    </v-btn>
                </router-link>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <v-row v-if="country" class="mt-12 mb-5 align-center justify-sm-space-between" cols="12">
            <v-col cols="12" sm="6" class="px-6 pr-14">
                <v-img :src="country.flags.svg"></v-img>
            </v-col>
            <v-col cols="12" sm="6" class="justify-start">
                <v-card-title class="font-weight-bold">
                    {{ country.name }}
                </v-card-title>
                <v-card-subtitle>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-item-group class="mb-1">
                                <label class="font-weight-bold">
                                    Native Name:
                                </label>
                                {{ country.nativeName }}
                            </v-item-group>
                            <v-item-group class="mb-1">
                                <label class="font-weight-bold">
                                    Population:
                                </label>
                                {{ country.population }}
                            </v-item-group>
                            <v-item-group class="mb-1">
                                <label class="font-weight-bold">
                                    Region:
                                </label>
                                {{ country.region }}
                            </v-item-group>
                            <v-item-group class="mb-1">
                                <label class="font-weight-bold">
                                    Sub Region:
                                </label>
                                {{ country.subregion }}
                            </v-item-group>
                            <v-item-group class="mb-1">
                                <label class="font-weight-bold">
                                    Capital:
                                </label>
                                {{ country.capital }}
                            </v-item-group>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-item-group>
                                <label class="font-weight-bold">
                                    Top Level Domain:
                                </label>{{ country.topLevelDomain.join(', ') }}
                            </v-item-group>
                            <v-item-group>
                                <label class="font-weight-bold">
                                    Currencies:
                                </label>
                                {{ currencies }}
                            </v-item-group>
                            <v-item-group>
                                <label class="font-weight-bold">
                                    Languages:
                                </label>
                                {{ languages }}
                            </v-item-group>
                        </v-col>
                    </v-row>
                </v-card-subtitle>
                <v-col class="px-4">
                    <v-row>
                        <v-col cols="12" md="4" sm="4">
                            <label class="font-weight-bold">Border Countries:</label>
                            <p>{{ this.error.border }}</p>
                        </v-col>
                        <v-col cols="12" sm="8" class="py-0 px-0">
                            <router-link class="text-decoration-none" v-for="(border, i) in borders" :key="i" :to="'/country/'+border.alpha2Code">
                                <v-btn small class="button my-2 text-capitalize px-4 ma-2">{{ border.name }}</v-btn>
                            </router-link>
                        </v-col>
                    </v-row>
                </v-col>
            </v-col>
        </v-row>
        <v-row v-if="error.country" class="text-center" cols="12">
            <v-col class="text-left">
                {{ this.error.country }}
            </v-col>
        </v-row>
    </div>

<!--    </v-container>-->
</template>

<script>
    import axios from "axios";

    export default {
        name: "CountryPage",
        data: () => ({
            'country': null,
            'error': {
                'country': null,
                'border': null
            },
            'borders':[]
        }),
        methods:{
            getBorders(){
                let borders = this.country.borders

                if (borders) {
                    let bordersLength = borders.length

                    for (let i = 0; i < bordersLength; i++) {
                        axios.get('https://restcountries.com/v2/alpha/' + borders[i])
                            .then(response => (
                                this.borders.push({
                                    'name': response.data.name,
                                    'alpha2Code': response.data.alpha2Code
                                })
                            ))
                    }
                }
                else {
                    this.error.border = 'No data available'
                }
            }
        },
        computed: {
            currencies(){
                if(this.country){
                    let currencies = this.country.currencies
                    let currenciesName = []
                    let currenciesLength = currencies.length

                    for (let i = 0; i < currenciesLength; i++ ){
                        currenciesName.push ( currencies[i]['name'] );
                    }

                    return currenciesName.join(', ')
                }else {
                    return null
                }
            },
            languages(){
                if(this.country){
                    let languages = this.country.languages
                    let languagesName = []
                    let languagesLength = languages.length

                    for (let i = 0; i < languagesLength; i++ ){
                        languagesName.push ( languages[i]['name'] );
                    }

                    return languagesName.join(', ')
                }else {
                    return null
                }
            }
        },
        async mounted () {
            axios.get('https://restcountries.com/v2/alpha/'+this.$route.params.id)
                .then(response => {
                    this.country = response.data
                    this.getBorders()
                })
                .catch(err => {
                    let message = "Data not available."

                    if (err && this.country == null) {
                        this.error.country = message
                    }
                })

        }
    }
</script>

<style scoped>
    .theme--dark.v-btn.v-btn--has-bg {
        background-color: #2b3945;
    }
    .theme--light.v-btn.v-btn--has-bg {
        background-color: #ffffff;
    }
</style>