import { useState, useEffect } from "react";
import '/src/styles/app.css'
import { Preview } from "./preview";
import { Build } from "./build";
import { BuildSelect } from "./Education/edu-select";
import { ExpSelect } from "./Experience/exp-select";


export function App() {

  const [text, setText] = useState('John Adams');
  const [email, setEmail] = useState('johnadams@gmail.com');
  const [phone, setPhone] = useState('567-318-7942');
  const [location, setLocation] = useState('Albany, NY');
  const [listItems, setListItems] = useState([
    {name: 'University of Toledo', degree: 'Bachelors in Computer Science and Systems Engineering', start: '08/2020', end: '08/2023', location: 'Toledo, OH', id:1},
    {name: 'Owens Community College', degree: 'Associates in Networking and Information Technology', start: '08/2020', end: '08/2023', location: 'Toledo, OH', id:2}
  ])
  const [expItems, setExpItems] = useState([
    {name: 'Amazon', title: 'Web Developer', start: '08/2020', end: '08/2023', location: 'Seattle, WA', description: 'Worked with a diverse team to build a scaled and appliciable web application. Helped form and create UI/UX for all public pages, and was in charge of git control decision making.'},
    {name: 'Facebook', title: 'Project Manager', start: '08/2020', end: '08/2023', location: 'Seattle, WA', description: 'Managed a team of 50 developers to build the most successful and most used social media website in the world. Helped pioneer and pave the wave for future minimlist UI/UX designed social media web pages.'}
  ])
   

  useEffect(() => {
    console.log(listItems)
    console.log(expItems)
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
  function pushExpObject(newObj) {
    setExpItems(expItems => [...expItems, newObj])
  }
  function editList() {
    const school = document.querySelector('#school');
    const dataOne = document.querySelector('#degree');
    const dataTwo = document.querySelector('#start');
    const dataThree = document.querySelector('#end');
    const dataNew = document.querySelector('#edu-location');
    setListItems([
      {name: school.value, degree: dataOne.value, start: dataTwo.value, end: dataThree.value, location: dataNew.value, id:1},
      {name: 'Owens Community College', degree: 'Information Technology', start: '08/2020', end: '08/2023', location: 'Toledo, OH', id:2}
    ])
  }
  function editListOne() {
    const school = document.querySelector('#school');
    const dataOne = document.querySelector('#degree');
    const dataTwo = document.querySelector('#start');
    const dataThree = document.querySelector('#end');
    const dataFour = document.querySelector('#edu-location');
    setListItems([
      {name: 'University of Toledo', degree: 'Computer Science', start: '08/2020', end: '08/2023', location: 'Toledo, OH', id:1},
      {name: school.value, degree: dataOne.value, start: dataTwo.value, end: dataThree.value, location: dataFour.value, id:2}
    ])
  }
  function editExpList() {
    const name = document.querySelector('#company-name');
    const title = document.querySelector('#title');
    const start = document.querySelector('#exp-start');
    const end = document.querySelector('#exp-end');
    const location = document.querySelector('#exp-location');
    const description = document.querySelector('#description');
    setExpItems([
      {name: name.value, title: title.value, start: start.value, end: end.value, location: location.value, description: description.value},
      {name: 'Facebook', title: 'Project Manager', start: '08/2020', end: '08/2023', location: 'Seattle, WA', description: 'Managed a team of 50 developers to build the most successful and most used social media website in the world. Helped pioneer and pave the wave for future minimlist UI/UX designed social media web pages.'}
    ])
  }
  function editExpListOne() {
    const name = document.querySelector('#company-name');
    const title = document.querySelector('#title');
    const start = document.querySelector('#exp-start');
    const end = document.querySelector('#exp-end');
    const location = document.querySelector('#exp-location');
    const description = document.querySelector('#description');
    setExpItems([
      {name: 'Amazon', title: 'Web Developer', start: '08/2020', end: '08/2023', location: 'Seattle, WA', description: 'Worked with a diverse team to build a scaled and appliciable web application. Helped form and create UI/UX for all public pages, and was in charge of git control decision making.'},
      {name: name.value, title: title.value, start: start.value, end: end.value, location: location.value, description: description.value}
    ])
  }

  function submitExpForm() {
    const name = document.querySelector('#company-name');
    const title = document.querySelector('#title');
    const start = document.querySelector('#exp-start');
    const end = document.querySelector('#exp-end');
    const location = document.querySelector('#exp-location');
    const description = document.querySelector('#description');
    createExpObject(name.value, title.value, start.value, end.value, location.value, description.value)
    name.value = ''
    title.value = ''
    start.value = ''
    end.value = ''
    location.value = ''
    description.value = ''
  }

  function createExpObject(name, title, start, end, location, description) {
    let newObj = {
      name: name,
      title: title,
      start: start,
      end: end,
      location: location,
      description: description
    }
    pushExpObject(newObj)
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
      <BuildSelect setter={submitForm} list={listItems} netter={editList} EL={editListOne}/>
      <ExpSelect expItems={expItems} submit={submitExpForm} netter={editExpList} yetter={editExpListOne}/>
      <Preview text={text} email={email} phone={phone} location={location} list={listItems} data={expItems}/>
    </div>
  )
}
