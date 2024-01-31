import { Route, Routes } from "react-router-dom";

import AuthLayout from "@features/ui/layout/AuthLayout";
import { Home, Login } from "@mui/icons-material";
import NotFoundPage from "@pages/not-found";
import SignUpPage from "@pages/sign-up";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<AuthLayout />}>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
