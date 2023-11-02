import Image from "next/image";
import styled from "styled-components";
import genieLogo from "../public/genie-logo.png";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <StyledImage
        src={genieLogo}
        alt="Logo of a Genie with a Lamp"
        width={1004 / 2}
        height={1396 / 2}
        blurDataURL="data:..."
        placeholder="blur" // Optional blur-up while loading
      />
    </Link>
  );
}

const StyledImage = styled(Image)`
  width: 5rem;
  height: auto;
`;
