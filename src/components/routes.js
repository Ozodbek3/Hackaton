import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./Not Found/Not_Found";
import DachaContainer from "../containers/DachaPage/containers/DachaContainer";

const RoutesContainer = ({ theme, routes, toggleTheme }) => {
  return (
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout theme={theme} toggleTheme={toggleTheme}>
                <route.component theme={theme}>
                </route.component>
              </route.layout>
            }
          />
        );
      })}
      <Route path="/about/:id" element={<DachaContainer />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RoutesContainer;
