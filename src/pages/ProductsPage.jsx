import { FilterForm } from "../components/filterForm";
import { Products } from "../components/products";

export const ProductsPage = () => {
  return (
    <main className="index-container">
      <FilterForm />
      <Products />
    </main>
  );
};
