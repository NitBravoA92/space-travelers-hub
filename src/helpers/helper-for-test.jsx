import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rocketsReducer from "../redux/rockets/rocketsSlice";
import missionsReducer from "../redux/missions/missionsSlice";

export function renderWithProviders(
  ui,
  {
    preloadedState = {
      rockets: {
        rockets: [
          {
            id: "1",
            name: "Falcon 1",
            description:
              "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009.",
            image:
              "https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg",
            reserved: true,
          },
        ]
      },
      missions: {
        missions: [
          {
            mission_id: "9D1B7E0",
            mission_name: "Thaicom",
            description:
              "haicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited.",
          },
        ]
      },
    },
    store = configureStore({
      reducer: { rockets: rocketsReducer, missions: missionsReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
