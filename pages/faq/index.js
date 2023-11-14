import Accordion from "@/components/Accordion";
import Headline from "@/components/Headline";
import styled from "styled-components";
import { useState } from "react";

export default function Faq() {
  const accordionData = [
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
  ];
  // Logic
  function handleToggle(e, index) {
    e.preventDefault();
    setOpenIndex(index);
  }

  return (
    <StyledDiv>
      <Headline>FAQs</Headline>
      <Accordion accordionData={accordionData} />
    </StyledDiv>
  );
}

const StyledList = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const StyledDiv = styled.div`
  margin: 0 1rem;
  margin-top: 8rem;
`;
