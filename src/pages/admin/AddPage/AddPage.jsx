import axios from "axios";
import { Formik } from "formik";
import React from "react";
import { v4 as uuidv4 } from 'uuid';

function AddPage() {
  return (
    <div>
      <Formik
        initialValues={{ title: "", image: "", price: "", desc: "" }}
        onSubmit={(values, { setSubmitting }) => {
            axios.post('http://localhost:3000/products',{
                id:uuidv4(),
                title:values.title,
                desc:values.desc,
                price:values.price,
                image:values.image
            }).then((res)=>console.log(res))
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              placeholder="TITLE..."
            />

            <input
              type="text"
              name="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
              placeholder="IMAGE..."
            />

            <input
              type="text"
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
              placeholder="PRICE..."
            />

            <input
              type="text"
              name="desc"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.desc}
              placeholder="desc..."
            />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default AddPage;
