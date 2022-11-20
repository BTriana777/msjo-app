/* eslint-disable import/no-unresolved */
import React, { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { portalPage, register, signIn } from './paths';
import { Register } from '../pages/auth/Register.page';
import Login from '../pages/auth/Login.page';
import Portal from '../pages/home/Portal.page';

const AppRouter: React.FC = () => (
        <BrowserRouter>
            <Routes>
                <Route path={portalPage} element={<Portal />} />
                <Route path={signIn} element={<Login />} />
                <Route path={register} element={<Register />} />

                <Route path="/*" element={<Navigate to="/" />}/>
            </Routes>
        </BrowserRouter>
    )
export default AppRouter;