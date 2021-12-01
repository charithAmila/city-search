import { DutchCityInterface } from "../interfaces";

export const searchCitiesByName = (
  cities: DutchCityInterface[],
  city: string
) => {
  if (!city) {
    return cities;
  }
  const searchText = city.toLowerCase();
  return cities.filter(({ city }) => city.toLowerCase().includes(searchText));
};
