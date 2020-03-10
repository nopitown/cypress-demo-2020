import React from "react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

import { render, wait } from "@testing-library/react";
import App from "./App";

let axiosMock;

beforeEach(() => {
  axiosMock = new MockAdapter(axios);
});

test("fetches todos from api", async () => {
  axiosMock.onGet("https://jsonplaceholder.typicode.com/todos").reply(200, [
    {
      id: 1,
      title: "todo 1"
    },
    {
      id: 2,
      title: "todo 2"
    }
  ]);

  const { getByText } = render(<App />);

  await wait(() => getByText(/todo 1/i));
  expect(getByText(/todo 1/i)).toBeInTheDocument();
  expect(getByText(/todo 2/i)).toBeInTheDocument();
});

afterEach(() => {
  axiosMock.restore();
});
