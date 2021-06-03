import {Link} from 'react-router-dom';
import {useState} from 'react';
import 'antd/dist/antd.css';
import {Table,Button, message, Layout, Menu} from 'antd';

const { Header, Content, Footer } = Layout;
const {Colunm} = Table;

export default function ListaInvestimentos(){
    const [investimentos, setInvestimentos] = useState([]);
    function remove(record){
        message.success('Investimento removido com sucesso');
    }
    return(
        <div className="container">
         <Layout className="layout">
            <Header>
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">
                        <Link to="/cadastrar-investimento">
                            Cadastrar investimentos
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/listar-investimento">
                            Listar investimentos
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{padding: '0 50px;'}}>
            <div className="site-layout-content">
                <h2>INVESTIMENTOS</h2>
                    <Table dataSource={investimentos}>
                        <Colunm title="Codigo do Ativo" dataIndex="codigoAtivo" key="codigoAtivo"/>
                        <Colunm title="Valor" dataIndex="valor" key="valor"/>
                        <Colunm title="Quantidade de cotas" dataIndex="quantidadeCotas" key="quantidadeCotas"/>
                        <Colunm title="Data da compra" dataIndex="dataCompra" key="dataCompra"/>
                        <Colunm title="Remover" key="atualizar"
                            render={(text, record) => (<Button onClick={() => remove(record)}
                            type="primary">Remover</Button>)}
                        />

                    </Table>
            </div>
            </Content>
            <Footer style={{textAlign: "center" }}>My Invest 2021</Footer>
         </Layout>
         </div>
    );

}
