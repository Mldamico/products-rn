import {useState} from 'react';
import {createContext} from 'react';
import {Producto} from '../interfaces/appInterfaces';

type ProductsContextProps = {
  products: Producto[];
  loadProducts: () => Promise<void>;
  addProduct: (categoryId: string, productName: string) => Promise<void>;
  updateProduct: (
    categoryId: string,
    productName: string,
    productId: string,
  ) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  loadProductById: (id: string) => Promise<Producto>;
  uploadImage: (data: any, id: string) => Promise<void>;
};

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({children}: any) => {
  const [products, setProducts] = useState<Producto[]>([]);

  const loadProducts = async () => {};
  const addProduct = async (categoryId: string, productName: string) => {};
  const updateProduct = async (
    categoryId: string,
    productName: string,
    productId: string,
  ) => {};
  const deleteProduct = async (id: string) => {};
  const loadProductById = async (id: string) => {
    throw new Error('not');
  };
  const uploadImage = async (data: any, id: string) => {};
  return (
    <ProductsContext.Provider
      value={{
        products,
        loadProductById,
        loadProducts,
        addProduct,
        updateProduct,
        uploadImage,
        deleteProduct,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};