import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './Components/Navigation';
import HomePageView from './views/HomePageView';
import MovieDetailsPage from './views/MovieDetailsPage';
import MoviesPageView from './views/MoviesPageView';
function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePageView />
        </Route>
        <Route path="/movies" exact>
          <MoviesPageView />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
