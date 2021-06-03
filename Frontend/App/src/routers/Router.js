import{BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastrarInvestimentos from '../pages/CadastrarInvestimentos'
import ListaInvestimentos from '../pages/ListaInvestimentos'
//Para onde o cliente vai ser redirecionado
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ListaInvestimentos}></Route>
                <Route exact path="cadastrar-investimento" component={CadastrarInvestimentos}></Route>
            </Switch>
        </BrowserRouter>
    );
}