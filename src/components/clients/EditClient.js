import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';

class EditClient extends Component {
  constructor(props) {
    super(props);
    // Create refs
    this.productInput = React.createRef();
    this.colorInput = React.createRef();
    this.priceInput = React.createRef();
  }
  //
  // static DictionaryState(dictionary) = {
  //   const { client, firestore, history } = this.props;
  //
  //   function Dictionary() {
  //     this.dataSotre = [];
  //
  //     this.add =  function (key, value) {
  //       if (key && value) {
  //         this.dataSotre.push({
  //           key: key,
  //           value: value
  //         });
  //         return this.dataSotre;
  //       }
  //     };
  //
  //     this.removeAt = function (key) {
  //       for (let i = 0; i < this.dataSotre.length; i++) {
  //         if(this.dataSotre[i].key === key) {
  //           this.dataSotre.splice(this.dataSotre[i],1);
  //           return this.dataSotre;
  //         }
  //       }
  //       return this.dataSotre;
  //     };
  //
  //     this.findAt = function(key) {
  //       for (let i = 0; i < this.dataSotre.length; i++) {
  //         if(this.dataSotre[i].key === key) {
  //           return this.dataSotre[i].value;
  //         }
  //       }
  //       return `Not Found ${this.dataSotre.length}`;
  //     };
  //   }
  // }










  // static validation()
  onSubmit = e => {
    e.preventDefault();

    const { client, firestore, history } = this.props;

    // Updated Client
    const updClient = {
      product: this.productInput.current.value,
      color: this.colorInput.current.value,
      price: this.priceInput.current.value
    };

    // Update client in firestore
    firestore
      .update({ collection: 'clients', doc: client.id }, updClient)
      .then(history.push('/'));
  };

  render() {
    const { client } = this.props;

    if (client) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/" className="btn btn-link">
                <i className="fas fa-arrow-circle-left" /> Back To Dashboard
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="card-header">Edit Client</div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="product">Product</label>
                  <input
                    type="text"
                    className="form-control"
                    name="product"
                    minLength="2"
                    required
                    ref={this.productInput}
                    defaultValue={client.product}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="color">Color</label>
                  <input
                    type="text"
                    className="form-control"
                    name="color"
                    minLength="2"
                    required
                    ref={this.colorInput}
                    defaultValue={client.color}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input
                    type="price"
                    className="form-control"
                    name="price"
                    ref={this.priceInput}
                    defaultValue={client.price}
                  />
                </div>
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

EditClient.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect(props => [
    { collection: 'clients', storeAs: 'client', doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered }, settings }, props) => ({
    client: ordered.client && ordered.client[0],
    settings
  }))
)(EditClient);
