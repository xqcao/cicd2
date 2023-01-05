import * as Comps from "./components/";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";

const routes = [
  { name: "welcome", path: "/", component: Comps.Welcome },
  { name: "user", path: "/user", component: Comps.User },
  { name: "counter", path: "/counter", component: Comps.Counter },
  { name: "Todos", path: "/todos", component: Comps.Todos },
  { name: "UserDisplay", path: "/userdisplay", component: Comps.UserDisplay },
  { name: "TodoDisplay", path: "/tododisplay", component: Comps.TodoDisplay },
  {
    name: "CommentDisplay",
    path: "/commentdisplay",
    component: Comps.CommentDisplay,
  },
];
function App() {
  return (
    <div className="App">
      <h2>React webApp</h2>
      <ol>
        {routes.map((el, idx) => (
          <li key={el.name + "-" + idx}>
            <Link to={el.path}>{el.name}</Link>
          </li>
        ))}
      </ol>
      <hr />
      <Routes>
        {routes.map((el, idx) => (
          <Route
            key={el.name + "_" + idx}
            path={el.path}
            element={<el.component />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
