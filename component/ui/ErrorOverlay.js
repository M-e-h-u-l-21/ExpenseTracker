import { View , ActivityIndicator, StyleSheet,Text,Button} from "react-native"
import { GlobalStyles } from "../../constants/styles"

function ErrorOverlay({message,onConfirm}){
    return <View style={styles.container}>
        <Text style={[styles.text,styles.title]}>An Error occured!!</Text>
        <Text style={styles.text}>{message}</Text>
        <Button onPress={onConfirm} title="Okay"/>
    </View>
}

export default ErrorOverlay

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifycontent:'center',
        alignItems:'center',
        padding:24,
        backgroundColor:GlobalStyles.colors.primary700
    },
    text:{
        textAlign:'center',
        marginBottom:8,
        marginBottom:8,
        color:'white' 
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    message:{
        fontSize:14,
        fontWeight:'bold'
    }
})