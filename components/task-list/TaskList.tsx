import React from "react";
import { View, StyleSheet, Text, TouchableOpacity,Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Task, openModal, deleteTask } from "../../store/tasksSlice";
import CreateTask from "../create-task/CreateTask";
import { FlatList } from "react-native-gesture-handler";
import { RootState } from "../../store/store";

export default function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const handleNewTask = () => {
    dispatch(openModal());
  };

  const handleDeleteTask = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };

  const renderItem = ({ item }: { item: Task }) => {
    return (
      <View style={styles.taskItem}>
        <Text style={styles.taskName}>{item.name}</Text>
        <TouchableOpacity
          onPress={() => handleDeleteTask(item.id)}
          style={styles.deleteButton}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <Button title="Add new Task" onPress={handleNewTask} />
      <View style={styles.container}>
        {tasks.length === 0 ? (
          <View style={styles.noTasks}>
            <Text style={styles.noTasksText}>No tasks</Text>
          </View>
        ) : (
          <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
          />
        )}
      </View>

      <CreateTask />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    backgroundColor: "#dcd9d9",
    padding: 10,
    borderRadius: 5,
  },
  taskName: {
    fontSize: 16,
  },
  deleteButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "red",
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "white",
    fontSize: 12,
  },
  noTasks: {
    flex: 1,
    alignItems: "center",
  },
  noTasksText: {
    fontSize: 20,
    color: "gray",
  },
});
