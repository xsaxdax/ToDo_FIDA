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
                <v-date-picker v-model="picker"></v-date-picker>

              
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                text
                outlined
                color="primary"
                @click=" test(), submitForm()"
              >
                Submit
                {{row}}
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
      
          <v-chip v-for="tag in tags" :key="tag" :class="tag.status">
            {{ tag.task }}<br>{{tag.date}}</br>
            <v-checkbox ></v-checkbox>
            
          </v-chip>

      </div>
   </v-row>
 </div>
</template>
<script>
export default {
  name: "IndexPage",
  data: () => ({
    dialog: false,
    picker: null, // (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    task: null,
    taskStatus: null,
    taskObject: null,
    tags: [
      { task: "Work", status: "complete", date:"01.01.2020"},
      { task: "Work", status: "ongoing" , date:"01.01.2020"},
      { task: "Work", status: "overdue" , date:"01.01.2020"},
       { task: "Work", status: "complete", date:"01.01.2020" },
      { task: "Work", status: "ongoing" , date:"01.01.2020"},
      { task: "Work", status: "overdue" , date:"01.01.2020"},
    ],
    nameRules: [
  v => !!v || 'Name is required',
  v => (v && v.length <= 20) || 'Name must be less than 10 characters',
],
  }),

  computed: {
    currentTask(){
      return  test={
        date:this.reversedMessage2(),
        task: this.task,
        taskStatus: this.taskStatus    
      }
    }
  },
 
 methods : {
  reversedMessage2: function () {
      // `this` points to the vm instance
      return  this.picker.substring(8,10) + "." +this.picker.substring(5,7) + "." + this.picker.substring(0,4)
    },
    submitForm () {
    if (this.task!==null && this.picker){
      this.dialog = false
    }
    },
    updateTaskObject () {
      this.taskObject=localStorage.getItem("tasks")
    },
   test: function () {

    if (localStorage.getItem("tasks") === null) {
  console.log("no items")
localStorage.setItem("tasks", JSON.stringify([]))
}
      // `this` points to the vm instance
      
      let task ={
        date:this.reversedMessage2(),
        task: this.task,
        taskStatus: this.taskStatus
      }
    
     
          let array= JSON.parse(localStorage.getItem("tasks")) 
          array.push(task)
          this.updateTaskObject(),
          //console.log(localStorage.getItem("tasks"))
         // let x = localStorage.setItem("tasks", JSON.stringify(array))
          console.log(this.taskObject)

    }

 }
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