import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Login,
  TicketList,
  Dashboard,
  TicketDetails,
  PageNotFound,
} from "./screens";
import RequireAuth from "./RequireAuth";
import { Layout } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        /> */}
        <Route
          path="/"
          element={
            <RequireAuth>
              <Layout>
                <TicketList />
              </Layout>
            </RequireAuth>
          }
        />
        <Route
          path="/ticketDetails/:id"
          element={
            <RequireAuth>
              <Layout>
                <TicketDetails />
              </Layout>
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
