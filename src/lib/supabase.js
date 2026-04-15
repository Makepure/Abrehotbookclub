// Mock Supabase client for development
import { mockBooks, mockMeetings, mockMembers, mockDiscussions } from './mockData';

const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true' || !import.meta.env.VITE_SUPABASE_URL;

// Mock client that mimics Supabase API
const createMockClient = () => {
  let books = [...mockBooks];
  let meetings = [...mockMeetings];
  let members = [...mockMembers];
  let discussions = [...mockDiscussions];

  return {
    from: (table) => ({
      select: (columns = '*') => ({
        eq: (field, value) => ({
          single: async () => {
            let data;
            if (table === 'books') data = books.find(b => b[field] === value);
            else if (table === 'meetings') data = meetings.find(m => m[field] === value);
            else if (table === 'profiles') data = members.find(m => m[field] === value);
            return { data, error: null };
          },
          order: (field, { ascending }) => {
            let filtered;
            if (table === 'books') filtered = books.filter(b => b[field] === value);
            else if (table === 'discussions') filtered = discussions.filter(d => d[field] === value);
            else filtered = [];
            
            if (ascending !== undefined) {
              filtered.sort((a, b) => {
                if (ascending) return a[field] > b[field] ? 1 : -1;
                return a[field] < b[field] ? 1 : -1;
              });
            }
            return { data: filtered, error: null };
          }
        }),
        order: (field, { ascending = true } = {}) => {
          let data = [];
          if (table === 'books') data = [...books];
          else if (table === 'meetings') data = [...meetings];
          else if (table === 'profiles') data = [...members];
          else if (table === 'discussions') data = [...discussions];
          
          data.sort((a, b) => {
            if (ascending) return a[field] > b[field] ? 1 : -1;
            return a[field] < b[field] ? 1 : -1;
          });
          
          return { data, error: null };
        },
        gte: (field, value) => ({
          order: (field, { ascending }) => {
            const filtered = meetings.filter(m => new Date(m[field]) >= new Date(value));
            return { data: filtered, error: null };
          }
        }),
        limit: (num) => ({
          single: async () => {
            return { data: meetings[0], error: null };
          }
        })
      }),
      insert: (data) => {
        const newItem = { ...data, id: Date.now().toString() };
        if (table === 'books') books.push(newItem);
        else if (table === 'meetings') meetings.push(newItem);
        else if (table === 'discussions') {
          const discussion = {
            ...data,
            id: Date.now().toString(),
            created_at: new Date().toISOString(),
            profiles: members.find(m => m.id === data.user_id)
          };
          discussions.push(discussion);
        }
        return { error: null };
      },
      update: (data) => ({
        eq: (field, value) => {
          if (table === 'books') {
            const index = books.findIndex(b => b[field] === value);
            if (index !== -1) books[index] = { ...books[index], ...data };
          } else if (table === 'meetings') {
            const index = meetings.findIndex(m => m[field] === value);
            if (index !== -1) meetings[index] = { ...meetings[index], ...data };
          }
          return { error: null };
        }
      }),
      delete: () => ({
        eq: (field, value) => {
          if (table === 'books') books = books.filter(b => b[field] !== value);
          else if (table === 'meetings') meetings = meetings.filter(m => m[field] !== value);
          return { error: null };
        }
      }),
      upsert: (data, { onConflict }) => {
        if (table === 'ratings') {
          // Mock rating update
          return { error: null };
        }
        return { error: null };
      }
    }),
    auth: {
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      onAuthStateChange: (callback) => {
        callback('SIGNED_IN', { user: null });
        return { 
          data: { 
            subscription: { 
              unsubscribe: () => {} 
            } 
          } 
        };
      },
      signInWithOAuth: ({ provider }) => {
        console.log(`Mock sign in with ${provider}`);
        return Promise.resolve({ data: {}, error: null });
      },
      signInWithOtp: ({ email }) => {
        console.log(`Mock magic link sent to ${email}`);
        return Promise.resolve({ data: {}, error: null });
      },
      signOut: () => Promise.resolve({ error: null })
    },
    storage: {
      from: (bucket) => ({
        upload: (path, file, options) => {
          console.log(`Mock upload to ${bucket}/${path}`);
          return Promise.resolve({ error: null });
        },
        getPublicUrl: (path) => ({
          data: { publicUrl: `https://mock-storage.local/${bucket}/${path}` }
        })
      })
    },
    channel: (name) => ({
      on: () => ({
        subscribe: () => ({
          unsubscribe: () => {}
        })
      })
    })
  };
};

// Use real Supabase client only when configured
let realClient = null;
if (!USE_MOCK) {
  import('@supabase/supabase-js').then(({ createClient }) => {
    realClient = createClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_ANON_KEY
    );
  });
}

export const supabase = USE_MOCK ? createMockClient() : realClient;
