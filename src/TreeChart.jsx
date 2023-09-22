import * as d3 from 'd3';
import React, { useEffect, useRef, useState } from 'react';

const TreeChart = ({ data, width, height }) => {
    const svgRef = useRef();
    const [expandedNodes, setExpandedNodes] = useState(new Set());
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const margin = { top: 20, right: 20, bottom: 20, left: 20 };

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        const width = svgRef.current.clientWidth - margin.left - margin.right;
        const height = svgRef.current.clientHeight - margin.top - margin.bottom;

        setDimensions({ width, height });

        // Create a hierarchical tree layout
        const treeLayout = d3.tree().size([width, height]);

        // Create a hierarchy from your data
        const root = d3.hierarchy(data);

        // Assign positions to nodes using the tree layout
        treeLayout(root);

        // Create a group for the tree
        const g = svg.append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        // Add your D3 code here to render the tree nodes and links
        const nodes = g.selectAll('.node')
            .data(root.descendants())
            .enter()
            .append('g')
            .attr('class', 'node')
            .attr('transform', (d) => `translate(${d.x}, ${d.y})`)
            .attr('visibility', (d) => (d.parent && !expandedNodes.has(d.parent.data.name) ? 'hidden' : 'visible'));

        // Add lines under images to connect parent and child nodes
        nodes.append('line')
            .attr('x1', 0)
            .attr('y1', 20) // Adjust the Y position as needed
            .attr('x2', 0)
            .attr('y2', 40) // Adjust the Y position as needed
            .attr('stroke', 'steelblue')
            .attr('stroke-width', 2);

        // Add images as background for nodes
        nodes.append('image')
            .attr('xlink:href', (d) => d.data.image) // Use the image property in the data
            .attr('x', -20) // Adjust the positioning as needed
            .attr('y', 0) // Adjust the Y position as needed
            .attr('width', 40)
            .attr('height', 40);

        // Add labels to nodes
        nodes.append('text')
            .attr('x', 12)
            .text((d) => d.data.name);

        // Add an event listener to toggle node visibility on click
        nodes.on('click', (event, d) => {
            const nodeName = d.data.name;
            if (d.children) {
                const updatedSet = new Set(expandedNodes);
                if (updatedSet.has(nodeName)) {
                    updatedSet.delete(nodeName);
                } else {
                    updatedSet.add(nodeName);
                }
                setExpandedNodes(updatedSet);
            }
        });

        // Add links between nodes
        const links = g.selectAll('.link')
            .data(root.links())
            .enter()
            .append('path')
            .attr('class', 'link')
            .attr('d', (d) => {
                return `
          M${d.source.x},${d.source.y + 40} // Adjust the Y position as needed
          L${d.target.x},${d.target.y}
        `;
            })
            .attr('fill', 'none')
            .attr('stroke', 'steelblue')
            .attr('stroke-width', 2);

    }, [data, width, height, expandedNodes]);

    const handleNodeClick = (event, d) => {
        const nodeName = d.data.name;
        if (d.children) {
            const updatedSet = new Set(expandedNodes);
            if (updatedSet.has(nodeName)) {
                updatedSet.delete(nodeName);
            } else {
                updatedSet.add(nodeName);
            }
            setExpandedNodes(updatedSet);
        }
    };

    return (
        <svg
            ref={svgRef}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            viewBox={`0 0 ${dimensions.width + margin.left + margin.right} ${dimensions.height + margin.top + margin.bottom
                }`}
        >
            {/* You can add additional SVG content here as needed */}
        </svg>
    );
};

export default TreeChart;
