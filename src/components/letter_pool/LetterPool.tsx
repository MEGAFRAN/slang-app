import { LetterPoolProps } from "../../constants/types/components_props/types"
import { StyledLetterPool } from "./LetterPool.style"

export const LetterPool = ({unorderedLetters}: LetterPoolProps) => {


    return (

        <StyledLetterPool tabIndex={0}>
      
            {unorderedLetters}?
            
        </StyledLetterPool>
        
    )
    
}
