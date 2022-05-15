export type RepoType = {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
};

export type ReposStateType = {
    list: RepoType[];
    page?: number;
    loading: boolean;
    error: boolean;
};

export type QueryParamsType = {
    login?: string;
    page?: number;
};