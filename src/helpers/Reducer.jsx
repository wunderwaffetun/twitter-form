function likedIt(likeFilterTurnedOn, newPosts){
    if(!likeFilterTurnedOn){ // Отдельно обрабатываются посты, если включен фильтр
        return newPosts.filter(post => post.like)
    } else return newPosts
}

export function reducer(state, action){
    
    const {type, params} = action 

    let newPosts;

    switch (type) { 

        case 'DEL': 
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== params.id),
                visiblePosts: likedIt(state.allButton, state.posts.filter(post => post.id !== params.id)),
            }

        case 'ADD':
            const newPost = {
                text: params.textOfNewPost, 
                important: false,
                like: false, 
                id: Math.random()
            }
            console.log(state.searcher)
            return { 
                ...state, 
                posts: [...state.posts, newPost],
                visiblePosts: state.searcher && state.allButton ? [...state.posts, newPost] : state.visiblePosts
                
            }
        
            case 'ReS': //Если search заполнен и добавляется post в posts, отменяем изменения в visiblePosts в ADD
                return {
                    ...state,
                    searcher: params.line
                }
            
            case 'ReL': // Тоже самое только с кнопками
            console.log(params.bool)
                return {
                    ...state,
                    allButton: params.bool
                }

        case 'FAV': 
            newPosts = state.posts.map(post => {
                if( post.id === params.id ){
                    return {
                        ...post, 
                        important: !post.important
                    }
                } else {
                    return post 
                }
            })
            return {
                ...state, 
                posts: newPosts,
                visiblePosts: likedIt(state.allButton, newPosts),
            }

        case 'SRH': 
            newPosts = params.text ? state.posts.filter( post => post.text.toLowerCase().includes(params.text.toLowerCase().trim())) : state.posts
            return {
                ...state, 
                visiblePosts: likedIt(state.allButton, newPosts),
            }

        
        
        case 'LIK': 
            newPosts = state.posts.map(post => {
                if( post.id === params.id ){
                    return {
                        ...post, 
                        like: !post.like
                    }
                } else {
                    return post 
                }
            })
            return {
                ...state, 
                posts: newPosts,
                visiblePosts: likedIt(state.allButton, newPosts),
            }

            case 'INC': 
                if (params.filterIs) {
                    return {
                        ...state, 
                        visiblePosts: state.posts.filter( post => post.like === true)
                    }
                } else {
                    return {
                        ...state, 
                        visiblePosts: state.posts
                    }
                }
            
            
        default: 
            return new Error('NO SO TYPE (Reducer.js) ')
    }


}