import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // For mock mode, create a demo user
  const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true';
  
  useEffect(() => {
    if (USE_MOCK) {
      // Create mock user for testing
      setUser({ 
        id: '1', 
        email: 'demo@abrehot.com',
        user_metadata: { full_name: 'Demo User' }
      });
      setProfile({
        id: '1',
        full_name: 'Demo User',
        avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        favorite_genre: 'Fiction',
        is_admin: true
      });
      setLoading(false);
      return;
    }

    // Real Supabase auth
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        await fetchProfile(session.user.id);
      } else {
        setProfile(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchProfile = async (userId) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (!error && data) {
      setProfile(data);
    }
  };

  const signInWithGoogle = async () => {
    if (USE_MOCK) {
      console.log('Mock Google Sign In');
      return { data: {}, error: null };
    }
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    });
    return { data, error };
  };

  const signInWithMagicLink = async (email) => {
    if (USE_MOCK) {
      console.log('Mock Magic Link sent to:', email);
      alert(`✨ Demo Mode: Magic link would be sent to ${email}`);
      return { data: {}, error: null };
    }
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.origin,
      },
    });
    return { data, error };
  };

  const signOut = async () => {
    if (USE_MOCK) {
      console.log('Mock Sign Out');
      setUser(null);
      setProfile(null);
      return { error: null };
    }
    const { error } = await supabase.auth.signOut();
    return { error };
  };

  const value = {
    user,
    profile,
    loading,
    signInWithGoogle,
    signInWithMagicLink,
    signOut,
    isAdmin: USE_MOCK ? true : (profile?.is_admin || false),
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
