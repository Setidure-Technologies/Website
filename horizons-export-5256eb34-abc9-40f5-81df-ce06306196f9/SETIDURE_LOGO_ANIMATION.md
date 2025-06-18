# Setidure Logo 3D Animation

## Overview

This is a complete Three.js 3D animation component that displays connected nodes forming the Setidure logo. The animation features:

- **Connected spherical nodes** representing the company name in an abstract form
- **Smooth rotation animation** with subtle floating effects
- **Pulsating nodes** with dynamic glow effects
- **Responsive design** that adapts to different screen sizes
- **WebGL support detection** with fallback
- **Customizable colors and parameters**

## Features

### Visual Elements
- **Nodes**: Spherical nodes with realistic lighting and shadows
- **Connections**: Lines connecting nodes to form the logo structure
- **Animation**: Continuous rotation with pulsating and floating effects
- **Lighting**: Ambient, directional, and point lights for depth
- **Materials**: Phong materials with transparency and shininess

### Technical Features
- **Performance Optimized**: Efficient rendering with proper cleanup
- **Responsive**: Automatically adjusts to container size
- **Error Handling**: WebGL support detection and fallback
- **Modular Design**: Easy to customize and extend
- **Memory Management**: Proper disposal of geometries and materials

## Installation

The component is already integrated into your React project. Dependencies included:
- `three` - Three.js library for 3D graphics
- `react` - React framework
- `framer-motion` - For container animations

## Usage

### Basic Usage

```jsx
import SetidureLogoAnimation from '@/components/SetidureLogoAnimation';

function MyComponent() {
  return (
    <div className="container">
      <SetidureLogoAnimation />
    </div>
  );
}
```

### Advanced Usage with Customization

```jsx
<SetidureLogoAnimation 
  width="100%"
  height="400px"
  nodeColor="#06b6d4"
  lineColor="#0891b2"
  backgroundColor="transparent"
  animationSpeed={0.003}
  nodeSize={0.6}
  glowIntensity={0.4}
/>
```

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | string | '100%' | Container width |
| `height` | string | '400px' | Container height |
| `nodeColor` | string | '#06b6d4' | Color of the nodes (hex) |
| `lineColor` | string | '#0891b2' | Color of connecting lines (hex) |
| `backgroundColor` | string | 'transparent' | Background color |
| `animationSpeed` | number | 0.005 | Animation rotation speed |
| `nodeSize` | number | 0.8 | Size of individual nodes |
| `glowIntensity` | number | 0.3 | Intensity of glow effects |

## Customization Guide

### Updating Node Positions

The logo structure is defined by the `logoNodes` array. Each node has:
- `x`, `y`, `z` coordinates for 3D positioning
- `id` for identification and connections

```javascript
const logoNodes = [
  { x: -8, y: 4, z: 0, id: 'S1' },  // Letter S, node 1
  { x: -6, y: 4, z: 1, id: 'S2' },  // Letter S, node 2
  // ... more nodes
];
```

### Modifying Connections

The `connections` array defines which nodes connect:

```javascript
const connections = [
  ['S1', 'S2'],  // Connect S1 to S2
  ['S2', 'S3'],  // Connect S2 to S3
  // ... more connections
];
```

### Changing Colors

Colors can be customized via props or by modifying the materials:

```javascript
// Via props
<SetidureLogoAnimation 
  nodeColor="#ff6b6b"    // Red nodes
  lineColor="#4ecdc4"    // Teal lines
/>

// Or modify materials in component
const nodeMaterial = new THREE.MeshPhongMaterial({ 
  color: '#your-color',
  // ... other properties
});
```

### Animation Adjustments

Modify the animation loop to change behaviors:

```javascript
// In the animate function
nodeGroup.rotation.y = time * 0.5;        // Y-axis rotation speed
nodeGroup.rotation.x = Math.sin(time * 0.3) * 0.1;  // X-axis wobble

// Node pulsing
const scale = 1 + Math.sin(time * 3 + userData.phase) * 0.1;
mesh.scale.setScalar(scale);
```

## Logo Structure

The current implementation creates an abstract representation of "SETIDURE" using connected nodes:

### Letter Formations
- **S**: 6 nodes in S-curve formation
- **E**: 6 nodes in E-shape formation  
- **T**: 5 nodes in T-shape formation
- **I**: 2 nodes in vertical line
- **D**: 5 nodes in D-shape formation
- **Central**: 3 connecting nodes for unity

### Artistic Connections
Additional connections create visual flow and unity between letter formations.

## Browser Compatibility

- **Chrome**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support
- **IE**: Not supported (requires WebGL)

## Performance Considerations

### Optimization Features
- **Efficient materials**: Reused materials for similar objects
- **Proper cleanup**: Memory management and disposal
- **Responsive rendering**: Adjusts to container changes
- **Animation frame management**: Proper cancellation

### Performance Tips
- Keep `animationSpeed` reasonable (0.001 - 0.01)
- Limit `nodeSize` for better performance
- Use `glowIntensity` moderately
- Consider reducing node count for mobile devices

## Troubleshooting

### Common Issues

1. **Black screen**: Check WebGL support
2. **Performance issues**: Reduce node count or animation speed
3. **Sizing problems**: Ensure container has defined dimensions
4. **Memory leaks**: Component handles cleanup automatically

### Debug Mode

Add console logs to the animate function:

```javascript
const animate = () => {
  console.log('Animation frame:', time);
  // ... rest of animation
};
```

## File Structure

```
src/
├── components/
│   └── SetidureLogoAnimation.jsx    # Main component
├── styles/
│   └── three-animation.css          # Styling
├── pages/
│   └── AboutUsPage.jsx             # Implementation
└── index.css                       # CSS imports
```

## Future Enhancements

### Planned Features
- **Interactive hover effects**
- **Dynamic node addition/removal**
- **Audio-reactive animations**
- **VR/AR compatibility**
- **Particle effects**

### Customization Ideas
- **Company-specific colors**
- **Different logo shapes**
- **Seasonal themes**
- **Interactive user controls**

## License

This component is part of the Setidure Technologies website project.

## Support

For issues or customization requests, contact the development team or modify the component directly according to your needs.

---

*Created with Three.js and React for Setidure Technologies*