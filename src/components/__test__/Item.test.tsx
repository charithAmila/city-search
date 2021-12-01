import { render, screen } from "@testing-library/react";
import Item from "../Item";

test("City, Admin name, Population should render correctly", () => {
  const city = "Amsterdam";
  const admin_name = "Noord-Holland";
  const population = "862965";
  render(<Item data={{ city, admin_name, population }} />);
  expect(screen.getByText(city)).toBeInTheDocument();
  expect(screen.getByText(admin_name)).toBeInTheDocument();
  expect(screen.getByText(population)).toBeInTheDocument();
});
