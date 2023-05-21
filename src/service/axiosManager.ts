import axios, { AxiosInstance, Method } from 'axios';

export interface IAxiosInstance {
    get$: (...args: any) => Promise<any>;
    post$: (...args: any) => Promise<any>;
    put$: (...args: any) => Promise<any>;
    patch$: (...args: any) => Promise<any>;
    head$: (...args: any) => Promise<any>;
    delete$: (...args: any) => Promise<any>;
}
const defaultConfig = {
    headers: { 'Content-type': 'application/json' },
};

class AxiosManager implements IAxiosInstance {
    public axiosInstance: AxiosInstance;

    constructor() {
        // TODO Add more property to instance
        this.axiosInstance = axios.create({
            // baseURL: 'https://brandcourse.com/api/',
        });
    }

    // setAuthToken(token: string) {
    //     this.axiosInstance.interceptors.request.use(
    //         (config) => {
    //             if (config.headers) {
    //                 config.headers.Authorization = config.headers.Authorization || `Bearer ${token}`;
    //             }
    //
    //             return config;
    //         },
    //         (error) => Promise.reject(error),
    //     );
    // }

    request$<T>(url: string, method: Method, data?: any, config?: any):Promise<T> {
        return new Promise((resolve, reject) => {
            const configMerged = {
                ...defaultConfig,
                ...config,
            };
            this.axiosInstance.request<T>({
                ...configMerged, url, method, data,
            })
                .then((response) => resolve(response.data))
                .catch(reject);
        });
    }

    get$<T>(url: string, config?: any) {
        return this.request$<T>(url, 'get', null, config);
    }

    post$<T>(url: string, args: any, config?: any) {
        return this.request$<T>(url, 'post', args, config);
    }

    put$<T>(url: string, args: any, config?: any) {
        return this.request$<T>(url, 'put', args, config);
    }

    patch$<T>(url: string, args: any, config?: any) {
        return this.request$<T>(url, 'patch', args, config);
    }

    head$<T>(url: string) {
        return this.request$<T>(url, 'head');
    }

    delete$<T>(url: string) {
        return this.request$<T>(url, 'delete');
    }
}

export default new AxiosManager();
