import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { fetchCoffeeStore } from "../../lib/coffee-store";

export async function getStaticProps(getStaticProps) {
  const params = getStaticProps.params;
  const coffeeStores = await fetchCoffeeStore();

  return {
    props: {
      coffeestore: coffeeStores.find((item) => {
        return item.fsq_id === params.id;
      }),
    },
  };
}

export async function getStaticPaths() {
  const coffeeStores = await fetchCoffeeStore();
  const paths = coffeeStores.map((item) => {
    return { params: { id: item.fsq_id } };
  });
  return {
    paths,
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  const router = useRouter();
  const { coffeestore } = props;
  return (
    <div className="max-w-screen-2xl mx-auto">
      CoffeeStore: {router.query.id}
      <p className="text-red-500 text-xl">{coffeestore.name}</p>
      {coffeestore.location.neighborhood && (
        <h1 className="text-green-400 font-semibold text-lg">
          {coffeestore.location.neighborhood}
        </h1>
      )}
      <div className="w-64 h-64 object-cover object-center rounded relative">
        <Image
          src={coffeestore.imgUrl}
          objectFit="contain"
          objectPosition="center"
          layout="fill"
          priority
        />
      </div>
      <Link href="/">
        <a className="btn bg-teal-400 text-white hover:bg-teal-400 border-none outline-none ring-0">
          Back to Home
        </a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
