/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { ArrowLeftCircleIcon } from '@/assets/icons';
import Container from '@/components/ui/Container';
import { useParams, useRouter } from 'next/navigation';
import { useGetPostCommentsQuery, useGetPostQuery } from '@/features/posts/store/reducer';

const ProductDetails = () => {
  const params = useParams();
  const router = useRouter();
  const postId = params.postId as unknown as number;
  const { data: post, isFetching, error } = useGetPostQuery(postId);
  const { data: commentData } = useGetPostCommentsQuery(postId);

  if (error) {
    router.push('/posts');
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
            <div className="relative mt-10">
              <div className="relative mx-auto mb-4 h-[24em] w-full max-w-screen-md md:mb-0">
                <div
                  className="absolute bottom-0 left-0 z-10 h-full w-full"
                  style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}
                ></div>
                <img
                  src="https://picsum.photos/640/1920"
                  className="absolute left-0 top-0 z-0 h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 z-20 p-4">
                  <a
                    href="#"
                    className="mb-2 inline-flex items-center justify-center bg-black px-4 py-1 text-gray-200"
                  >
                    {post?.tags.join(', ')}
                  </a>
                  <h2 className="text-4xl font-semibold leading-tight text-gray-100">
                    {post?.title}
                  </h2>
                  <div className="mt-3 flex">
                    <img
                      src="https://randomuser.me/api/portraits/men/97.jpg"
                      className="mr-2 h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-200"> Mike Sullivan </p>
                      <p className="text-xs font-semibold text-gray-400"> 14 Aug </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto mt-12 max-w-screen-md px-4 text-lg leading-relaxed text-gray-700 lg:px-0">
                <p className="pb-6">{post?.body}</p>
                {commentData?.comments.map((comment, index) => (
                  <article
                    key={index}
                    className="mb-3 border-t border-gray-200 bg-transparent p-6 text-base dark:border-gray-700 dark:bg-gray-900"
                  >
                    <footer className="mb-2 flex items-center justify-between">
                      <div className="flex items-center">
                        <p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                          <img
                            className="mr-2 h-6 w-6 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            alt="Bonnie Green"
                          />
                          {comment.user.fullName}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <time title="March 12th, 2022">Mar. 12, 2022</time>
                        </p>
                      </div>
                    </footer>
                    <p className="text-gray-500 dark:text-gray-400">{comment.body}</p>
                    <div className="mt-4 flex items-center space-x-4">
                      <button
                        type="button"
                        className="flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400"
                      >
                        <svg
                          className="mr-1.5 h-3.5 w-3.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                          />
                        </svg>
                        Reply
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </>
        )}
      </section>
    </Container>
  );
};

export default ProductDetails;
