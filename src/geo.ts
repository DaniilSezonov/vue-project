export const getUserGeolocation = (): Promise<{lat: number, lon: number}> => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((item) => {
                const [lat, lon] = [item.coords.latitude, item.coords.longitude];
                const result = {lat, lon};
                resolve(result);
                return result;
            }, (error) => {
                reject(error.message);
                return {lat: undefined, lon: undefined}
            })
        } else {
            reject("geolocation api is not defined.")
            return {lat: undefined, lon: undefined}
        }
    })
} 