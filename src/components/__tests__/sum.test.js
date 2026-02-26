import { sum } from "../sum";
test("Sum calculated correctly", () => {
  const result = sum(3, 4);

  expect(result).toBe(7);
});
