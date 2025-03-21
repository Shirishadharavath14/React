import React from 'react';

 const Hello = () => {
//     return(
//         <div>
//         <h1>Hello Viswas</h1>
//         </div>
//     )

    return React.createElement('div',
        {id:'hello', className:'dummyClass'},
            React.createElement('h1',null,"hello suresh")
    )
}


export default Hello
