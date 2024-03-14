import React, { useState } from 'react';
import Container from 'components/Container';
import List from 'components/List';
import Card from 'components/Card';
import ProductDetails from 'model';
import { useDataController } from 'controllers/data/DataController';
import { MyContext } from 'context/App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

const App: React.FC = () => {
  const { data, isLoading, error } = useDataController();
  const [value, setValue] = useState<ProductDetails | null>(null);
  const [selectedItems, setSelectedItems] = useState<ProductDetails[]>([]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <MyContext.Provider value={{ value, setValue, selectedItems, setSelectedItems }}>
      <header className="header">Products</header>
      <section className="section">
        Selected Items: {selectedItems && selectedItems.length}
      </section>
      <section className="section">
        <Container >
          {
            value === null ?
              <List data={data} />
              : <Card />
          }
        </Container>
      </section>
      <ToastContainer />
    </MyContext.Provider>
  );
};

export default App;
