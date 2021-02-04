import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux';
import promiseMW from 'redux-promise'
import './App.css';
import Home from './components/home/Home';
import NavBar from './components/navbar/Navbar';
import NotFound from './components/not-found/NotFound';
import StudentDetails from './containers/Student-details';
import { StudentForm } from './containers/StudentForm';
import reducers from './reducers';

const createStoreWithMW = applyMiddleware(promiseMW)(createStore)
function App() {
  return (
    <Provider store={createStoreWithMW(reducers)}>
      <BrowserRouter>
      <NavBar />
          <Switch>
            <Route path='/students/:id' component={StudentDetails}/>
            <Route path='/addstudent' component={StudentForm}/>
            <Route exact path='/' component={Home}/>
            <Route path="*" component={NotFound}/>
          </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
