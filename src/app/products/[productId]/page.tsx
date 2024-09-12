/* eslint-disable @next/next/no-img-element */
'use client';
import { ArrowLeftCircleIcon } from '@/assets/icons';
import Container from '@/components/ui/Container';
import { useGetProductQuery } from '@/features/products/store/reducer';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';

const ProductDetails = () => {
  const params = useParams();
  const router = useRouter();
  const productId = params.productId as unknown as number;
  const [imageId, setImageId] = useState<number>(0);
  const { data, isFetching, error } = useGetProductQuery(productId);

  if (error) {
    router.push('/products');
  }

  return (
    <Container>
      <section className="container">
        {isFetching ? (
          'Loading...'
        ) : (
          <>
            <button
              type="button"
              onClick={() => router.back()}
              className="flex items-center justify-center gap-2 rounded-lg border-[1px] border-primary px-4 py-2 text-primary hover:bg-primary/10"
            >
              <span>
                <ArrowLeftCircleIcon className="fill-primary" />
              </span>
              Back
            </button>
            <div className="my-10 rounded-lg bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
              <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 lg:w-1/2 xl:w-7/12">
                    <div className="mb-12 lg:mb-0 lg:mr-5 xl:mr-10">
                      <div className="mb-8 w-max overflow-hidden rounded-lg">
                        {data?.images[imageId] ? (
                          <Image
                            src={data?.images[imageId]}
                            alt="products-details"
                            width={600}
                            height={400}
                          />
                        ) : null}
                      </div>
                      <div className="-mx-4 flex items-center justify-between">
                        {data?.images.map((item, index) => (
                          <div key={index} className="w-1/3 px-4">
                            <button
                              onClick={() => {
                                setImageId(index);
                              }}
                              className={`w-full overflow-hidden rounded-lg`}
                            >
                              <img
                                src={item}
                                alt="thumbnail-01"
                                className="w-full"
                                loading="lazy"
                              />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                    <h2 className="mb-[22px] text-2xl font-bold text-dark dark:text-white sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                      {data?.title}
                    </h2>

                    <div className="mb-6 flex flex-wrap items-center">
                      <div className="mr-4 flex items-center">
                        <div className="flex items-center">
                          {Array(Math.ceil(data?.rating ?? 0))
                            .fill('')
                            .map((_item, index) => (
                              <span key={index} className="pr-1">
                                {starIcon}
                              </span>
                            ))}
                          <span className="pl-1 text-base font-medium text-dark dark:text-white">
                            {data?.rating} Rating
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="pr-2">
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1031_24115)">
                              <path
                                d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                                fill="#22AD5C"
                              />
                              <path
                                d="M12.6874 7.09368L8.96868 10.7187L7.28118 9.06243C6.99993 8.78118 6.56243 8.81243 6.28118 9.06243C5.99993 9.34368 6.03118 9.78118 6.28118 10.0624L8.28118 11.9999C8.46868 12.1874 8.71868 12.2812 8.96868 12.2812C9.21868 12.2812 9.46868 12.1874 9.65618 11.9999L13.6874 8.12493C13.9687 7.84368 13.9687 7.40618 13.6874 7.12493C13.4062 6.84368 12.9687 6.84368 12.6874 7.09368Z"
                                fill="#22AD5C"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1031_24115">
                                <rect width={20} height={20} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="text-base font-medium text-dark dark:text-white">
                          {' '}
                          {data?.availabilityStatus}{' '}
                        </span>
                      </div>
                    </div>

                    <div className="mb-7 flex-wrap justify-between xs:flex">
                      <div className="">
                        <span className="block text-[28px] font-semibold leading-[40px] text-dark dark:text-white">
                          ${data?.price}
                        </span>
                        <span className="text-base text-body-color dark:text-dark-6">
                          {data?.discountPercentage}% discount
                        </span>
                      </div>
                    </div>

                    <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl">
                      Product Details
                    </h3>

                    <div className="mb-9 space-y-4">
                      <p className="flex justify-between border-b border-stroke pb-4 text-base font-medium text-dark dark:border-dark-3 dark:text-white">
                        <span className="whitespace-nowrap"> Category </span>
                        <span> {data?.category} </span>
                      </p>
                      <p className="flex justify-between text-base font-medium text-dark dark:text-white">
                        <span className="whitespace-nowrap"> Brand </span>
                        <span> {data?.brand} </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </Container>
  );
};

export default ProductDetails;

const starIcon = (
  <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1825_1546)">
      <path
        d="M16.7906 6.72187L11.7 5.93438L9.39371 1.09688C9.22495 0.759375 8.77495 0.759375 8.6062 1.09688L6.29995 5.9625L1.23746 6.72187C0.87183 6.77812 0.731205 7.25625 1.01246 7.50938L4.69683 11.3063L3.82495 16.6219C3.7687 16.9875 4.13433 17.2969 4.47183 17.0719L9.0562 14.5687L13.6125 17.0719C13.9218 17.2406 14.3156 16.9594 14.2312 16.6219L13.3593 11.3063L17.0437 7.50938C17.2687 7.25625 17.1562 6.77812 16.7906 6.72187Z"
        fill="#FFA645"
      />
    </g>
    <defs>
      <clipPath id="clip0_1825_1546">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
