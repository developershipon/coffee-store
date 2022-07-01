import Image from "next/image";
import Link from "next/link";
import { fetchCoffeeStore } from "../lib/coffee-store";
import { usePosition } from "../hook/usePosition";

export async function getStaticProps(context) {
  const coffeeStores = await fetchCoffeeStore();
  return {
    props: {
      coffeeStores,
    },
  };
}

export default function Home(props) {
  const { coffeeStores } = props;
  const { position, error, isfind } = usePosition();

  const getLocation = () => {
    console.log("Hi Banner Button");
    console.log({ position, error });
  };

  return (
    <>
      <h1 className="text-6xl text-red-500 text-center">Home</h1>

      <button
        className="btn bg-teal-400 text-white hover:bg-teal-400 border-none outline-none ring-0"
        onClick={getLocation}
      >
        {isfind ? "Locating" : "View Nearby Stores"}
      </button>
      <div className="mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-screen-2xl my-10">
        {coffeeStores.map((item) => {
          return (
            <div
              key={item.fsq_id}
              className="border flex flex-col border-gray-300 px-8 py-8 rounded-lg hover:shadow-lg duration-500 bg-blue-500 text-white"
            >
              {/* {console.log("img", item.imgUrl)} */}

              <div className="flex flex-col">
                <h1 className="text-white font-semibold text-lg">
                  {item.name}
                </h1>
                <h1 className="text-white font-semibold text-lg">
                  {item.timezone}
                </h1>
                <div className="overflow-hidden w-full h-52 object-cover rounded relative my-5">
                  <Image
                    src={`${item.imgUrl} || /images/blank.png`}
                    alt="image"
                    objectFit="cover"
                    objectPosition="left"
                    layout="fill"
                  />
                </div>
                <Link href={`/store/${item.fsq_id}`}>
                  <a className="btn bg-teal-400 text-white hover:bg-teal-400 border-none outline-none ring-0">
                    More Details
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
