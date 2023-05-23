import "./globals.css";
import localFont from "next/font/local";

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
        className={`${ticketingFont.variable} ${paskowyFont.variable} font-mono min-h-screen flex justify-center items-center bg-gradient-to-b from-yellow-400 to-amber-400`}>
        {children}
      </body>
    </html>
  );
}
