import { Text } from "react-native";
import ExpensesOutput from "../component/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { useContext } from "react";
function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expensesPeriod="Total"
      expenses={expensesCtx.expenses}
      fallbackText="No expenses registered till now"
    />
  );
}

export default AllExpenses;
