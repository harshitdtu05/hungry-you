const Contact = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold p-4 m-4 ">Contact Us</h1>
      <form className="p-4 m-4">
        <input
          className="border-2 font-mono p-3 m-3"
          type="text"
          placeholder="Name"
        />
        <input
          className="border-2 font-mono p-3 m-3"
          type="text"
          placeholder="Contact Info"
        />
        <button className="p-3 m-3 bg-black text-white rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
