import React from 'react';

class Spinner extends React.Component {
	static defaultProps = { msg: 'Loading . . .' };

	render() {
		return (
			<div className="ui active dimmer">
				<div className="ui big text loader">{this.props.msg}</div>
			</div>
		);
	}
}

export default Spinner;
