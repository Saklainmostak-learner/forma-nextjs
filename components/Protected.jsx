'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
export default function Protected({children}){const {user,loading}=useAuth();const router=useRouter();useEffect(()=>{if(!loading&&!user)router.replace('/login');},[loading,user,router]);if(loading||!user)return <div className="shell py-32 text-center text-muted" role="status">{loading?'Checking your session…':'Redirecting to login…'}</div>;return children;}
