import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoute } from '~/routes/index'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoute.map((pr, i) => {
            const Page = pr.component
            return <Route key={i} path={pr.path} element={<Page />} />
          })}
        </Routes>
      </div>
    </Router>
  );
}


export default App;
