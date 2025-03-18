## **What is React Flow?**  
React Flow is a library that helps create interactive diagrams like flowcharts, mind maps, or workflows. It allows you to drag and connect elements, zoom in/out, and customize the design easily.  

---

## **Core Concepts**  

### **1. Nodes (Elements in the Diagram)**  
Nodes are the building blocks of your diagram.  
- **id** → A unique name for each node.  
- **position** → Decides where the node appears on the screen (x, y coordinates).  
- **data** → Holds extra information to display inside the node.  

#### **Types of Nodes**  
- **default** → Normal node.  
- **input** → Starting node (only has output connections).  
- **output** → Ending node (only has input connections).  
- **group** → Combines multiple nodes.  
- **custom** → A completely personalized node using React components.  

---

### **2. Edges (Connections Between Nodes)**  
Edges are the lines that connect different nodes and show relationships.  
- **id** → A unique name for each edge.  
- **source** → The starting node’s id.  
- **target** → The ending node’s id.  

#### **Types of Edges**  
- **default** → Straight line.  
- **bezier** → Curved line.  
- **step** → Right-angled line.  
- **smoothstep** → A smoother version of the step edge.  
- **straight** → A direct straight line.  

---

### **3. Handles (Connection Points)**  
Handles are small circles on nodes where edges can be attached. They allow nodes to connect to each other.  

---

## **Customizing the Look**  
- You can **change the style** of nodes and edges using the `style` property in the node and edge lists.  

---

## **Zoom & View Adjustments**  
- **fitView** → Removes extra empty space from the diagram and adjusts the zoom level automatically.  

---

## **Built-in UI Components**  
React Flow provides some helpful UI tools:  
- **MiniMap** → Shows a small preview of the full diagram.  
- **Controls** → Buttons for zooming in, zooming out, and resetting the view.  
- **Background** → Adds a grid behind the diagram for better alignment.  

---

## **Managing State with React Flow Hooks**  

### **1. useNodesState (For Managing Nodes)**  
This hook helps control the nodes in your diagram.  
- **nodes** → A list of all current nodes.  
- **setNodes** → A function to update the nodes.  
- **onNodesChange** → Automatically updates nodes when they move or change.  

### **2. useEdgesState (For Managing Edges)**  
This hook helps control the connections (edges) between nodes.  
- **edges** → A list of all edges.  
- **setEdges** → A function to update edges manually.  
- **onEdgesChange** → Automatically updates edges when added, removed, or changed.  

---

## **Adding Drag and Drop Functionality**  
By using **useNodesState** and **useEdgesState**, you can enable drag-and-drop features in your flow diagram, allowing users to move nodes around and create connections easily.  

## Handling Connections with onConnect
- onConnect is a function used to handle when two nodes are connected by an edge. It is triggered when a user creates a new edge by dragging a handle from one node to another.

- How It Works
- - When a connection is made, onConnect receives a connection object with:
- - source → The id of the node where the connection starts.
- - target → The id of the node where the connection ends.
- - sourceHandle → The handle id on the source node (optional).
- - targetHandle → The handle id on the target node (optional).

