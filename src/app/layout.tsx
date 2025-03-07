import Email from "@/components/Email";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { DM_Serif_Display, Inter, Pacifico } from "next/font/google";
import Header from "../components/Header";
import Socials from "../components/Socials";
import "./globals.css";
export const metadata: Metadata = {
  title: "Yuni Park",
  description: "Generated by create next app",
}; 

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', 
}) 

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-serif-display', 
  weight:"400"
})

const pacifico = Pacifico({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico', 
  weight:"400"
}) 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  const classFonts = cn(inter.variable, dmSerif.variable, pacifico.variable); 
  return (
    <html lang="en" className={classFonts} suppressHydrationWarning>
      <head> 
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />  
      </head>
      <body className="h-full text-black bg-background dark:bg-dark-background dark:text-dark-text font-dmSerif"> 
      <Provider> 
            <Header/>
            {children}  
            <Footer /> 
            <Socials/> 
            <Email/>    
        </Provider>
      </body>
    </html>
  )
}
