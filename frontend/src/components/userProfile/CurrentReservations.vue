<template>
    <v-layout>
        <v-dialog v-model="dialog" max-width="700px"> 
            <reservation
                :overview = 'overview'
            />
        </v-dialog>
        
        
        <v-list two-line style="width:100%;">
        <template v-for="(reservation, index) in this.reservations" >

            <v-divider
                v-if="index!=0"
                :key="index">
            </v-divider>

            <v-list-tile
            :key="reservation.reservationId + reservation.departureName"
            @click="showDialog(reservation)"
            >
                <v-list-tile-avatar>
                    <v-icon>flight</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title> <i><b>{{reservation.departureName}}</b> to <b>{{reservation.destinationName}}</b></i></v-list-tile-title>
                    <v-list-tile-sub-title>{{reservation.departureDate.substring(0,10)}}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-btn @click.stop="cancelReservation(reservation)">CANCER</v-btn>
            </v-list-tile> 
        </template>
        </v-list>
        
    </v-layout>
 
</template>


<script>
import Reservation from "@/components/userProfile/Reservation.vue"
var yourConfig = {headers: {Authorization: "Bearer " + localStorage.getItem("token")}};
export default {
    components: {
        'reservation': Reservation,
    },

    data(){
        return{
            
            overview:{},
            dialog : false,

            reservations:[],


        }
    },
    created(){
        var yourConfig = {headers: {Authorization: "Bearer " + localStorage.getItem("token")}};
        this.$axios.get('http://localhost:8080/api/currentReservations/', yourConfig).then((response) => {
            this.reservations = response.data;
        }).catch((error) => {
            this.$swal("Error", error.response.data.message, 'error');
        });
    },
    methods: {
        showDialog(reservation){
            var yourConfig = {headers: {Authorization: "Bearer " + localStorage.getItem("token")}};
            this.$axios.post('http://localhost:8080/api/getReview/', reservation, yourConfig).then((response) => {
                this.overview = response.data;
            }).catch((error) => {
                this.$swal("Error", error.response.data.message, 'error');
            });
            this.reservation = reservation;
            this.dialog = true;
        },
        cancelReservation(reservation) {
            console.log(reservation.reservationId);
            var yourConfig = {headers: {Authorization: "Bearer " + localStorage.getItem("token")}};
            
            this.$axios.put('http://localhost:8080/api/reservations/cancelFlightReservation/' + reservation.reservationId, {}, yourConfig).then((response) => {
                this.overview = response.data;
            }).catch((error) => {
                this.$swal("Error", error.response, 'error');
            });
        }
    }
    
}
</script>
