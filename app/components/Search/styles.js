import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  innerContainer: {
    width: '98%',
  },
  innerMostContainer: {
    width: '100%',
  },
  scrollView: {
    width: '100%',
    height: '100%',
  },
  searchBarMessageContainer: {
    // flex: 1,
    flexDirection: 'row',
    paddingTop: 30,
    justifyContent: 'center',
  },
  searchBarMessage: {
    marginLeft: 20,
    color: 'grey',
  }
})

export default styles
