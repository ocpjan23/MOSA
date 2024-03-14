import { useState, useEffect } from 'react';
import ProductDetails from 'model';
import { DatarService } from 'services/data/DataService';

export const useDataController = () => {
  const [data, setData] = useState<ProductDetails[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const dataTemp:ProductDetails[] = await DatarService.getData();
        setData(dataTemp.sort((a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        }));
      } catch (error) {
        setError('Failed to fetch users');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};