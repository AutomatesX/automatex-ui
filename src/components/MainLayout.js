'use client';
import React from 'react';
import {Provider} from "react-redux";
import {Flowbite} from "flowbite-react";
import {SessionProvider} from "next-auth/react";
import store from "@/store";
import HandleNavbar from "@/components/HandleNavbar";
import HeadingBar from "@/components/HeadingBar";

function MainLayout({ children }) {
    return (
        <Provider store={store}>
            <SessionProvider>
                <Flowbite theme={{
                    dark: false
                }}>

                    <HeadingBar/>
                    <HandleNavbar/>
                    {children}
                </Flowbite>
            </SessionProvider>
        </Provider>
    );
}

export default MainLayout;