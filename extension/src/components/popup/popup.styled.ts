import styled from "styled-components"
import { SelectedFlag } from "./popup"

export const PopupWrapper = styled.div`
    height: 400px;
    width: 300px;
    display: flex;
    align-items: center;
    row-gap: 1rem;
    flex-direction: column;
    padding: 2rem;
    position: relative;

    p {
        display: flex;
        flex-direction: column;
    }
`

export const FlagWrapper = styled.div<{ selectedFlag: SelectedFlag }>`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: ${({ selectedFlag }) => selectedFlag === "red" ? "url('redflag.png'), #f2514e" : selectedFlag === "green" ? "url('greenflag.png'), #6bd595" : "url('yellowflag.png'), #fc8d45"};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 60%;
`

export const Footer = styled.div `
    display: flex;
    justify-content: flex-end;
    position: absolute;
    bottom: 10px;
    width: 100%;
    border-top: 1px solid rgba(0,0,0,0.2);
    padding-top: .5rem;
    padding-right: .5rem;
`

export const ArrowsWrapper = styled.div`
    width: 85%;
    height: 50px;
    display: flex;
    column-gap: 1rem;
    align-items: center;
    justify-content: center;

    & > span:first-child, & > span:last-child{
        font-size: 1.5rem;
        flex: 1;
    }

    button { 
        flex: 2;
    }
`


