import React from 'react';

interface IErrorMessage {
  error: string;
}

export const ErrorMessage = ({ error }: IErrorMessage) => {
  return <p className="text-center text-red-600">{error}</p>;
};
