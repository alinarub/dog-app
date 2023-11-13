import Accordion from "@/components/Accordion";
import Headline from "@/components/Headline";
import styled from "styled-components";

export default function faq() {
  const accordionData = [
    {
      id: 1,
      title: "Do I need to get a pure breed dog?",
      content: `Absolutely not! Animal rescues will tell you everything about the dogs, including the breeds they may be mixed with and the traits they have. They know best what the dog needs and will advise you on whether you could be their person.`,
    },
    {
      id: 2,
      title: "Is it important that my landlord knows about me getting a dog?",
      content: `It's extremely important. If you get a dog behind your landlord's back, they could kick you and your new dog out on the street. You should always take care of everything first before your puppy arrives.`,
    },
    {
      id: 3,
      title: "Where should I get my dog from?",
      content: `In our opinion, you should always adopt and not shop. There are many great dogs out there in animal shelters that are looking for a place to call home. Even if you are looking for a specific breed, there are animal rescues that specialize in taking care of that particular breed. Here you can find places nearby you: https://www.tierschutzbund.de/tierheim-finder`,
    },
    {
      id: 4,
      title: "What is a good place to find out more about dog ownership?",
      content: `Here you get a good overview of some basic things to keep in mind: https://www.tierschutzbund.de/tiere-themen/haustiere/hunde (DE) and https://www.four-paws.org/campaigns-topics/animals/dog (EN)`,
    },

    {
      id: 5,
      title: "Should I immediately go get my matching dog now?",
      content: `No! Dog ownership comes with a lot of responsibility. A dog can live up to 15 years and you should think well about whether you can provide the care the dog needs for that long, financially, emotionally and otherwise.`,
    },
    {
      id: 6,
      title: "How can I know more about a dog breed?",
      content: `You can view all dog breeds on the "All dogs page" that can be found in the hamburger navigation, and there you can search for a breed. `,
    },
    {
      id: 7,
      title: "Can I decide on a dog with the app alone?",
      content: `No. While we carefully put together our algorithm, the seven questions asked are not enough to find out if it's the right dog for you. There are many factor to consider such as who you live with, how much space you have and how much training you can provide the dog in order to fully understand if a dog could live with you happily.`,
    },
  ];

  return (
    <div>
      <Headline>FAQs</Headline>
      <StyledList>
        {accordionData.map(({ title, content, id }) => (
          <Accordion key={id} title={title} content={content} />
        ))}
      </StyledList>
    </div>
  );
}

const StyledList = styled.ul`
  width: 100%;
`;
