import React from 'react';
import ProductItem from './ProductItem';
import { getProducts } from '../repository';
import { Link } from 'react-router-dom';

export default class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: []
		}
	}

	componentWillMount() {
		getProducts().then((products) => {
	      this.setState({ products });
	    });
	}

	render() {
		const { products } =  this.state;
		return (
			<div className=" container">
				<h3 className="card-title">Danh Sách sản phẩm</h3>
				<hr/>
				{
					products.map((product, index) => <ProductItem product={product} key={index}/>)
				}
				<hr/>
				<Link to="/checkout"><button className="btn btn-success float-right">Thanh Toán</button></Link>
				<Link to="/cart"><button className="btn btn-primary float-right" style={{  marginRight: "10px" }}>Xem Giỏ hàng</button></Link>
				<br/><br/><br/>
			</div>
		);
	}
}
