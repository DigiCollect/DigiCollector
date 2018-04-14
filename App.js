import React from 'react';
import StartUp from './Start-up.js';
import Routes from './src/components/routes/Routes.js';

class App extends React.Component {
  render() {
    return (
      <Routes />
      // <Login />
    )
  }
}
export default App

// const Home = () => {
//   return (
//      <Login />
//   )
// }
// export default Home

// import React from 'react';
// import { Text, View } from 'react-native';
// import PresentationalComponent from './PresentationalComponent'
// import Menu from './Menu.js'

// export default class App extends React.Component {
//   state = {
//     myState: 'One less thing to worry about'
//   }
//   // updateState = () => {
//   //   this.setState({ myState: 'The state is updated' })
//   // }
//   render() {
//     return (
      
//       <View>
//         <Menu />
//        {/* Login page
//        <PresentationalComponent myState = {this.state.myState}>
//       </PresentationalComponent>  */}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
