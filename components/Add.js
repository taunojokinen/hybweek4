import { View, TextInput, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import styles from "../styles/Styles.js";   

export default function Add({add}) {
    const [name, setName] = useState("");

    const save = () => {
        add(name);
        setName("");
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.form}
                value={name}
                onChangeText={text => setName(text)}
                placeholder="Item name ..."
            />
           <TouchableOpacity style={styles.button} onPress={() => save(name)}>
           <Text style={styles.buttonText}>Save</Text>
           </TouchableOpacity>

        </View>
    );
    
}
