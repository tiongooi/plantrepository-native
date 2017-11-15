import React, { Component } from 'react'
import Root from './app/index'
import { Font } from 'expo'
import { COLOR, ThemeProvider } from 'react-native-material-ui'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false
    }
  }

  async componentDidMount() {
    //wait for font to be loaded first before rendering child
    await Font.loadAsync({
      'roboto-bold': require('./app/assets/fonts/Roboto-Bold.ttf'),
      'roboto-medium': require('./app/assets/fonts/Roboto-Medium.ttf'),
      'roboto-light': require('./app/assets/fonts/Roboto-Light.ttf'),
      'roboto-thin': require('./app/assets/fonts/Roboto-Thin.ttf'),
    })
    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      this.state.fontLoaded && <ThemeProvider uiTheme={uiTheme}>
        <Root />
      </ThemeProvider>
    )
  }
}

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    fontFamily: 'roboto-light',
    toolbar: {
      container: {
        width: '100%',
      },
    },
    button: {
      container: {
        // width: 250,
        height: 50,
      },
    },
}
