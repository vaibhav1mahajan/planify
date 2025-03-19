import { useSession } from "next-auth/react";
import Image from "next/image";

const UserProfile = () => {
  const session = useSession();
  return (
    <>
      <Image
        width={100}
        height={100}
        src={session?.data?.user?.image || ""}
        alt="user profile"
        className="rounded-full"
      />
      <div>
        <h1>{session?.data?.user?.name}</h1>
        <p>{session?.data?.user?.email}</p>
        <p>{session?.data?.user?.image}</p>
        <p>{session?.data?.user?.id}</p>
        <p>{session?.data?.user?.name}</p>
        <p>{session?.data?.user?.email}</p>
        <p>{session?.data?.user?.image}</p>
        <p>{session?.data?.user?.id}</p>
        <p>{session?.data?.user?.name}</p>
        <p>{session?.data?.user?.email}</p>
        <p>{session?.data?.user?.image}</p>
        <p>{session?.data?.user?.id}</p>
      </div>
    </>
  );
};

export default UserProfile;
