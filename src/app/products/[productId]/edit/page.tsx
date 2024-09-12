/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@/components/form/TextField';
import Container from '@/components/ui/Container';
import { useGetProductQuery, useUpdateProductMutation } from '@/features/products/store/reducer';
import { useParams, useRouter } from 'next/navigation';

type FormValues = {
  title: string;
  price: string;
};

const initialValues: FormValues = {
  title: '',
  price: '',
};

const validationSchema = Yup.object({
  title: Yup.string().trim().required('Title is required'),
  price: Yup.number()
    .typeError('The value must be a number')
    .positive('The value must be a positive')
    .required('Price is required'),
});

const ProductEditPage = () => {
  const params = useParams();
  const router = useRouter();
  const id = params.productId as unknown as number;
  const { data: product, isFetching, error } = useGetProductQuery(id);
  const [updateProduct, { isLoading: isUpdating, isSuccess }] = useUpdateProductMutation();

  if (error) {
    router.push('/products');
  }

  if (isSuccess) {
    router.push(`/products/${product?.id}`);
  }

  const submitHandler = () => {
    if (product) {
      updateProduct({ id, product });
    }
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit: submitHandler });

  return (
    <Container>
      <section className="z-100 relative flex h-[calc(100vh-88px)] items-center overflow-hidden rounded-lg bg-transparent dark:bg-dark lg:py-[120px]">
        {isFetching ? (
          <p className="container text-center">Loading...</p>
        ) : (
          <div className="container">
            <div className="-mx-4 flex flex-wrap items-center justify-center">
              <div className="w-full px-4 lg:w-1/2 xl:w-7/12">
                <div className="rounded-[20px] bg-white p-8 shadow-xl dark:bg-dark-2 sm:p-[52px] lg:p-8 xl:ml-16 xl:p-[52px]">
                  <h3 className="mb-3 text-3xl font-bold text-dark dark:text-white">
                    {product?.title}
                  </h3>

                  <form
                    onSubmit={formik.handleSubmit}
                    noValidate
                    autoComplete="off"
                    className="-mx-4 flex flex-wrap"
                  >
                    <div className="w-full px-4 sm:w-1/2">
                      <TextField
                        name="title"
                        formik={formik}
                        label="Product Title"
                        placeholder="Title"
                      />
                    </div>
                    <div className="w-full px-4 sm:w-1/2">
                      <TextField
                        name="price"
                        formik={formik}
                        label="Product Price"
                        placeholder="Price"
                      />
                    </div>
                    <div className="mt-6 w-full px-4">
                      <button
                        type="submit"
                        className="flex h-[52px] w-full items-center justify-center rounded-lg bg-dark px-5 py-3 text-base font-medium text-white duration-200 hover:bg-dark/90 dark:bg-white dark:text-dark dark:hover:bg-white/90"
                      >
                        {isUpdating ? 'Updating...' : 'Save changes'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <!-- graphics --> */}
        <div className="absolute right-0 top-0 -z-10">
          <img
            src="https://cdn.tailgrids.com/2.2/assets/application/images/contact/contact-13/shape-2.svg"
            alt="shape-2"
          />
        </div>

        <div className="absolute right-0 top-0 -z-10 dark:opacity-40 max-lg:hidden">
          <img
            src="https://cdn.tailgrids.com/2.2/assets/application/images/contact/contact-13/line-1.svg"
            alt="line-1"
          />
        </div>

        <div className="absolute right-0 top-0 -z-10 dark:opacity-40 max-lg:hidden">
          <img
            src="https://cdn.tailgrids.com/2.2/assets/application/images/contact/contact-13/line-2.svg"
            alt="line-2"
          />
        </div>
      </section>
    </Container>
  );
};

export default ProductEditPage;
