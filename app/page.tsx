"use client";
import { useGetProductQuery } from "@/redux/Services/productService";
import Container from "./Components/Common/Container";
import ProductCard from "./Components/ProductCard/ProductCard";
import Spinner from "./Components/Common/Spinner";

export default function Home() {
  const { data, isLoading } = useGetProductQuery(null);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <main className="flex">
      <Container>
        <ProductCard />
      </Container>
    </main>
  );
}
