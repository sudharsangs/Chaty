import React from 'react';

export const CTX = React.createContext();

const initState = {
    general: [
        {from: 'someone', msg: 'something'},
        {from: 'abcd', msg: 'something'},
        {from: 'xyz', msg: 'something'}
    ],
    topic2: [
        {from: 'pqr', msg: 'something'},
        {from: 'stu', msg: 'something'},
        {from: 'qwerty', msg: 'something'}
    ]
}

function reducer(state, action) {
    const {from, msg, topic} = action.payload;
    switch(action.type){
        case 'RECEIVE MESSAGE' :
            return {
                ...state,
                [topic]: [
                    ...state[topic],
                    {
                        from,
                        msg
                    }
                ]
            }
        default: 
            return state;
    }
}

export default function Store(props) {

        const reducerHook = React.useReducer(reducer,initState)
        return(
            <CTX.Provider value={reducerHook}>
                {props.children}
            </CTX.Provider>
        )
}