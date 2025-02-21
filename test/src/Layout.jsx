import React from "react";
import {Header, Footer, Home} from "./components/Index"
import Hero from "./components/Hero/Hero";
import { Outlet } from "react-router";

export function Layout() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
            {/* <Hero/> */}
            <Outlet />
        </main>
        <Footer />
      </div>
    );
  }