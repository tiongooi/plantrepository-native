import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // backgroundColor: 'white',
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    height: 30,
  },
  title: {
    marginLeft: 16,
    fontFamily: 'roboto-medium',
    color: 'grey',
  },
  content: {
    marginLeft: 35,
    // fontFamily: 'roboto-light',
  },
  iconContainer: {
    width: 20,
    height: 20,
  }
})

export default styles
