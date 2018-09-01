import React from 'react';

const Flood = ({x, y, width, height}) => (
    <rect
        x={x}
        y={y}
        width={width}
        height={height}>
        <animate attributeName="fill" from="transparent" to="dodgerblue" dur="5s" fill="freeze"></animate>
    </rect>
);

export default Flood;