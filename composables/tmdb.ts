import type {RouteParamValue} from "vue-router"

export async function getItemCollection(media: string, type: string ) {
    return await $fetch(`https://api.themoviedb.org/3/${media}/${type}?language=es-ES&page=1`, {
        params: {
            language: 'es-ES',
            append_to_response: 'videos,credits,images,external_ids,release_dates,combined_credits'
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTRkNzJhMmJiNzY5MzM1MmM4MDU0ZjI5MDQzNjU3YiIsInN1YiI6IjY1Yjc3MGM0NWUxNGU1MDE3YmFlODJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qu3smjJWNcoulr4O5u_w-JDWoaF6iSIE48wKU98r9jw'
        },
        pick: ['results']
    })
}

export async function getItem( media: string, id: Number ) {
    return await $fetch(`https://api.themoviedb.org/3/${media}/${id}?language=es-ES&page=1`, {
        params: {
            language: 'es-ES',
            append_to_response: 'videos,credits,images,external_ids,release_dates,combined_credits'
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTRkNzJhMmJiNzY5MzM1MmM4MDU0ZjI5MDQzNjU3YiIsInN1YiI6IjY1Yjc3MGM0NWUxNGU1MDE3YmFlODJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qu3smjJWNcoulr4O5u_w-JDWoaF6iSIE48wKU98r9jw'
        },
        pick: ['results']
    })
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


