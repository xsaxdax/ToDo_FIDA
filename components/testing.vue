<template>

    
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

</template>

<script>
  export default {
    data: () => ({
  
      tasks:[
    {
        "date": "13.09.2022",
        "task": "khvj",
        "taskStatus": "ongoing"
    },
    {
        "date": "12.09.2022",
        "task": "ökn",
        "taskStatus": "ongoing"
    },
    {
        "date": "14.09.2022",
        "task": "gsrg",
        "taskStatus": "complete"
    },
    {
        "date": "14.09.2022",
        "task": "gsrg",
        "taskStatus": "complete"
    },
    {
        "date": "15.09.2022",
        "task": "gsrg",
        "taskStatus": "overdue"
    },
    {
        "date": "11.09.2022",
        "task": "gsrg",
        "taskStatus": "overdue"
    }
]
    }),
  }
</script>

<style >



#card-container.ongoing .v-sheet.v-card {
  
    background: #ffaa2c;
}

#card-container.ongoing {
      background: #ffaa2c;
    }
    #card-container.overdue {
      background: #f83e70;
    }

  
    #chips-container .v-chip .v-checkbox {
      padding-left: 10px;
    }
    </style>