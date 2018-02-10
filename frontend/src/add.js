import React, { Component } from 'react';
import './index.css';
import axios from 'axios';

export default class NameForm extends Component {
  constructor() {
    super();
    this.state = {
      nim: '',
      nama: '',
      prodi: '',
      kelas: '',
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { nim, nama, prodi, kelas } = this.state;

    axios.post('http://localhost:5000/user/', { nim, nama, prodi, kelas })
      .then((result) => {
        console.log(result);
      });
      window.location.href="/" ;
  }

  render() {
    const { nim, nama, prodi, kelas, hits } = this.state;
    console.log(this.state.hits);
    return (
    <div>
        <div className="row" style={{paddingBottom:10}}>
            <a href="/" className="btn btn-info">Home</a>
        </div>
        <div className="row">
            <div className="col-md-6">
                <form onSubmit={this.onSubmit} method="POST">
                    <div className="form-group">
                      <label>Nim</label>
                      <input type="text" name="nim" className="form-control" value={nim} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                      <label>Nama</label>
                      <input type="text" name="nama" className="form-control" value={nama} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                      <label>Program Studi</label>
                      <input type="text" name="prodi" className="form-control" value={prodi} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                      <label>Kelas</label>
                      <input type="text" name="kelas" className="form-control" value={kelas} onChange={this.onChange} />
                    </div>
                    <input type="submit" value="Submit" className="btn btn-default"/>
                </form>
            </div>
        </div>
    </div>
    );
  }

}
  
  // ReactDOM.render(<NameForm />, document.getElementById('root'));