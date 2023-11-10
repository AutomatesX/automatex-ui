'use client';
import React from 'react';
import {Button, Navbar} from "flowbite-react";
import Link from "next/link";

function HandleNavbar() {
    return (
        <Navbar fluid rounded className="sticky top-0 z-50">
            <Navbar.Brand href="/" as={Link}>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">AutomateX</span>
            </Navbar.Brand>
            <div className="flex md:order-2 space-x-5">
                <button
                    type="button"
                    className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                    Sign Up
                </button>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Login
                  </span>
                </button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#">Feature & Service</Navbar.Link>
                <Navbar.Link href="#">Document</Navbar.Link>
                <Navbar.Link href="#">Start building</Navbar.Link>
                <Navbar.Link href="#">About us</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default HandleNavbar;