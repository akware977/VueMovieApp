import firebase from './firebase'

const db = firebase.firestore().collection('movies');

const moviesApi = {

    getMovies: async () => {
        const documnents = await db.get()
        return documents.docs.map(doc =>{
            return { movieList: doc.data(), id: doc.id}
        })
    },

    getMovie: async () =>{

    },

    getMovieById: async () =>{

    },

    updateMovie: async () =>{

    },

    deleteMovie: async () =>{

    },
}

export default moviesApi