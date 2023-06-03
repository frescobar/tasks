import { useState } from "react";
import { View, Text, Modal, TextInput, Button, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { Task, addTask, closeModal } from "../../store/tasksSlice";

function CreateTask() {
  const [textInputValue, setTextInputValue] = useState<string>('');
  const handleInputChange = (text: string) => {
    setTextInputValue(text);
  }
  const isModalOpen = useSelector((state: RootState) => state.tasks.isModalOpen)
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    dispatch(closeModal())
    setTextInputValue('')  
  }

  const createTask = () => {
    const task:Task = {
        id: new Date().getTime().toString(),
        name: textInputValue,
    }
    dispatch(addTask(task))
    setTextInputValue('')
    handleCloseModal()
  }

  return (
    <Modal
      animationType="slide"
      visible={isModalOpen}
      transparent={true}
      testID="modal"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Modal</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter text..."
            value={textInputValue}
            onChangeText={handleInputChange}
              testID="input"
            />
          <View style={styles.buttonsContainer}>
            <Button
              title="Cancel"
              onPress={handleCloseModal}
              color="gray"
              testID="cancel-button"
            />
            <Button
              title="Create Task"
              onPress={createTask}
              disabled={!textInputValue}
              testID="create-task-button"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default CreateTask;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
  },
});
