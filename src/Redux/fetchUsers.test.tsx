import {fireEvent, getByTestId, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import store from './store';
import {Provider} from "react-redux";
import App from "../App";

test("should fetch and display asynchronous posts", async () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const btnAdd = getByTestId('btn-add');

    fireEvent.click(btnAdd);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const rowElement = screen.getByText(/1/i);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(rowElement).toBeInTheDocument();
});
