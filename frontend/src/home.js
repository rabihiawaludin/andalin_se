import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const API = 'http://localhost:5000/user/';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch(API)
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

  onView(idMahasiswa){
    window.location.href="/"+idMahasiswa ;
  }

  render() {
    const { hits } = this.state;
    console.log(this.state.hits);

    return (
      <div>
        <a href="/add" className="btn btn-success">Add Mahasiswa</a>
        <table className="table">
            <thead>
                <tr>
                    <th>NIM</th>
                    <th>Nama</th>
                    <th>Prodi</th>
                    <th>Kelas</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {hits.map(hit =>
                    <tr>
                        <td>{hit.nim}</td>
                        <td><a onClick={() => this.onView(hit.id)}>{hit.nama}</a></td>
                        <td>{hit.prodi}</td>
                        <td>{hit.kelas}</td>
                        <td>
                          <div className="col-md-2"><button onClick={() => this.onDelete(hit.id)} className="btn btn-danger">Delete</button></div>
                          <div className="col-md-2"><button onClick={() => this.onEdit(hit.id)} className="btn btn-warning">Edit</button></div>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
      </div>
    );
  }

}


export default App;