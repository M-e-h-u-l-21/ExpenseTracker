import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
    return <ExpenseItem {...itemData.item}/>
}

function ExpensesList({ expenses }) {
  return (
    <FlatList style={{marginTop:8}}
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(itemData) => itemData.id}
    />
  );
}

export default ExpensesList;
