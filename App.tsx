import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'; /* (Все элементы должны быть импортированы) */

export default function App() {
  return (
    <View style={styles.container}> {/* (аналог div) */}
      <Text style={{color: "blue"}}>Open up App.tsx to start working on your app!</Text> {/* (аналог p, все текстовые вставки должны быть обернуты в Text) */}
      <StatusBar style="auto" /> 
      <TextInput value='привет!'/> {/* (инпут) */}
      <Button title="It's button"/> {/* (кнопка - самозакрывающийся элемент) */}
    </View>
  );
}

/* (CSS отсутствует вообще, вместо него можно использовать инлайн стили или лучше использовать обьекты со стилями, созданные через StyleSheet(можно и без него, он просто выводит подсказки стилей при вводе), сами стили очень похожи на CSS, но есть и отличия, например гридов нет вообще) */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: "blue",
    fontSize: 24, /* (пиксели не ставим) */
    borderWidth: 1, /* (составные стили(значения через пробел) не работают, описываем каждый стиль отдельно) */
    borderColor: "blue",
    margin: 5,
  }
});
