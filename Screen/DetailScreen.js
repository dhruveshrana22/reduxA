import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const DisplayScreen = () => {
    const data = useSelector((state) => state.data);

    return (
        <View style={styles.container}>
            <Text>Data from InputScreen:</Text>
            <Text>{data}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
});

export default DisplayScreen;
