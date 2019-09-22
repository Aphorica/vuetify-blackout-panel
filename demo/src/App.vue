<template>
  <v-app>
    <BlackoutComponent v-if="blackoutMsg.length > 0"
                      :show="blackoutMsg.length > 0"
                      :msg="blackoutMsg" />
    <v-app-bar dark app>
      <v-layout row justify-space-around>
        <v-btn raised rounded color="info"
              @click="basic">Basic</v-btn>
        <v-btn raised rounded color="info"
              @click="busy">Busy</v-btn>
      </v-layout>
    </v-app-bar>
  </v-app>
</template>

<style>
html {overflow: hidden; }
</style>

<script>
import {BlackoutPanel, BlackoutComponent, BlackoutMixin}
       from '@aphorica/vuetify-blackout-panel'

export default {
  name: 'App',
  components: { BlackoutComponent },
  mixins: [ BlackoutMixin ],
  methods: {
    basic() {
      BlackoutPanel.showBlackout('Wait 5 Seconds')
      setTimeout(()=>BlackoutPanel.hideBlackout(), 5000)
    },
    busy() {
      BlackoutPanel.showBlackout('busy')
      setTimeout(()=>BlackoutPanel.hideBlackout(), 5000)
    }
  }
}
</script>
