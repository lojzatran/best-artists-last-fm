<template>
    <div>
        <h1>{{$t("nav.topartists")}}</h1>

                <!--selectButtonText="{{$t('topartists.searchBtnText')}}"-->
        <the-country-selector
                selectButtonText="Zobrazit"
                v-on:countrySelected="getTopArtistsForCountry" />
        <div v-if="loadingArtist">Loading...</div>
        <ol>
            <li v-for="artist in artists">
                {{artist.name}}
            </li>
        </ol>
    </div>
</template>

<script>
    import axios from 'axios'
    import TheCountrySelector from '../components/TheCountrySelector'

    const API_KEY = 'b0e4d591749e37b4da175b00e523581b';
    export default {
        name: "top-artists",
        components: {
            TheCountrySelector
        },
        data: function () {
            return {
                artists: [],
                loadingArtist: false
            }
        },
        methods: {
            async getTopArtistsForCountry(countryName) {
                this.loadingArtist = true
                const response = await
                    axios.get(`http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${countryName}&api_key=${API_KEY}&format=json`)
                this.artists = response.data.topartists.artist
                console.log('xxx artists ' + JSON.stringify(this.artists))
                this.loadingArtist = false
            }
        }
    }
</script>

<style scoped>

</style>