import React, { useState ,useEffect, createContext, useReducer } from 'react';
import axios from 'axios';
import firebase from 'firebase/app';
import "firebase/database";
import { useAuth } from '../../../contexts/AuthContext';
import BrowseHeader from './BrowseHeader';
import MainVideo from './MainVideo';
import Watch from './Watch/Watch';
import Loading from './Loading';
import Footer from '../../components/Footer';
import './Browse.css';

export const MovieContext = createContext({
    data: [],
    isSearch: false,
    isWatch: '',
    dispatch: () => {},
});

const initialState = {
    data: [],
    isSearch: false,
    isWatch: ''
};

const GET_MOVIE = "GET_MOVIE";
export const CLICK_LIKE = "CLICK_LIKE";
export const CLICK_DISLIKE = "CLICK_DISLIKE";
export const ADD_MYLIST = "ADD_MYLIST";
export const WATCH = 'WATCH';
export const WATCH_OFF = 'WATCH_OFF';

const reducer = (state, action) => {
    const { data, email } = state;    
    const changeData = [...data];
    const userChange = {               
        id : action.id, 
        liked : action.liked ? action.liked : null ,
        disLiked : action.disLiked ? action.disLiked : null,            
        myList : action.myList ? action.myList : null,            
    };

    switch(action.type) {
        case "LOGIN_USER" :
            return {
                ...state,
                email : action.email,                
            }
        case GET_MOVIE :                         
            return {
                ...state,
                data : action.data
            }
        case CLICK_LIKE :                        
            changeData.forEach((i) => {
                if (i.id === action.id) {
                    i.liked = action.liked;
                }
            });                        
            firebase.database().ref(`users/${email}/${action.title}`).set(userChange);
            return {
                ...state,
                data : changeData
            }
        case CLICK_DISLIKE :                    
            changeData.forEach((i) => {
                if (i.id === action.id) {
                    i.disLiked = action.disLiked;
                }
            });            
            firebase.database().ref(`users/${email}/${action.title}`).set(userChange);
            return {
                ...state,
                data : changeData
            }
        case ADD_MYLIST : 
            changeData.forEach((i) => {
                if (i.id === action.id) {
                    i.myList = action.myList;
                }
            });            
            firebase.database().ref(`users/${email}/${action.title}`).set(userChange);
            return {
                ...state,
                data : changeData
            }
        case WATCH :            
            return {
                ...state,
                isWatch : action.title
            }
        case WATCH_OFF : 
            return {
                ...state, 
                isWatch: ''
            }
        default :
            return state;
    }
};

const Browse = () => {    
    const [state, dispatch] = useReducer(reducer, initialState);
    const { data, isSearch, isWatch } = state;       
    const { currentUser } = useAuth();
    const [loading, setLoading] = useState(false);
    

    const getMovie = async () => {        
        const movieUrl = "https://yts.mx/api/v2/list_movies.json?sort_by=rating";
        const databaseURL = "https://netflix-clone-9db36-default-rtdb.firebaseio.com";
        const email = currentUser.email.split('@')[0];
        let movieData = [];

        await axios.get(movieUrl).then((res) => { // Movie APi Fetch
            movieData= [...res.data.data.movies];               
            axios.get(`${databaseURL}/users/${email}.json`).then((res) => { // Firebase DB 유저 영화 정보 받아와서 합치기         
                if(res.data) {
                    const userMovieData = res.data;                   
                    movieData.forEach((item, idx) => {                        
                        if (userMovieData[item.title]) {
                            const copy = userMovieData[item.title];
                            movieData[idx].liked = copy.liked;
                            movieData[idx].disLiked = copy.disLiked;
                            movieData[idx].myList = copy.myList;                                   
                        }                                       
                    });
                }       
                dispatch({ type: GET_MOVIE, data: movieData});
                setLoading(true);
            });
        });
    };

    const postUserInfo = () => {
        const email = currentUser.email.split('@')[0];
        firebase.database().ref('users/'+email).update({status : true});   
        dispatch({ type : 'LOGIN_USER', email });   
    };    

    useEffect(() => {
        if (currentUser) {
            getMovie();    
            postUserInfo();                   
        } 
        return getMovie;
    },[currentUser]);          
    
    return (       
        <MovieContext.Provider value={{
            data, isSearch, dispatch, isWatch
        }}>
            <div className="browse">
                <BrowseHeader/>                                        
                { loading 
                ? <MainVideo />
                : <Loading />
                }
                <Footer style={{backgroundColor: '#000'}} />          
            </div>        
        </MovieContext.Provider>
    );
};

export default Browse;

                
    







            
            
