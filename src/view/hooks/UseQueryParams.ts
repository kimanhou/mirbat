import { useLocation } from "react-router";

export const useQueryParams = () => {
    const location = useLocation();
    const queryParams : {[key : string] : string | undefined} = {};
    var search = location.search.slice(1);
    search.split('&').map(t => t.split('=')).forEach(t => queryParams[decodeURIComponent(t[0])] = decodeURIComponent(t[1]));
    return queryParams;
}