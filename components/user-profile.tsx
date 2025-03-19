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
        <h1>how are u</h1>
      </div>
    </>
  );
};

export default UserProfile;
