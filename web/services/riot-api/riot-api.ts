/**
 * Sends request to riot API.
 * Base url is set in .env file via the RIOT_API_URL key.
 *
 * @param {string} url The url to send the request to.
 * @param {RequestInit} init The request init object.
 */
export const apiRiot = async <T>(url: string, init: RequestInit = {}): Promise<T> => {
    return fetch(`${process.env.RIOT_API_URL}${url}`, preprocess(init))
        .then(res => res.json());
};

/**
 * Make common headers for requests.
 *
 * @param {RequestInit} init The request init object.
 */
const preprocess = (init: RequestInit): RequestInit => {
    return {
        ...init,
        headers: {
            "X-Riot-Token": process.env.RIOT_API_KEY as string,
            ...(init.headers ?? {})
        }
    };
}
