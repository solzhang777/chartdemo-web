import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const requestConfig: AxiosRequestConfig = {
    headers: {
        "Content-Type": "application/json",
        "accept": "*/*"
    }
};

export default {

    async fetchGet<T>(url: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
        return new Promise((resolve, reject) => {
            if (config) {
                Object.assign(config, requestConfig);
            }
            axios.get<AxiosResponse<T>>(url, config)
                .then((res: AxiosResponse) => {
                    if (res.status === 200) {
                        resolve(res);
                    } else {
                        // 如果不是返回200， 那么就作为异常处理
                        reject(res);
                    }
                }).catch((error: any) => {
                    reject(error);
                });
        });
    },

    async fetchPost<T>(url: string, params: any = {}, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
        return new Promise((resolve, reject) => {
            if (config) {
                Object.assign(config, requestConfig);
            }
            axios.post<AxiosResponse<T>>(url, params, config)
                .then((res: AxiosResponse) => {
                    if (res.status === 200) {
                        resolve(res);
                    } else {
                        // 如果不是返回200， 那么就作为异常处理
                        reject(res);
                    }
                }).catch((error: any) => {
                    reject(error);
                });
        });
    },
};
