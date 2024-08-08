"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function Layout({ children }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        {children}
        <Footer />
      </Provider>
    </>
  );
}
