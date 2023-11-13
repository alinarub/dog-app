import Image from "next/image";
import styled from "styled-components";
import genieLogo from "../public/genie-logo.png";
import Link from "next/link";

export default function Logo({ handleNavigation }) {
  return (
    <>
      {handleNavigation && (
        <Link href="/" onClick={handleNavigation}>
          <StyledImage
            src={genieLogo}
            alt="Logo of a Genie with a Lamp"
            width={502}
            height={698}
            blurDataURL="data:..."
            placeholder="blur" // Optional blur-up while loading
          />
        </Link>
      )}
      {!handleNavigation && (
        <Link href="/">
          <StyledImage
            src={genieLogo}
            alt="Logo of a Genie with a Lamp"
            width={502}
            height={698}
            blurDataURL="data:..."
            placeholder="blur" // Optional blur-up while loading
          />
        </Link>
      )}
    </>
  );
}

const StyledImage = styled(Image)`
  width: 5rem;
  height: auto;
`;
