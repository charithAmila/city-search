import { searchCitiesByName } from "../function";

describe("searchCitiesByName", () => {
  const testCities = [
    {
      city: "Abc",
      admin_name: "Zuid-Holland",
      population: "1406000",
    },
    {
      city: "baa",
      admin_name: "Zuid-Holland",
      population: "1406000",
    },
    {
      city: "bb",
      admin_name: "Zuid-Holland",
      population: "1406000",
    },
  ];

  it("Should handle happy paths", () => {
    expect(searchCitiesByName(testCities, "")).toEqual([
      {
        city: "Abc",
        admin_name: "Zuid-Holland",
        population: "1406000",
      },
      {
        city: "baa",
        admin_name: "Zuid-Holland",
        population: "1406000",
      },
      {
        city: "bb",
        admin_name: "Zuid-Holland",
        population: "1406000",
      },
    ]);

    expect(searchCitiesByName(testCities, "a")).toEqual([
      {
        city: "Abc",

        admin_name: "Zuid-Holland",
        population: "1406000",
      },
      {
        city: "baa",

        admin_name: "Zuid-Holland",
        population: "1406000",
      },
    ]);

    expect(searchCitiesByName(testCities, "ab")).toEqual([
      {
        city: "Abc",
        admin_name: "Zuid-Holland",
        population: "1406000",
      },
    ]);

    expect(searchCitiesByName(testCities, "Abc")).toEqual([
      {
        city: "Abc",
        admin_name: "Zuid-Holland",
        population: "1406000",
      },
    ]);
    expect(searchCitiesByName(testCities, "Abcd")).toEqual([]);
  });

  it("Empty array empty text", () => {
    expect(searchCitiesByName([], "")).toEqual([]);
  });
});
