import React from "react";
import * as d3 from "d3";
import Building from './Building';
import Flood from './Flood';
import './skyline.css';

class Skyline extends React.Component {
    state = {
        widthScale: d3
            .scaleBand()
            .domain(d3.range(0, this.props.data.length))
            .range([ 0, this.props.width ]),

        heightScale: d3
            .scaleLinear()
            .domain([ 0, d3.max(this.props.data) ])
            .range([ 0, this.props.height - 50 ])
    };
    
    MIN_BUILDINGS_TO_DISPLAY = 20;

    static getDerivedStateFromProps(nextProps, prevState) {
        let { widthScale, heightScale } = prevState;

        widthScale.domain(d3.range(0, nextProps.data.length));
        heightScale.domain([ 0, d3.max(nextProps.data) ]);

        prevState = { ...prevState, widthScale, heightScale };
        return prevState;
    }

    render() {
        const { x, y, data, height, toFill } = this.props,
            { widthScale, heightScale } = this.state;
        return (
            <div className="rain-container">
                <svg width="100%" height="300">
                    <g transform={`translate(${x}, ${y})`}>
                        {data.map((d, i) => (
                            <g key={i}>
                                <Building
                                    x={widthScale(i) - 4}
                                    y={height - heightScale(d)}
                                    width={widthScale.bandwidth() + 4}
                                    height={heightScale(d)}>
                                </Building>
                                <Flood
                                    x={widthScale(i)}
                                    y={height - heightScale(d) - heightScale(toFill[ i ])}
                                    width={widthScale.bandwidth() + .5}
                                    height={heightScale(toFill[ i ])}>
                                </Flood>
                            </g>
                        ))}
                    </g>
                </svg>
            </div>
            
        );
    }
}

export default Skyline;
