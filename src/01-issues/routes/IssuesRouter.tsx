import { Loader } from "@shared/components/Loader";
import { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { IssuesByNamePage } from "../pages/IssuesByNamePage";
import { IssuesPage } from "../pages/IssuesPage";

const LazyIssuesDependenciesPage = lazy(() => import("../pages/IssuesDependenciesPage"));

const LazyProblemPage = lazy(() => import("../pages/ProblemPage"));

export const ChunkRouter: FC = () => {
  return (
    <Routes>
      {/* <Route index element={<h1>Index</h1>} /> */}
      <Route>
        <Route index element={<IssuesPage />} />
        <Route element={<IssuesByNamePage />} path="name" />
        {/* LAZY */}
        <Route
          element={
            <Suspense fallback={<Loader isLoading={true} text="Loading..." />}>
              <LazyIssuesDependenciesPage />
            </Suspense>
          }
          path="dependencies"
        />
      </Route>

      {/* LAZY */}
      <Route
        element={
          <Suspense fallback={<Loader isLoading={true} text="Loading..." />}>
            <LazyProblemPage />
          </Suspense>
        }
        path="problem"
      />
    </Routes>
  );
};
