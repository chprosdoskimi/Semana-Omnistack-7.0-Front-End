import React from 'react';
import { Switch, Route} from 'react-router-dom';
//Switch garante que apenas uma rota seja chamada a cada url
//Route chama o component com base no path
import Feed from './pages/Feed';
import New from './pages/New';

function Routes(){
  return(
    <Switch>
      <Route path="/" exact component={Feed}/>
      <Route path="/new" component={New} />
    </Switch>
  )
}

export default Routes;