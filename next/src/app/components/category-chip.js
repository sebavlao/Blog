import * as React from "react";
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";

export const CategoryChip = ({ name, icon, classBase, classContent, url }) => {
  return (
    <Chip
      startContent={<Image src={`${url}${icon}`} />}
      classNames={{
        base: classBase,
        content: classContent,
      }}
    >
      {name}
    </Chip>
  );
};
