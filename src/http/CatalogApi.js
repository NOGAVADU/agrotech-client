import {$authHost, $host} from "./index";

export const createItem = async (item) => {
    const {data} = await $authHost.post('api/item', item)
    return data
}
export const createManyItems = async (file) => {
    const {data} = await $authHost.post('api/item/many', file)
    return data
}

export const deleteItem = async (id) => {
    const {data} = await $authHost.delete('api/item', {data: {id: id}})
    return data
}
export const deleteAll = async () => {
    const {data} = await $authHost.delete('api/item/clear')
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


