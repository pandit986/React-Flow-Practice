1. What is a React Flow
- A React Flow is library for building interactive node-based diagrams (like flowcharts, mind maps, or workflow builders).
- It’s highly customizable and supports dragging, connecting nodes, zooming, and more.

2. Core Concepts
## Nodes
- A node represents a single element in your diagram. 
- - Properties:
- - id: A unique identifier.
- - position: Coordinates (x and y) that determine where the node appears on the canvas.
- - data: Information or content that you want to display in the node.

## Edges
- Edges are the lines that connect nodes, showing relationships or flows between them.
- - Properties:
- - id: A unique identifier for each edge.
- - source: The id of the starting node.
- - target: The id of the ending node.

## Handles
- - Small circles on nodes where edges start/end (like connection points).
- - this are basically use to connect two different nodes

- Node Types:
- - default: Standard node
- - input: Entry node (only output handles)
- - output: Exit node (only input handles)
- - group: Groups multiple nodes
- - custom: Fully customizable node (React component)

- Edge Types:

- default: Straight line
- bezier: Curved connection
- step: Right-angle connections
- smoothstep: Smoothed right angles
- straight: Direct straight line

## we can add custom styling to the edges and node with style key in nodelist and edgelist

### For workFlow Zoom IN
- fitView Prop which help to remove empty space from the workFlow

### React Flow have built-in UI components
- MiniMap: A small overview of your entire diagram.
- Controls: Buttons for actions like zooming in/out.
- Background: A grid background that makes the diagram look organized.


## React Flow's built-in hooks - Custom Hook 
- The useNodesState and useEdgesState hooks are custom hooks provided by React Flow that make it easier to manage and update the state of nodes and edges in your flow diagram.

## useNodesState
- Purpose:
Manages the state for your nodes.
- - Returns:
1. A tuple containing:
2. nodes: The current array of node objects.
3. setNodes: A function you can call to update the nodes manually.
4. onNodesChange: An event handler function that processes changes to nodes (for example, when a node is moved or its 
    properties are updated).

## useEdgesState
- Purpose:
- Manages the state for your edges.
- Returns:
A tuple containing:
1. edges: The current array of edge objects.
2. setEdges: A function to update the edges manually.
3. onEdgesChange: An event handler function that processes changes to edges (such as when an edge is added or removed).

## By using Both I can add Drag and Drop Functionally in the Flow Diagram 