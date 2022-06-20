import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
    test('debe de mostrar el componente correctamente con la imagen personalizado', () => {

        const wrapper = renderer.create(
            <ProductImage img='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'/>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    });

    test('debe de mostrar el componente con la imagen del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                       <ProductImage /> 
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    })
})