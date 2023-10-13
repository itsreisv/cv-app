import { useState, useEffect } from "react";
import '/src/styles/app.css'
import { Preview } from "./preview";
import { Build } from "./build";
import { BuildSelect } from "./Education/edu-select";


export function App() {

  const [text, setText] = useState('John Adams');
  const [email, setEmail] = useState('johnadams@gmail.com');
  const [phone, setPhone] = useState('567-318-7942');
  const [location, setLocation] = useState('Albany, NY');
  const [listItems, setListItems] = useState([
    {name: 'University of Toledo', degree: 'Computer Science', start: '08/2020', end: '08/2023', location: 'Toledo, OH', id:1},
    {name: 'Owens Community College', degree: 'Information Technology', start: '08/2020', end: '08/2023', location: 'Toledo, OH', id:2}
  ])
   

  useEffect(() => {
    console.log(listItems)
  })

  function getText(val) {
    setText(val.target.value)
  }
  function getEmail(val) {
    setEmail(val.target.value)
  }
  function getPhone(val) {
    setPhone(val.target.value)
  }
  function getLocation(val) {
    setLocation(val.target.value)
  }
  function pushObject(newObj) {
    setListItems(listItems => [...listItems, newObj])
  }


  function submitForm() {
    const name = document.querySelector('#school');
    const degree = document.querySelector('#degree');
    const start = document.querySelector('#start');
    const end = document.querySelector('#end');
    const location = document.querySelector('#edu-location');
    createObject(name.value, degree.value, start.value, end.value, location.value);
    name.value = '';
    degree.value = '';
    start.value = '';
    end.value = '';
    location.value = '';

  }

  function createObject(name, degree, start, end, location) {
    let newObj = {
      name: name,
      degree: degree,
      start: start,
      end: end,
      location: location,
      id: name,
    }
    pushObject(newObj);
  }

  return (
    <div className='app'>
      <Build text={text} change={getText} email={getEmail} phone={getPhone} location={getLocation}/>
      <BuildSelect setter={submitForm} list={listItems} />
      <Preview text={text} email={email} phone={phone} location={location} list={listItems} />
    </div>
  )
}
