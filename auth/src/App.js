import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyAwKe5c2mkUzhHbV0BnQ7ZJ3SAvgWPPs34",
        authDomain: "auth-d0ac7.firebaseapp.com",
        databaseURL: "https://auth-d0ac7.firebaseio.com",
        projectId: "auth-d0ac7",
        storageBucket: "",
        messagingSenderId: "33803089688",
        appId: "1:33803089688:web:fcf7d14fc1c28cb3"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;