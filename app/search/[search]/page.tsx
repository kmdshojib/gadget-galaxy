"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useSearchProductByNameQuery } from "@/redux/Services/productService";
import Container from "@/app/Components/Common/Container";
import Spinner from "@/app/Components/Common/Spinner";
import Image from "next/image";
import Link from "next/link";

const Search = () => {
  const { search } = useParams();
  const { data, isLoading }: any = useSearchProductByNameQuery(search);
  console.log(data);
  return (
    <Container>
      <p className="font-medium text-lg md:text-xl text-center mb-3">
        Your Searched result for {search}!
      </p>
      <hr />
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col items-center">
            {data?.searchItem?.map((item: any) => {
              return (
                <Link
                  href={`/laptop/${item._id}`}
                  className="mt-3 mb-2 flex"
                  key={item._id}
                >
                  <Image
                    src={item.images[0]}
                    alt={item.laptopName}
                    width={100}
                    height={100}
                    className="mr-3 rounded-md"
                  />
                  <div className="flex flex-col">
                    <p className="hover:underline cursor-pointer hover:text-sky-500">
                      {item.laptopName}
                    </p>
                    <p className="mt-3 font-medium text-neutral-500">
                      Price: ${item.price}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Search;
