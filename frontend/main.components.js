// component that decides which main component to load: read or create/update
var MainApp = React.createClass({
 
    // initial mode is 'read' mode
    getInitialState: function(){
        return {
            currentMode: 'read',
            IdMahasiswa: null
        };
    },
 
    // used when use clicks something that changes the current mode
    changeAppMode: function(newMode, IdMahasiswa){
        this.setState({currentMode: newMode});
            if(IdMahsiswa !== undefined){
            this.setState({IdMahsiswa: IdMahsiswa});
        }
    },
 
    // render the component based on current or selected mode
    render: function(){
 
        var modeComponent =
            <ReadProductsComponent
            changeAppMode={this.changeAppMode} />;
 
        switch(this.state.currentMode){
            case 'read':
                break;
            case 'readOne':
                modeComponent = <ReadOneMahsiswaComponent IdMahsiswa={this.state.IdMahsiswa} changeAppMode={this.changeAppMode}/>;
                break;
            case 'create':
                modeComponent = <CreateMahasiswaComponent changeAppMode={this.changeAppMode}/>;
                break;
            case 'update':
                modeComponent = <UpdateMahasiswaComponent IdMahsiswa={this.state.IdMahsiswa} changeAppMode={this.changeAppMode}/>;
                break;
            case 'delete':
                modeComponent = <DeleteMahasiswaComponent IdMahsiswa={this.state.IdMahsiswa} changeAppMode={this.changeAppMode}/>;
                break;
            default:
                break;
        }
 
        return modeComponent;
    }
});
 
// go and render the whole React component on to the div with id 'content'
ReactDOM.render(
    <MainApp />,
    document.getElementById('root')
);