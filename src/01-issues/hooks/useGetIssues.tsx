import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { GetIssuesResponse } from "../types/getIssues";

const getIssues = async (jql: string) => {
  const resp = await axios.get<GetIssuesResponse>(
    `https://telefonicaperu.atlassian.net/rest/api/3/search?jql=${jql}`,
    {
      headers: {
        Authorization: "Basic ...",
      },
    },
  );

  return resp.data;
};

export const useGetIssues = () => {
  const query = useQuery({
    queryKey: ["issues"],
    queryFn: () => getIssues('project = "TEST Pruebas Jira"'),
    staleTime: 60000,
  });

  return query;
};
