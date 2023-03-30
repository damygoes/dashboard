import React, { forwardRef } from "react";

import { Group, Avatar, Text, Select } from "@mantine/core";

const data = [
  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
    label: "aposoft",
    value: "aposoft",
  },

  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
    label: "ADG S3000",
    value: "adg-s3000",
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
    label: "ADG A3000",
    value: "adg-a3000",
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png",
    label: "Cida Nova Plus",
    value: "cida-nova-plus",
  },
];

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  image: string;
  label: string;
}

// eslint-disable-next-line react/display-name
const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />
        <Text size="xs">{label}</Text>
      </Group>
    </div>
  )
);

type Props = {};

const KassenSystemSelect = (props: Props) => {
  return (
    <Select
      withAsterisk
      label="POS System"
      placeholder="Pick one"
      itemComponent={SelectItem}
      data={data}
    />
  );
};

export default KassenSystemSelect;
