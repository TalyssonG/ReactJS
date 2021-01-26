import React from 'react';
import Header from './componentes/Header';

/* Skils mais importantes do react
- Componente
- Propriedade
- Estado 
*/
function App() {
    return (
        <>
            <Header title="Homepage">
                <ul>
                    <li>Homepage</li>
                    <li>projects</li>
                    <li>contact</li>
                    <li>Teste</li>
                </ul>
            </Header>
            <Header title="projects">
                <ul>
                    <li>Homepage</li>
                    <li>projects</li>
                    <li>Login</li>
                </ul>
            </Header>
        </>
    );
}

export default App;