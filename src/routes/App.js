import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout } from "../containers/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export { App };
