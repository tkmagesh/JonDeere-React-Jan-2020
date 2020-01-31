import React, {useState, useReducer} from 'react';

/* class Products extends React.Component {
    state = {
        productNames: [],
        newProductName: ''
    };

    onBtnAddNewClick = () => {
        const { productNames, newProductName } = this.state;
        productNames.push(newProductName);
        this.setState({ productName: productNames });
    }
    render = () => {
        const { productNames } = this.state;
        const productItems = productNames.map((productName, index) => (<li key={index}>{productName}</li>));
        return (
            <div>
                <label>Product Name :</label>
                <input type="text" onChange={evt => this.setState({ newProductName: evt.target.value })} />
                <input type="button" value="Add New" onClick={this.onBtnAddNewClick} />
                <ol>
                    {productItems}
                </ol>
            </div>
        )
    }
} */
const productReducer = (prevState, action) => {
    //action = { type : 'ADD', payload : newProductName }
    if (action.type === 'ADD')
        return [...prevState, action.payload];
    if (action.type === 'REMOVE')
        return prevState.filter(productName => productName !== action.payload);
};

const Products = () => {
    const [newProductName, setNewProductName] = useState('');

    const [productNames, productDispatcher] = useReducer(productReducer, []);
    const productItems = productNames.map((productName, index) => (
        <li key={index}>
            <span>{productName}</span>
            <input type="button" value="Remove" onClick={ () => productDispatcher({ type : 'REMOVE', payload : productName})} />
        </li>
    ));
    return (
        <div>
            <label>Product Name :</label>
            <input type="text" onChange={evt => setNewProductName(evt.target.value)} />
            <input type="button" value="Add New" onClick={() => productDispatcher({ type: 'ADD', payload: newProductName})} />
            <ol>
                {productItems}
            </ol>
        </div>
    )
}

export default Products;