import React from 'react';

interface VehicleLegendProps {
  colors: Record<string, string>;
  labels: Record<string, string>;
}

export function VehicleLegend({ colors, labels }: VehicleLegendProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {Object.entries(colors).map(([type, color]) => (
        <div key={type} className="flex items-center space-x-2">
          <div 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: color }}
          />
          <span className="text-sm text-gray-600">
            {labels[type as keyof typeof labels]}
          </span>
        </div>
      ))}
    </div>
  );
}