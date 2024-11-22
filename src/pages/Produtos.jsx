import { faker } from '@faker-js/faker';
import Produto from "../components/Produto.jsx";

const gerarProdutos = (quantidade) => {
  return Array.from({ length: quantidade }, () => ({
    id: faker.string.uuid(),
    nome: faker.commerce.productName(),
    descricao: faker.commerce.productDescription(),
    preco: faker.commerce.price(10, 100, 2, 'R$ '),
    imagem: faker.image.url(),
  }));
};

export default function Produtos() {
  const produtos = gerarProdutos(10);

  return (
    <div className="min-h-screen p-8 bg-green-50">
      <h1 className="mb-8 text-center text-3xl text-green-400 font-bold">Produtos</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            id={produto.id}
            name={produto.nome}
            imagem={produto.imagem}
          />
        ))}
      </div>
    </div>
  );
}
