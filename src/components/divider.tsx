/** A vertical divider component */
const Divider = () => {
  return (
    <div className="flex flex-col h-screen items-center">
      <div
        className="flex-1 w-[1px] my-24"
        style={{
          background: "linear-gradient(transparent, #F8F8F8, transparent)",
        }}
      ></div>
    </div>
  );
};

export default Divider;
