import React from "react";

export interface FeatureI {
  id: string;
  Icon: () => React.ReactNode;
  title: string;
  description: string;
  image: string;
}

type Props = { feature: FeatureI };

export function FeatureCard({ feature }: Props) {
  return (
    <article className="bg-fs-dark w-full max-w-[324px] p-6 rounded-lg hover:cursor-pointer hover:translate-y-4 transition-all">
      {feature.Icon()}
      <h3 className="mt-4 text-cs-20 font-medium text-fs-white">
        {feature.title}
      </h3>
      <p className="my-4 text-fs-gray text-cs-16 max-w-[250px]">
        {feature.description}
      </p>
      <img
        className="rounded-lg"
        src={feature.image}
        alt={feature.title.concat(" image")}
      />
    </article>
  );
}
