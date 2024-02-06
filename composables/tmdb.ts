import type {RouteParamValue} from "vue-router"
import { LRUCache } from 'lru-cache'
import { hash as ohash } from 'ohash'

const promiseCache = new LRUCache<string, any>({
    max: 500,
    ttl: 2000 * 60 * 60, // 2 hour
})

async function _fetchTMDB(url: string) {
    return await $fetch(url, {
        baseURL: url,
        params: {
            language: 'es-ES',
            append_to_response: 'videos,credits,images,external_ids,release_dates,combined_credits'
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTRkNzJhMmJiNzY5MzM1MmM4MDU0ZjI5MDQzNjU3YiIsInN1YiI6IjY1Yjc3MGM0NWUxNGU1MDE3YmFlODJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qu3smjJWNcoulr4O5u_w-JDWoaF6iSIE48wKU98r9jw'
        },
    })
}

export function fetchTMDB(url: string): Promise<any> {
    const hash = ohash([url])
    const state = useState<any>(hash, () => null)
    if (state.value)
        return state.value
    if (!promiseCache.has(hash)) {
        promiseCache.set(
            hash,
            _fetchTMDB(url)
                .then((res) => {
                    state.value = res
                    return res
                })
                .catch((e) => {
                    promiseCache.delete(hash)
                    throw e
                }),
        )
    }
    return promiseCache.get(hash)!
}


export async function getItemCollection(media: string, type: string ) {
    return fetchTMDB(`https://api.themoviedb.org/3/${media}/${type}`)
}

export async function getItem( media: string, id: Number ) {
    return fetchTMDB(`https://api.themoviedb.org/3/${media}/${id}?page=1`)
}

export async function getPerson(id: string | RouteParamValue[]) {
    return await $fetch(`https://api.themoviedb.org/3/person/${id}?page=1&`, {
        params: {
            language: 'es-ES',
            append_to_response: 'images,combined_credits,external_ids',
            include_image_language: 'en'
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTRkNzJhMmJiNzY5MzM1MmM4MDU0ZjI5MDQzNjU3YiIsInN1YiI6IjY1Yjc3MGM0NWUxNGU1MDE3YmFlODJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qu3smjJWNcoulr4O5u_w-JDWoaF6iSIE48wKU98r9jw'
        }
    })
}

export async function getMediaImages(id: string | RouteParamValue[], type: string) {
    return await $fetch(`https://api.themoviedb.org/3/${type}/${id}/images?page=1&`, {
        params: {
            language: 'es-ES',
            include_image_language: 'en'
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTRkNzJhMmJiNzY5MzM1MmM4MDU0ZjI5MDQzNjU3YiIsInN1YiI6IjY1Yjc3MGM0NWUxNGU1MDE3YmFlODJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qu3smjJWNcoulr4O5u_w-JDWoaF6iSIE48wKU98r9jw'
        }
    })
}


export async function searchCollection(query: string | RouteParamValue[]) {
    return await $fetch(`https://api.themoviedb.org/3/search/multi?page=1&`, {
        params: {
            query: query
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTRkNzJhMmJiNzY5MzM1MmM4MDU0ZjI5MDQzNjU3YiIsInN1YiI6IjY1Yjc3MGM0NWUxNGU1MDE3YmFlODJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qu3smjJWNcoulr4O5u_w-JDWoaF6iSIE48wKU98r9jw'
        }
    })
}


