import "./App.css";
import "@mantine/core/styles.css";

import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage.tsx";
import PageLayout from "./pages/PageLayout.tsx";
import Education from "./pages/education/Education.tsx";
import Culture from "./pages/culture/Culture.tsx";
import Politics from "./pages/politics/Politics.tsx";
import Relationship from "./pages/relationship/Realtionship.tsx";
import Workplace from "./pages/workplace/Workplace.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Homepage />} />
        <Route path="education" element={<Education />} />
        <Route path="culture" element={<Culture />} />
        <Route path="politics" element={<Politics />} />
        <Route path="relationship" element={<Relationship />} />
        <Route path="workplace" element={<Workplace />} />
      </Route>
    </Routes>
  );
}

export default App;
