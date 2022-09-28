<template>
<div>

   <v-container fluid>
      <v-row dense>
        <v-col
          v-for="(card, index) in tasks"
          :key="card.index"
          :cols="card.flex"
        >
          <v-card id="card-container"   :class="[mx-auto , card.taskStatus]" >
            
            <v-card-title v-text="card.task"></v-card-title>
            <v-card-text  v-text="card.date"></v-card-text>
            <v-card-text v-text="card.taskStatus"></v-card-text>
            <v-card-actions >
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-delete</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>

              
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

 
 <v-btn
              fab
              color="cyan accent-2"
              top
              left
              
              @click="dialog = !dialog"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>

             <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <v-card>
            <v-card-text>
              <v-text-field  required :rules="nameRules" v-model="task" label="ToDo">
              </v-text-field>
            
           <p> Please select a status </p> 
               <v-radio-group v-model="taskStatus" mandatory row >
     
       <v-radio
        label="ongoing"
        value="ongoing"
      ></v-radio>
      <v-radio
        label="complete"
        value="complete"
      ></v-radio>
      <v-radio
        label="overdue"
        value="overdue"
      ></v-radio>
    </v-radio-group>  
    <p> Please select a finishing date </p> 
                <v-date-picker required v-model="picker" active-picker="date"></v-date-picker>

              
            </v-card-text>

            <v-card-actions>

              <v-btn
                text
                outlined
                color="primary"
                @click=" resetForm()"
              >
                Cancel
              
              </v-btn>
              <v-spacer></v-spacer>

              <v-btn
                text
                outlined
                color="primary"
                @click=" submitForm()"
              >
                Submit
              
              </v-btn>
            </v-card-actions>
            <small class="grey--text">* This doesn't actually save.</small>
          </v-card>
          
        </v-dialog>

          <v-btn
              fab
              color="cyan accent-2"
              top
              right
           
              @click="dialogDelete = !dialogDelete"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
 

            <v-row justify="center" xs=1>
      <div  id="chips-container" >
        
          
          <v-chip v-for="(task, index) in taskObjects" :key="index" :class="task.taskStatus">
            {{ task.task }}<br>{{task.date}}<br> 
            <v-checkbox ></v-checkbox>
           
  
            <button v-on:click="removeElement(index)">remove</button>
            <v-icon
                        small
                        class="mr-2"
                        @click="removeElement(index)"
                      >
                        mdi-delete
                      </v-icon>
          </v-chip>
      </div>    
   </v-row>
   <Testing/>

 </div>

</template>
<script>
import Testing from "../components/testing.vue";
export default {
    name: "IndexPage",
    mounted() {
        this.taskObjects = JSON.parse(localStorage.getItem("tasks")),
            console.log(this.taskObjects);
    },
    data: () => ({
        dialog: false,
        picker: null,
        task: null,
        taskStatus: null,
        taskObjects: null,
       
      
        nameRules: [
            v => !!v || "Name is required",
            v => (v && v.length <= 20) || "Name must be less than 10 characters",
        ],
    }),
    computed: {
        currentTask() {
            return test = {
                date: this.reversedMessage2(),
                task: this.task,
                taskStatus: this.taskStatus
            };
        },
        updateTaskObject() {
            this.taskObjects = localStorage.getItem("tasks");
        },
    },
  
    methods: {
        removeElement: function (index) {
            console.log(index, this.taskObjects[index]);
           this.taskObjects.splice(index, 1);
           //localStorage.setItem("tasks", JSON.stringify(this.taskObjects))
        },
        reversedMessage2: function () {
            // `this` points to the vm instance
            return this.picker ?
                this.picker.substring(8, 10) + "." + this.picker.substring(5, 7) + "." + this.picker.substring(0, 4)
                : null;
        },
        submitForm() {
            if (this.task && this.picker) {
                this.dialog = false;
                this.test();
            }
        },
        resetForm() {
            this.picker = null,
                this.task = null,
                this.dialog = false;
        },
        test: function () {
            if (localStorage.getItem("tasks") === null) {
                console.log("no items");
                localStorage.setItem("tasks", JSON.stringify([]));
            }
            // `this` points to the vm instance
            let task = {
                date: this.reversedMessage2(),
                task: this.task,
                taskStatus: this.taskStatus
            };
            let array = JSON.parse(localStorage.getItem("tasks"));
            console.log(array);
            array.push(task);
            //this.updateTaskObject(),
            //console.log(localStorage.getItem("tasks"))
            localStorage.setItem("tasks", JSON.stringify(array));
            this.taskObjects=array;
            // this.taskObject=array
            //console.log(this.taskObject)
        }
    },
    components: { Testing }
};
</script>

<style >

#chips-container .v-chip.complete {
  background: #3cd1c2;
}
#chips-container .v-chip.ongoing {
  background: #ffaa2c;
}
#chips-container .v-chip.overdue {
  background: #f83e70;
}

#chips-container .v-chip .v-checkbox {
  padding-left: 10px;
}
</style>

