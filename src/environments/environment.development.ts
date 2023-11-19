export const environment = {
    token: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGZjOWFlNjk1ZjdmYWY2NGUzODM0M2NkNWRkNzdkMCIsInN1YiI6IjY1NWE1ZDQ5MjIyMmY2MDEzOTJhYmUwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vZGJrJxDd1TORpDAajuseGDmlG-ImY1DZjBWK_69_PU",
    api: {
        baseUrl:"https://api.themoviedb.org/3",
        series:{
            listGener: '/genre/tv/list?language=en',
            list: '/movie/movie_id/lists?language=en-US&page=1',
            search: 'search',        
            getById: '/movie/{id}?language=en-US'
        },
    }

};
