<!-- Rent a car homepage -->
<template>
 
    <v-container grid-list-xl text-xs-center>    
        <v-layout row>
         
            <v-layout justify-space-between column fill-height >
                <v-flex xs8>
                    <v-toolbar>   
                        <v-icon>info</v-icon>  
                        <v-toolbar-title>Information</v-toolbar-title>    
                    </v-toolbar>
                    <v-card>

                            <v-card-actions v-if = 'adminsPage'>
                                <v-spacer></v-spacer>
                                <v-btn
                                    ref = 'btn'
                                    :dark = "true"
                                    color="black"
                                    fab
                                    small
                                    @click="changeCanc"
                                >
                                    <v-icon v-if="isEditing">close</v-icon>

                                    <v-icon v-else>edit</v-icon>
                                </v-btn>
                            </v-card-actions>
                                
                            <v-card-text v-if="isEditing">
                            
                                    
                                <v-flex center xs12 sm6 md10 offset-sm1>

                                    <v-text-field
                                        v-model.lazy="rentACar.name"
                                        label="Name"
                                        placeholder="Rent-a-car name"
                                        outline
                                    ></v-text-field>

                                    <v-textarea
                                        v-model.lazy="rentACar.description"
                                        outline
                                        label="Description"
                                        placeholder="Rent-a-car descsriptin"
                                        
                                    ></v-textarea>
                                </v-flex>
                                    
                            </v-card-text>
                            <v-card-text v-else>
                        
                                    
                                <v-flex center xs12 sm6 md10 offset-sm1>

                                    <v-text-field
                                        @focus.stop = "noClick"
                                        v-model.lazy="rentACar.name"
                                        label="Name"
                                        placeholder="Rent-a-car name"
                                        outline
                                    ></v-text-field>

                                    <v-textarea
                                        @focus.stop = "noClick"
                                        v-model.lazy="rentACar.description"
                                        outline
                                        label="Description"
                                        placeholder="Rent-a-car descsriptin"
                                        
                                    ></v-textarea>
                                </v-flex>
                                
                            </v-card-text>

                            <v-card-actions>

                                <v-spacer></v-spacer>
                                <v-btn
                                    :dark = "true"
                                    :disabled="!isEditing"
                                    color="black"
                                    @click="save"
                                >
                                    Save
                                </v-btn>
                            </v-card-actions>
                            
                            <v-snackbar
                                v-model="hasSaved"
                                :timeout="2000"
                                absolute
                                bottom
                                left
                            >
                            Rent a car profile has been updated
                            </v-snackbar>

                    </v-card>
                </v-flex>
                
                <v-flex xs8>
                    <v-toolbar>   
                        <v-icon>account_balance</v-icon> 
                        <v-toolbar-title>Branch offices</v-toolbar-title>      
                    </v-toolbar>

                    <component 
                        v-bind:is="component1"
                        :rentACarId="realId"
                    > 
                    </component>
                </v-flex>

                <v-flex xs8 v-if='adminsPage'>
                   
                    <component
                        :is="component4"
                        :rentACarId ="realId"
                    >
                    </component>
               
                </v-flex>

                <v-flex xs8>
                   
                    <component
                        :is="component3"
                        :quickReservations ='quickRes'
                        :rentACarId ='realId'
                    >
                    </component>
               
                </v-flex>

                
                

        </v-layout>
     

        <v-flex xs3> 
           
            <component
                :is="component2"
                :priceList ='additionalServicesPriceList'
                :rentACarId ='realId'
            >
            </component>
       
        </v-flex>
   
    </v-layout>
    </v-container>

</template>




<script>
import ViewBranchOffices from "@/components/rentACarComp/ViewBranchOffices.vue"
import VehiclePriceList from "@/components/rentACarComp/VehiclePriceList.vue"
import QuickReservations from "@/components/rentACarComp/QuickReservations.vue"
import Reports from "@/components/rentACarComp/Reports.vue"

var yourConfig = {headers: { Authorization: "Bearer " + localStorage.getItem("token")}}
export default {
    props:{
        rentACarId:{
            type: String,
            default: '0'
        }
    },
    components: {
        'viewBranchOffices' : ViewBranchOffices,
        'vehiclePriceList' : VehiclePriceList,
        'quickReservations' : QuickReservations,
        'reports' : Reports

    },
    data () {
      return {

        rentACar :{
                id : 0,
                name : '',
                description : ''
        },

        additionalServicesPriceList : [],

        beforeChange : {
                         name : '',
                         description : ''

                        },
        hasSaved: false,
        isEditing: false,
        no: '',

        component1 : 'viewBranchOffices',
        component2 : 'vehiclePriceList',
        component3 : 'quickReservations',
        component4 : 'reports',

        text: 'Ovde ce trenutnom adminu da se pokazuju podaci o njegovom rent-a-car servisu',
        realId : 0,

        vehicles: [],


        quickRes: [],

        adminRentACarId : 0



      }
    },

    methods: {
        fetchRentACar: function(){
            this.$axios
            .get('http://localhost:8080/api/rentACar/'+ this.rentACarId, yourConfig)
            .then(response => {
                                this.rentACar.id = response.data.id;
                                this.rentACar.name  = response.data.name;
                                this.rentACar.description = response.data.description;

                                this.additionalServicesPriceList=response.data.additionalServicesPriceList;
                                })
        },
        fetchQuickReservations: function(){
            this.$axios
            .get('http://localhost:8080/api/getQuickReservations/'+ this.rentACarId, yourConfig)
            .then(response => {
                    var quickReservations = response.data
                    this.quickRes=[];
                    quickReservations.forEach(v => this.quickRes.push({
                                                    id: v.id,
                                                    dateFrom: this.trim(v.dateFrom),
                                                    dateTo: this.trim(v.dateTo),
                                                    totalPrice: v.totalPrice,
                                                    additionalServices: v.additionalServices ,
                                                    discount: 3,//v.discount,
                                                    vehicle: v.vehicle
                                                }
                                                ));

                })
        },
        trim: function(date){
            return date.substring(0, 10);
        },
        noClick:function(){
            this.$refs.btn.$el.focus()
        },
        changeCanc:function(){

            if(this.isEditing == false){
                this.beforeChange.name = this.rentACar.name;
                this.beforeChange.description = this.rentACar.description
            }else{
                this.rentACar.name  = this.beforeChange.name;
                this.rentACar.description = this.beforeChange.description;
            }

            this.isEditing = !this.isEditing;
        },
        save () {
            this.isEditing = !this.isEditing;

            this.editOnBackend();
            //this.hasSaved = true; //delete

        },
        editOnBackend: function(){
            this.$axios
            .put('http://localhost:8080/api/rentACars/',this.rentACar, yourConfig)
            .then(() => {
                this.beforeChange.name = this.rentACar.name;
                this.beforeChange.description = this.rentACar.description;
                this.hasSaved=true; 
                })
            .catch(error => {
                this.$swal("Error", error.response.data.message, 'error');
                this.rentACar.name  = this.beforeChange.name;
                this.rentACar.description = this.beforeChange.description;

            }); 
        }
        
    },
    created(){

        this.realId = this.rentACarId
        this.fetchRentACar();
        this.fetchQuickReservations();
    },
    computed: {
        adminsPage(){
            return localStorage.getItem("rentACarId") == this.rentACarId
        }
    }
    
        

    
}
</script>
