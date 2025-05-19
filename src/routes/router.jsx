import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Blogs from "../pages/blogs/Blogs";
import Publish from "../pages/publish/Publish";
import BlogDetails from "../pages/blogs/BlogDetails";
import Spinner from "../components/ui/Spinner";
import BlogEdit from "../pages/blogs/BlogEdit";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/signin", Component: SignIn },
      { path: "/signup", Component: SignUp },
      { path: "/blogs", Component: Blogs },
      {
        path: "/blog/:id",
        hydrateFallbackElement: <Spinner />,
        loader: ({ params }) =>
          fetch(`https://introvert-blog-server.vercel.app/blog/${params.id}`),
        Component: BlogDetails,
      },
      {
        path: "/edit/:id",
        hydrateFallbackElement: <Spinner />,
        loader: ({ params }) =>
          fetch(`https://introvert-blog-server.vercel.app/blog/${params.id}`),
        Component: BlogEdit,
      },
      { path: "/publish", Component: Publish },

      // private routes
      // {
      //     path: '/profile',
      //     element:
      //         <PrivateRoutes>
      //             <Profile />
      //         </PrivateRoutes>
      // },
    ],
  },
]);

export default router;
