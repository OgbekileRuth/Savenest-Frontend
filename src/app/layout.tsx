import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css"
import { SidebarProvider } from "@/context/SidebarContext";
import { ToastContainer } from 'react-toastify';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Savenest",
  description: "Savenest. Save Together. Live Better.",
  keywords: ["savings", "community", "finance", "budgeting", "nest egg"],
  icons: { icon: "/image/Logo-blue2.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="../public/images/Logo-blue2.png" />
      </head>
      <body
        className={`${spaceGrotesk.className} ${poppins.className} antialiased`}
      >
        <SidebarProvider>
          {children}
        </SidebarProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
