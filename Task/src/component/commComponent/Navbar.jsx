import React from 'react';

const Navbar = (props) => {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <div className="flex">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={props?.handleSubmit}>
                        {props.btnName}
                    </button>
                </div>
        </header>
    );
}

export default Navbar;
