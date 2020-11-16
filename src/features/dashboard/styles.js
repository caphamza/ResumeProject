import {StyleSheet, Dimensions} from 'react-native'

const {height, width} = Dimensions.get('screen')

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    marginHorizontal: 20,
  },
  addBtn: {
    color: '#4d94ff',
    fontSize: 100
  },
  addBtnView: {
    marginTop: (height/1.1)-150,
    position: 'absolute',
    alignSelf: 'flex-end',
    height: 100,
    width: 100,
    backgroundColor: 'red'
  }
})