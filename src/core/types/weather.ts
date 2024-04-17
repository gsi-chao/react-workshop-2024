export type Coordinates = {
  lat: number;
  lon: number;
};

export type Places = {
  id: number;
  name: string;
  coor: Coordinates;
};

export type PlacesResponse = {
  cod: string;
  count: number;
  list: Places[];
  message: string;
};
