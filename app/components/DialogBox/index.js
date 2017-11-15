import React from 'react'
import { Dialog, DialogDefaultActions } from 'react-native-material-ui'
import { View, Text } from 'react-native'

const DialogBox = (props) => {
  return(
    <View>
      <Dialog>
        <Dialog.Title><Text>Hello world</Text></Dialog.Title>
        <Dialog.Content><Text>hello from adele</Text></Dialog.Content>
        <Dialog.Actions>
          <DialogDefaultActions actions={['got it']} onActionPress={props.actionPressed}/>
        </Dialog.Actions>
      </Dialog>
    </View>
  )
}

export default DialogBox
