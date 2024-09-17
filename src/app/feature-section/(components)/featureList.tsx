import { FeatureCard, CircleIcon, FeatureI } from "./";

const DATA: FeatureI[] = [
  {
    id: "a147eb43-02c3-426c-bedf-4e20f86dca9f",
    Icon: () => <CircleIcon emogi="✋" theme="cream" />,
    description:
      "Provide a comprehensive understanding of the customer experience.",
    image: "/feature-section/photo_2.png",
    title: "Collect Feedback at Multiple Touchpoints",
  },
  {
    id: "d5439116-d511-43ca-82e6-fdef71990cc7",
    Icon: () => <CircleIcon emogi="🥅" theme="sky" />,
    description:
      "Avoid vague or open-ended questions that may not yield actionable insights.",
    image: "/feature-section/photo_1.png",
    title: "Ask Targeted and Specific Questions",
  },
  {
    id: "bdde4be1-50ba-4707-85f7-b8b74bb99f1b",
    Icon: () => <CircleIcon emogi="💬" theme="skin" />,
    description:
      "Communicate the changes or improvements you've made in response to their feedback.",
    image: "/feature-section/photo_3.png",
    title: "Prioritize and Respond to Feedback",
  },
];

export function FeatureList() {
  return (
    <div className="flex flex-wrap gap-12 justify-center">
      {DATA.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
  );
}
