import React from 'react';
import { AlertTriangle } from 'lucide-react';

export interface LowStockProduct {
  id: number;
  name: string;
  currentStock: number;
  minimumStock: number;
}

interface LowStockAlertProps {
  products: LowStockProduct[];
  isLoading?: boolean;
}

const LowStockAlert: React.FC<LowStockAlertProps> = ({ products, isLoading }) => {
  if (isLoading) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  if (products.length === 0) return null;

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
      <div className="flex items-center mb-2">
        <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
        <h3 className="text-lg font-medium text-yellow-800">
          Alertas de Estoque Baixo
        </h3>
        <span className="ml-2 bg-yellow-600 text-white text-sm px-2 py-1 rounded-full">
          {products.length}
        </span>
      </div>
      <div className="space-y-1">
        {products.map(product => (
          <div key={product.id} className="text-sm text-yellow-700 flex justify-between">
            <span>• {product.name}</span>
            <span className="font-medium">
              {product.currentStock} unidades (mínimo: {product.minimumStock})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LowStockAlert;
