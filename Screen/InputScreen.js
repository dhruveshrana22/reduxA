import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { saveData } from '../redux/action';


const InputScreen = ({ navigation }) => {
    const [inputData, setInputData] = useState('');
    const [inputsr, setinputsr] = useState('');

    const dispatch = useDispatch();

    const alldata = [...inputData, inputsr]

    const handleSave = () => {
        dispatch(saveData(alldata));
        setInputData('');
        navigation.navigate('Display');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={inputData}
                onChangeText={(text) => setInputData(text)}
                placeholder="Enter data"
            />
            <TextInput
                style={styles.input}
                value={inputsr}
                onChangeText={(text) => setInputData(text)}
                placeholder="Enter data"
            />
            <Button title="Save" onPress={handleSave} />
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
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default InputScreen;
