import styled from "styled-components";
import {Field} from "formik";


export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 200px
`;



export const Button = styled.button`
    background-color: rgb(150, 250, 150);
    border: none;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 1px 3px rgba(0, 0, 0, 0.12);
    border-radius: 2px;
    width: 90px;
    padding: 5px;
    &:hover, &:focus {
        background-color: lightblue;
    }
`;

export const InputName = styled(Field)`
    border: 1px solid gray;
    border-radius: 5px;
    outline: none;
    &:hover, &:focus {
        border: 1px solid #81b9e7;
    }
`;