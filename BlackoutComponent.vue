<template>
  <v-content>
    <v-layout class="spinner-layout" v-if="msg==='busy'" column align-center justify-center>
      <svg class="spinner" width="120px" height="120px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
      </svg>
    </v-layout>
    <v-dialog v-else v-model="showing" persistent eager max-width="500">
      <v-card dark>
        <v-card-text class="blackout-msg-ctnr">
          <div class="list-color blackout-msg">
            {{msg}}
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-content>
</template>

<style lang="scss">
.blackout-msg-ctnr { height:100px; padding:0!important; display:flex; justify-content: center; }
.blackout-msg { align-self: center; font-size:3rem; }
.spinner-layout { height: 100%;
                    background-color: rgba(0, 0, 0, 0.25)
                }

$offset: 187;
$duration: 1.4s;

.spinner {
  animation: rotator $duration linear infinite;
}

@keyframes rotator {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
}

.path {
  stroke-dasharray: $offset;
  stroke-dashoffset: 0;
  stroke: #2196f3;
  transform-origin: center;
  animation:
    dash $duration ease-in-out infinite, 
//    colors ($duration*4) ease-in-out infinite;
}

@keyframes dash {
 0% { stroke-dashoffset: $offset; }
 50% {
   stroke-dashoffset: $offset/4;
   transform:rotate(135deg);
 }
 100% {
   stroke-dashoffset: $offset;
   transform:rotate(450deg);
 }
}
</style>

<script>
  import {EventBus} from '@aphorica/vue-event-bus'

  export default {
    name: 'BlackoutComponent',
    props: { msg: String },
    mounted() {
      this.showing = true
    },
    data: function() { return {
      showing: false
    }}
  }
</script>
