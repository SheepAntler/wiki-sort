import App from './App';
import { render, screen } from '@testing-library/react';

describe('App', () => {
  it('renders app title', () => {
    render(<App />);
    const pageTitle = screen.getByText("Welcome to WikiSort!");
    expect(pageTitle).toBeInTheDocument();
  }); 
  
  it('renders subtext', () => {
    render(<App />);
    const pageSubtext = screen.getByText("A Tiny (but Mighty) App Powered by Wikipedia");
    expect(pageSubtext).toBeInTheDocument();
  });
});