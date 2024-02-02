import { Route, Routes } from 'react-router-dom';

import AuthLayout from '@features/ui/layout/AuthLayout';
import Home from '@pages/home';
import Login from '@pages/login';
import NotFoundPage from '@pages/not-found';
import SignUpPage from '@pages/sign-up';

import { AppRoutes } from '.';

export default function AppRouter() {
  return (
    <Routes>
      <Route path={AppRoutes.home} element={<Home />} />
      <Route element={<AuthLayout />}>
        <Route path={AppRoutes.singUp} element={<SignUpPage />} />
        <Route path={AppRoutes.login} element={<Login />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
