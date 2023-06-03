import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CreateTask from "./CreateTask";
import { Provider as ReduxProvider } from "react-redux";
import store from "../../store/store";
import { openModal, closeModal } from "../../store/tasksSlice";

fdescribe("CreateTask", () => {
    it("should render the modal when the modal is open", () => {
        const { getByTestId } = render(
        <ReduxProvider store={store}>
            <CreateTask />
        </ReduxProvider>
        );
        store.dispatch(openModal());
        const modal = getByTestId("modal");
        expect(modal).toBeTruthy();
    });
    
    
    it("should render the input when the modal is open", () => {
        const { getByTestId } = render(
        <ReduxProvider store={store}>
            <CreateTask />
        </ReduxProvider>
        );
        store.dispatch(openModal());
        const input = getByTestId("input");
        expect(input).toBeTruthy();
    });
    
    it("should NOT render the input when the modal is closed", () => {
        const { queryByTestId } = render(
        <ReduxProvider store={store}>
            <CreateTask />
        </ReduxProvider>
        );
        store.dispatch(closeModal());
        const input = queryByTestId("input");
        expect(input).toBeFalsy();
    });
    
    it("should render the cancel button when the modal is open", () => {
        const { getByTestId } = render(
        <ReduxProvider store={store}>
            <CreateTask />
        </ReduxProvider>
        );
        store.dispatch(openModal());
        const cancelButton = getByTestId("cancel-button");
        expect(cancelButton).toBeTruthy();
    });
    
    it("should NOT render the cancel button when the modal is closed", () => {
        const { queryByTestId } = render(
        <ReduxProvider store={store}>
            <CreateTask />
        </ReduxProvider>
        );
        store.dispatch(closeModal());
        const cancelButton = queryByTestId("cancel-button");
        expect(cancelButton).toBeFalsy();
    });
    
});