import { useState } from "react";
import { Accordion } from "@chakra-ui/react";
import FaqItem from "@components/faq-item";

type FaqListProps = {
  list: {
    question: string,
    answer: string
  }[]
}

export default function FaqList({ list }: FaqListProps) :JSX.Element {
  const [expanded, setExpanded] = useState<number[]>([]);

  return (
    <Accordion allowMultiple onChange={(newExpanded: number[]) => setExpanded(newExpanded)}>
      {
        list.map(({ question, answer }, index) => {
          return (
            <FaqItem 
              question={question} 
              answer={answer} 
              open={expanded.includes(index) ? true : false}
            />
          );
        })
      }
    </Accordion>
  )
}