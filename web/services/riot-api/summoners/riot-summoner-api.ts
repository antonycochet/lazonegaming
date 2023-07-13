import {apiRiot} from "@/services/riot-api/riot-api";
import {endpoints} from "@/constants";
import {SummonerDTO} from "@/ts/type/type";

/**
 * Get a summoner by summoner name.
 *
 * @param {string} name - The summoner name.
 * @link https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName
 *
 * @return {Promise<SummonerDTO>}
 */
export const getSummonerInformation = (name: string): Promise<SummonerDTO> => {
    return apiRiot(`${endpoints.getSummonerInformations}/${name}`)
}
