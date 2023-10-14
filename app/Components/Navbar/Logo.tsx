import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <div className="flex-1 navbar-start">
      <Link href="/" className="btn btn-ghost normal-case text-xl">
        GG
      </Link>
    </div>
  );
};

export default Logo;
