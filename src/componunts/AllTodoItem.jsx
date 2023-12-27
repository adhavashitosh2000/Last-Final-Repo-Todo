import React from "react";
import TodoItems from "./TodoItems";
import styles from "./AllTodoItem.module.css";

function AllTodoItem({ alltodoItemsArr }) {
  return (
    <div className={styles.itemsContainer}>
      {alltodoItemsArr.map((item) => (
        <TodoItems
          key={item.id}
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItems>
      ))}
    </div>
  );
}

export default AllTodoItem;
