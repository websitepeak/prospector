type HOC = (component: React.ComponentType) => React.ComponentType;

export const compose = (...hocs: HOC[]) => {
  return (component: React.ComponentType): React.ComponentType => {
    return hocs.reduceRight((acc, hoc) => hoc(acc), component);
  };
}; 