# @aphorica/vuetify-blackout-panel

github: https://aphorica.github.com<br/>
Web: https://aphorica.com

## Installing

`npm install @aphorica/vuetify-blackout-panel`

or

`yarn add @aphorica/vuetify-blackout-panel`

## Running the Demo

In a command prompt, cd info the 'demo' directory, and:

```
  (yarn|npm) install
  (yarn|npm run) serve)
```

Open a browser on `localhost:8080`

## Overview

General Blackout implementation along with helper.  Displays
either a message or a spinner.

Consists of three components:

<dl>
<dt>BlackoutComponent</dt>
<dd>
This is the actual Blackout component.  It needs to be imported and
incorporated in the template html and the code as follows:

```
  <template>
    ...
    <BlackoutComponent v-if="mboxVisible" :show="mboxVisible"
                     :params="mboxParams"
                     @close="mboxClose" />
    ...
  </template>
  <script>
    import {BlackoutComponent, BlackoutMixin} from '@aphorica/vuetify-blackout-panel'

    export default {
      components: { ..., BlackoutComponent, ... },
      mixins: [BlackoutMixin],
      ...
    }
  </script>
```

You can put it in any component, but App.vue makes the most sense.
</dd>
<dt>BlackoutMixin</dt>
<dd>
Provides the default activation value and handlers.  This needs to be
imported along with the BlackoutComponent in the same component.</dd>
<dt>Blackout</dt>
<dd>A lightweight object with which you provide content and control
to the BlackoutComponent.  You can import this anywhere you want to
show the BlackoutComponent (including non-component code),
without having to reinstantiate or otherwise import the
BlackoutComponent.

For example:
```
  import {BlackoutPanel} from '@aphorica.vuetify-blackout-panel'

   ...

  needBlackout() {
    BlackoutPanel.showBlackout('This is a message')
          // (simplest invocation)
  }

  done() {
    BlackoutPanel.hideBlackout()
  }
```
</dd>
</dt>

If showing a message, the panel instantiates a '_v-dialog_',
with the msg displayed in the contained '_v-card-text_' subpanel.

## Invocation

<dl>
<dt>BlackoutPanel.showBlackout(&lt;msg | 'busy'&gt;)</dt>
<dd>
Shows the blackout panel with either the message or a spinner.<br/>
args:
<dl>
<dt>msg</dt>
<dd>The message to appear in the <em>v-card-text</em> subpanel</dd>
<dt>'busy'</dt>
<dd>Show the spinner box without a message.</dd>
</dl>
</dd>
<dt>BlackoutPanel.hideBlackout()</dt>
<dd>
Hide the blackout panel.  Can also be accomplished with
`BlackoutPanel.showBlackout('')` (send an empty string.)
</dd>
</dl>

## General Notes
 - The panel is implemented in a modal state &ndash; the user cannot
   interact with the application until it is hidden.

 - This will take on any styling you specify for _v-dialog_ and _v-card_,
   which means it should blend in seamlessly for any other dialogs you are
   using.

 - Would like to consolidate the BlackoutMixin and BlackoutComponent
   into a single file, but that will require some refactoring and research.

 - As the name implies, this is currently based on _vuetify.js_ &mdash; may
   change that later.
