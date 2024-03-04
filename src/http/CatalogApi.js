import {$authHost, $host} from "./index";

export const createItem = async (type) => {
    const {data} = await $authHost.post('api/item', item)
    return data
}

export const fetchItems = async (page, limit) => {
    const {data} = await $host.get('api/item', {params: {page, limit}})
    return data
}

export const findItems = async (value, page, limit) => {
    const {data} = await $host.get('api/item/find', {params:  {value, page, limit}})
    return data
}


