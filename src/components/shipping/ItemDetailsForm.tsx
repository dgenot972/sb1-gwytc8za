import React from 'react';
import { Package, Scale, Ruler, Euro } from 'lucide-react';
import type { ShippingItem } from '../../types/shipping';

interface ItemDetailsFormProps {
  item: ShippingItem;
  onChange: (item: ShippingItem) => void;
}

export function ItemDetailsForm({ item, onChange }: ItemDetailsFormProps) {
  const handleChange = (field: keyof ShippingItem, value: any) => {
    onChange({ ...item, [field]: value });
  };

  const handleDimensionChange = (dimension: keyof Dimensions, value: string) => {
    onChange({
      ...item,
      dimensions: {
        ...item.dimensions,
        [dimension]: parseFloat(value) || 0
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Type de colis
          </label>
          <div className="mt-1 relative">
            <Package className="absolute left-3 top-3 h-5 w-5 text-indigo-500" />
            <input
              type="text"
              className="input-custom"
              placeholder="Ex: Carton, Meuble, Électronique..."
              value={item.type}
              onChange={(e) => handleChange('type', e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Poids (kg)
          </label>
          <div className="mt-1 relative">
            <Scale className="absolute left-3 top-3 h-5 w-5 text-indigo-500" />
            <input
              type="number"
              min="0"
              step="0.1"
              className="input-custom"
              value={item.weight}
              onChange={(e) => handleChange('weight', parseFloat(e.target.value) || 0)}
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Dimensions (cm)
        </label>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="relative">
              <Ruler className="absolute left-3 top-3 h-5 w-5 text-indigo-500" />
              <input
                type="number"
                min="0"
                className="input-custom"
                placeholder="Longueur"
                value={item.dimensions.length}
                onChange={(e) => handleDimensionChange('length', e.target.value)}
              />
            </div>
            <span className="text-sm text-gray-500 mt-1">Longueur</span>
          </div>
          <div>
            <div className="relative">
              <Ruler className="absolute left-3 top-3 h-5 w-5 text-indigo-500" />
              <input
                type="number"
                min="0"
                className="input-custom"
                placeholder="Largeur"
                value={item.dimensions.width}
                onChange={(e) => handleDimensionChange('width', e.target.value)}
              />
            </div>
            <span className="text-sm text-gray-500 mt-1">Largeur</span>
          </div>
          <div>
            <div className="relative">
              <Ruler className="absolute left-3 top-3 h-5 w-5 text-indigo-500" />
              <input
                type="number"
                min="0"
                className="input-custom"
                placeholder="Hauteur"
                value={item.dimensions.height}
                onChange={(e) => handleDimensionChange('height', e.target.value)}
              />
            </div>
            <span className="text-sm text-gray-500 mt-1">Hauteur</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Valeur déclarée (€)
          </label>
          <div className="mt-1 relative">
            <Euro className="absolute left-3 top-3 h-5 w-5 text-indigo-500" />
            <input
              type="number"
              min="0"
              className="input-custom"
              value={item.value}
              onChange={(e) => handleChange('value', parseFloat(e.target.value) || 0)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="fragile"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            checked={item.fragile}
            onChange={(e) => handleChange('fragile', e.target.checked)}
          />
          <label htmlFor="fragile" className="ml-2 block text-sm text-gray-700">
            Colis fragile
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows={3}
          placeholder="Décrivez votre colis..."
          value={item.description}
          onChange={(e) => handleChange('description', e.target.value)}
        />
      </div>
    </div>
  );
}