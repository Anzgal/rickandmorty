import { createStore } from 'redux'

const initialState = {
  currentPage: 1,
  nextPage: '',
  prevPage: '',
  currentFetch: 'https://rickandmortyapi.com/api/character',
  currentSearch: '',
  characters: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_CURRENTPAGE':
      return {
        ...state,
        currentPage: state.currentPage + 1
      }
    case 'DECREASE_CURRENTPAGE':
      return {
        ...state,
        currentPage: state.currentPage - 1
      }
    case 'SET_CURRENTPAGE':
      return {
        ...state,
        currentPage: action.currentPage
      }
    case 'SET_CURRENTFETCH':
      return {
        ...state,
        currentFetch: action.currentFetch
      }
    case 'SET_NEXTPAGE':
      return {
        ...state,
        nextPage: action.nextPage
      }
    case 'SET_PREVPAGE':
      return {
        ...state,
        prevPage: action.prevPage
      }
    case 'SET_CHARACTERS':
      return {
        ...state,
        characters: action.characters
      }

    default:
      return state
  }
}


export default createStore(reducer)