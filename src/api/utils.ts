export const getEndpointURL = (
    apiRoot: string,
    endpointPath: string,
    queryParams: {[key: string]: string | number}
) => {
    const url = new URL(apiRoot + endpointPath);
    Object.keys(queryParams).forEach(
        (paramName: string) => 
            url.searchParams.append(paramName, queryParams[paramName]?.toString())
    )
    return url.toString();
};