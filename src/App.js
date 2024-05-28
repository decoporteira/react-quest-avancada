import './App.css';
import AppRoutes from './pages/routes';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #fdeaea;
  }
  a {
    font-weight: 500;
    color: #ff6464;
    text-decoration: inherit;
    transition-duration: 3.s; 
  }
  a:hover {
    color: #81131e;
    transition-duration: .3s; 
  }
`

export default App;
