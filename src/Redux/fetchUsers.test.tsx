import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import store from './store';
import {Provider} from "react-redux";
import App from "../App";

test("should fetch and display asynchronous posts", () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const table = getByTestId('table');
    expect(table.textContent).toBe('1');
});
