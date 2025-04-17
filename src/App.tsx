import { Box, Center, ChakraProvider } from '@chakra-ui/react';
import { Card } from './components/Card';
import { Layout } from './components/Layout';
import { Botao } from './components/button';
import { welcome } from './services/bem-vindo';
function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
          <Center>
            <Card
              id={1}
              title="Bem-vindo ao Dio Bank"
              paragraph="Por favor, faça login abaixo"
              details="Digite seu email e senha para acessar sua conta."
            />
          </Center>
          <Botao onClick={() => alert(welcome())}>Clique aqui</Botao>

        </Box>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
