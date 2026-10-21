import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
export const metadata={title:'Forma — Curated Workspace Essentials',description:'Thoughtfully selected objects for spaces that inspire.'};
export default function RootLayout({children}){return <html lang="en"><body><AuthProvider><Navbar/><main>{children}</main><Footer/><Toaster position="top-right" toastOptions={{style:{borderRadius:12}}}/></AuthProvider></body></html>}
