import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const [accordionData, setAccordionData] = useState([
    {
      id: 1,
      isOpen: false,
      title: "Do I need to get a pure breed dog?",
      content: `Absolutely not! Animal rescues will tell you everything about the dogs, including the breeds they may be mixed with and the traits they have. They know best what the dog needs and will advise you on whether you could be their person.`,
      links: [],
    },
    {
      id: 2,
      isOpen: false,
      title: "Is it important that my landlord knows about me getting a dog?",
      content: `It's extremely important. If you get a dog behind your landlord's back, they could kick you and your new dog out on the street. You should always take care of everything first before your puppy arrives.`,
      links: [],
    },
    {
      id: 3,
      isOpen: false,
      title: "Where should I get my dog from?",
      content: `In our opinion, you should always adopt and not shop. There are many great dogs out there in animal shelters that are looking for a place to call home. Even if you are looking for a specific breed, there are animal rescues that specialize in taking care of that particular breed. Here you can find places nearby:`,
      links: [
        {
          id: 1,
          url: "https://www.tierschutzbund.de/tierheim-finder",
          name: "tierschutzbund.de",
        },
      ],
    },
    {
      id: 4,
      isOpen: false,
      title: "What is a good place to find out more about dog ownership?",
      content: `Here you get a good overview of some basic things to keep in mind (in German and English):`,
      links: [
        {
          id: 1,
          url: "https://www.tierschutzbund.de/tiere-themen/haustiere/hunde",
          name: "tierschutzbund.de",
        },
        {
          id: 2,
          url: "https://www.four-paws.org/campaigns-topics/animals/dog",
          name: "four-paws.org",
        },
      ],
    },

    {
      id: 5,
      isOpen: false,
      title: "Should I immediately go get my matching dog now?",
      content: `No! Dog ownership comes with a lot of responsibility. A dog can live up to 15 years and you should think well about whether you can provide the care the dog needs for that long, financially, emotionally and otherwise.`,
      links: [],
    },
    {
      id: 6,
      isOpen: false,
      title: "How can I know more about a dog breed?",
      content: `You can view all dog breeds on the "All dogs page" that can be found in the hamburger navigation, and there you can search for a breed. `,
      links: [
        {
          id: 1,
          url: "/dogs",
          name: "All dogs page",
        },
      ],
    },
    {
      id: 7,
      isOpen: false,
      title: "Can I decide on a dog with the app alone?",
      content: `No. While we carefully put together our algorithm, the seven questions asked are not enough to find out if it's the right dog for you. There are many factor to consider such as who you live with, how much space you have and how much training you can provide the dog in order to fully understand if a dog could live with you happily.`,
      links: [],
    },
  ]);

  // Logic
  function handleToggle(id, e) {
    e.preventDefault();
    setOpenIndex(id);
    setAccordionData((accordionItems) => {
      const info = accordionItems.find((info) => info.id === id);

      if (info) {
        return accordionItems.map((info) => {
          if (info.id === id) return { ...info, isOpen: !info.isOpen };
          else return { ...info, isOpen: false };
        });
      }

      return [...accordionItems, { id, isOpen: false }];
    });
  }
  return accordionData.map(({ id, title, content, links, isOpen }) => (
    <StyledDetails key={id} open={isOpen}>
      <StyledSummary onClick={(e) => handleToggle(id, e)}>
        {title}

        {id === openIndex && (
          <StyledIcon
            src="/chevron-up.svg"
            alt="Chevron up arrow"
            width={29}
            height={29}
            blurDataURL="data:..."
          />
        )}
        {id != openIndex && (
          <StyledIcon
            src="/chevron-down.svg"
            alt="Chevron down arrow"
            width={29}
            height={29}
            blurDataURL="data:..."
          />
        )}
      </StyledSummary>

      <StyledAnswer>
        {content}
        {links &&
          links.map((link) => (
            <span key={link.id}>
              <br />
              <StyledSimpleLink key={link.id} href={link.url}>
                {" "}
                {link.name}
              </StyledSimpleLink>
            </span>
          ))}
      </StyledAnswer>
    </StyledDetails>
  ));
}
const StyledDetails = styled.details`
  max-width: var(--mobilewidth);
  text-align: center;
  margin: 0.7rem;
  padding: 0.4rem 0.7rem;
  min-height: 4.3rem;
  background-color: var(--soft-background);
  color: var(--font-color);
  border-radius: var(--borderradius-small);
`;

const StyledSummary = styled.summary`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  font-weight: 500;
  &:hover {
    text-decoration: 2px var(--accent-color) underline;
    text-underline-offset: 0.4rem;
  }
  &:active {
    color: var(--accent-color);
  }
  &::-webkit-details-marker {
    display: none;
  }
  padding: 0.5rem;
`;

const StyledAnswer = styled.p`
  border-top: 2px solid var(--background-color);
  margin-top: 0.8rem;
  padding: 1rem 0;
  text-align: left;
  font-size: 0.92rem;
`;

const StyledIcon = styled(Image)`
  margin-left: 0.3rem;
  transition: all 0.25s;
  width: 1.5rem;
  height: 1.5rem;
`;
const StyledSimpleLink = styled(Link)`
  text-decoration: none;
  color: var(--font-color);
  border-bottom: 2px solid var(--accent-color);
  &:hover {
    border-bottom: 2px solid var(--primary-color);
  }
`;
