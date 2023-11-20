import React from "react";
import Usernav from './Component/Usernav';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Users from './Component/Users';
import Createuser from './Component/Createuser';
import Edit from "./Component/Edit";

export default function App(){

    return (
        <div>
            <BrowserRouter>
                <Usernav></Usernav>
                <Routes>
                    <Route element={<Createuser></Createuser>} path='Createuser'></Route>
                    <Route element={<Users></Users>} path='Users'></Route>
                    <Route element={<Edit></Edit>} path="/Edit/:uid"></Route>
                    {/* : used to send parameter uid to the url */}
                </Routes>
            </BrowserRouter>
            
        </div>
    );
}