import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type TBlog = {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  date: string;
  categories: string[];
  content: string;
  likes: number;
  views: number;
  hasLiked: boolean;
};

export type TBlogStore = {
  data: TBlog;
  actions: {
    setUser: (blog: TBlog) => void;
    setLike: ({ value }: { value: number }) => void;
    toggleHasLike: ({ value }: { value: boolean }) => void;
  };
};

export const useBlogStore = create<TBlogStore>()(
  devtools((set) => ({
    data: {
      title: '',
      slug: '',
      description: '',
      thumbnail: '',
      date: '',
      categories: [],
      content: '',
      likes: 0,
      views: 0,
      hasLiked: false,
    },
    actions: {
      setUser: (blog: TBlog) => set({ data: blog }),
      setLike: ({ value }: { value: number }) => {
        set((state) => ({
          data: {
            ...state.data,
            likes: value,
          },
        }));
      },
      toggleHasLike: ({ value }: { value: boolean }) => {
        set((state) => ({
          data: {
            ...state.data,
            hasLiked: value,
          },
        }));
      },
    },
  }))
);

export const useBlogData = () => useBlogStore((state) => state.data);
export const useBlogActions = () => useBlogStore((state) => state.actions);
