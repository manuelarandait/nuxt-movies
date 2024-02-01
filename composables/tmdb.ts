import type {RouteParamValue} from "vue-router"

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

export async function getTopRatedTv() {
    return await $fetch('https://api.themoviedb.org/3/tv/top_rated?language=es-ES&page=1', {
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

export async function getAiringTodayTv() {
    return await $fetch('https://api.themoviedb.org/3/tv/airing_today?language=es-ES&page=1', {
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

export async function getTrendingMovies() {
    return await $fetch('https://api.themoviedb.org/3/trending/movie/day?&page=1', {
        params: {
            language: 'es-ES',
            append_to_response: 'videos,credits,images,external_ids,release_dates,combined_credits',
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTRkNzJhMmJiNzY5MzM1MmM4MDU0ZjI5MDQzNjU3YiIsInN1YiI6IjY1Yjc3MGM0NWUxNGU1MDE3YmFlODJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qu3smjJWNcoulr4O5u_w-JDWoaF6iSIE48wKU98r9jw'
        },
        pick: ['results']
    })
}

export async function getTopRatedMovies() {
    return await $fetch('https://api.themoviedb.org/3/movie/top_rated?language=es-ES&page=1', {
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

export async function getUpcomingMovies() {
    return await $fetch('https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=1', {
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

export async function getNowPlayingMovies() {
    return await $fetch('https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1', {
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
            include_image_language: 'en'
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTRkNzJhMmJiNzY5MzM1MmM4MDU0ZjI5MDQzNjU3YiIsInN1YiI6IjY1Yjc3MGM0NWUxNGU1MDE3YmFlODJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qu3smjJWNcoulr4O5u_w-JDWoaF6iSIE48wKU98r9jw'
        }
    })
}

export async function getTv(id: string | RouteParamValue[]) {
    return await $fetch(`https://api.themoviedb.org/3/tv/${id}?page=1&`, {
        params: {
            language: 'es-ES',
            append_to_response: 'videos,credits,images,external_ids,release_dates,combined_credits',
            include_image_language: 'en'
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTRkNzJhMmJiNzY5MzM1MmM4MDU0ZjI5MDQzNjU3YiIsInN1YiI6IjY1Yjc3MGM0NWUxNGU1MDE3YmFlODJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qu3smjJWNcoulr4O5u_w-JDWoaF6iSIE48wKU98r9jw'
        }
    })
}

export async function getPerson(id: string | RouteParamValue[]) {
    return await $fetch(`https://api.themoviedb.org/3/person/${id}?page=1&`, {
        params: {
            language: 'es-ES'
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
            include_image_language: 'en'
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTRkNzJhMmJiNzY5MzM1MmM4MDU0ZjI5MDQzNjU3YiIsInN1YiI6IjY1Yjc3MGM0NWUxNGU1MDE3YmFlODJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qu3smjJWNcoulr4O5u_w-JDWoaF6iSIE48wKU98r9jw'
        }
    })
}

export async function getTvImages(id: string | RouteParamValue[]) {
    return await $fetch(`https://api.themoviedb.org/3/tv/${id}/images?page=1&`, {
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


