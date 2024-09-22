import { Text,Pressable,} from "react-native";
import React, {useState} from "react";
import styles from '../styles/Styles.js';
import Ionicons from '@expo/vector-icons/Ionicons'; 

export default function Row({item, selectedId, select,data,setData}) {
    const backgroundColor = item.id === selectedId ? "#add8e6" : "#fff";
    const [strikeThrough, setStrikeThrough] = useState(item.strikeThrough || false);

    const remove = () => {
        const arrayWithoutRemoved = data.filter((item) => item.id !== selectedId);
        setData(arrayWithoutRemoved);
        select(null);
    }

    const toggleStrikeThrough = () =>{
        select(item.id);
        setStrikeThrough((prevStrikeThrough) => {
            const newStrikeThrough = !prevStrikeThrough;
            const updatedData = data.map((dataItem) => 
            dataItem.id === item.id ? { ...dataItem, strikeThrough: !strikeThrough } : dataItem
        );
        setData(updatedData);
        return newStrikeThrough;
        });
    }

    return (
        <Pressable style= {[styles.row,]} onPress={() => toggleStrikeThrough (item.id)}>
            <Text style={[ strikeThrough === true ? { textDecorationLine: 'line-through' } : {}]}>
                {item.name}
            </Text>

        </Pressable>

    )
    }
