import {EventBus} from '@aphorica/vue-event-bus'

class BlackoutPanel {
  static showBlackout(msg) {
    EventBus.$emit('showBlackout', msg)
  }

  static hideBlackout() {
    EventBus.$emit('showBlackout', '')
  }
}

export default BlackoutPanel