// src/App.tsx
import { Route, Router, Switch } from "wouter";
// 1. Agregamos la importación de tu Footer
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Menu from "./components/menu/Menu";

const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

const App = () => (
  <Router base={base}>
    {/* El Menu siempre visible arriba */}
    <Menu />
    
    {/* El Switch cambia el contenido principal dependiendo de la URL */}
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route>404: No such page!</Route>
    </Switch>

    {/* 2. El Footer siempre visible abajo */}
    <Footer />
  </Router>
);

export default App;
