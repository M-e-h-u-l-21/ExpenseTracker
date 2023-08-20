import { useContext, useLayoutEffect, useState } from "react";
import { GlobalStyles } from "../constants/styles";
import { StyleSheet, TextInput, View } from "react-native";
import IconButton from "../component/ui/IconButton";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../component/ManageExpense/ExpenseForm";
import { deleteExpense, storeExpense, updateExpense } from "../util/http";
import LoadingOverlay from "../component/ui/LoadingOverlay";

function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);

  const [isSending,setSending]=useState(false)
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId; // !! is used to convert any value to boolean

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    setSending(true)
    await deleteExpense(editedExpenseId)
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData) {
    setSending(true)
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
      await updateExpense(editedExpenseId,expenseData);
    } else {
      const id=await storeExpense(expenseData);
      expensesCtx.addExpense({...expenseData,id:id});
    }
    navigation.goBack();
  }

  if(isSending){
    return <LoadingOverlay/>
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
