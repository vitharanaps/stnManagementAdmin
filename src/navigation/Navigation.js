import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../screens/homeScreen/Home';
import Lines from '../screens/lines/Lines';
import Login from '../screens/login/Login';
import NewUser from '../screens/newUser/NewUser';
import NotFound from '../screens/notFound/notFound';
import Signals from '../screens/signals/Signals';
import Stns from '../screens/stn/Stns';
import Trains from '../screens/trains/Trains';
import User from '../screens/user/User';
import ViewUserDetails from '../screens/viewUserDetails/ViewUserDetails';

const Navigation = () => {


   // const { currentUser } = useContext(AuthContext);
    const currentUser=true


    const RequireAuth = ({ children }) => {
        return currentUser ? (children) : <Navigate to="/login" />
    }

    return (
        <BrowserRouter>
            <Routes >
                <Route path='/'>
                    <Route index element={<RequireAuth><Home /></RequireAuth>} />
                    <Route path='*' element={<NotFound />} />
                </Route>
                <Route path='stn' >
                    <Route index element={<RequireAuth ><Stns /></RequireAuth>} />
                    <Route path='*' element={<NotFound />} />

                </Route>
                <Route path='user' >
                    <Route index element={<RequireAuth><User /></RequireAuth>} />
                    <Route path=":my" element={<RequireAuth><ViewUserDetails /></RequireAuth>} />
                    <Route path="newuser" element={<RequireAuth><NewUser /></RequireAuth>} />

                     {/* <Route path='*' element={<NotFound />} /> */}
                </Route>
                <Route path='trains' >
                    <Route index element={<RequireAuth><Trains /></RequireAuth>} />
                    {/* <Route path=":my" element={<RequireAuth><ViewUserDetails /></RequireAuth>} />
                    <Route path="newuser" element={<RequireAuth><NewUser /></RequireAuth>} /> */}

                     {/* <Route path='*' element={<NotFound />} /> */}
                </Route>
                <Route path='lines' >
                    <Route index element={<RequireAuth><Lines /></RequireAuth>} />
                    <Route path=":my" element={<RequireAuth><ViewUserDetails /></RequireAuth>} />
                    <Route path="newuser" element={<RequireAuth><NewUser /></RequireAuth>} />

                     {/* <Route path='*' element={<NotFound />} /> */}
                </Route>
                <Route path='signals' >
                    <Route index element={<RequireAuth><Signals /></RequireAuth>} />
                    <Route path=":my" element={<RequireAuth><ViewUserDetails /></RequireAuth>} />
                    <Route path="newuser" element={<RequireAuth><NewUser /></RequireAuth>} />

                     {/* <Route path='*' element={<NotFound />} /> */}
                </Route>


                <Route path="/login" element={<Login />} />


            </Routes>
        </BrowserRouter>
    )
}

export default Navigation