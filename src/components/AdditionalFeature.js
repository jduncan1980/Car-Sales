import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions/addFeature';

const AdditionalFeature = (props) => {
	const handleAddFeature = () => {
		props.addFeature(props.feature);
	};

	return (
		<li>
			<button className='button' onClick={handleAddFeature}>
				Add
			</button>
			{props.feature.name} (+{props.feature.price})
		</li>
	);
};

const mapStateToProps = (state) => {
	return;
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
