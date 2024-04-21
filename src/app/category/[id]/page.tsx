import React from 'react';

const DainamicPage = ({params}:string| any) => {
    console.log(params.id)
    return (
        <div>
            <h1>Dainamic page {params.id} </h1>
        </div>
    );
};


export default DainamicPage;