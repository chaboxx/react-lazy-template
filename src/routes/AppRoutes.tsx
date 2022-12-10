import { FC, lazy, Suspense } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Loader } from "@shared/components/Loader";

import { HomePage } from "../home/HomePage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Hello />,
//   },
//   {
//     path: "/hello",
//     element: <Hello />,
//   },
// ]);

const LazyIssuesChunk = lazy(() => import("../01-issues/IssuesChunk"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<HomePage />} />
      <Route
        element={
          <Suspense fallback={<Loader isLoading={true} text="Loading..." />}>
            <LazyIssuesChunk />
          </Suspense>
        }
        path="/issues/*"
      />
    </Route>,
  ),
);

export const AppRoutes: FC = () => {
  return <RouterProvider router={router} />;
};
