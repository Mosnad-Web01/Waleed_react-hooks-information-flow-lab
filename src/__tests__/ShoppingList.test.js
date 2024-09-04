import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList";

const testData = [
  { id: 1, name: "Yogurt", category: "Dairy" },
  { id: 2, name: "Pomegranate", category: "Produce" },
  { id: 3, name: "Lettuce", category: "Produce" },
  { id: 4, name: "String Cheese", category: "Dairy" },
  { id: 5, name: "Cookies", category: "Dessert" },
];

test("displays all items when initially rendered", () => {
  const { container } = render(
    <ShoppingList
      items={testData}
      selectedCategory="All"
      onCategoryChange={() => {}}
    />
  );
  expect(container.querySelector(".Items").children).toHaveLength(
    testData.length
  );
});

test("displays only items that match the selected category", () => {
  const { rerender, container } = render(
    <ShoppingList
      items={testData}
      selectedCategory="All"
      onCategoryChange={() => {}}
    />
  );

  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "Dairy" },
  });

  rerender(
    <ShoppingList
      items={testData}
      selectedCategory="Dairy"
      onCategoryChange={() => {}}
    />
  );
  expect(container.querySelector(".Items").children).toHaveLength(2);

  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "Dessert" },
  });

  rerender(
    <ShoppingList
      items={testData}
      selectedCategory="Dessert"
      onCategoryChange={() => {}}
    />
  );

  expect(container.querySelector(".Items").children).toHaveLength(1);
});
