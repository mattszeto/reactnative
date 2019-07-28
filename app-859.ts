import React from 'react';
import ReactNative from 'react-native';

if (version.jsBundleVersion) {
    const localVersion = getLocalVersion();
    const RNFS = require('react-native-fs');
    const serverVersionStatus = isNewerVersion(
        localVersion,
        version.jsBundleVersion,
    );
    if(serverVersionStatus === VersionComparison.Older){
        //download new jsBundle
        RNFS.downloadFile()
        //store it somewhere that the native app can find it
    }
}