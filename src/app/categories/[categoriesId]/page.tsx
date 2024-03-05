import React from 'react';

const DynamicNewsPage = ({searchParams}) => {
    // console.log(searchParams);
    return (
        <div>
            <h1>Dynamic News Page {searchParams.category} </h1>
        </div>
    );
};

export default DynamicNewsPage;