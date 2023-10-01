import tw from 'tailwind-styled-components'

type StyledProps = {
  $isShow: boolean;
}

export const Container = tw.div<StyledProps>`${(p) => p.$isShow ? "fixed inset-0 flex items-center justify-center z-50" : "hidden"}`
export const FundoBlur = tw.div`h-screen absolute inset-0 bg-[#1b1b1b77] backdrop-blur-sm`
export const Box = tw.div`bg-[#2b2b2b] mx-auto rounded shadow-lg z-50 overflow-y-auto`
export const Conteudo = tw.div`py-4 text-left px-6`
export const Button = tw.button`mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`

export const ConteudoBox = tw.div`flex items-center gap-5`
export const Image = tw.img`rounded-xl`

export const Informations = tw.div`flex items-center flex-col gap-5`
export const Title = tw.h1`text-2xl text-center font-bold`
export const Paragrafo = tw.p`text-lg px-3`
export const StatsBox = tw.div`flex items-center gap-2 mx-auto`
export const StatsScore = tw.div`flex items-center flex-col`
export const StatsGrid = tw.div`pl-3 grid grid-cols-2 gap-1`
export const ParagrafoScore = tw.p`uppercase text-sm bg-blue-600 px-2 rounded`
