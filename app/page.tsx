import Container from "./Components/Common/Container";
import ProductCard from "./Components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main className="flex">
      <Container>
        <ProductCard />
      </Container>
    </main>
  );
}
