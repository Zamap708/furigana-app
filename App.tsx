import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import KanjiToFurigana from './components/KanjiToFurigana';

export default function App() {
// 東京

  return (
    <Provider store={store}>
      <KanjiToFurigana/>
    </Provider>

  );
}

