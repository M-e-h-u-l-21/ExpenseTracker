import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of Trousers",
    amount: 89.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e5",
    description: "A book",
    amount: 15.99,
    date: new Date("2022-05-19"),
  },
  {
    id: "e6",
    description: "Some bananas",
    amount: 8.99,
    date: new Date("2021-12-22"),
  },
  {
    id: "e7",
    description: "A book",
    amount: 16.99,
    date: new Date("2022-06-19"),
  },
  {
    id: "e8",
    description: "A book",
    amount: 15.99,
    date: new Date("2022-03-28"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
      <View style={styles.container}>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
        <ExpensesList expenses={DUMMY_EXPENSES}/>
      </View>
  );
}

export default ExpensesOutput;

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:24,
        paddingBottom:0,
        backgroundColor:GlobalStyles.colors.primary700
    }
})