// Animation utility functions
export const generateRandomInRange = (min: number, max: number) => 
  min + Math.random() * (max - min);

export const calculateNewPosition = (
  currentX: number, 
  currentY: number, 
  direction: number, 
  speed: number
) => ({
  x: currentX + Math.cos(direction) * speed * 0.1,
  y: currentY + Math.sin(direction) * speed * 0.1
});

export const handleBoundaryCollision = (
  x: number, 
  y: number, 
  direction: number
) => {
  let newDirection = direction;

  if (x < 0 || x > 100) {
    newDirection = Math.PI - direction;
  }
  if (y < 0 || y > 100) {
    newDirection = -direction;
  }

  return {
    x: Math.max(0, Math.min(100, x)),
    y: Math.max(0, Math.min(100, y)),
    direction: newDirection
  };
};