import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';

class Clients extends Component {


  render() {
    const { clients } = this.props;

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {' '}
                <i className="fas fa-database" /> Data Set:{' '}
              </h2>
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
                      <i className="fas fa-arrow-circle-right" /> Update
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

Clients.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: 'clients' }]),
  connect((state, props) => ({
    clients: state.firestore.ordered.clients
  }))
)(Clients);


//hard Coded data
// const clients = [
//   {
//     id: "56473829",
//     product: "Apple iphone 6s",
//     color: "Dark Grey",
//     price: "CHF 769"
//   },
//   {
//     id: "123456789",
//     product: "Samsung Galaxy S8",
//     color: "Midnight Black",
//     price: "CHF 569"
//   },
//   {
//     id: "98765e11",
//     product: "Huawei P9",
//     color: "Mystic Silver",
//     price: "CHF 272"
//   },
// ];
