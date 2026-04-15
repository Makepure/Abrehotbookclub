// Mock data for development
export const mockBooks = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    cover_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=450&fit=crop',
    synopsis: 'Between life and death there is a library. When Nora Seed finds herself in the Midnight Library, she has a chance to make things right. Up until now, her life has been full of misery and regret. She feels she has let everyone down, including herself. But things are about to change. The books in the Midnight Library enable Nora to live as if she had done things differently. With the help of an old friend, she can now undo every one of her regrets as she tries to work out her perfect life.',
    genre: 'Fiction',
    publication_year: 2020,
    average_rating: 4.5,
    is_current_selection: true,
    meeting_date: '2024-02-15T19:00:00Z'
  },
  {
    id: '2',
    title: 'Tomorrow, and Tomorrow, and Tomorrow',
    author: 'Gabrielle Zevin',
    cover_url: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop',
    synopsis: 'Sam and Sadie—two college friends, often in love, but never lovers—become creative partners in a dazzling and intricately imagined world of video game design, where success brings them fame, joy, tragedy, duplicity, and, ultimately, a kind of immortality.',
    genre: 'Literary Fiction',
    publication_year: 2022,
    average_rating: 4.7,
    is_current_selection: false,
    meeting_date: '2024-01-10T19:00:00Z'
  },
  {
    id: '3',
    title: 'Lessons in Chemistry',
    author: 'Bonnie Garmus',
    cover_url: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=450&fit=crop',
    synopsis: 'Chemist Elizabeth Zott is not your average woman. In fact, Elizabeth Zott would be the first to point out that there is no such thing as an average woman. But it\'s the early 1960s and her all-male team at Hastings Research Institute takes a very unscientific view of equality. Except for one: Calvin Evans; the lonely, brilliant, Nobel-prize nominated grudge-holder who falls in love with—of all things—her mind.',
    genre: 'Historical Fiction',
    publication_year: 2022,
    average_rating: 4.6,
    is_current_selection: false,
    meeting_date: '2024-03-20T19:00:00Z'
  },
  {
    id: '4',
    title: 'Demon Copperhead',
    author: 'Barbara Kingsolver',
    cover_url: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop',
    synopsis: 'Set in the mountains of southern Appalachia, this is the story of a boy born to a teenaged single mother in a single-wide trailer, with no assets beyond his dead father\'s good looks and copper-colored hair, a caustic wit, and a fierce talent for survival.',
    genre: 'Fiction',
    publication_year: 2022,
    average_rating: 4.8,
    is_current_selection: false,
    meeting_date: '2024-04-05T19:00:00Z'
  },
  {
    id: '5',
    title: 'The Covenant of Water',
    author: 'Abraham Verghese',
    cover_url: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=450&fit=crop',
    synopsis: 'A stunning and magisterial new epic of love, faith, and medicine, set in Kerala, South India, following three generations of a family seeking the answers to a strange secret.',
    genre: 'Historical Fiction',
    publication_year: 2023,
    average_rating: 4.9,
    is_current_selection: false,
    meeting_date: '2024-05-15T19:00:00Z'
  },
  {
    id: '6',
    title: 'Hello Beautiful',
    author: 'Ann Napolitano',
    cover_url: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=450&fit=crop',
    synopsis: 'An exquisite homage to Louisa May Alcott\'s timeless classic, Little Women, Hello Beautiful is a profoundly moving portrait of what is possible when we choose to love someone not in spite of who they are, but because of it.',
    genre: 'Fiction',
    publication_year: 2023,
    average_rating: 4.4,
    is_current_selection: false,
    meeting_date: '2024-06-10T19:00:00Z'
  }
];

export const mockMeetings = [
  {
    id: '1',
    title: 'February Book Discussion: The Midnight Library',
    description: 'Join us for an engaging discussion about Matt Haig\'s masterpiece. We\'ll explore themes of regret, hope, and the infinite possibilities of life.',
    meeting_date: '2024-02-15T19:00:00Z',
    meeting_link: 'https://meet.google.com/abc-defg-hij',
    is_virtual: true,
    book_id: '1',
    books: {
      title: 'The Midnight Library',
      cover_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=450&fit=crop'
    }
  },
  {
    id: '2',
    title: 'March Book Discussion: Lessons in Chemistry',
    description: 'Let\'s discuss this brilliant debut novel about a female chemist in the 1960s.',
    meeting_date: '2024-03-20T19:00:00Z',
    meeting_link: 'https://meet.google.com/xyz-uvwx-yza',
    is_virtual: true,
    book_id: '3',
    books: {
      title: 'Lessons in Chemistry',
      cover_url: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=450&fit=crop'
    }
  },
  {
    id: '3',
    title: 'April Book Discussion: Demon Copperhead',
    description: 'In-person meeting at the community library. Refreshments will be served!',
    meeting_date: '2024-04-05T19:00:00Z',
    meeting_link: null,
    is_virtual: false,
    book_id: '4',
    books: {
      title: 'Demon Copperhead',
      cover_url: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop'
    }
  }
];

export const mockMembers = [
  {
    id: '1',
    full_name: 'Sarah Johnson',
    avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    favorite_genre: 'Literary Fiction',
    is_admin: true
  },
  {
    id: '2',
    full_name: 'Michael Chen',
    avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    favorite_genre: 'Science Fiction',
    is_admin: false
  },
  {
    id: '3',
    full_name: 'Emma Rodriguez',
    avatar_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    favorite_genre: 'Historical Fiction',
    is_admin: false
  },
  {
    id: '4',
    full_name: 'David Kim',
    avatar_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    favorite_genre: 'Mystery',
    is_admin: false
  },
  {
    id: '5',
    full_name: 'Lisa Thompson',
    avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    favorite_genre: 'Romance',
    is_admin: false
  },
  {
    id: '6',
    full_name: 'James Wilson',
    avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    favorite_genre: 'Non-Fiction',
    is_admin: false
  },
  {
    id: '7',
    full_name: 'Maria Garcia',
    avatar_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    favorite_genre: 'Fantasy',
    is_admin: false
  },
  {
    id: '8',
    full_name: 'Tom Anderson',
    avatar_url: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop',
    favorite_genre: 'Thriller',
    is_admin: false
  }
];

export const mockDiscussions = [
  {
    id: '1',
    book_id: '1',
    user_id: '1',
    parent_id: null,
    content: 'I absolutely loved this book! The concept of the Midnight Library is so creative. What did everyone think about Nora\'s journey?',
    created_at: '2024-01-20T14:30:00Z',
    profiles: {
      full_name: 'Sarah Johnson',
      avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    }
  },
  {
    id: '2',
    book_id: '1',
    user_id: '2',
    parent_id: '1',
    content: 'The philosophical questions it raised about regret and the paths not taken really made me think about my own life choices.',
    created_at: '2024-01-20T15:45:00Z',
    profiles: {
      full_name: 'Michael Chen',
      avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    }
  },
  {
    id: '3',
    book_id: '1',
    user_id: '3',
    parent_id: '1',
    content: 'I found myself crying at several points. The relationship with Mrs. Elm was particularly touching.',
    created_at: '2024-01-21T09:15:00Z',
    profiles: {
      full_name: 'Emma Rodriguez',
      avatar_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    }
  },
  {
    id: '4',
    book_id: '1',
    user_id: '4',
    parent_id: null,
    content: 'Has anyone read other books by Matt Haig? I\'d love recommendations for what to read next.',
    created_at: '2024-01-22T11:20:00Z',
    profiles: {
      full_name: 'David Kim',
      avatar_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    }
  }
];
