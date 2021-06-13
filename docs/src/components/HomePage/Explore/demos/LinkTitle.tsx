import React from 'react';
import { Link } from 'gatsby';
import { ArrowRightIcon } from '@modulz/radix-icons';
import { Group, Anchor, Title } from '@mantine/core';

interface LinkTitleProps {
  link: string;
  title: string;
}

export function LinkTitle({ link, title }: LinkTitleProps) {
  return (
    <Group position="apart" spacing={0}>
      <Title order={3}>{title}</Title>
      <Anchor component={Link} to={link}>
        Get started <ArrowRightIcon style={{ width: 12, height: 12 }} />
      </Anchor>
    </Group>
  );
}
