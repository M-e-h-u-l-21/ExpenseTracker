import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    //Sum is the variable in which value will be stored
    return sum + expense.amount; // This value will be sent to sum variable for next execution
  },0); //Second argument is initial value of sum variable
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles=StyleSheet.create({
    container:{
        padding:8,
        backgroundColor:GlobalStyles.colors.primary50,
        borderRadius:6,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    period:{
        fontSize:12,
        color:GlobalStyles.colors.primary400,
    },
    sum:{
        fontSize:16,
        fontWeight:'bold',
        color:GlobalStyles.colors.primary500
    }
})
