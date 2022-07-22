import Link from "next/link";
import Image from "next/image";

export default function LoadImage() {
  return (
    <>
      <Image
        src='/images/profile.jpg' // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt='Your Name'
      />
      <h2>
        <Link href='/'>
          <a>Back to Home</a>
        </Link>
      </h2>
    </>
  );
}
