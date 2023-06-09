import Cup from "@/components/Cup";
import "./globals.css";
import localFont from "next/font/local";
import Croissant from "@/components/Croissant";

const ticketingFont = localFont({
  src: "../fonts/Ticketing.ttf",
  variable: "--font-ticketing",
});

const paskowyFont = localFont({
  src: "../fonts/Paskowy.ttf",
  variable: "--font-paskowy",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Mot du jour</title>
      </head>
      <body
        className={`${ticketingFont.variable} ${paskowyFont.variable} font-mono min-h-screen flex justify-center items-center bg-amber-400`}>
        <Cup />
        <Croissant />
        {children}
      </body>
    </html>
  );
}
