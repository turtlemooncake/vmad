import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Me from "./pages/Me/Me";
import Resume from "./pages/Resume/Resume";
import PostsLanding from "./pages/PostsLanding/PostsLanding";
import Post from "./pages/Post/Post";
import BookShelf from "./pages/BookShelf/BookShelf";

export const router = createBrowserRouter(
  [
    {
      element: <MainLayout />,
      errorElement: <div>Error! Can't render site.</div>,
      children: [
        { path: "/", element: <Me /> },
        { path: "/me", element: <Me /> },
        { path: "/resume", element: <Resume /> },
        { path: "/posts", element: <PostsLanding /> },
        { path: "/posts/:slug", element: <Post /> },
        { path: "/bookshelf", element: <BookShelf /> },
      ],
    },
  ],
  // { basename: "/vmad" }, also change here for custom domain name
);
