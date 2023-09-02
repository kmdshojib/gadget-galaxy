"use client";
import { UseAppDispatch, useAppSelector } from "@/app/Hooks/useRedux";
import { logoutUser } from "@/redux/features/authSlice";
import Image from "next/image";
import Link from "next/link";
import { RxAvatar } from "react-icons/rx";

const Profile: React.FC = () => {
  const { user, token } = useAppSelector((state) => state.auth);
  const dispatch = UseAppDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  console.log({ user });
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {!user?.imageUrl ? (
            <RxAvatar size={40} />
          ) : (
            <Image
              className="object-center"
              src={user.imageUrl}
              height={40}
              width={40}
              alt="user"
            />
          )}
        </div>
      </label>
      <ul
        tabIndex={1}
        className="mt-5 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li >
          {!token ? (
            <>
              <Link href="/signin">SignIn</Link>
              <Link href="/register">Register</Link>
            </>
          ) : (
            <>
              <p>{user?.name}</p>
              <p onClick={handleLogout}>Logout</p>
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Profile;
