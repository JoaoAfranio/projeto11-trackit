import { ThreeDots } from "react-loader-spinner"
import styled from "styled-components"
import COLORS from "../constants/colors"

export default function Loading() {
    return (
        <BoxLoading>
            <ThreeDots className="loading" color={COLORS.darkBlue} visible={true}/>
        </BoxLoading>
    )
}

const BoxLoading = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`