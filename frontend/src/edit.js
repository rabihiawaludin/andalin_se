import React, { Component } from 'react';
import './index.css';
import axios from 'axios';

export default class NameFormEdit extends Component {
  constructor() {
    super();
    this.state = {
      id : '',
      nim: '',
      nama: '',
      prodi: '',
      kelas: '',
      hits: [],
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
  
    fetch('http://localhost:5000/user/'+params.id)
    .then(response => response.json())
    .then(data => this.setState({ hits: data.result }));

  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

    onSubmit = (e) => {
        e.preventDefault();
        // const {nim, nama, prodi, kelas } = this.state;
        var nim = this.state.nim;
        var nama = this.state.nama;;
        var prodi  = this.state.prodi;;
        var kelas = this.state.kelas;
        const { match: { params } } = this.props;
        const id = params.id;
        if(nim==""){
          nim = e.target.nim.value;
        }
        if(nama==""){
          nama = e.target.nama.value;
        }
        if(prodi==""){
          prodi = e.target.prodi.value;
          alert(nim);
        }
        if(kelas==""){
          kelas = e.target.kelas.value;
        }
        axios.patch('http://localhost:5000/user/', { id, nim, nama, prodi, kelas })
        .then((result) => {
        });
          window.location.href="/" ;
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
                <form encType="application/json" onSubmit={this.onSubmit} method="POST">
                {hits.map(hit =>
                    <div>
                    <div className="form-group">
                      <input type="hidden" name="id" className="form-control" defaultValue={hit.id} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                      <label>Nim</label>
                      <input type="text" name="nim" className="form-control" defaultValue={hit.nim} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                      <label>Nama</label>
                      <input type="text" name="nama" className="form-control" defaultValue={hit.nama} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                      <label>Program Studi</label>
                      <input type="text" name="prodi" className="form-control" defaultValue={hit.prodi} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                      <label>Kelas</label>
                      <input type="text" name="kelas" className="form-control" defaultValue={hit.kelas} onChange={this.onChange} />
                    </div>
                    <input type="submit" value="Submit" className="btn btn-default"/>
                    </div>
                    )}
                </form>
            </div>
        </div>
    </div>
    );
  }

}
  
  // ReactDOM.render(<NameForm />, document.getElementById('root'));