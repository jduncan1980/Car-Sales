import React from 'react';
// import { connect } from 'react-redux';
// import { addFeature } from '../actions/addFeature';
import { useDispatch } from 'react-redux';
import { ADD_FEATURE } from '../actions/addFeature';

const AdditionalFeature = (props) => {
	const dispatch = useDispatch();
	// const handleAddFeature = () => {
	// 	props.addFeature(props.feature);
	// };

	const handleAddFeature = () => {
		dispatch({ type: ADD_FEATURE, payload: props.feature });
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
export default AdditionalFeature;
// const mapStateToProps = (state) => {
// 	return;
// };

// export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
