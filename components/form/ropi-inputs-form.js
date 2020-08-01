// this will return field props for an <input />
import React from 'react';
import {useField} from "formik";
import {TextInput,View,Text} from "react-native";


const styles = {
    textinput: {
        paddingLeft: 5,
        width: '100%',
        paddingRight: 5,
        borderColor: '#4C588D',
        borderWidth: 2,
        borderRadius: 10
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    error: {
        flexGrow: 1
    }
}

export const RopiTextInput = (props) => {

    const [field, meta] = useField(props.name);
    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={field.onChange(field.name)}
                onBlur={field.onBlur(field.name)}
                value={field.value}
                style={styles.textinput}
                {...props}
            />
            <Text style={styles.error}>{meta.error && meta.touched && meta.error}</Text>
        </View>

    );
}
