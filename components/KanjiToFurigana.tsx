import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { RootState } from "../redux/store";
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { setKanjiInput } from "../redux/slices/kanjiInputSlice";
import { fetchFurigana } from "../redux/slices/furiganaOutputSlice";
import { AppDispatch } from '../redux/store';


 export default function KanjiToFurigana() {
    const inputKanji = useSelector((state: RootState) => state.kanjiInput.value)
    const outputFurigana = useSelector((state: RootState) => state.furiganaOutput.value)
    const dispatch = useDispatch<AppDispatch>();
    // const outputFurigana: string = dispatch(fetchFurigana(inputKanji))
    
    useEffect(() => {
        if (!inputKanji) {
            console.log("No input")
        } else {
            dispatch(fetchFurigana(inputKanji))
        }
    }, [inputKanji])
    
    return (
        <View style={styles.container}>
        <Text>Insert Kanji Below</Text>
        <TextInput
            defaultValue={inputKanji}
            onChangeText={input => dispatch(setKanjiInput(input))}
        />
        <Text>{outputFurigana}</Text>
        {/* <StatusBar style="auto" /> */}
      </View>  
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  