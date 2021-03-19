import React, { useState, useEffect, useRef } from 'react'

const Dropdown = ({options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        document.body.addEventListener('click', (e) => {
            if (ref.current && ref.current.contains(e.target)) {
                return;
            }
            setOpen(false);
        });
    }, [])

    const ref = useRef();
    const renderedOptions = options.filter(item => item.value !== selected.value).map((option) => {
        
        return (
            <div 
                key={option.value} 
                className="item" 
                onClick={() => onSelectedChange(option)}
                data-value={option.value}
            >
                {option.label}
            </div>            
        );
    });

    

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div className={`ui fluid selection dropdown ${open ? 'visible active' : ''}`}
                    onClick={() => setOpen(!open)}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown