import {EventBus} from "@aphorica/vue-event-bus"

export default {
  mounted() {
    EventBus.$on('showBlackout', this.showBlackout)
  },
  beforeDestroy() {
    EventBus.$off('showBlackout', this.showBlackout)
  },
  data: function() { return {
        blackoutMsg: ''
  }},
  methods: {
    showBlackout(msg) {
      this.blackoutMsg = msg
    }
  }
}
