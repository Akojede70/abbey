import { FC, createElement, ReactNode } from 'react';

type ProviderProps = {
  contexts: FC[];
  children: ReactNode;
};

const combineProviders: FC<ProviderProps> = ({ contexts, children }): any => {
  return contexts.reduceRight((acc, Provider: any) => {
    return createElement(Provider, {
      children: acc
    });
  }, children);
};

export default combineProviders;