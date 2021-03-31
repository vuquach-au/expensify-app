import React from 'react';

const Option = (props) =>(
        <div >
            <ol>
                {
                    props.options.map((op) => 
                            <div className="option" key={op}>
                                <li className="option__text" >{op}</li>
                                <button 
                                    className="button button--link"
                                    onClick={(e) => {
                                        props.handleDeleteOption(op);
                                    }}

            >Remove</button>
                            </div>
                        )
                }
            </ol>
            
        </div>
    );

export default Option;