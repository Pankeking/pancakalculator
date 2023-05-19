import react from "react";
import { connect } from "react-redux";

const Display = ({ expression }) => {
    return (
        <input 
            type="text"
            value={expression}
            className="w-full h-12 px-4 text-2x1 bg-gray-100"
            readOnly
            />
    );
};

const mapStateToProps = (state) => ({
    expression: state.expression,
});

export default connect(mapStateToProps)(Display);