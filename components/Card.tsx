import React from 'react';
import { PropsWithChildren } from 'react';
import { View } from 'react-native';

type CardProps = {
  title: string;
};

export const Card = (props: PropsWithChildren<CardProps>) => {
  return (
    <View className="bg-white dark:bg-gray-700 dark:text-white rounded-lg shadow-lg p-4">
      <View className="mt-2">{props.children}</View>
    </View>
  );
};

export const CardHeader = (props: PropsWithChildren<object>) => {
  return <View className="">{props.children}</View>;
};

export const CardBody = (props: PropsWithChildren<object>) => {
  return <View className="">{props.children}</View>;
};

Card.Header = CardHeader;
Card.Body = CardBody;
