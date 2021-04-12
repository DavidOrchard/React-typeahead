import { Search } from "./Search";
import { render, screen } from "@testing-library/react";

describe("Should", () => {
  it("should display", async () => {
    render(<Search />);
    expect(await screen.findByText(/search/i)).toBeInTheDocument();
  });
});
