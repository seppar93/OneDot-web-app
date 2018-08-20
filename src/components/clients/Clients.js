import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Clients extends Component {
  render () {
    const clients = [
      {
      id: "434343444",
      product: "Apple iphone 6s",
      color: "Dark Grey",
      price: "CHF 769"
    },
    {
    id: "123456789",
    product: "Samsung Galaxy S8",
    color: "Midnight Black",
    price: "CHf 569"
  },
  {
  id: "98765e11",
  product: "Huawei P9",
  color: "Mystic Silver",
  price: "CHF 272"
  },
  ];
  if(clients){
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {' '}
                 <i class="fas fa-database" /> Data Set:{' '}
              </h2>
            </div>
            <div className="col-md-6">
              <h5 className="text-right text-secondary">
              </h5>
            </div>
          </div>





          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Product</th>
                <th>Color</th>
                <th>Price</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.product}
                  </td>
                  <td>{client.color}</td>
                  <td>{client.price}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      );
    }
  }
}
export default Clients;
