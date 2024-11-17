import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
	state = { lat: null, errMsg: '' };

	componentDidMount()
	{
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errMsg: err.message })
		);
	}

	renderCont() {
		let ret = null;
		if (this.state.lat && !this.state.errMsg)
		{
			ret = (<SeasonDisplay lat={this.state.lat} />);
		}
		else if (!this.state.lat && this.state.errMsg)
		{
			ret = (<div>Err : {this.state.errMsg}</div>);
		}
		else
		{
			ret = (<Spinner msg="Allow Location Request !" />);
		}
		return ret;
	}

	render() {
		return (
			<div className="app">{this.renderCont()}</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
