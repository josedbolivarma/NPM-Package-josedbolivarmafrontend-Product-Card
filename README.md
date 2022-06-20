# josedbolivarmafrontend-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### José David Bolívar Mayora

## Ejemplo
```
import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons
} from 'josedbolivarm-product-card;
```

```
<ProductCard
product={ product }
initialValues={{
    count: 4,
    maxCount: 10,
    minCount: 0
    }} 
>
    {
        ( args ) => (
        <>
            <ProductImage  />
            <ProductTitle />
            <ProductButtons />
         </>
)
        }
</ProductCard>
```