import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import HooksPostsComponent from './components/PostContainer/HooksPostsComponent'
import ClassPostComponent from './components/PostContainer/ClassPostComponent'
import FormComponent from './components/Login/FormComponent';
import HomePage from './components/HomePage';
import './App.css'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App container">
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/login' component={FormComponent} />
            <Route path='/hooksposts' component={HooksPostsComponent} />
            <Route path='/classposts' component={ClassPostComponent} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );

}

export default App;
