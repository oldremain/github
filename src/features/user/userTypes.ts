export type UserType = {
    name?: string;
    login: string;
    followers: number;
    following: number;
    public_repos: number;
    avatar_url?: string;
    html_url?: string;
};

export type UserStateType = {
    user: UserType;
    loading: boolean;
    error: boolean;
};