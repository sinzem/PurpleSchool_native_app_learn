import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native'; /* (Все элементы должны быть импортированы) */
import { Input } from './shared/input/Input';
import { Colors, Gaps } from './shared/tokens';
import { Button } from './shared/button/Button';

export default function App() {

  const width = Dimensions.get("window").width; /* (обьект Dimensions - импортируем из react - позволяет работать с окном устройства(window или screen), в д.с получаем ширину окна, удобно для указания размеров в стилях, например width / 2 - 5  - укажет половину окна + 5px из gap) */

  return (
    // <View style={styles.container}> {/* (аналог div, имеет flex/column по-умолчанию) */}
    //   <Text style={{color: "blue"}}>Open up App.tsx to start working on your app!</Text> {/* (аналог p, все текстовые вставки должны быть обернуты в Text) */}
    //   <StatusBar style="auto" /> 
    //   <TextInput value='привет!'/> {/* (инпут) */}
    //   <Button title="It's button"/> {/* (кнопка - самозакрывающийся элемент) */}
    //   <View style={{ /* (имеет flex/column по-умолчанию, вцелом работает как обычный флекс) */
    //     backgroundColor: "yellow",
    //     alignItems: "flex-end",
    //     justifyContent: "space-between",
    //     height: 500,
    //     flexDirection: "row",
    //     flexWrap: "wrap",
    //     alignContent: "center",
    //     gap: 10
    //   }}>
    //     <View style={{backgroundColor: "tomato", width: "50%", height: 100}}></View>
    //     <View style={{backgroundColor: "purple", width: "50%", height: 100, alignSelf: "flex-end"}}></View>
    //     <View style={{backgroundColor: "green", width: "50%", height: 100}}></View>
    //   </View>
    // </View>

    // -----------------------------------------------------------
    <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.logowrap}>
            <Image 
              style={styles.logo}
              resizeMode='contain'
              source={require("./assets/tree-from-wectors-market.png")}
            />
            <Text style={styles.logotext}>PurpleSchool</Text>
          </View>
          <View style={styles.form}>
            <Input placeholder='Email'/>
            <Input isPassword placeholder='Password'/>
            <Button text='Войти'/>
          </View>
          <Text>Восстановить пароль</Text>
        </View>
    </View>
   
  );
}

// /* (CSS отсутствует вообще, вместо него можно использовать инлайн стили или лучше использовать обьекты со стилями, созданные через StyleSheet(можно и без него, он просто выводит подсказки стилей при вводе), сами стили очень похожи на CSS, но есть и отличия, например гридов нет вообще, составные стили(значения через пробел) не работают, описываем каждый стиль отдельно) */

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    padding: 55,
    backgroundColor: Colors.black,
  },
  logowrap: {
    flexDirection: 'row',
    gap: Gaps.g16,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 30,
  },
  logotext: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  content: {
    alignItems: "center",
    gap: Gaps.g50,
  },
  form: {
    alignSelf: "stretch",
    gap: Gaps.g16,
  },
  textStyle: {
    color: "blue",
    fontSize: 24,
    borderWidth: 1,
    borderColor: "blue",
  }
})
