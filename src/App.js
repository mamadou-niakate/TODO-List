import React from 'react';
import './App.css';

import Tasks from './pages/Tasks/Tasks';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TasksCalendar from './components/Calendar';
import { ContextProvider } from './components/HOC';
import Sidebar from './components/Sidebar';
import Appbar from './components/Appbar';

function App() {
  return (
    <ContextProvider>
      <MyApp /> 
    </ContextProvider>
  );
}

const MyApp = () => {
  return (
    <Router>
      <div className="main">
        <Sidebar />
        <main>
          <Appbar />
          <Switch>
            <Router exact path="/" >
              <Tasks />
            </Router>
            <Route path="/tasks">
              <Tasks />
            </Route>
            <Route path="/tasks-calendar">
              <TasksCalendar />
            </Route>
            <Route path="*">
              <h1>Erreur 404</h1>
            </Route>
          </Switch>
          </main>
      </div>
    </Router>
  )
}

export default App;