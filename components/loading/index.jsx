import React from 'react';
import { LoadContainer } from './style';

const Loading = () => {
    return (
        <LoadContainer>
            <div class="wrapper">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
            </div>
        </LoadContainer>
    );
};

export default Loading;