import { Mulish } from "next/font/google";
import "./globals.css";

const muli = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "My Challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={muli.className}>
        {children}
      </body>
    </html>
  );
}
