import React from 'react';
import { AppRegistry, View, SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


const App = () => (
        <SafeAreaView style={{flex: 3, backgroundColor: '#f3fd'}}>
                <View>
                        <Header headerText={'Albums'} />
                        <AlbumList />
                </View>
        </SafeAreaView>
        
        
);

AppRegistry.registerComponent('albums', () => App);
