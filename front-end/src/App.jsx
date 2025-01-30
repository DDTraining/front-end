import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage'
import About from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import Article from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';

const routes = [{
  path: '/',
  element: <HomePage />
},
{
  path: '/about',
  element: <About />
},
{
  path: '/articles',
  element: <ArticlesListPage />
},
{
  path: '/article/individual',
  element: <ArticlePage />
}

]


const router = createBrowserRouter(routes);


function App() {
  // const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router} />
  );

}

export default App
