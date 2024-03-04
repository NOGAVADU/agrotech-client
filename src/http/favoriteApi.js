import {$authHost, $host} from "./index";

export const addFavorite = async (userId, itemId) => {
    const {data} = await $authHost.post('api/favorite', {userId, itemId})
    return data
}
export const removeFavorite = async (userId, itemId) => {
    const {data} = await $authHost.delete('api/favorite', {data: {userId, itemId}} )
    return data
}

export const fetchFavorite = async (id) => {
    const {data} = await $authHost.get('api/favorite', {params: {favoriteId: id}} )
    return data
}


