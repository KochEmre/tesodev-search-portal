import React, { useState } from 'react'
import "./dropdownButton.scss"
//import { RiArrowUpDownLine } from 'react-icons/ri';

const DropdownButton = ({ buttonName, options, setSelectedFilter }) => {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className='button-wrapper'>
            <button className='button-class' onClick={() => setShowOptions(!showOptions)}>⇅ {buttonName}</button>
            {showOptions && (
                <div className="options-wrapper">
                    {options?.map((child, index) => (
                        <div key={index} className="option-wrapper" onClick={(e) => [setShowOptions(false), setSelectedFilter(child)]}>
                            {child}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DropdownButton