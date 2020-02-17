import React, { Component }                   from 'react'                            ;
import                              './App.css'                        ;
import Nav                     from './components/Nav'                 ;
import {BrowserRouter , Route} from 'react-router-dom'                 ;
import DialogsContainer        from './components/DialogsContainer'    ;
import UsersContainer          from './components/Users/UsersContainer';
import Friends                 from './components/Friends/Friends'     ;
import News                    from './components/News/News'           ;
import Settings                from './components/Settings/Settings'   ;
import Music                   from './components/Music/Music'         ;
import ProfileContainer        from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';




class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className     ='app-wrapper'>
      <HeaderContainer />
      <Nav />    
      <div className   ='app-wrapper-content'>
      <Route       path='/dialogs'  render = { () => <DialogsContainer/>} />
      <Route exact path='/profile/:userId?'  render = { () => <ProfileContainer/>} />
      <Route exact path='/news'     render = { () => <News            />} />
      <Route exact path='/music'    render = { () => <Music           />} />
      <Route exact path='/settings' render = { () => <Settings        />} />
      <Route exact path='/users'    render = { () => <UsersContainer  />} />
      <Route exact path='/friends'  render = { () => <Friends         />} />
      <Route exact path='/login'    render = { () => <Login           />} />
      </div>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
