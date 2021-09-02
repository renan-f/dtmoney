import logImg from '../../assets/logo.svg';
import { Container, Content } from './styles';


export function Header() {
    return (
        <Container>
            <Content>
                <img src={logImg} alt="dt money" />
                <button type="button">
                    Nova transação
                </button>
            </Content>
        </Container>
    );
}