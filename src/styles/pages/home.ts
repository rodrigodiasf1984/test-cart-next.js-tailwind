import tw from 'tailwind-styled-components';

export const Main = tw.main`
  flex flex-col px-2 py-2
`;

export const Title = tw.h1`
  text-base font-poppins
  font-bold text-dark unde
`;

export const ContainerTitle = tw.div`
  flex flex-col py-4
  w-full border-b
  justify-center items-center
`;

export const ContainerCart = tw.div`
  flex flex-col py-4
  rounded-lg
  justify-center items-center
  w-10/12 lg:w-7/12 xl:w-6/12 bg-white m-auto
`;

export const Footer = tw.div`
  flex flex-col px-4 py-4 w-full
  border-t-2 border-b-2
  justify-center items-center
`;
export const TolalText = tw.span`
  flex text-base font-bold
`;

export const Container = tw.div`
  pt-40 pb-96 px-0
  w-full h-full bg-gray-300
`;

export const ContainerButtonsTop = tw.div`
  px-4 flex w-full
  justify-between items-center
`;

export const ContainerTotal = tw.div`
  flex w-full flex-row
  justify-between item-center
`;

export const SuccessMessage = tw.div`
  flex bg-green-primary px-2
  rounded-3xl py-4 mt-4
`;
