import React, { Component } from 'react';
import { View } from  'react-native';
import { Header } from './components/common/Header';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAwKe5c2mkUzhHbV0BnQ7ZJ3SAvgWPPs34',
            authDomain: 'auth-d0ac7.firebaseapp.com',
            databaseURL: 'https://auth-d0ac7.firebaseio.com',
            projectId: 'auth-d0ac7',
            storageBucket: '',
            messagingSenderId: "33803089688",
            appId: "1:33803089688:web:fcf7d14fc1c28cb3"
          });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;