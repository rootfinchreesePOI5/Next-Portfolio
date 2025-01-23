import { Outfit, Fira_Code } from "next/font/google";
import "./globals.css";

// Import Outfit and Fira Code fonts
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add desired weights
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add desired weights
});

export const metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${firaCode.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
