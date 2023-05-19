import react from "react";
import { connect } from "react-redux";

const Button = ({ label, onClick }) => {
    return (
        <button 
            className="w-1/4 h-12 text-2x1 bg-gray-200"
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
