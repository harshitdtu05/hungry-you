import Body from "../Body";
import {
  render,
  screen,
  act,
  fireEvent,
  getAllByTestId,
} from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search res cards for pizza text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchBtn = screen.getByRole("button", { name: "🔍" });
  //   console.log(searchBtn);
  //   expect(searchBtn).toBeInTheDocument();

  const cardsBeforeSearch = screen.getAllByTestId("resCards");
  expect(cardsBeforeSearch.length).toBe(8);

  const searchInput = screen.getByTestId("searchInput");
  //   console.log(searchInput);

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCards");
  //   console.log(cards);
  expect(cards.length).toBe(1);
});

it("should search for the top rated restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cards = screen.getAllByTestId("resCards");
  expect(cards.length).toBe(8);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });

  fireEvent.click(topRatedBtn);
  const cardsAfterFilter = screen.getAllByTestId("resCards");
  console.log(cardsAfterFilter.length);
  expect(cardsAfterFilter.length).toBe(7);
});
