import axios, {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
} from "axios";

const BASE_URL = "http://localhost:3080/api/v1";

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => config,
  (error: AxiosError) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => Promise.reject(error.response)
);

function httpRequest<T = any>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  return instance.request<T>(config);
}

export default httpRequest;
