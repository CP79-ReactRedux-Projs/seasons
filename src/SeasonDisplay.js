import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
	summer: {
		text: 'Its Summer !',
		icon: 'sun'
	},
	winter: {
		text: 'Its Winter !',
		icon: 'snowflake'
	}
};

class SeasonDisplay extends React.Component {
	state = { sea:'', text: '', icon: '' };

	componentDidMount()
	{
		let month = new Date().getMonth();
		let sea = null;
		if (month > 2 && month <9)
		{
			sea = (this.props.lat > 0.0 ? 'summer' : 'winter');
		}
		else
		{
			sea = (this.props.lat < 0.0 ? 'summer' : 'winter');
		}
		this.setState({ sea: sea, text: seasonConfig[sea].text, icon: seasonConfig[sea].icon });
	}
	render() {
		return (
			<div className={'season-display '+this.state.sea}>
				<i className={'icon-left icon massive '+this.state.icon}></i>
				<h1 className={'text-center'}>{this.state.text}</h1>
				<i className={'icon-right icon massive '+this.state.icon}></i>
			</div>
		);
	}
}

export default SeasonDisplay;
