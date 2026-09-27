import { FaqAnswerBlock } from "@domain/faq";

export const FaqAnswer = ({ blocks }: FaqAnswerProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-3 font-primary-light text-sm leading-6 text-font-subtle">
      {blocks.map((block, index) =>
        block.type === "paragraph" ? (
          <p key={index}>{block.text}</p>
        ) : (
          <ul key={index} className="ml-5 list-disc space-y-1">
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};

interface FaqAnswerProps {
  blocks: FaqAnswerBlock[];
}
