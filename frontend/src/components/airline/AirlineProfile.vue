<template>
    <v-flex class='d-flex'>

        <v-layout class="airline-data" column align-center ma-4>
            <v-avatar
                class="ma-2"
                :tile="true"
                :size="80"
            >
                <!-- TODO: CHANGE PLACEHOLDER IMAGE -->
                <img src="https://www.airserbia.com/Data/Images/logo.png" alt="avatar">     
            </v-avatar>
            <h2 class="text-xs-center">{{ airline.name }}</h2>
            <span class="black--text text--lighten-2 caption mr-2">
                ({{ airline.averageFeedback }})
            </span>
            <v-rating
                v-model="airline.averageFeedback"
                background-color="white"
                color="yellow accent-4"
                dense
                half-increments
                hover
                size="18"
            ></v-rating>
            <h3 class="text-xs-center mb-1">{{ airline.location.formattedAddress }}</h3>
            <p class="text-xs-center ma-1">{{ airline.description }}</p>
            <div class="text-xs-center">
                <v-btn @click="redirectToEdit()" round small flat color="primary" dark>Edit Airline Profile</v-btn>
                <v-divider></v-divider>
                <v-btn @click="redirectToReports()" round small flat color="primary" dark>Reports overview</v-btn>
            </div>
        </v-layout>

        <v-flex>
            <GmapMap
                :center="currentMapCenter"
                :zoom="14"
                map-type-id="terrain"
                class="custom-map"
                :options="{
                    zoomControl: true,
                    mapTypeControl: true,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: false,
                    disableDefaultUi: false
                }"
            >
                 
                <GmapMarker
                    v-if="this.airline.location.latitude"
                    :position="currentMapCenter"
                    :clickable="false"
                    :draggable="false"
                />
                
            </GmapMap>
        </v-flex>

     </v-flex>
</template>

<script>

export default {
    data() {
        return {
            airline: {
                name: '',
                description: '',
                location: {
                    lat: 21.0,
                    lng: 42.0,
                    formattedAddress: '',
                },
                averageFeedback: 3.5
            },
            currentMapCenter : {
                lat: 21.0,
                lng: 42.0
            }
        }
    },
    methods: {
        redirectToEdit() {
            this.$router.push('editAirlineProfile');
        },
        redirectToReports() {
            this.$router.push('airlineReports');
        }
    },
    created() {

        var yourConfig = { headers: { Authorization: "Bearer " + localStorage.getItem("token") }};

        this.$axios.get('http://localhost:8080/api/airlines/getCurrentAdminAirline', yourConfig)
            .then((response) => {
                this.airline = response.data;
                this.airline.averageFeedback = 3.5;
                this.currentMapCenter.lat = this.airline.location.latitude;
                this.currentMapCenter.lng = this.airline.location.longitude;
            }).catch((error) => {
                this.$swal("Error", error.response.data.message, 'error');
            });
    }
}
</script>

<style scoped>

.custom-map {
    position: relative;
    padding: 5px 0;
    width: 100%;
    height: 300px;
}

</style>