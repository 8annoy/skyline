import React from 'react';

const Building = ({x, y, width, height}) => (
    <rect
        y={y}
        x={x}
        width={width}
        height={height}>
        <animate attributeName="fill" from="transparent" to="black" dur=".2s" fill="freeze"></animate>
    </rect>
);

export default Building;