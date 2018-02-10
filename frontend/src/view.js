import React, { Component } from 'react';
import './index.css';
import axios from 'axios';

export default class ViewMahasiswa extends Component {
  constructor() {
    super();

    this.state = {
        hits: [],
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
  
    fetch('http://localhost:5000/user/'+params.id)
    .then(response => response.json())
    .then(data => this.setState({ hits: data.result }));

  }

  onDelete(idMahasiswa) {
    axios.delete('http://localhost:5000/user/'+idMahasiswa)
      .then(res => {
          console.log(res)
          console.log('it works')
      })
      .catch(function (error) {
          console.log(error);
      });
    window.location.href="/" ;
  }

  onEdit(idMahasiswa) {
    window.location.href="/edit/"+idMahasiswa ;
  }
  
  render() {
    const { hits } = this.state;
    return (
    <div>
        <div className="row" style={{paddingBottom:10}}>
            <a href="/" className="btn btn-info">Home</a>
        </div>
        <div className="row">
            <div className="col-md-6">
                {hits.map(hit =>
                    <div>
                        <h3>NIM : {hit.nim}</h3>
                        <h3>Nama : {hit.nama}</h3>
                        <h3>Program Studi : {hit.prodi}</h3>
                        <h3>Kelas : {hit.kelas}</h3>
                        <button onClick={() => this.onDelete(hit.id)} className="btn btn-danger">Delete</button>
                        <button onClick={() => this.onEdit(hit.id)} className="btn btn-warning">Edit</button>
                    </div>
                    )}
            </div>
        </div>
    </div>
    );
  }

}
  
  // ReactDOM.render(<NameForm />, document.getElementById('root'));