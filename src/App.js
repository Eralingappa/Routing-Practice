import './index.css'
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Content from './components/Content'
import NotFound from './components/NotFound'

const App = () => (
  <div className="app-container">
    <div className="response-container">
      <Header />
      <div className="app-body">
      <Switch>
        <Route exact path="/" component="{Home}" />
        <Route exact path="About" component="{About}" />
        <Route exact path="Content" component="{Content}" />
        <Route component={NotFound} />
      </Switch>
      </div>
    </div>
  </div>
)

export default App
