import { createStore } from 'redux'

const initialState = {
  currentPage: 1,
  nextPage: '',
  prevPage: '',
  currentFetch: 'https://rickandmortyapi.com/api/character',
  currentSearch: '',
  characters: [],

  name: 'Concavo',
  description: 'Concavo React Tailwind CSS admin template',
  url: 'https://concavo.mobifica.com',
  layout: 'layout-1',
  direction: 'ltr',
  collapsed: false,
  toggleRightSidebar: false,
  colors: [
    'gray',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'indigo',
    'purple',
    'pink'
  ],
  palettes: {
    background: 'white',
    logo: 'white',
    leftSidebar: 'white',
    rightSidebar: 'white',
    navbar: 'white',
    topNavigation: 'white'
  },
  leftSidebar: {
    showButtonText: true,
    showSectionTitle: true,
    showLogo: true,
    showCard: true,
    showAccountLinks: false,
    showProjects: true,
    showTags: true,
    card: 1
  },
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

    case 'SET_DEMO':
      return {
        ...state,
        layout: action.layout,
        collapsed: action.collapsed,
        direction: action.direction,
        leftSidebar: {
          ...action.leftSidebar
        },
        palettes: {
          ...action.palettes
        }
      }
    case 'SET_PALETTE':
      return {
        ...state,
        palettes: {
          ...state.palettes,
          [`${action.key}`]: action.value
        }
      }
    case 'SET_LEFT_SIDEBAR_CONFIG':
      return {
        ...state,
        leftSidebar: {
          ...state.leftSidebar,
          [`${action.key}`]: action.value
        }
      }
    case 'SET_LAYOUT':
      if (action.layout === 'layout-3' || action.layout === 'layout-4') {
        return {
          ...state,
          layout: action.layout,
          collapsed: true
        }
      }
      return {
        ...state,
        layout: action.layout,
        collapsed: false
      }
      return {
        ...state,
        [`${key}`]: value
      }
    case 'SET_CONFIG':
      let { key, value } = { ...action.config }
      return {
        ...state,
        [`${key}`]: value
      }
    default:
      return state
  }
}

/* export const initializeStore = (preloadedState = initialState) => {
  return createStore(reducer, preloadedState)
} */

export default createStore(reducer)