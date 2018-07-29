//React
import React from 'react';
import { View } from 'react-native';
//General
import LoadingPage from './components/LoadingPage'
import { purple } from './utils/colors'
import { UdaciStatusBar, MainNavigator } from './utils/global'
//Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import myreducers from './reducers'
import midware from './midware'

const mystore = createStore(myreducers,midware);

export default class App extends React.Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000);
  }
  render() {
    return (
      this.state.loading ? <LoadingPage /> :
        <Provider store={mystore}>
          <View style={{ flex: 1 }}>
            <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
            <MainNavigator />
          </View>
        </Provider>
    );
  }
}//App

