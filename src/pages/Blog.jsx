import React from "react";
import Footer from "./Footer";

const Blog = () => {
  return (
    <div className="bg-base-200 pt-10">
      <div className="lg:mx-20 h-full my-12 pb-10">
        <h1 className="text-center text-amber-400 text-5xl font-bold my-10">
          This is The Blog Page
        </h1>
        <div>
          <h2 className="text-2xl font-bold font-sans">
            Ques-1: What is the difference between uncontrolled and controlled
            components?
          </h2>
          <p className="text-lg mt-3">
            <b>Ans:</b>
            In React, controlled components refer to components that have their
            state and behavior controlled by the parent component. These
            components rely on props passed down from the parent component to
            update their state and behavior. Uncontrolled components refer to
            components that manage their own state internally. They use a ref to
            access the DOM element's current value and update the state
            accordingly.
          </p>
        </div>
        <div className="mt-5">
          <h2 className="text-2xl font-bold font-sans">
            Ques-2: How to validate React props using PropTypes?
          </h2>
          <p className="text-lg mt-3">
            <b>Ans:</b>
            Props and PropTypes are important mechanisms for passing read-only
            attributes between React components. We can use React props, short
            for properties, to send data from one component to another. If a
            component receives the wrong type of props, it can cause bugs and
            unexpected errors in your app.React has an internal mechanism for
            props validation called PropTypes.PropTypes is React’s internal
            mechanism for adding type checking to component props. React
            components use a special property called propTypes to set up type
            checking.When props are passed to a React component, they are
            checked against the type definitions configured in the propTypes
            property. When an invalid value is passed for a prop, a warning is
            displayed on the console.
          </p>
        </div>
        <div className="mt-5">
          <h2 className="text-2xl font-bold font-sans">
            Ques-3: Tell us the difference between nodejs and express js.
          </h2>
          <p className="text-lg mt-3">
            <b>Ans:</b>
            Express is a minimal and flexible node.js web application framework,
            providing a robust set of features for building single and
            multi-page, and hybrid web applications.Express.js is a framework
            based on Node.js which is used for building web-application using
            approaches and principles of Node.js event-driven architecture.
            <br />
            <br />
            On the other hand, Node.js is detailed as "A platform built on
            Chrome's JavaScript runtime for easily building fast, scalable
            network applications". Node.js uses an event-driven, non-blocking
            I/O model that makes it lightweight and efficient, perfect for
            data-intensive real-time applications that run across distributed
            devices.
          </p>
        </div>
        <div className="mt-5">
          <h2 className="text-2xl font-bold font-sans">
            Ques-4: What is a custom hook, and why will you create a custom
            hook?
          </h2>
          <p className="text-lg mt-3">
            <b>Ans:</b>A custom hook is a special JavaScript function whose name
            starts with ‘use’ and can be used to call other hooks.Custom React
            JS hooks offer reusability as when a custom hook is created, it can
            be reused easily, which makes the code cleaner and reduces the time
            to write the code. It also enhances the rendering speed of the code
            as a custom hook does not need to be rendered again and again while
            rendering the whole code.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
