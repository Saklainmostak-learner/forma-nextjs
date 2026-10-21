'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, firebaseConfigured } from '@/lib/firebase';
const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(auth, next => { setUser(next); setLoading(false); });
    return unsubscribe;
  }, []);
  // Without config we report ready, while login/register show setup instructions.
  useEffect(() => { if (!firebaseConfigured) setLoading(false); }, []);
  return <AuthContext.Provider value={{ user, loading, logout: () => auth ? signOut(auth) : Promise.resolve(), firebaseConfigured }}>{children}</AuthContext.Provider>;
}
export function useAuth(){ const context = useContext(AuthContext); if (!context) throw new Error('AuthProvider missing'); return context; }
