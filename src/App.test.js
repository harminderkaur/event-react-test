import { fireEvent, render, screen } from '@testing-library/react';
// import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import { BrowserRouter as Router } from "react-router-dom"
import App from './App';
import HeroContext from './Contexts';
import data from './data/db.json'
import { MainPage } from './Pages';

it("should render App", () => {
  render(
    <HeroContext.Provider value={data}>
     <App />
    </HeroContext.Provider>
  );
  expect(screen.getByPlaceholderText("Search Your Hero By Name")).toBeInTheDocument();
});
it("should test the filtering of hero name", () => {
  render(
    <HeroContext.Provider value={data}>
      <Router>
        <MainPage />
      </Router>
    </HeroContext.Provider>
  );
  const input = screen.getByPlaceholderText("Search Your Hero By Name")
  fireEvent.change(input, {target: {value: 'spider'}})
  expect(input.value).toBe('spider')
  const filterlist = screen.getByTestId('list')
  expect(filterlist.children.length).toBe(1);
});