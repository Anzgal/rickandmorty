import logo from './logo.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Modal from './components/Modal';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  //Local state
  const [isLoading, setIsLoading] = useState(false)
  const [inputSearch, setInputSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState({});

  //Global state
  const currentPage = useSelector(state => state.currentPage)
  const currentFetch = useSelector(state => state.currentFetch)
  const characters = useSelector(state => state.characters)
  const nextPage = useSelector(state => state.nextPage)
  const prevPage = useSelector(state => state.prevPage)

  //Dispatch
  const dispatch = useDispatch()

  //Data fetch
  useEffect(() => {
    setIsLoading(true)
    axios.get(currentFetch)
      .then((response) => {
        // handle success
        console.log(response);
        //setCharacters(response.data.results)

        dispatch({ type: 'SET_NEXTPAGE', nextPage: response.data.info.next })


        dispatch({ type: 'SET_PREVPAGE', prevPage: response.data.info.prev })


        dispatch({ type: 'SET_CHARACTERS', characters: response.data.results })
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {

        setIsLoading(false)
      });

  }, [currentFetch, dispatch])

  //Local functions
  const incrementHandler = () => {
    dispatch({ type: 'SET_CURRENTFETCH', currentFetch: nextPage })
    dispatch({ type: 'INCREASE_CURRENTPAGE' })
  }
  const decrementHandler = () => {
    dispatch({ type: 'SET_CURRENTFETCH', currentFetch: prevPage })
    dispatch({ type: 'DECREASE_CURRENTPAGE' })
  }

  const handleIputChange = event => setInputSearch(event.target.value)

  const handleSearch = () => {
    if (inputSearch) {
      dispatch({ type: 'SET_CURRENTPAGE', currentPage: 1 })
      dispatch({ type: 'SET_CURRENTFETCH', currentFetch: `https://rickandmortyapi.com/api/character/?name=${inputSearch}` });
    } else {
      dispatch({ type: 'SET_CURRENTPAGE', currentPage: 1 })
      dispatch({ type: 'SET_CURRENTFETCH', currentFetch: `https://rickandmortyapi.com/api/character` });
    }
  }

  const openModal = (character) => {
    setCurrentCharacter(character)
    setModalOpen(!modalOpen)
  };


  return (
    <div className="App">
      <Header inputSearch={inputSearch} handleIputChange={handleIputChange} handleSearch={handleSearch} />

      <main className="mainapp">
        {
          isLoading ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : (
            characters.map((character) => {
              return (
                <Card character={character} openModal={openModal} />
              )
            })
          )
        }


      </main>

      <Footer prevPage={prevPage} nextPage={nextPage} currentPage={currentPage} isLoading={isLoading} incrementHandler={incrementHandler} decrementHandler={decrementHandler} />
      
      <Modal open={modalOpen} character={currentCharacter} onClose={openModal} />
    </div>
  );
}

export default App;
