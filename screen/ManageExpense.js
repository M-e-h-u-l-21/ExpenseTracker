import { useContext, useLayoutEffect } from "react";
import { GlobalStyles } from "../constants/styles";
import { StyleSheet, View } from "react-native";
import IconButton from "../component/ui/IconButton";
import Button from "../component/ui/Button";
import { ExpensesContext } from "../store/expenses-context";

function ManageExpense({ route, navigation }) {

  const expensesCtx=useContext(ExpensesContext)

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId; // !! is used to convert any value to boolean

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId)
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if(isEditing){
      expensesCtx.updateExpense(editedExpenseId,{description:'Test!!!!',amount:32.2,date:new Date('2023-08-14')})
    }else{
      expensesCtx.addExpense({description:'Test!!',amount:29.9,date:new Date('2023-08-15')})
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode="flat" style={styles.button} onPress={cancelHandler}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>{isEditing ? "Update" : "Add"}</Button>
      </View>
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
  buttons:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    minWidth:120,
    marginHorizontal:8
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
