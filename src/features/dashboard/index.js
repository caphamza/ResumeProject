import React, { Fragment } from 'react'

import {View, Text, SafeAreaView, ScrollView, Dimensions, TouchableOpacity} from 'react-native'
const {height, width} = Dimensions.get('screen')

import DocumentPicker from 'react-native-document-picker';

import NativeUploady, {
  UploadyContext,
  useItemFinishListener,
  useItemStartListener,
  useItemErrorListener,
} from "@rpldy/native-uploady";

// import AddIcon from 'react-native-vector-icons/Ionicons'

import {Styles} from './styles'

const dashboard = () => {

  const fileSelector = () => {
    DocumentPicker.pick({type: [DocumentPicker.types.zip],}).then(res => {
      console.log('Picked',res)
    }).catch(err => {
      console.log('Failed', err)
    })
  }

  return (
    <SafeAreaView style={{backgroundColor: '#f2f2f2'}}>
      <ScrollView style={[Styles.container, {height: height}]}>
        <Text>Dashboard</Text>
        
        <TouchableOpacity style={Styles.addBtnView} onPress={() => fileSelector()}>
          {/* <AddIcon name='add-circle-sharp' style={Styles.addBtn}/> */}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default dashboard

