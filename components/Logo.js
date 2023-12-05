import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import genieLogo from "../public/genie-logo.png";

export default function Logo({ handleNavigation }) {
  return (
    <>
      {handleNavigation && (
        <Link href="/" onClick={handleNavigation}>
          <StyledImage
            src={genieLogo}
            alt="Logo of a Genie with a Lamp"
            width={749}
            height={1393}
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
            width={749}
            height={1393}
            blurDataURL="data:..."
            placeholder="blur" // Optional blur-up while loading
          />
        </Link>
      )}
    </>
  );
}

const StyledImage = styled(Image)`
  width: 3.5rem;
  height: auto;
`;
