<template>
<div>
 
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
              <v-text-field label="ToDo"></v-text-field>
                <v-date-picker v-model="picker"></v-date-picker>

              <small class="grey--text">* This doesn't actually save.</small>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                text
                color="primary"
                @click="dialog = false"
              >
                Submit
                {{reversedMessage}}
              </v-btn>
            </v-card-actions>
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
      
          <v-chip v-for="tag in tags" :key="tag" :class="tag.status">
            {{ tag.task }}<br>{{tag.date}}</br>
            <v-checkbox ></v-checkbox>
            
          </v-chip>

      </div>
   </v-row>
 </div>
</template>
<script>
import { onMounted } from 'vue';
import {ToDoElement} from '../plugins/ToDoInterface';


export default {
  name: "IndexPage",
  
  mounted(){
  console.log(this.test);
},
  data: () => ({
   test: {
      task: "test",
      date: "test"
    }, 
    dialog: false,
    picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
   
    tags: [
      { task: "Work", status: "complete", date:"01.01.2020"},
      { task: "Work", status: "ongoing" , date:"01.01.2020"},
      { task: "Work", status: "overdue" , date:"01.01.2020"},
       { task: "Work", status: "complete", date:"01.01.2020" },
      { task: "Work", status: "ongoing" , date:"01.01.2020"},
      { task: "Work", status: "overdue" , date:"01.01.2020"},
    ],
  }) /*,
 computed : {
   reversedMessage: function () {
      // `this` points to the vm instance
      return  this.picker.substring(8,10) + "." +this.picker.substring(5,7) + "." + this.picker.substring(0,4)
    }
 } */
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