import axios, { AxiosResponse } from 'axios';

export interface LoginBody {
    email: string;
    password: string;
}

export interface RegisterBody {
    email: string;
    password: string;
}

async function post<TBody>(host: string, subpath: string, body: TBody): Promise<AxiosResponse> {
    return axios.post(`${host}/${subpath}`, body);
}

export const BarongApiUtil = {
    post,
    login: async (host: string, data: LoginBody): Promise<AxiosResponse> => {
        return post(host, 'identity/sessions', data);
    },
    logout: async (host: string): Promise<AxiosResponse> => {
        return axios.delete(`${host}/identity/sessions`);
    },
    register: async (host: string, data: RegisterBody): Promise<AxiosResponse> => {
        return post(host, 'identity/users', data);
    },
};
