import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <div className="flex-1 navbar-start">
      <Link
        href="/"
        className="text-2xl md:text-3xl lg:text-4xl  font-bold bg-gradient-to-r from-rose-500 via-rose-600 to-indigo-600 text-transparent bg-clip-text cursor-pointer"
      >
        Gadget Galaxy
      </Link>
    </div>
  );
};

export default Logo;
