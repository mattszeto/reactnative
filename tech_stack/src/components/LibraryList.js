import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import RNFS, { DocumentDirectoryPath, MainBundlePath } from 'react-native-fs';
import { zip, unzip, unzipAssets, subscribe } from 'react-native-zip-archive';


class LibraryList extends Component{
    renderItem(library){
        return <ListItem library={library} />;
    }
    

    render() {

        var sourcePath = `${DocumentDirectoryPath}/main.jsbundle.zip`
        var targetPath = DocumentDirectoryPath
    
        console.log(DocumentDirectoryPath);
        unzip(sourcePath, targetPath)
        .then((path) => {
            console.log(`unzip completed at ${path}`)
        })
        .catch((error) => {
            console.log(error)
        })
        return(
            
            <FlatList
                data = {this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={library => `${library.id}`}
            />
        );
    }

    
};



const mapStateToProps = state => {


    //"https://apps.justfab.net/repo/jsbundle/main.jsbundle.gz"

    console.log(state);
    return { libraries: state.libraries }; //turning object from state.libraries to prop libraries.
}
export default connect(mapStateToProps)(LibraryList);