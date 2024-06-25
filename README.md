# Pipeline Builder
This project is a pipeline builder application created using React and the ReactFlow library. It provides an intuitive interface for users to create and manage pipelines with source and destination nodes. Users can add nodes, connect them, and manipulate the nodes and connections dynamically.

## Key Features
1. **Node Addition**: Buttons to add two types of nodes: Source and Destination.
2. **Node Positioning**: Source nodes are positioned on the left and Destination nodes on the right.
3. **Connection Creation**: Users can connect Source nodes to Destination nodes by dragging the mouse from one node to another.
4. **Connection Restrictions**: Connections between two sources or two destinations are not allowed.
5. **Connection Removal**: Clicking on a connection between two nodes will remove that connection.
6. **Mini Map**: A mini map to get a quick overview of all the nodes.

## Technologies Used
- **React**: For building the user interface.
- **Tailwind CSS**: For styling the components.
- **React Flow**: For building and implementing the node based functionalities.

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/KirtiYadav1681/pipeline-builder-react-flow.git
   ```
2. Navigate to the project directory:
   ```bash
   cd pipeline-builder-react-flow
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. **Add a new Source**: Click on the add source button to add a new source node.
2. **Add a new Destination**: Click on the add destination button to add a new destination node.
3. **Connect Source and Destination**: Drag the mouse from the end of a source node to the end of a destination node to establish a connection.
4. **Relocate the nodes**: Drag any node to relocate its position.
5. **Delete a Connection**: Click on a connection to delete it.
6. **Delete a Node**: Click on a node and press 'Backspace' to remove a node.

## File Structure

- `src/components/CustomNode.jsx`: Custom Source and Destination nodes component.
- `src/components/FlowBuilder.jsx`: Main component for the flow builder functionality.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **React Icons**: For the icons used in the project.
- **Tailwind CSS**: For the styling framework.
- **React Flow**: For the node editor building.

