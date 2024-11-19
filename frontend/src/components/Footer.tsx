const Footer = () => {
  return (
    <div style={{ backgroundColor: "#0b3d91" }} className="py-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-white font-bold  tracking-widest">
          Travel {}
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
