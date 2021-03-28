import tw from 'tailwind-styled-components';

export const Container = tw.div`
  flex flex-col
  items-center
  justify-center
  w-full h-11 px-4 mt-4
`;

export const Button = tw.button`
 ${p => p.color}
  hover:bg-primary h-full w-full
  text-white font-poppins
  font-bold py-1 px-4
  rounded-md text-xs sm:text-sm xl:text-sm 2xl:text-lg
`;
