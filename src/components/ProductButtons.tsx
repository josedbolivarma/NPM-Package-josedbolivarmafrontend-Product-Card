import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'
import React from "react";

export interface Props {
    className?: string;
    style?: React.CSSProperties 
}

export const ProductButtons = ({ className, style }: Props) => {
    // TODO: maxCount
    const { increaseBy, counter, maxCount, minCount } = useContext( ProductContext );
    
    // TODO: useCallback isMaxReached = useCallback, dependencias [ counter - cambie, maxCount ]
    const isMaxReached = useCallback(() => !!maxCount && counter === maxCount,
      [counter, maxCount],
    )

    const isMinReached = useCallback(() => !!maxCount && counter === minCount,
    [counter, minCount],
  )

    // TRUE si el count === maxCount
    // FALSE si no lo es
    
    return (
        <div 
            className={ `${ styles.buttonsContainer} ${ className }` }
            style={ style }
        >
            <button
                className={ `${styles.buttonMinus} ${ isMinReached() && styles.disabled }` }
                onClick={ () => increaseBy( -1 ) }> - </button>

            <div className={ styles.countLabel }> { counter } </div>

            <button
                className={ `${styles.buttonAdd} ${ isMaxReached() && styles.disabled }` }
                onClick={ () => increaseBy( +1 ) }> + </button>
        </div>
    );
}