import React from 'react'
import { Dialog, DialogDefaultActions } from 'react-native-material-ui'
import { View, Text } from 'react-native'

const DialogBox = (props) => {
  return(
    <View style={{height: '100%', position:'absolute',flex:1, zIndex:2, justifyContent:'center', alignItems:'center'}}>
      <Dialog>
        <Dialog.Title><Text>{props.title}</Text></Dialog.Title>
        <Dialog.Content><Text>{props.content}</Text></Dialog.Content>
        <Dialog.Actions>
          <DialogDefaultActions actions={props.actions} onActionPress={props.actionPressed}/>
        </Dialog.Actions>
      </Dialog>
    </View>
  )
}

export default DialogBox
