import { createRoot } from "react-dom/client";
import "./index.css";
const root = createRoot(document.getElementById("root"));

root.render(
  <div className="card">
    <nav>
      <img
        className="logo"
        src="https://tse4.mm.bing.net/th/id/OIP.NmoyXZ9Eg_Cn6JpkiRba-AAAAA?pid=Api&P=0&h=180"
        alt="Logo not found"
      />
      <h1 className="heading">Rules of JSX</h1>
    </nav>
    <ul className="listitems">
      <li>Must have enclose JSX in a Root Element</li>
      <li>Close the Tags Properly</li>
      <li>use ClassName for CSS class, as class is reserved word in JS</li>
      <li>use camelCase for attributes</li>
      <li>use flowerbraces for JS</li>
    </ul>
  </div>
);
