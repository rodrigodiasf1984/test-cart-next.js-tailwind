import tw from 'tailwind-styled-components';

export const ProductContainer = tw.section`
  flex flex-1 flex-row py-2
  `;
export const ContainerImage = tw.div`
  flex justify-center items-center
  md:mr-10
  border-2 border-gray-100 px-2
`;
export const ProductInfo = tw.div`
  font-poppins flex flex-1 flex-col
  pl-4 pt-4 md:mr-10
`;
export const ProductName = tw.h2`
  text-sm font-bold
`;
export const ProductPrice = tw.span`
  text-xs text-gray-400
`;
export const ProductSellingPrice = tw.span`
  text-xs
`;

export const ContainerButtons = tw.div`
  flex flex-col pt-2 pl-2
  justify-around items-center
`;
