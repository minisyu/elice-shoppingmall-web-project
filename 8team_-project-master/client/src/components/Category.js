import React from "react";
import styled from 'styled-components';


export default function Category() {

    const CategoryLists = styled.div`
        display : flex;
        flex-direction : column;
        margin : 5%
    `;

    const CategoryList = styled.text`
        color : black;
        font-family : 'Helvetica Neue';
        font-size : 20px;
    `

    const Category = () => {
        return (
        <>
            <CategoryLists>
                <CategoryList href = "#">woody</CategoryList>
                <CategoryList href = "#">citrus</CategoryList>
                <CategoryList href = "#">fruity</CategoryList>
                <CategoryList href = "#">floral</CategoryList>
                <CategoryList href = "#">musk</CategoryList>
                <CategoryList href = "#">smoky</CategoryList>
            </CategoryLists>
        </>
        )
    };
};