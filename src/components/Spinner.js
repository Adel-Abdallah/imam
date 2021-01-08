import React from 'react';
const Spinner = () => {
    return (

        <div className='container center-align blue-text'>
            <h1 className='center-align'>Loading</h1>

            <div class="preloader-wrapper big active container">
                <div class="spinner-layer spinner-blue">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div><div class="gap-patch">
                        <div class="circle"></div>
                    </div><div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Spinner;
