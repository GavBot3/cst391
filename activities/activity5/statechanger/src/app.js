import React from 'react';
import Counter from './counter';


const App = () => {
    return (
        <div>
            This is the first page of the application
            <Counter title="1st Counter"/>
            <Counter title="2nd Counter"/>
            <Counter title="3rd Counter"/>
            
        </div>
    )

}

export default App;