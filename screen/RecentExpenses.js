import { Text } from "react-native";
import ExpensesOutput from "../component/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../component/ui/LoadingOverlay";
import ErrorOverlay from "../component/ui/ErrorOverlay";
function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const [isFetching,setIsFetching]=useState(true)
  const [error,setError]=useState();
  useEffect(()=>{
    async function getExpenses(){
      try{
        const expenses=await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      }catch(error){
        setError('Could not fetch expenses!!')
        setIsFetching(false)
      }
    }
    getExpenses();
  },[])

  function errorHandler(){
    setError(null)
  }

  if(error && !isFetching){
    return <ErrorOverlay message={error}  onConfirm={errorHandler}/>
  }

  if(isFetching){
    return <LoadingOverlay/>
  }

  const recentExpenses = expensesCtx.expenses?.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for past 7 days"
    />
  );
}

export default RecentExpenses;
