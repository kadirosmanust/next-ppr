import React from 'react';

type ClientProps = {
  text: string;
  delay: number;
};

const Client = async ({ text, delay }: ClientProps) => {
  const delayNumber = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });

  return (
    <div>
      {text}, After Render: {delayNumber as number}
    </div>
  );
};

export default Client;
