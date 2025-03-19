export const useAsyncApi = (method, endPoint, payload = null, moreHeaders = {}) => {
    const token = useCookie("token"); 
    const config = useRuntimeConfig();
    
    const headers = { ...moreHeaders };
    if (token.value) {
        headers['Authorization'] = `Bearer ${token.value}`;
    }
    const { data, status, error } = useFetch(endPoint, {
        lazy:true,
        method,
        headers,
        body: payload,
        baseURL: config.public.baseURL
    });

    return { data, status, error };
};
