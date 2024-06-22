import { Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import DashboardLayout from "./dashboard/DashboardLayout";
import Dashboard from "./dashboard/Dashboard";
import Seller from "./dashboard/Seller";
import Customer from "./dashboard/Customer";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/manager" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/manager/seller" element={<Seller />} />
        <Route path="/manager/customer" element={<Customer />} />
      </Route>
    </Routes>
  );
}

export default App;
