export default function About() {
  return (
    <section className="bg-white" id="#about">
      <div className="flex flex-col sm:flex-row h-max sm:flex-wrap">
        <div className="flex text-7xl w-1/2 text-black justify-center items-center">
          <h2>About Me</h2>
        </div>
        <div className="flex flex-col sm:w-1/2 py-6 sm:h-96 bg-black sm:rounded-bl-full justify-center items-center">
          <p className="sm:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro unde
            iste, officia labore recusandae quae explicabo voluptas nemo dolore
            assumenda perspiciatis minima repellendus odio illo quo tempora.
            Nemo, autem consectetur!
          </p>
        </div>
        <div className="flex flex-col sm:w-1/2 py-6 sm:h-96 bg-black sm:rounded-tr-full justify-center items-center">
          <p className="sm:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro unde
            iste, officia labore recusandae quae explicabo voluptas nemo dolore
            assumenda perspiciatis minima repellendus odio illo quo tempora.
            Nemo, autem consectetur!
          </p>
        </div>
        <div className="hidden sm:block w-10 h-10 bg-electric-red clip-frame" />
      </div>
    </section>
  );
}
