import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './searchBar';

class Results extends Component {

    handleSearchbarSubmit = (query) => {
        // Manejar la consulta de búsqueda aquí
        console.log('Enviando consulta desde Results:', query);
        // Aquí puedes agregar la lógica para buscar publicaciones y actualizar el estado
    }

    render() {
        return (
            <div >
                <Logo size={55}/>
                <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
            </div>
        )
    }
}

export default Results;