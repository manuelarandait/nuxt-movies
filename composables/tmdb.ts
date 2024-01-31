import type {RouteParamValue} from "vue-router";

export async function getPopularMovies() {
    return await $fetch('https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1', {
        params: {
            language: 'es-ES'
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTRkNzJhMmJiNzY5MzM1MmM4MDU0ZjI5MDQzNjU3YiIsInN1YiI6IjY1Yjc3MGM0NWUxNGU1MDE3YmFlODJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qu3smjJWNcoulr4O5u_w-JDWoaF6iSIE48wKU98r9jw'
        },
        pick: ['results']
    })
}

export async function getPopularTV() {
    return await $fetch('https://api.themoviedb.org/3/tv/popular?language=es-ES&page=1', {
        params: {
            language: 'es-ES'
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTRkNzJhMmJiNzY5MzM1MmM4MDU0ZjI5MDQzNjU3YiIsInN1YiI6IjY1Yjc3MGM0NWUxNGU1MDE3YmFlODJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qu3smjJWNcoulr4O5u_w-JDWoaF6iSIE48wKU98r9jw'
        },
        pick: ['results']
    })
}

export async function getTrendingMovie() {
    return await $fetch('https://api.themoviedb.org/3/trending/movie/day?language=es-ES&page=1', {
        params: {
            language: 'es-ES'
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTRkNzJhMmJiNzY5MzM1MmM4MDU0ZjI5MDQzNjU3YiIsInN1YiI6IjY1Yjc3MGM0NWUxNGU1MDE3YmFlODJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qu3smjJWNcoulr4O5u_w-JDWoaF6iSIE48wKU98r9jw'
        },
        pick: ['results']
    })
}

export async function getMovie(id: string | RouteParamValue[]) {
    return await $fetch(`https://api.themoviedb.org/3/movie/${id}?page=1&`, {
        params: {
            language: 'es-ES',
            append_to_response: 'videos,credits,images,external_ids,release_dates,combined_credits',
            include_image_language: 'es'
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTRkNzJhMmJiNzY5MzM1MmM4MDU0ZjI5MDQzNjU3YiIsInN1YiI6IjY1Yjc3MGM0NWUxNGU1MDE3YmFlODJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qu3smjJWNcoulr4O5u_w-JDWoaF6iSIE48wKU98r9jw'
        }
    })
}

export async function getMovieImages(id: string | RouteParamValue[]) {
    return await $fetch(`https://api.themoviedb.org/3/movie/${id}/images?page=1&`, {
        params: {
            language: 'es-ES',
            include_image_language: 'es'
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTRkNzJhMmJiNzY5MzM1MmM4MDU0ZjI5MDQzNjU3YiIsInN1YiI6IjY1Yjc3MGM0NWUxNGU1MDE3YmFlODJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qu3smjJWNcoulr4O5u_w-JDWoaF6iSIE48wKU98r9jw'
        }
    })
}

