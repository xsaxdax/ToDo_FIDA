<template>

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
</template>

        <script>
    export default {
  name: "Dialog"
}
</script>

