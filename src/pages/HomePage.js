//Todo: Build out the home page to contain all todos.
import { useEffect, useState } from 'react';
import { Header }              from '../components/Header/Header';
import { saveNotesIntoDb, getNotesFromDb }      from '../lib/LocalStorage/LocalDb';

export const Home = () => {
    //Init State
    const[test, setTest] = useState([]);

    //Custom Functions
    const getTodosList = (url) =>{
        fetch(url).then(res => res.json()).then(data => {
            return setTest( (prevState) => {
                return data
            } );
        });
    }
    //Init Hooks( Side effect )
    useEffect( () =>{
        document.title = 'Home';
        getTodosList('https://jsonplaceholder.typicode.com/todos');
    },[] );

    // Saves Notes
    saveNotesIntoDb('Todos', test);
    const savedTodos = getNotesFromDb('Todos');
    console.log(savedTodos);
    //Render Ui
    return(
      <div className="w-screen h-screen">
          <Header isActive={true} />
          { test.map( (item) => {
              return(
                  <p key={item.id}> {item.title} </p>
              );
          })}
      </div>
    );
}