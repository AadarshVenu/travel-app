import "./App.css";
import Header from "./Components/Header";
import FrontPage from "./Components/FrontPage";
import DetailsPage from "./Components/DetailsPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
    return (
        <Router>
            <>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <FrontPage />
                    </Route>
                    <Route path="/:id">
                        <DetailsPage/>
                    </Route>
                </Switch>
            </>
        </Router>
    );
}

export default App;
